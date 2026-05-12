import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Paymentterm} from './paymentterm';

@Injectable({
    providedIn: 'root',
})
export class PaymenttermService {
    private url = `${APP_CONFIG.BASE_URL}/payment-terms/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Paymentterm[]> {
        return this.http.get<Paymentterm[]>(this.url);
    }

    save(item: Paymentterm): Observable<Paymentterm> {
        if (!item.id) {
            return this.http.post<Paymentterm>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Paymentterm): Observable<Paymentterm> {
        return this.http.put<Paymentterm>(`${this.url}${item.id}/`, item);
    }

    delete(item: Paymentterm) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
