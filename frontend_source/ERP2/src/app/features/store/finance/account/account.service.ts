import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Account} from './account.model';

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    private url = `${APP_CONFIG.BASE_URL}/finance/accounts/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Account[]> {
        console.log(this.url)
        return this.http.get<Account[]>(this.url);
    }

    save(item: Account): Observable<Account> {
        if (!item.id) {
            return this.http.post<Account>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Account): Observable<Account> {
        return this.http.put<Account>(`${this.url}${item.id}/`, item);
    }

    delete(id: string) {
        return this.http.delete(`${this.url}/${id}/`);
    }
}
