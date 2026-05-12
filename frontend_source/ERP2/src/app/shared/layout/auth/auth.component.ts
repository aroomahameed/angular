import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'smart-auth',
  templateUrl: './auth.component.html',
  styles: [`
    .auth-page {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #f3f6f9;
      padding: 24px;
    }
    .auth-panel {
      width: 100%;
      max-width: 420px;
      background: #fff;
      border: 1px solid rgba(0,0,0,.08);
      border-radius: 4px;
      box-shadow: 0 12px 30px rgba(0,0,0,.08);
      padding: 28px;
    }
  `]
})
export class AuthComponent implements OnInit {
  username = 'admin';
  password = 'password';
  loading = false;
  error = '';
  returnUrl = '/dashboard';

  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  login() {
    this.loading = true;
    this.error = '';
    this.auth.login(this.username, this.password).subscribe(
      () => {
        this.loading = false;
        this.router.navigateByUrl('/dashboard');
      },
      err => {
        this.loading = false;
        this.error = err.error && err.error.detail ? err.error.detail : 'Login failed';
      }
    );
  }

}
