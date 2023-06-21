import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Balltest} from './balltest';

@Injectable({
    providedIn: 'root',
})
export class BalltestService {
    private url = `${APP_CONFIG.BASE_URL}/ball-tests/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Balltest[]> {
        return this.http.get<Balltest[]>(this.url);
    }

    save(item: Balltest): Observable<Balltest> {
        if (!item.id) {
            return this.http.post<Balltest>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Balltest): Observable<Balltest> {
        return this.http.put<Balltest>(`${this.url}${item.id}/`, item);
    }

    delete(item: Balltest) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
