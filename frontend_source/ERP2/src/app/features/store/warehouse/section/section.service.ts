import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Section} from './section';

@Injectable({
    providedIn: 'root',
})
export class SectionService {
    private url = `${APP_CONFIG.BASE_URL}/sections/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Section[]> {
        return this.http.get<Section[]>(this.url);
    }

    save(item: Section): Observable<Section> {
        if (!item.id) {
            return this.http.post<Section>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Section): Observable<Section> {
        return this.http.put<Section>(`${this.url}${item.id}/`, item);
    }

    delete(item: Section) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
