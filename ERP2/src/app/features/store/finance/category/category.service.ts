import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Category} from './category.model';

@Injectable({
    providedIn: 'root',
})
export class CategoryService {
    private url = `${APP_CONFIG.BASE_URL}/finance/heads/categories/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Category[]> {
        return this.http.get<Category[]>(this.url);
    }
}
