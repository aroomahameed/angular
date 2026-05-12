import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Region} from './region';

@Injectable({
    providedIn: 'root',
})
export class RegionService {
    private url = `${APP_CONFIG.BASE_URL}/regions/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Region[]> {
        return this.http.get<Region[]>(this.url);
    }

    save(item: Region): Observable<Region> {
        if (!item.id) {
            return this.http.post<Region>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Region): Observable<Region> {
        return this.http.put<Region>(`${this.url}${item.id}/`, item);
    }

    delete(item: Region) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
