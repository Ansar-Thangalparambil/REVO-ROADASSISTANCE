import { useMemo } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { authAPI } from '../api/auth';
import { getDashboardPathByRole, getRoleByDashboardPath } from '../utils/dashboardRouting';
import { User } from '../types';

const roleContent: Record<User['role'], { title: string; subtitle: string; cards: string[] }> = {
  CUSTOMER: {
    title: 'Customer Dashboard',
    subtitle: 'Track assistance requests, orders, and vehicle support status.',
    cards: ['Active Assistance', 'Recent Orders', 'Saved Vehicles'],
  },
  PROVIDER: {
    title: 'Provider Dashboard',
    subtitle: 'Manage jobs, update availability, and monitor earnings.',
    cards: ['Incoming Jobs', 'Current Queue', 'Earnings Snapshot'],
  },
  VENDOR: {
    title: 'Vendor Dashboard',
    subtitle: 'Manage inventory, fulfil orders, and view performance metrics.',
    cards: ['Pending Orders', 'Low Stock Alerts', 'Revenue Today'],
  },
  ADMIN: {
    title: 'Admin Dashboard',
    subtitle: 'System overview for users, operations, and platform health.',
    cards: ['User Growth', 'Open Tickets', 'Platform Activity'],
  },
};

export default function RoleDashboard() {
  const user = authAPI.getCurrentUser() as User | null;
  const location = useLocation();
  const navigate = useNavigate();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  const routeRole = getRoleByDashboardPath(location.pathname);
  if (!routeRole) {
    return <Navigate to={getDashboardPathByRole(user.role)} replace />;
  }

  if (routeRole !== user.role) {
    return <Navigate to={getDashboardPathByRole(user.role)} replace />;
  }

  const content = useMemo(() => roleContent[user.role], [user.role]);

  return (
    <main className="revo-dashboard-shell">
      <section className="revo-dashboard-panel">
        <header className="revo-dashboard-panel-header">
          <div>
            <h1>{content.title}</h1>
            <p>{content.subtitle}</p>
          </div>
          <button
            type="button"
            className="revo-dashboard-logout"
            onClick={() => {
              authAPI.logout();
              navigate('/login');
            }}
          >
            Log Out
          </button>
        </header>

        <div className="revo-dashboard-cards">
          {content.cards.map((card) => (
            <article key={card} className="revo-dashboard-card">
              <p className="revo-dashboard-card-kicker">{user.role}</p>
              <h3>{card}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
