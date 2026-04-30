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
    <>
      {isLogin ? <Login /> : <Register />}
    </>
  );
}
