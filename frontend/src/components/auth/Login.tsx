import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authAPI } from '../../api/auth';
import { LoginData } from '../../types';
import { getDashboardPathByRole } from '../../utils/dashboardRouting';

export default function Login() {
  const [formData, setFormData] = useState<LoginData>({
    phone: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await authAPI.login(formData);
      
      if (response.success) {
        localStorage.setItem('access_token', response.data.tokens.access);
        localStorage.setItem('refresh_token', response.data.tokens.refresh);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        navigate(getDashboardPathByRole(response.data.user.role));
      } else {
        setError(response.message || 'Login failed');
      }
    } catch (err: any) {
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="revo-wrapper">
      <div className="revo-mobile-container" style={{ justifyContent: 'center', padding: '24px' }}>
        
        <div style={{ marginBottom: '32px', textAlign: 'center' }}>
          <Link to="/" className="revo-logo" style={{ fontSize: '40px', textDecoration: 'none', color: '#1C1C1E' }}>
            Revō
          </Link>
          <p className="revo-body" style={{ marginTop: '8px' }}>Log in to access services</p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div>
            <label className="revo-label revo-meta">Phone Number</label>
            <input
              type="tel"
              className="revo-input"
              placeholder="+91 9876543210"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              required
            />
          </div>

          <div>
            <label className="revo-label revo-meta">Password</label>
            <input
              type="password"
              className="revo-input"
              placeholder="Enter your password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          {error && (
            <div className="revo-card" style={{ border: '1px solid #D93025', backgroundColor: '#FFF1F2', padding: '12px' }}>
              <p className="revo-body" style={{ color: '#D93025', fontSize: '14px' }}>{error}</p>
            </div>
          )}

          <button type="submit" className="revo-btn-dark" disabled={loading} style={{ marginTop: '16px' }}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <div style={{ marginTop: '24px', textAlign: 'center' }}>
          <Link to="/register" style={{ textDecoration: 'none', color: '#6B6B72', fontSize: '14px' }}>
            Don't have an account? <span style={{ color: '#1C1C1E', fontWeight: 500 }}>Create one</span>
          </Link>
        </div>
        
      </div>
    </div>
  );
}
