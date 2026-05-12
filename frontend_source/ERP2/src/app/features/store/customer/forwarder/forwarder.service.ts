import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Forwarder} from './forwarder';

@Injectable({
    providedIn: 'root',
})
export class ForwarderService {
    private url = `${APP_CONFIG.BASE_URL}/forwarders/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Forwarder[]> {
        return this.http.get<Forwarder[]>(this.url);
    }

    save(item: Forwarder): Observable<Forwarder> {
        if (!item.id) {
            return this.http.post<Forwarder>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Forwarder): Observable<Forwarder> {
        return this.http.put<Forwarder>(`${this.url}${item.id}/`, item);
    }

    delete(item: Forwarder) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
