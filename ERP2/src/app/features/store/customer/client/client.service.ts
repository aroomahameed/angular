import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Client} from './client';

@Injectable({
    providedIn: 'root',
})
export class ClientService {
    private url = `${APP_CONFIG.BASE_URL}/clients/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Client[]> {
        return this.http.get<Client[]>(this.url);
    }

    save(item: Client): Observable<Client> {
        if (!item.id) {
            return this.http.post<Client>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Client): Observable<Client> {
        return this.http.put<Client>(`${this.url}${item.id}/`, item);
    }

    delete(item: Client) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
