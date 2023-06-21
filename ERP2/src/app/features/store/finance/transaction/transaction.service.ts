import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transaction} from './transaction.model';

@Injectable({
    providedIn: 'root',
})
export class TransactionService {
    private url = `${APP_CONFIG.BASE_URL}/finance/transactions/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Transaction[]> {
        return this.http.get<Transaction[]>(this.url);
    }

    save(item: Transaction): Observable<Transaction> {
        if (!item.id) {
            return this.http.post<Transaction>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Transaction): Observable<Transaction> {
        return this.http.put<Transaction>(`${this.url}${item.id}/`, item);
    }

    delete(id: string) {
        return this.http.delete(`${this.url}/${id}/`);
    }

    deleteMany(ids: string[]) {
        return this.http.post(`${this.url}delete-many/`, ids);
    }
}
