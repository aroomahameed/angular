import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vendorgroup} from './vendorgroup';

@Injectable({
    providedIn: 'root',
})
export class VendorgroupService {
    private url = `${APP_CONFIG.BASE_URL}/vendor-groups/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Vendorgroup[]> {
        return this.http.get<Vendorgroup[]>(this.url);
    }

    save(item: Vendorgroup): Observable<Vendorgroup> {
        if (!item.id) {
            return this.http.post<Vendorgroup>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Vendorgroup): Observable<Vendorgroup> {
        return this.http.put<Vendorgroup>(`${this.url}${item.id}/`, item);
    }

    delete(item: Vendorgroup) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
