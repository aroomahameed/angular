import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Article} from './article';

@Injectable({
    providedIn: 'root',
})
export class ArticleService {
    private url = `${APP_CONFIG.BASE_URL}/articles/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Article[]> {
        return this.http.get<Article[]>(this.url);
    }

    save(item: FormData): Observable<Article> {

        if (!item.get('id')) {
            return this.http.post<Article>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: any): Observable<Article> {
        return this.http.put<Article>(`${this.url}${item.get('id')}/`, item);
    }

    delete(item: Article) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
