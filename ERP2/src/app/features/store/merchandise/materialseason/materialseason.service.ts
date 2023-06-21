import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Materialseason} from './materialseason';

@Injectable({
    providedIn: 'root',
})
export class MaterialseasonService {
    private url = `${APP_CONFIG.BASE_URL}/material-seasons/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Materialseason[]> {
        return this.http.get<Materialseason[]>(this.url);
    }

    save(item: Materialseason): Observable<Materialseason> {
        if (!item.id) {
            return this.http.post<Materialseason>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Materialseason): Observable<Materialseason> {
        return this.http.put<Materialseason>(`${this.url}${item.id}/`, item);
    }

    delete(item: Materialseason) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
