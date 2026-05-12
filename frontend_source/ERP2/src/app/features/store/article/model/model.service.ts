import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Model} from './model';

@Injectable({
    providedIn: 'root',
})
export class ModelService {
    private url = `${APP_CONFIG.BASE_URL}/models/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Model[]> {
        return this.http.get<Model[]>(this.url);
    }

    save(item: Model): Observable<Model> {
        if (!item.id) {
            return this.http.post<Model>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Model): Observable<Model> {
        return this.http.put<Model>(`${this.url}${item.id}/`, item);
    }

    delete(item: Model) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
