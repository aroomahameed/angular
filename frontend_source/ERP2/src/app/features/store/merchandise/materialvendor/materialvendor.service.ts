import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Materialvendor} from './materialvendor';

@Injectable({
    providedIn: 'root',
})
export class MaterialvendorService {
    private url = `${APP_CONFIG.BASE_URL}/material-vendors/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Materialvendor[]> {
        return this.http.get<Materialvendor[]>(this.url);
    }

    save(item: Materialvendor): Observable<Materialvendor> {
        if (!item.id) {
            return this.http.post<Materialvendor>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Materialvendor): Observable<Materialvendor> {
        return this.http.put<Materialvendor>(`${this.url}${item.id}/`, item);
    }

    delete(item: Materialvendor) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
