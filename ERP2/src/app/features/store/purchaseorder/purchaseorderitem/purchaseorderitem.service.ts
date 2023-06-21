import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Purchaseorderitem} from './purchaseorderitem';

@Injectable({
    providedIn: 'root',
})
export class PurchaseorderitemService {
    private url = `${APP_CONFIG.BASE_URL}/purchase-order-items/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Purchaseorderitem[]> {
        return this.http.get<Purchaseorderitem[]>(this.url);
    }

    save(item: Purchaseorderitem): Observable<Purchaseorderitem> {
        if (!item.id) {
            return this.http.post<Purchaseorderitem>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Purchaseorderitem): Observable<Purchaseorderitem> {
        return this.http.put<Purchaseorderitem>(`${this.url}${item.id}/`, item);
    }

    delete(item: Purchaseorderitem) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
