import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Department} from './department';

@Injectable({
    providedIn: 'root',
})
export class DepartmentService {
    private url = `${APP_CONFIG.BASE_URL}/departments/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Department[]> {
        return this.http.get<Department[]>(this.url);
    }

    save(item: Department): Observable<Department> {
        if (!item.id) {
            return this.http.post<Department>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Department): Observable<Department> {
        return this.http.put<Department>(`${this.url}${item.id}/`, item);
    }

    delete(item: Department) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
