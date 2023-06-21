import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Rack} from './rack';

@Injectable({
    providedIn: 'root',
})
export class RackService {
    private url = `${APP_CONFIG.BASE_URL}/racks/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Rack[]> {
        return this.http.get<Rack[]>(this.url);
    }

    save(item: Rack): Observable<Rack> {
        if (!item.id) {
            return this.http.post<Rack>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Rack): Observable<Rack> {
        return this.http.put<Rack>(`${this.url}${item.id}/`, item);
    }

    delete(item: Rack) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
