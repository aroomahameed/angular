import {Injectable} from '@angular/core';
import {APP_CONFIG} from '../../../../app.config';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pouploading} from './pouploading';

@Injectable({
    providedIn: 'root',
})
export class PouploadingService {
    private url = `${APP_CONFIG.BASE_URL}/file-test/`;

    constructor(private http: HttpClient) {
    }

    findAll(): Observable<Pouploading[]> {
        return this.http.get<Pouploading[]>(this.url);
    }

    save(item: any):any {
        return this.http.post(this.url, item,  {headers : new HttpHeaders({}), responseType: 'text'});
        
    }

    private update(item: Pouploading): Observable<Pouploading> {
        return this.http.put<Pouploading>(`${this.url}${item.id}/`, item);
    }

    delete(item: Pouploading) {
        return this.http.delete(`${this.url}${item.id}/`);
    }
}
