import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Reservepo} from './reservepo';

@Injectable({
    providedIn: 'root',
})
export class ReservepoService {
    private url = `${APP_CONFIG.BASE_URL}/reserve-po/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Reservepo[]> {
        return this.http.get<Reservepo[]>(this.url);
    }

    save(item: Reservepo): Observable<Reservepo> {
        if (!item.id) {
            return this.http.post<Reservepo>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Reservepo): Observable<Reservepo> {
        return this.http.put<Reservepo>(`${this.url}${item.id}/`, item);
    }

    delete(item: Reservepo) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
