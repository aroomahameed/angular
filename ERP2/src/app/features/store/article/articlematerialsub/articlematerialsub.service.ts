import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Articlematerialsub} from './articlematerialsub';

@Injectable({
    providedIn: 'root',
})
export class ArticlematerialsubService {
    private url = `${APP_CONFIG.BASE_URL}/article-material-descriptions/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Articlematerialsub[]> {
        return this.http.get<Articlematerialsub[]>(this.url);
    }

    save(item: Articlematerialsub): Observable<Articlematerialsub> {
        if (!item.id) {
            return this.http.post<Articlematerialsub>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Articlematerialsub): Observable<Articlematerialsub> {
        return this.http.put<Articlematerialsub>(`${this.url}${item.id}/`, item);
    }

    delete(item: Articlematerialsub) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
