import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Productionline} from './productionline';

@Injectable({
    providedIn: 'root',
})
export class ProductionlineService {
    private url = `${APP_CONFIG.BASE_URL}/article-pl/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Productionline[]> {
        return this.http.get<Productionline[]>(this.url);
    }

    save(item: Productionline): Observable<Productionline> {
        if (!item.id) {
            return this.http.post<Productionline>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Productionline): Observable<Productionline> {
        return this.http.put<Productionline>(`${this.url}${item.id}/`, item);
    }

    delete(item: Productionline) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
