import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pohead} from './pohead';

@Injectable({
    providedIn: 'root',
})
export class PoheadService {
    private url = `${APP_CONFIG.BASE_URL}/production-order-heads/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Pohead[]> {
        return this.http.get<Pohead[]>(this.url);
    }

    save(item: Pohead): Observable<Pohead> {
        if (!item.id) {
            return this.http.post<Pohead>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Pohead): Observable<Pohead> {
        return this.http.put<Pohead>(`${this.url}${item.id}/`, item);
    }

    delete(item: Pohead) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
