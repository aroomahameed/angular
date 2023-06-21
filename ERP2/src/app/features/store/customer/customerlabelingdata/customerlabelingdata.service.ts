import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customerlabelingdata} from './customerlabelingdata';

@Injectable({
    providedIn: 'root',
})
export class CustomerlabelingdataService {
    private url = `${APP_CONFIG.BASE_URL}/customer-labelling-data/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Customerlabelingdata[]> {
        return this.http.get<Customerlabelingdata[]>(this.url);
    }

    save(item: Customerlabelingdata): Observable<Customerlabelingdata> {
        if (!item.id) {
            return this.http.post<Customerlabelingdata>(this.url, item);
        } else {
            return this.update(item);
        }
    }

    private update(item: Customerlabelingdata): Observable<Customerlabelingdata> {
        return this.http.put<Customerlabelingdata>(`${this.url}${item.id}/`, item);
    }

    delete(item: Customerlabelingdata) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
