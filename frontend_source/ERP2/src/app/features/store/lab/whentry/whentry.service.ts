import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Whentry} from './whentry';

@Injectable({
    providedIn: 'root',
})
export class WhentryService {
    private url = `${APP_CONFIG.BASE_URL}/whentry/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Whentry[]> {
        return this.http.get<Whentry[]>(this.url);
    }

    save(item: Whentry): Observable<Whentry> {
        if (!item.id) {
            return this.http.post<Whentry>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Whentry): Observable<Whentry> {
        return this.http.put<Whentry>(`${this.url}${item.id}/`, item);
    }

    delete(item: Whentry) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
