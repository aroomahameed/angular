import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Range} from './range';

@Injectable({
    providedIn: 'root',
})
export class RangeService {
    private url = `${APP_CONFIG.BASE_URL}/ranges/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Range[]> {
        return this.http.get<Range[]>(this.url);
    }

    save(item: Range): Observable<Range> {
        if (!item.id) {
            return this.http.post<Range>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Range): Observable<Range> {
        return this.http.put<Range>(`${this.url}${item.id}/`, item);
    }

    delete(item: Range) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
