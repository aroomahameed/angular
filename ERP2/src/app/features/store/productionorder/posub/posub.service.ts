import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Posub} from './posub';

@Injectable({
    providedIn: 'root',
})
export class PosubService {
    private url = `${APP_CONFIG.BASE_URL}/production-order-sub/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Posub[]> {
        return this.http.get<Posub[]>(this.url);
    }

    save(item: Posub): Observable<Posub> {
        if (!item.id) {
            return this.http.post<Posub>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Posub): Observable<Posub> {
        return this.http.put<Posub>(`${this.url}${item.id}/`, item);
    }

    delete(item: Posub) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
