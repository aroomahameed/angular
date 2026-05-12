export type Role = 'user' | 'admin' | 'super_admin';

export interface AuthUser {
  id: number;
  username: string;
  name: string;
  email: string;
  role: Role;
  status: boolean;
}

export interface LoginResponse {
  token: string;
  user: AuthUser;
  permissions: RolePermissions;
}

export interface RolePermissions {
  user: string[];
  admin: string[];
  super_admin: string[];
}
