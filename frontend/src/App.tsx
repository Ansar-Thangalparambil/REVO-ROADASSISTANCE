import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import AuthPage from './pages/AuthPage'
import RoleDashboard from './pages/RoleDashboard'
import ProtectedRoute from './components/ProtectedRoute'
import DashboardRedirect from './components/DashboardRedirect'
import DirectoryHub from './pages/directory/DirectoryHub'
import FuelStationsPage from './pages/directory/FuelStationsPage'
import BodyShopsPage from './pages/directory/BodyShopsPage'
import './styles/design-tokens.css'
import './styles/glass-components.css'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<AuthPage />} />
        <Route path="/register" element={<AuthPage />} />
        <Route path="/directory" element={<DirectoryHub />} />
        <Route path="/directory/fuel-stations" element={<FuelStationsPage />} />
        <Route path="/directory/body-shops" element={<BodyShopsPage />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardRedirect />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/customer" 
          element={
            <ProtectedRoute>
              <RoleDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/provider" 
          element={
            <ProtectedRoute>
              <RoleDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/vendor" 
          element={
            <ProtectedRoute>
              <RoleDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/dashboard/admin" 
          element={
            <ProtectedRoute>
              <RoleDashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
