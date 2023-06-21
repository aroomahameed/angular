import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Quotation} from './quotation';

@Injectable({
    providedIn: 'root',
})
export class QuotationService {
    private url = `${APP_CONFIG.BASE_URL}/quotations/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Quotation[]> {
        return this.http.get<Quotation[]>(this.url);
    }

    save(item: Quotation): Observable<Quotation> {
        if (!item.id) {
            return this.http.post<Quotation>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Quotation): Observable<Quotation> {
        return this.http.put<Quotation>(`${this.url}${item.id}/`, item);
    }

    delete(item: Quotation) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
