import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { AuthUser } from 'src/app/core/auth/auth.models';

interface UserForm {
  id?: number;
  username: string;
  password: string;
  name: string;
  email: string;
  role: 'user' | 'admin' | 'super_admin';
  status: boolean;
}

@Component({
  selector: 'smart-users',
  templateUrl: './users.component.html',
  styles: [`
    .users-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      margin-bottom: 16px;
    }
    .user-form-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 12px 16px;
    }
    .user-form-grid .full {
      grid-column: 1 / -1;
    }
    @media (max-width: 767px) {
      .user-form-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class UsersComponent implements OnInit {
  users: AuthUser[] = [];
  formVisible = false;
  saving = false;
  saved = false;
  error = '';
  form: UserForm = this.emptyForm();

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.auth.listUsers().subscribe(
      users => this.users = users,
      err => this.error = this.messageFromError(err, 'Unable to load users.')
    );
  }

  addUser() {
    this.form = this.emptyForm();
    this.formVisible = true;
    this.saved = false;
    this.error = '';
  }

  editUser(user: AuthUser) {
    this.form = {
      id: user.id,
      username: user.username,
      password: '',
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status
    };
    this.formVisible = true;
    this.saved = false;
    this.error = '';
  }

  saveUser() {
    this.saving = true;
    this.saved = false;
    this.error = '';
    const request = this.form.id ? this.auth.updateUser(this.form) : this.auth.createUser(this.form);
    request.subscribe(
      () => {
        this.saving = false;
        this.saved = true;
        this.formVisible = false;
        this.loadUsers();
      },
      err => {
        this.saving = false;
        this.error = this.messageFromError(err, 'Unable to save user.');
      }
    );
  }

  deleteUser(user: AuthUser) {
    if (!confirm(`Delete user ${user.username}?`)) {
      return;
    }
    this.auth.deleteUser(user.id).subscribe(
      () => this.loadUsers(),
      err => this.error = this.messageFromError(err, 'Unable to delete user.')
    );
  }

  cancel() {
    this.formVisible = false;
    this.form = this.emptyForm();
  }

  private emptyForm(): UserForm {
    return {
      username: '',
      password: '',
      name: '',
      email: '',
      role: 'user',
      status: true
    };
  }

  private messageFromError(err: any, fallback: string): string {
    return err && err.error && err.error.detail ? err.error.detail : fallback;
  }
}
