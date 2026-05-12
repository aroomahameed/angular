import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tax} from './tax';

@Injectable({
    providedIn: 'root',
})
export class TaxService {
    private url = `${APP_CONFIG.BASE_URL}/taxes/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Tax[]> {
        return this.http.get<Tax[]>(this.url);
    }

    save(item: Tax): Observable<Tax> {
        if (!item.id) {
            return this.http.post<Tax>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Tax): Observable<Tax> {
        return this.http.put<Tax>(`${this.url}${item.id}/`, item);
    }

    delete(item: Tax) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
