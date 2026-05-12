import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Articlerate} from './articlerate';

@Injectable({
    providedIn: 'root',
})
export class ArticlerateService {
    private url = `${APP_CONFIG.BASE_URL}/article-size-rate/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Articlerate[]> {
        return this.http.get<Articlerate[]>(this.url);
    }

    save(item: Articlerate): Observable<Articlerate> {
        if (!item.id) {
            return this.http.post<Articlerate>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Articlerate): Observable<Articlerate> {
        return this.http.put<Articlerate>(`${this.url}${item.id}/`, item);
    }

    delete(item: Articlerate) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
