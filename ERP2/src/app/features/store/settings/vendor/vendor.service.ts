import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vendor} from './vendor';

@Injectable({
    providedIn: 'root',
})
export class VendorService {
    private url = `${APP_CONFIG.BASE_URL}/vendors/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Vendor[]> {
        return this.http.get<Vendor[]>(this.url);
    }

    save(item: Vendor): Observable<Vendor> {
        if (!item.id) {
            return this.http.post<Vendor>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Vendor): Observable<Vendor> {
        return this.http.put<Vendor>(`${this.url}${item.id}/`, item);
    }

    delete(item: Vendor) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
