import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Purchaseorder} from './purchaseorder';

@Injectable({
    providedIn: 'root',
})
export class PurchaseorderService {
    private url = `${APP_CONFIG.BASE_URL}/purchase-orders/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Purchaseorder[]> {
        return this.http.get<Purchaseorder[]>(this.url);
    }

    save(item: Purchaseorder): Observable<Purchaseorder> {
      
        if (!item.id) {
           
            return this.http.post<Purchaseorder>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Purchaseorder): Observable<Purchaseorder> {
        return this.http.put<Purchaseorder>(`${this.url}${item.id}/`, item);
    }

    delete(item: Purchaseorder) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
