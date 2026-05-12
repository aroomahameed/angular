import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Country} from './country';

@Injectable({
    providedIn: 'root',
})
export class CountryService {
    private url = `${APP_CONFIG.BASE_URL}/countries/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Country[]> {
        return this.http.get<Country[]>(this.url);
    }

    save(item: Country): Observable<Country> {
        if (!item.id) {
            return this.http.post<Country>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Country): Observable<Country> {
        return this.http.put<Country>(`${this.url}${item.id}/`, item);
    }

    delete(item: Country) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
