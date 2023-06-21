import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Testtansaction} from './testtansaction';

@Injectable({
    providedIn: 'root',
})
export class TesttansactionService {
    private url = `${APP_CONFIG.BASE_URL}/projects/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Testtansaction[]> {
        return this.http.get<Testtansaction[]>(this.url);
    }

    save(item: Testtansaction): Observable<Testtansaction> {
        if (!item.id) {
            console.log("hello")
            return this.http.post<Testtansaction>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Testtansaction): Observable<Testtansaction> {
        return this.http.put<Testtansaction>(`${this.url}${item.id}/`, item);
    }

    delete(item: Testtansaction) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
