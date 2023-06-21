import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Transportmode} from './transportmode';

@Injectable({
    providedIn: 'root',
})
export class TransportmodeService {
    private url = `${APP_CONFIG.BASE_URL}/transport-modes/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Transportmode[]> {
        return this.http.get<Transportmode[]>(this.url);
    }

    save(item: Transportmode): Observable<Transportmode> {
        if (!item.id) {
            return this.http.post<Transportmode>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Transportmode): Observable<Transportmode> {
        return this.http.put<Transportmode>(`${this.url}${item.id}/`, item);
    }

    delete(item: Transportmode) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
