import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';

export default function AuthPage() {
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    setIsLogin(location.pathname === '/login');
  }, [location]);

  return (
    <div className="auth-page">
      <div className="auth-card">
        {isLogin ? <Login /> : <Register />}
      </div>
    </div>
  );
}
