import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Articlesize} from './articlesize';

@Injectable({
    providedIn: 'root',
})
export class ArticlesizeService {
    private url = `${APP_CONFIG.BASE_URL}/article-size/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Articlesize[]> {
        return this.http.get<Articlesize[]>(this.url);
    }

    save(item: Articlesize): Observable<Articlesize> {
        if (!item.id) {
            return this.http.post<Articlesize>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Articlesize): Observable<Articlesize> {
        return this.http.put<Articlesize>(`${this.url}${item.id}/`, item);
    }

    delete(item: Articlesize) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
