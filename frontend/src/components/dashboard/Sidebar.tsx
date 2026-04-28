import { User } from '../../types';

interface SidebarProps {
  user: User;
  onLogout: () => void;
}

export default function Sidebar({ user, onLogout }: SidebarProps) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1 className="logo">🚗 RoadAssist</h1>
      </div>

      <nav className="sidebar-nav">
        <a href="#" className="nav-item active">
          <span className="icon">📊</span>
          Dashboard
        </a>
        
        {user.role === 'CUSTOMER' && (
          <>
            <a href="#" className="nav-item">
              <span className="icon">🔍</span>
              Find Services
            </a>
            <a href="#" className="nav-item">
              <span className="icon">📋</span>
              My Bookings
            </a>
            <a href="#" className="nav-item">
              <span className="icon">🚙</span>
              My Vehicles
            </a>
          </>
        )}

        {user.role === 'PROVIDER' && (
          <>
            <a href="#" className="nav-item">
              <span className="icon">📦</span>
              Job Queue
            </a>
            <a href="#" className="nav-item">
              <span className="icon">💰</span>
              Earnings
            </a>
            <a href="#" className="nav-item">
              <span className="icon">⚙️</span>
              Services
            </a>
          </>
        )}

        {user.role === 'VENDOR' && (
          <>
            <a href="#" className="nav-item">
              <span className="icon">📦</span>
              Inventory
            </a>
            <a href="#" className="nav-item">
              <span className="icon">📊</span>
              Orders
            </a>
          </>
        )}

        <a href="#" className="nav-item">
          <span className="icon">⭐</span>
          Reviews
        </a>
        <a href="#" className="nav-item">
          <span className="icon">👤</span>
          Profile
        </a>
      </nav>

      <div className="sidebar-footer">
        <button onClick={onLogout} className="logout-btn">
          <span className="icon">🚪</span>
          Logout
        </button>
      </div>
    </aside>
  );
}
