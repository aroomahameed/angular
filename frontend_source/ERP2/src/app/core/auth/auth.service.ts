import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { tap } from 'rxjs/operators';
import { APP_CONFIG } from 'src/app/app.config';
import { LoginResponse, AuthUser, RolePermissions } from './auth.models';
import { NavigationItem } from 'src/app/store/navigation';
import { NavigationItems } from 'src/app/app.navigation';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenKey = 'erp_auth_token';
  private readonly userKey = 'erp_auth_user';
  private readonly permissionsKey = 'erp_role_permissions';
  private userSubject = new BehaviorSubject<AuthUser>(this.readUser());
  private permissionsSubject = new BehaviorSubject<RolePermissions>(this.readPermissions());

  user$ = this.userSubject.asObservable();
  permissions$ = this.permissionsSubject.asObservable();

  constructor(private http: HttpClient) {
    if (this.getToken()) {
      setTimeout(() => this.loadPermissions().subscribe(), 0);
    }
  }

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${APP_CONFIG.BASE_URL}/auth/login`, { username, password }).pipe(
      tap(response => this.setSession(response.token, response.user, response.permissions))
    );
  }

  loadPermissions(): Observable<RolePermissions> {
    return this.http.get<RolePermissions>(`${APP_CONFIG.BASE_URL}/auth/permissions`).pipe(
      tap(permissions => this.setPermissions(permissions))
    );
  }

  updatePermissions(permissions: RolePermissions): Observable<RolePermissions> {
    return this.http.post<RolePermissions>(`${APP_CONFIG.BASE_URL}/auth/permissions`, permissions).pipe(
      tap(next => this.setPermissions(next))
    );
  }

  listUsers(): Observable<AuthUser[]> {
    return this.http.get<AuthUser[]>(`${APP_CONFIG.BASE_URL}/auth/users`);
  }

  createUser(user: any): Observable<AuthUser> {
    return this.http.post<AuthUser>(`${APP_CONFIG.BASE_URL}/auth/users`, user);
  }

  updateUser(user: any): Observable<AuthUser> {
    return this.http.put<AuthUser>(`${APP_CONFIG.BASE_URL}/auth/users/${user.id}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${APP_CONFIG.BASE_URL}/auth/users/${id}`);
  }

  logout(): void {
    const token = this.getToken();
    if (token) {
      this.http.post(`${APP_CONFIG.BASE_URL}/auth/logout`, {}).subscribe();
    }
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    localStorage.removeItem(this.permissionsKey);
    this.userSubject.next(null);
    this.permissionsSubject.next(null);
  }

  clearSession(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
    localStorage.removeItem(this.permissionsKey);
    this.userSubject.next(null);
    this.permissionsSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.getToken() && !!this.currentUser();
  }

  currentUser(): AuthUser {
    return this.userSubject.value;
  }

  getToken(): string {
    return localStorage.getItem(this.tokenKey);
  }

  hasAnyRole(roles?: string[]): boolean {
    const user = this.currentUser();
    if (!roles || !roles.length) {
      return true;
    }
    return !!user && roles.indexOf(user.role) !== -1;
  }

  canAccessUrl(url: string): boolean {
    const cleanUrl = (url || '').split('?')[0].split('#')[0];
    const match = this.findNavigationItem(NavigationItems as NavigationItem[], cleanUrl);
    return !match || this.hasAnyRole(match.roles) && this.hasPermission(cleanUrl);
  }

  firstAllowedUrl(): string {
    if (this.isAuthenticated()) {
      return '/dashboard';
    }
    const item = this.findFirstAllowedItem(NavigationItems as NavigationItem[]);
    return item && item.routerLink ? item.routerLink : '/login';
  }

  filterNavigationItems(items: NavigationItem[]): NavigationItem[] {
    return items
      .filter(item => this.hasAnyRole(item.roles))
      .filter(item => !item.routerLink || this.hasPermission(item.routerLink))
      .map(item => {
        const next: NavigationItem = { ...item };
        if (item.items) {
          next.items = this.filterNavigationItems(item.items);
        }
        return next;
      })
      .filter(item => !item.items || item.items.length > 0);
  }

  hasPermission(url: string): boolean {
    if (url.indexOf('/dashboard') === 0) {
      return true;
    }
    const user = this.currentUser();
    if (!user) {
      return false;
    }
    if (user.role === 'super_admin') {
      return true;
    }
    const permissions = this.permissionsSubject.value;
    if (!permissions || !permissions[user.role]) {
      return true;
    }
    return permissions[user.role].some(allowed => url.indexOf(allowed) === 0);
  }

  private setSession(token: string, user: AuthUser, permissions: RolePermissions): void {
    localStorage.setItem(this.tokenKey, token);
    localStorage.setItem(this.userKey, JSON.stringify(user));
    this.userSubject.next(user);
    this.setPermissions(permissions);
  }

  private setPermissions(permissions: RolePermissions): void {
    localStorage.setItem(this.permissionsKey, JSON.stringify(permissions));
    this.permissionsSubject.next(permissions);
  }

  private readUser(): AuthUser {
    const raw = localStorage.getItem(this.userKey);
    if (!raw) {
      return null;
    }
    try {
      return JSON.parse(raw);
    } catch (error) {
      localStorage.removeItem(this.userKey);
      return null;
    }
  }

  private readPermissions(): RolePermissions {
    const raw = localStorage.getItem(this.permissionsKey);
    if (!raw) {
      return null;
    }
    try {
      return JSON.parse(raw);
    } catch (error) {
      localStorage.removeItem(this.permissionsKey);
      return null;
    }
  }

  private findNavigationItem(items: NavigationItem[], url: string): NavigationItem {
    for (const item of items) {
      if (item.routerLink && url.indexOf(item.routerLink) === 0) {
        return item;
      }
      if (item.items) {
        const child = this.findNavigationItem(item.items, url);
        if (child) {
          return child;
        }
      }
    }
    return null;
  }

  private findFirstAllowedItem(items: NavigationItem[]): NavigationItem {
    for (const item of items) {
      if (item.routerLink && this.hasAnyRole(item.roles) && this.hasPermission(item.routerLink)) {
        return item;
      }
      if (item.items) {
        const child = this.findFirstAllowedItem(item.items);
        if (child) {
          return child;
        }
      }
    }
    return null;
  }
}
