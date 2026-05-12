import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Labball} from './labball';

@Injectable({
    providedIn: 'root',
})
export class LabballService {
    private url = `${APP_CONFIG.BASE_URL}/lab-balls/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Labball[]> {
        return this.http.get<Labball[]>(this.url);
    }

    save(item: Labball): Observable<Labball> {
        if (!item.id) {
            return this.http.post<Labball>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Labball): Observable<Labball> {
        return this.http.put<Labball>(`${this.url}${item.id}/`, item);
    }

    delete(item: Labball) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
