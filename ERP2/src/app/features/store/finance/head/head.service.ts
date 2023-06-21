import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Head} from './head.model';

@Injectable({
    providedIn: 'root',
})
export class HeadService {
    private url = `${APP_CONFIG.BASE_URL}/finance/heads/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Head[]> {
        console.log(this.url)
        return this.http.get<Head[]>(this.url);
    }

    save(item: Head): Observable<Head> {
        if (!item.id) {
            return this.http.post<Head>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Head): Observable<Head> {
        return this.http.put<Head>(`${this.url}${item.id}/`, item);
    }

    delete(id: string) {
        return this.http.delete(`${this.url}/${id}/`);
    }
}
