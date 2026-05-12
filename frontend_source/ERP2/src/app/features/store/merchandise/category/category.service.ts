import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './category';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private url = `${APP_CONFIG.BASE_URL}/categories/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Category[]> {
        return this.http.get<Category[]>(this.url);
    }

    save(item: Category): Observable<Category> {
        if (!item.id) {
            return this.http.post<Category>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Category): Observable<Category> {
        return this.http.put<Category>(`${this.url}${item.id}/`, item);
    }

    delete(item: Category) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
