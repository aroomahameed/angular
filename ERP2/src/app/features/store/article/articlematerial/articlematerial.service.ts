import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Articlematerial} from './articlematerial';

@Injectable({
    providedIn: 'root',
})
export class ArticlematerialService {
    private url = `${APP_CONFIG.BASE_URL}/article-materials/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Articlematerial[]> {
        return this.http.get<Articlematerial[]>(this.url);
    }

    save(item: Articlematerial): Observable<Articlematerial> {
        if (!item.id) {
            return this.http.post<Articlematerial>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Articlematerial): Observable<Articlematerial> {
        return this.http.put<Articlematerial>(`${this.url}${item.id}/`, item);
    }

    delete(item: Articlematerial) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
