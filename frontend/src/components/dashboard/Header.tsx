import { User } from '../../types';

interface HeaderProps {
  user: User;
}

export default function Header({ user }: HeaderProps) {
  return (
    <header className="dashboard-header">
      <div className="header-left">
        <h2>Welcome back, {user.phone}!</h2>
        <p className="header-subtitle">Here's what's happening today</p>
      </div>

      <div className="header-right">
        <button className="notification-btn">
          <span className="icon">🔔</span>
          <span className="badge">3</span>
        </button>

        <div className="user-menu">
          <div className="user-avatar">
            {user.role.charAt(0)}
          </div>
          <div className="user-info">
            <span className="user-name">{user.phone}</span>
            <span className="user-role">{user.role}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
