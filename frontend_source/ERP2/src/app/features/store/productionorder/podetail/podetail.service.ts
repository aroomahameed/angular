import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Podetail} from './podetail';

@Injectable({
    providedIn: 'root',
})
export class PodetailService {
    private url = `${APP_CONFIG.BASE_URL}/production-orders-details/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Podetail[]> {
        return this.http.get<Podetail[]>(this.url);
    }

    save(item: Podetail): Observable<Podetail> {
        if (!item.id) {
            return this.http.post<Podetail>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Podetail): Observable<Podetail> {
        return this.http.put<Podetail>(`${this.url}${item.id}/`, item);
    }

    delete(item: Podetail) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
