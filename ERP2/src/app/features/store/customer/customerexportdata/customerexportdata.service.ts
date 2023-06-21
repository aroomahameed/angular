import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customerexportdata} from './customerexportdata';

@Injectable({
    providedIn: 'root',
})
export class CustomerexportdataService {
    private url = `${APP_CONFIG.BASE_URL}/customer-export-data/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Customerexportdata[]> {
        return this.http.get<Customerexportdata[]>(this.url);
    }

    save(item: Customerexportdata): Observable<Customerexportdata> {
        if (!item.id) {
            return this.http.post<Customerexportdata>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Customerexportdata): Observable<Customerexportdata> {
        return this.http.put<Customerexportdata>(`${this.url}${item.id}/`, item);
    }

    delete(item: Customerexportdata) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
