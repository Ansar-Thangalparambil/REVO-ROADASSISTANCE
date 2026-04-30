import { User } from '../types';

const DASHBOARD_PATHS: Record<User['role'], string> = {
  CUSTOMER: '/dashboard/customer',
  PROVIDER: '/dashboard/provider',
  VENDOR: '/dashboard/vendor',
  ADMIN: '/dashboard/admin',
};

export function getDashboardPathByRole(role?: User['role']): string {
  if (!role) {
    return '/dashboard/customer';
  }
  return DASHBOARD_PATHS[role];
}

export function getRoleByDashboardPath(pathname: string): User['role'] | null {
  if (pathname.includes('/dashboard/customer')) return 'CUSTOMER';
  if (pathname.includes('/dashboard/provider')) return 'PROVIDER';
  if (pathname.includes('/dashboard/vendor')) return 'VENDOR';
  if (pathname.includes('/dashboard/admin')) return 'ADMIN';
  return null;
}
