import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Factorycode} from './factorycode';

@Injectable({
    providedIn: 'root',
})
export class FactorycodeService {
    private url = `${APP_CONFIG.BASE_URL}/factory-codes/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Factorycode[]> {
        return this.http.get<Factorycode[]>(this.url);
    }

    save(item: Factorycode): Observable<Factorycode> {
        if (!item.id) {
            return this.http.post<Factorycode>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Factorycode): Observable<Factorycode> {
        return this.http.put<Factorycode>(`${this.url}${item.id}/`, item);
    }

    delete(item: Factorycode) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
