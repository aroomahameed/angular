import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Material} from './material';

@Injectable({
    providedIn: 'root',
})
export class MaterialService {
    private url = `${APP_CONFIG.BASE_URL}/materials/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Material[]> {
        return this.http.get<Material[]>(this.url);
    }

    save(item: FormData): Observable<Material> {
        if (!item.get('id')) {
            return this.http.post<Material>(this.url, item);
        } else {
            return this.update(item);
        }
    }
   
    private update(item: any): Observable<Material> {
       
        return this.http.put<Material>(`${this.url}${item.get('id')}/`, item);
    }
    delete(item: Material) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
