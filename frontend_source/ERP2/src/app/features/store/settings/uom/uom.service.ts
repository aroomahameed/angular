import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Uom} from './uom';

@Injectable({
    providedIn: 'root',
})
export class UomService {
    private url = `${APP_CONFIG.BASE_URL}/uoms/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Uom[]> {
        return this.http.get<Uom[]>(this.url);
    }

    save(item: Uom): Observable<Uom> {
        if (!item.id) {
            return this.http.post<Uom>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Uom): Observable<Uom> {
        return this.http.put<Uom>(`${this.url}${item.id}/`, item);
    }

    delete(item: Uom) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
