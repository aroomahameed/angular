import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Season} from './season';

@Injectable({
    providedIn: 'root',
})
export class SeasonService {
    private url = `${APP_CONFIG.BASE_URL}/seasons/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Season[]> {
        return this.http.get<Season[]>(this.url);
    }

    save(item: Season): Observable<Season> {
        if (!item.id) {
            return this.http.post<Season>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Season): Observable<Season> {
        return this.http.put<Season>(`${this.url}${item.id}/`, item);
    }

    delete(item: Season) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
