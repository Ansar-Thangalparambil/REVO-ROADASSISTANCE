import { Navigate } from 'react-router-dom';
import { authAPI } from '../api/auth';
import { User } from '../types';
import { getDashboardPathByRole } from '../utils/dashboardRouting';

export default function DashboardRedirect() {
  const user = authAPI.getCurrentUser() as User | null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return <Navigate to={getDashboardPathByRole(user.role)} replace />;
}
