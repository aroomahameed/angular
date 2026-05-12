import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Warehouse} from './warehouse';

@Injectable({
    providedIn: 'root',
})
export class WarehouseService {
    private url = `${APP_CONFIG.BASE_URL}/warehouses/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Warehouse[]> {
        return this.http.get<Warehouse[]>(this.url);
    }

    save(item: Warehouse): Observable<Warehouse> {
        if (!item.id) {
            return this.http.post<Warehouse>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Warehouse): Observable<Warehouse> {
        return this.http.put<Warehouse>(`${this.url}${item.id}/`, item);
    }

    delete(item: Warehouse) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
