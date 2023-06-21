import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customeraccgroup} from './customeraccgroup';

@Injectable({
    providedIn: 'root',
})
export class CustomeraccgroupService {
    private url = `${APP_CONFIG.BASE_URL}/customer-account-groups/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Customeraccgroup[]> {
        return this.http.get<Customeraccgroup[]>(this.url);
    }

    save(item: Customeraccgroup): Observable<Customeraccgroup> {
        if (!item.id) {
            return this.http.post<Customeraccgroup>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Customeraccgroup): Observable<Customeraccgroup> {
        return this.http.put<Customeraccgroup>(`${this.url}${item.id}/`, item);
    }

    delete(item: Customeraccgroup) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
