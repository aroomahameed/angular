import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Delayreasoncode} from './delayreasoncode';

@Injectable({
    providedIn: 'root',
})
export class DelayreasoncodeService {
    private url = `${APP_CONFIG.BASE_URL}/delay-reasons/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Delayreasoncode[]> {
        return this.http.get<Delayreasoncode[]>(this.url);
    }

    save(item: Delayreasoncode): Observable<Delayreasoncode> {
        if (!item.id) {
            return this.http.post<Delayreasoncode>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Delayreasoncode): Observable<Delayreasoncode> {
        return this.http.put<Delayreasoncode>(`${this.url}${item.id}/`, item);
    }

    delete(item: Delayreasoncode) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
