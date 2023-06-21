import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Currency} from './currency';

@Injectable({
    providedIn: 'root',
})
export class CurrencyService {
    private url = `${APP_CONFIG.BASE_URL}/currencies/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Currency[]> {
        return this.http.get<Currency[]>(this.url);
    }

    save(item: Currency): Observable<Currency> {
        if (!item.id) {
            return this.http.post<Currency>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Currency): Observable<Currency> {
        return this.http.put<Currency>(`${this.url}${item.id}/`, item);
    }

    delete(item: Currency) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
