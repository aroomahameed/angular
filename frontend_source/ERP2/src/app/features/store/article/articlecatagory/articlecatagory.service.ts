import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Articlecatagory} from './articlecatagory';

@Injectable({
    providedIn: 'root',
})
export class ArticlecatagoryService {
    private url = `${APP_CONFIG.BASE_URL}/article-categories/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Articlecatagory[]> {
        return this.http.get<Articlecatagory[]>(this.url);
    }

    save(item: Articlecatagory): Observable<Articlecatagory> {
        if (!item.id) {
            return this.http.post<Articlecatagory>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Articlecatagory): Observable<Articlecatagory> {
        return this.http.put<Articlecatagory>(`${this.url}${item.id}/`, item);
    }

    delete(item: Articlecatagory) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
