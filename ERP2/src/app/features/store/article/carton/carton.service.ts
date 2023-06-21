import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Carton} from './carton';

@Injectable({
    providedIn: 'root',
})
export class CartonService {
    private url = `${APP_CONFIG.BASE_URL}/carton/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Carton[]> {
        return this.http.get<Carton[]>(this.url);
    }

    save(item: Carton): Observable<Carton> {
        if (!item.id) {
            return this.http.post<Carton>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Carton): Observable<Carton> {
        return this.http.put<Carton>(`${this.url}${item.id}/`, item);
    }

    delete(item: Carton) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
