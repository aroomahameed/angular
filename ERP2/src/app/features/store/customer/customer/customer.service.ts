import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from './customer';

@Injectable({
    providedIn: 'root',
})
export class CustomerService {
    private url = `${APP_CONFIG.BASE_URL}/customers/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Customer[]> {
        return this.http.get<Customer[]>(this.url);
    }

    save(item: Customer): Observable<Customer> {
        if (!item.id) {
            return this.http.post<Customer>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Customer): Observable<Customer> {
        return this.http.put<Customer>(`${this.url}${item.id}/`, item);
    }

    delete(item: Customer) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
