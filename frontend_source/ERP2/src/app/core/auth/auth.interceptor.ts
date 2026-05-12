import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private auth: AuthService, private router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken();
    if (!token) {
      return this.handleResponse(next.handle(req));
    }
    return this.handleResponse(next.handle(req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })));
  }

  private handleResponse(response: Observable<HttpEvent<any>>): Observable<HttpEvent<any>> {
    return response.pipe(
      catchError(error => {
        if (error.status === 401) {
          this.auth.clearSession();
          this.router.navigate(['/login']);
        }
        return throwError(error) as Observable<HttpEvent<any>>;
      })
    );
  }
}
