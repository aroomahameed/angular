import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Role } from './auth.models';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
      return false;
    }

    const roles = route.data && route.data.roles as Role[];
    if (!this.auth.hasAnyRole(roles)) {
      this.router.navigateByUrl(this.auth.firstAllowedUrl());
      return false;
    }

    if (!this.auth.canAccessUrl(state.url)) {
      this.router.navigateByUrl(this.auth.firstAllowedUrl());
      return false;
    }

    return true;
  }
}
