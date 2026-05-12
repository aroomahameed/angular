import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Materialtest} from './materialtest';

@Injectable({
    providedIn: 'root',
})
export class MaterialtestService {
    private url = `${APP_CONFIG.BASE_URL}/material-tests/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Materialtest[]> {
        return this.http.get<Materialtest[]>(this.url);
    }

    save(item: Materialtest): Observable<Materialtest> {
      
        if (!item.id) {
            
            return this.http.post<Materialtest>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Materialtest): Observable<Materialtest> {
        return this.http.put<Materialtest>(`${this.url}${item.id}/`, item);
    }

    delete(item: Materialtest) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
