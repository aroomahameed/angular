import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Articleme} from './articleme';

@Injectable({
    providedIn: 'root',
})
export class ArticlemeService {
    private url = `${APP_CONFIG.BASE_URL}/article-me/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Articleme[]> {
        return this.http.get<Articleme[]>(this.url);
    }

    save(item: Articleme): Observable<Articleme> {
        if (!item.id) {
            return this.http.post<Articleme>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Articleme): Observable<Articleme> {
        return this.http.put<Articleme>(`${this.url}${item.id}/`, item);
    }

    delete(item: Articleme) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
