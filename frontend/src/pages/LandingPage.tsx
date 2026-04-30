import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/landing.css';

export default function LandingPage() {
  const [backendStatus, setBackendStatus] = useState<'checking' | 'online' | 'offline'>('checking');

  useEffect(() => {
    let active = true;

    const checkBackend = async () => {
      try {
        const response = await fetch('/api/v1/health/', { method: 'GET' });
        if (!active) return;
        setBackendStatus(response.ok ? 'online' : 'offline');
      } catch {
        if (!active) return;
        setBackendStatus('offline');
      }
    };

    checkBackend();
    return () => {
      active = false;
    };
  }, []);

  return (
    <main className="revo-landing">
      <div className="revo-orb revo-orb-a" aria-hidden="true" />
      <div className="revo-orb revo-orb-b" aria-hidden="true" />
      <div className="revo-orb revo-orb-c" aria-hidden="true" />
      <header className="revo-topbar">
        <Link
          to="/"
          className="revo-brand revo-brand-anchor"
          onClick={() => {
            if (window.location.pathname === '/') {
              window.location.reload();
            }
          }}
        >
          Revō
        </Link>
        <nav className="revo-nav">
          <span className={`revo-health-badge revo-health-${backendStatus}`}>
            Backend {backendStatus === 'checking' ? 'Checking' : backendStatus === 'online' ? 'Online' : 'Offline'}
          </span>
          <Link to="/directory">Service Directory</Link>
          <Link to="/login">Log In</Link>
          <Link to="/register" className="revo-get-started">
            Get Started
          </Link>
        </nav>
      </header>

      <section className="revo-hero">
        <div className="revo-left">
          <p className="revo-kicker">Automotive Assistance Platform</p>
          <p className="revo-brand-line">Revō</p>
          <h1 className="revo-title">Rescue. Revive. Roll.</h1>
          <p className="revo-copy">
            Minimal, fast, and reliable roadside assistance. Access mechanics, spare parts,
            and water services instantly.
          </p>
          <div className="revo-actions">
            <Link to="/login" className="revo-btn revo-btn-sos">
              Request Assistance
            </Link>
            <Link to="/directory" className="revo-btn revo-btn-secondary">
              Explore Providers
            </Link>
          </div>
        </div>

        <section className="revo-products">
          <article className="revo-glass-card">
            <p className="revo-card-kicker">Breakdown</p>
            <h3>Roadside Assistance</h3>
            <p>SOS dispatch, towing, battery jumpstart, and emergency support.</p>
            <span className="revo-status revo-status-sos">Emergency Ready</span>
          </article>
          <article className="revo-glass-card">
            <p className="revo-card-kicker">Parts</p>
            <h3>Spare Parts Ordering</h3>
            <p>Find verified components and request delivery from nearby vendors.</p>
            <span className="revo-status revo-status-warning">Fast Fulfilment</span>
          </article>
          <article className="revo-glass-card">
            <p className="revo-card-kicker">Hydration</p>
            <h3>Water Service Availability</h3>
            <p>Locate refill points and live availability when you are on route.</p>
            <span className="revo-status revo-status-water">Available</span>
          </article>
          <article className="revo-glass-card">
            <p className="revo-card-kicker">Directory</p>
            <h3>Service Directory</h3>
            <p>Browse fuel stations, body shops, and specialty garages on one map.</p>
            <Link to="/directory" className="revo-inline-link">
              Open Directory
            </Link>
          </article>
        </section>
      </section>
    </main>
  );
}
