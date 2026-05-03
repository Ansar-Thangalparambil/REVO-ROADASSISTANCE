import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../api/auth';
import { User } from '../types';

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const navigate = useNavigate();

  useEffect(() => {
    const currentUser = authAPI.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    authAPI.logout();
    navigate('/login');
  };

  if (!user) return <div style={{ padding: '40px', fontFamily: 'Inter' }}>Loading...</div>;

  return (
    <div className="revo-dashboard-layout">
      {/* Desktop Sidebar */}
      <aside className="revo-sidebar">
        <div className="revo-sidebar-logo">Revō</div>
        
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <div 
            className={`revo-nav-item ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </div>
          <div 
            className={`revo-nav-item ${activeTab === 'assistance' ? 'active' : ''}`}
            onClick={() => setActiveTab('assistance')}
          >
            Roadside Assistance
          </div>
          <div 
            className={`revo-nav-item ${activeTab === 'parts' ? 'active' : ''}`}
            onClick={() => setActiveTab('parts')}
          >
            Spare Parts
          </div>
          <div 
            className={`revo-nav-item ${activeTab === 'water' ? 'active' : ''}`}
            onClick={() => setActiveTab('water')}
          >
            Water Service
          </div>
        </nav>

        <div style={{ marginTop: 'auto', padding: '0 32px' }}>
          <div className="revo-card" style={{ padding: '16px', backgroundColor: '#F7F7F5', border: 'none' }}>
            <p className="revo-meta" style={{ marginBottom: '4px' }}>Logged in as</p>
            <p className="revo-h3" style={{ fontSize: '14px' }}>{user.phone}</p>
            <p className="revo-body" style={{ fontSize: '12px', marginTop: '2px' }}>{user.role}</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="revo-dashboard-main">
        <header className="revo-dashboard-header">
          <button className="revo-btn-secondary" onClick={handleLogout} style={{ width: 'auto', padding: '8px 16px', fontSize: '14px' }}>
            Log Out
          </button>
        </header>

        <div className="revo-dashboard-content">
          {activeTab === 'overview' && (
            <div>
              <h2 className="revo-h2" style={{ fontSize: '28px', marginBottom: '8px' }}>Dashboard Overview</h2>
              <p className="revo-body">Welcome back. Your vehicle systems are nominal.</p>
              
              <div className="revo-grid">
                <div className="revo-card">
                  <span className="revo-meta">Active Requests</span>
                  <h3 className="revo-h1" style={{ fontSize: '36px', marginTop: '8px' }}>0</h3>
                </div>
                <div className="revo-card">
                  <span className="revo-meta">Vehicles Registered</span>
                  <h3 className="revo-h1" style={{ fontSize: '36px', marginTop: '8px' }}>1</h3>
                </div>
                <div className="revo-card">
                  <span className="revo-meta">Recent Activity</span>
                  <p className="revo-body" style={{ marginTop: '16px' }}>No recent service requests.</p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'assistance' && (
            <div>
              <h2 className="revo-h2" style={{ fontSize: '28px', marginBottom: '24px' }}>Request Assistance</h2>
              
              <div className="revo-card" style={{ maxWidth: '600px' }}>
                <h3 className="revo-h3" style={{ marginBottom: '16px' }}>Emergency Breakdown</h3>
                <p className="revo-body" style={{ marginBottom: '24px' }}>
                  Deploy an immediate tow truck or mobile mechanic to your current GPS location.
                </p>
                
                <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '24px' }}>
                  <div style={{ flex: 1, height: '1px', backgroundColor: '#E8E8E4' }}></div>
                  <span className="revo-meta">Current Location: NH-48 Highway</span>
                  <div style={{ flex: 1, height: '1px', backgroundColor: '#E8E8E4' }}></div>
                </div>

                <button className="revo-btn-primary" style={{ padding: '20px', fontSize: '18px' }}>
                  SOS EMERGENCY DISPATCH
                </button>
              </div>
            </div>
          )}

          {activeTab === 'parts' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h2 className="revo-h2" style={{ fontSize: '28px' }}>Spare Parts Catalog</h2>
                <input 
                  type="text" 
                  className="revo-input" 
                  placeholder="Search OEM parts..." 
                  style={{ width: '300px', marginTop: 0 }}
                />
              </div>

              <div className="revo-grid">
                <div className="revo-card">
                  <h3 className="revo-h3">Alternator Assembly</h3>
                  <span className="revo-meta" style={{ display: 'block', marginTop: '4px', marginBottom: '16px' }}>#PT-84920</span>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="revo-h2" style={{ fontSize: '20px' }}>₹4,200</span>
                    <span className="revo-badge success revo-meta">In Stock</span>
                  </div>
                  <button className="revo-btn-dark" style={{ marginTop: '16px', padding: '12px' }}>Order Part</button>
                </div>
                
                <div className="revo-card">
                  <h3 className="revo-h3">Brake Pad Set</h3>
                  <span className="revo-meta" style={{ display: 'block', marginTop: '4px', marginBottom: '16px' }}>#PT-11204</span>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="revo-h2" style={{ fontSize: '20px' }}>₹1,850</span>
                    <span className="revo-badge success revo-meta">In Stock</span>
                  </div>
                  <button className="revo-btn-dark" style={{ marginTop: '16px', padding: '12px' }}>Order Part</button>
                </div>

                <div className="revo-card" style={{ opacity: 0.6 }}>
                  <h3 className="revo-h3">Clutch Cable</h3>
                  <span className="revo-meta" style={{ display: 'block', marginTop: '4px', marginBottom: '16px' }}>#PT-99381</span>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span className="revo-h2" style={{ fontSize: '20px' }}>₹650</span>
                    <span className="revo-badge warning revo-meta" style={{ backgroundColor: '#E8E8E4', color: '#6B6B72' }}>Out of Stock</span>
                  </div>
                  <button className="revo-btn-secondary" disabled style={{ marginTop: '16px', padding: '12px' }}>Unavailable</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'water' && (
            <div>
              <h2 className="revo-h2" style={{ fontSize: '28px', marginBottom: '24px' }}>Water & Hydration</h2>
              
              <div className="revo-grid">
                <div className="revo-card">
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 className="revo-h3">Mobile Unit Dispatch</h3>
                    <span className="revo-badge success revo-meta">Available</span>
                  </div>
                  <p className="revo-body" style={{ marginBottom: '24px' }}>
                    Request a mobile unit for radiator refill or drinking water delivery.
                  </p>
                  <button className="revo-btn-dark">Request Dispatch</button>
                </div>

                <div className="revo-card">
                  <h3 className="revo-h3" style={{ marginBottom: '16px' }}>Nearby Static Stations</h3>
                  <div style={{ padding: '12px 0', borderBottom: '1px solid #E8E8E4' }}>
                    <h4 className="revo-h3" style={{ fontSize: '15px' }}>HP Oasis Station</h4>
                    <p className="revo-body" style={{ fontSize: '14px' }}>1.2 km • Free Air & Water</p>
                  </div>
                  <div style={{ padding: '12px 0' }}>
                    <h4 className="revo-h3" style={{ fontSize: '15px' }}>Bharat Petroleum</h4>
                    <p className="revo-body" style={{ fontSize: '14px' }}>3.5 km • Drinking Water</p>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
