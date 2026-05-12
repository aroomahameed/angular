import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customeraccdata} from './customeraccdata';

@Injectable({
    providedIn: 'root',
})
export class CustomeraccdataService {
    private url = `${APP_CONFIG.BASE_URL}/customer-account-data/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Customeraccdata[]> {
        return this.http.get<Customeraccdata[]>(this.url);
    }

    save(item: Customeraccdata): Observable<Customeraccdata> {
        if (!item.id) {
            return this.http.post<Customeraccdata>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Customeraccdata): Observable<Customeraccdata> {
        return this.http.put<Customeraccdata>(`${this.url}${item.id}/`, item);
    }

    delete(item: Customeraccdata) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
