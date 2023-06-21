import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Serviceidentifier} from './serviceidentifier';

@Injectable({
    providedIn: 'root',
})
export class ServiceidentifierService {
    private url = `${APP_CONFIG.BASE_URL}/service-identifier/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Serviceidentifier[]> {
        return this.http.get<Serviceidentifier[]>(this.url);
    }

    save(item: Serviceidentifier): Observable<Serviceidentifier> {
        if (!item.id) {
            return this.http.post<Serviceidentifier>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Serviceidentifier): Observable<Serviceidentifier> {
        return this.http.put<Serviceidentifier>(`${this.url}${item.id}/`, item);
    }

    delete(item: Serviceidentifier) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
