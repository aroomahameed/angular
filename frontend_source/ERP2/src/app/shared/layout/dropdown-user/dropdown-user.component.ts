import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'smart-dropdown-user',
  templateUrl: './dropdown-user.component.html',
})
export class DropdownUserComponent {

  user$ = this.auth.user$;

  constructor(private auth: AuthService, private router: Router) { }

  logout($event: MouseEvent) {
    $event.preventDefault();
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
