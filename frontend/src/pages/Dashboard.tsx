import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { authAPI } from '../api/auth';
import { User } from '../types';
import Sidebar from '../components/dashboard/Sidebar';
import Header from '../components/dashboard/Header';
import StatsCards from '../components/dashboard/StatsCards';
import RecentBookings from '../components/dashboard/RecentBookings';
import QuickActions from '../components/dashboard/QuickActions';
import '../styles/dashboard.css';

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
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

  if (!user) return <div>Loading...</div>;

  return (
    <div className="dashboard-layout">
      <Sidebar user={user} onLogout={handleLogout} />
      
      <div className="dashboard-main">
        <Header user={user} />
        
        <div className="dashboard-content">
          <StatsCards role={user.role} />
          <QuickActions role={user.role} />
          <RecentBookings />
        </div>
      </div>
    </div>
  );
}
