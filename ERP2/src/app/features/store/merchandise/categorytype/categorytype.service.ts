import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Categorytype} from './categorytype';

@Injectable({
    providedIn: 'root',
})
export class CategorytypeService {
    private url = `${APP_CONFIG.BASE_URL}/category-types/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Categorytype[]> {
        return this.http.get<Categorytype[]>(this.url);
    }

    save(item: Categorytype): Observable<Categorytype> {
        if (!item.id) {
            return this.http.post<Categorytype>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Categorytype): Observable<Categorytype> {
        return this.http.put<Categorytype>(`${this.url}${item.id}/`, item);
    }

    delete(item: Categorytype) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
