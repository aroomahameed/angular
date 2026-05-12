import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subcategory} from './subcategory';

@Injectable({
    providedIn: 'root',
})
export class SubcategoryService {
    private url = `${APP_CONFIG.BASE_URL}/sub-categories/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Subcategory[]> {
        return this.http.get<Subcategory[]>(this.url);
    }

    save(item: Subcategory): Observable<Subcategory> {
        if (!item.id) {
            return this.http.post<Subcategory>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Subcategory): Observable<Subcategory> {
        return this.http.put<Subcategory>(`${this.url}${item.id}/`, item);
    }

    delete(item: Subcategory) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
