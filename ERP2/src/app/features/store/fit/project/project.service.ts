import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from './project';

@Injectable({
    providedIn: 'root',
})
export class ProjectService {
    private url = `${APP_CONFIG.BASE_URL}/projects/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Project[]> {
        return this.http.get<Project[]>(this.url);
    }

    save(item: Project): Observable<Project> {
        if (!item.id) {
            return this.http.post<Project>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Project): Observable<Project> {
        return this.http.put<Project>(`${this.url}${item.id}/`, item);
    }

    delete(item: Project) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
