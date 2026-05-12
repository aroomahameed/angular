import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Quotationitem} from './quotationitem';

@Injectable({
    providedIn: 'root',
})
export class QuotationitemService {
    private url = `${APP_CONFIG.BASE_URL}/quotation-items/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Quotationitem[]> {
        return this.http.get<Quotationitem[]>(this.url);
    }

    save(item: Quotationitem): Observable<Quotationitem> {
        if (!item.id) {
            return this.http.post<Quotationitem>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Quotationitem): Observable<Quotationitem> {
        return this.http.put<Quotationitem>(`${this.url}${item.id}/`, item);
    }

    delete(item: Quotationitem) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
