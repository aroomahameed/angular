import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Line} from './line';

@Injectable({
    providedIn: 'root',
})
export class LineService {
    private url = `${APP_CONFIG.BASE_URL}/lines/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Line[]> {
        return this.http.get<Line[]>(this.url);
    }

    save(item: Line): Observable<Line> {
        if (!item.id) {
            return this.http.post<Line>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Line): Observable<Line> {
        return this.http.put<Line>(`${this.url}${item.id}/`, item);
    }

    delete(item: Line) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
