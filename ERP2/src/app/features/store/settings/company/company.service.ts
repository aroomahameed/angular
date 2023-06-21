import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Company} from './company';

@Injectable({
    providedIn: 'root',
})
export class CompanyService {
    private url = `${APP_CONFIG.BASE_URL}/companies/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Company[]> {
        return this.http.get<Company[]>(this.url);
    }

    save(item: FormData): Observable<Company> {
        if (!item.get('id')) {
            return this.http.post<Company>(this.url, item);
        } else {
            return this.update(item);
        }
    }

  
    private update(item: any): Observable<Company> {
        return this.http.put<Company>(`${this.url}${item.id}/`, item);
    }

    delete(item: Company) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
