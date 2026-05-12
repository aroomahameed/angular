import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Test} from './test';

@Injectable({
    providedIn: 'root',
})
export class TestService {
    private url = `${APP_CONFIG.BASE_URL}/fit-tests/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Test[]> {
        return this.http.get<Test[]>(this.url);
    }

    save(item: Test): Observable<Test> {
        if (!item.id) {
            return this.http.post<Test>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Test): Observable<Test> {
        return this.http.put<Test>(`${this.url}${item.id}/`, item);
    }

    delete(item: Test) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
