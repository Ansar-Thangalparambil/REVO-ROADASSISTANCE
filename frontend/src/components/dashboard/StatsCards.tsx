interface StatsCardsProps {
  role: string;
}

export default function StatsCards({ role }: StatsCardsProps) {
  const getStats = () => {
    if (role === 'CUSTOMER') {
      return [
        { label: 'Total Bookings', value: '0', icon: '📋', color: '#667eea' },
        { label: 'Active Services', value: '0', icon: '🔧', color: '#f093fb' },
        { label: 'Saved Vehicles', value: '0', icon: '🚗', color: '#4facfe' },
        { label: 'Total Spent', value: '₹0', icon: '💰', color: '#43e97b' },
      ];
    } else if (role === 'PROVIDER') {
      return [
        { label: 'Total Jobs', value: '0', icon: '📦', color: '#667eea' },
        { label: 'Pending Requests', value: '0', icon: '⏳', color: '#f093fb' },
        { label: 'Total Earnings', value: '₹0', icon: '💰', color: '#43e97b' },
        { label: 'Rating', value: '0.0', icon: '⭐', color: '#fa709a' },
      ];
    } else {
      return [
        { label: 'Total Products', value: '0', icon: '📦', color: '#667eea' },
        { label: 'Orders', value: '0', icon: '📋', color: '#f093fb' },
        { label: 'Revenue', value: '₹0', icon: '💰', color: '#43e97b' },
        { label: 'Low Stock', value: '0', icon: '⚠️', color: '#fa709a' },
      ];
    }
  };

  const stats = getStats();

  return (
    <div className="stats-grid">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card" style={{ borderLeftColor: stat.color }}>
          <div className="stat-icon" style={{ background: `${stat.color}20` }}>
            {stat.icon}
          </div>
          <div className="stat-content">
            <p className="stat-label">{stat.label}</p>
            <h3 className="stat-value">{stat.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
