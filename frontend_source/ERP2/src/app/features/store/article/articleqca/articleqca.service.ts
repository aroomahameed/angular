import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Articleqca} from './articleqca';

@Injectable({
    providedIn: 'root',
})
export class ArticleqcaService {
    private url = `${APP_CONFIG.BASE_URL}/article-qca/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Articleqca[]> {
        return this.http.get<Articleqca[]>(this.url);
    }

    save(item: Articleqca): Observable<Articleqca> {
        if (!item.id) {
            return this.http.post<Articleqca>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Articleqca): Observable<Articleqca> {
        return this.http.put<Articleqca>(`${this.url}${item.id}/`, item);
    }

    delete(item: Articleqca) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
