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
    <main style={{ minHeight: '100vh', background: '#F7F7F5', padding: '24px' }}>
      <section
        style={{
          maxWidth: '1080px',
          margin: '0 auto',
          background: '#FFFFFF',
          border: '0.5px solid #E8E8E4',
          borderRadius: '14px',
          padding: '20px',
        }}
      >
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <div>
            <h1 style={{ margin: 0, color: '#1C1C1E', fontWeight: 600 }}>{content.title}</h1>
            <p style={{ margin: '6px 0 0', color: '#6B6B72' }}>{content.subtitle}</p>
          </div>
          <button
            onClick={() => {
              authAPI.logout();
              navigate('/login');
            }}
            style={{
              background: '#F7F7F5',
              color: '#1C1C1E',
              border: '0.5px solid #E8E8E4',
              borderRadius: '10px',
              minHeight: '38px',
              padding: '0 14px',
              cursor: 'pointer',
            }}
          >
            Log Out
          </button>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '12px' }}>
          {content.cards.map((card) => (
            <article
              key={card}
              style={{
                background: '#FFFFFF',
                border: '0.5px solid #E8E8E4',
                borderRadius: '12px',
                padding: '14px',
              }}
            >
              <p style={{ margin: 0, fontSize: '11px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6B6B72' }}>
                {user.role}
              </p>
              <h3 style={{ margin: '8px 0 0', color: '#1C1C1E', fontWeight: 500 }}>{card}</h3>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
