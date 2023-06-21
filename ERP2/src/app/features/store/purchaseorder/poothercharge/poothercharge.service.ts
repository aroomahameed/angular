import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Poothercharge} from './poothercharge';

@Injectable({
    providedIn: 'root',
})
export class PootherchargeService {
    private url = `${APP_CONFIG.BASE_URL}/other-charges/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Poothercharge[]> {
        return this.http.get<Poothercharge[]>(this.url);
    }

    save(item: Poothercharge): Observable<Poothercharge> {
        if (!item.id) {
            return this.http.post<Poothercharge>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Poothercharge): Observable<Poothercharge> {
        return this.http.put<Poothercharge>(`${this.url}${item.id}/`, item);
    }

    delete(item: Poothercharge) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
