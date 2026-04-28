interface QuickActionsProps {
  role: string;
}

export default function QuickActions({ role }: QuickActionsProps) {
  const getActions = () => {
    if (role === 'CUSTOMER') {
      return [
        { label: 'Find Service', icon: '🔍', color: '#667eea' },
        { label: 'Emergency Tow', icon: '🚨', color: '#f093fb' },
        { label: 'Add Vehicle', icon: '🚗', color: '#4facfe' },
        { label: 'Buy Parts', icon: '🛒', color: '#43e97b' },
      ];
    } else if (role === 'PROVIDER') {
      return [
        { label: 'View Jobs', icon: '📦', color: '#667eea' },
        { label: 'Update Location', icon: '📍', color: '#f093fb' },
        { label: 'Add Service', icon: '➕', color: '#4facfe' },
        { label: 'View Earnings', icon: '💰', color: '#43e97b' },
      ];
    } else {
      return [
        { label: 'Add Product', icon: '➕', color: '#667eea' },
        { label: 'Update Stock', icon: '📦', color: '#f093fb' },
        { label: 'View Orders', icon: '📋', color: '#4facfe' },
        { label: 'Analytics', icon: '📊', color: '#43e97b' },
      ];
    }
  };

  const actions = getActions();

  return (
    <div className="quick-actions">
      <h3 className="section-title">Quick Actions</h3>
      <div className="actions-grid">
        {actions.map((action, index) => (
          <button key={index} className="action-btn" style={{ borderColor: action.color }}>
            <span className="action-icon" style={{ background: `${action.color}20` }}>
              {action.icon}
            </span>
            <span className="action-label">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
