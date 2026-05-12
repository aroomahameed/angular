import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';
import { RolePermissions } from 'src/app/core/auth/auth.models';
import { NavigationItems } from 'src/app/app.navigation';
import { NavigationItem } from 'src/app/store/navigation';

interface PermissionRow {
  title: string;
  group: string;
  routerLink: string;
}

@Component({
  selector: 'smart-role-settings',
  templateUrl: './role-settings.component.html',
  styles: [`
    .permission-table th,
    .permission-table td {
      vertical-align: middle;
    }
    .permission-group {
      width: 180px;
    }
    .permission-check {
      width: 120px;
      text-align: center;
    }
  `]
})
export class RoleSettingsComponent implements OnInit {
  rows: PermissionRow[] = [];
  permissions: RolePermissions = {
    user: [],
    admin: [],
    super_admin: []
  };
  saving = false;
  saved = false;
  error = '';

  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.rows = this.flattenNavigation(NavigationItems as NavigationItem[]);
    this.auth.loadPermissions().subscribe(
      permissions => this.permissions = this.clonePermissions(permissions),
      () => this.error = 'Unable to load role permissions.'
    );
  }

  checked(role: 'user' | 'admin', routerLink: string): boolean {
    return this.permissions[role].indexOf(routerLink) !== -1;
  }

  toggle(role: 'user' | 'admin', routerLink: string, checked: boolean) {
    const list = this.permissions[role].filter(item => item !== routerLink);
    if (checked) {
      list.push(routerLink);
    }
    this.permissions = {
      ...this.permissions,
      [role]: list
    };
    this.saved = false;
  }

  save() {
    this.saving = true;
    this.saved = false;
    this.error = '';
    this.auth.updatePermissions(this.permissions).subscribe(
      permissions => {
        this.permissions = this.clonePermissions(permissions);
        this.saving = false;
        this.saved = true;
      },
      () => {
        this.saving = false;
        this.error = 'Unable to save role permissions.';
      }
    );
  }

  private flattenNavigation(items: NavigationItem[], group: string = ''): PermissionRow[] {
    let rows: PermissionRow[] = [];
    items.forEach(item => {
      const nextGroup = item.items ? item.title : group;
      if (item.routerLink) {
        rows.push({
          title: item.title,
          group,
          routerLink: item.routerLink
        });
      }
      if (item.items) {
        rows = rows.concat(this.flattenNavigation(item.items, nextGroup));
      }
    });
    return rows;
  }

  private clonePermissions(permissions: RolePermissions): RolePermissions {
    return {
      user: permissions && permissions.user ? [...permissions.user] : [],
      admin: permissions && permissions.admin ? [...permissions.admin] : [],
      super_admin: permissions && permissions.super_admin ? [...permissions.super_admin] : []
    };
  }
}
