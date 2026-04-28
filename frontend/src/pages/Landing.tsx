import { useEffect, useRef } from 'react';
import GearIcon from '../components/mechanical/GearIcon';
import PistonIcon from '../components/mechanical/PistonIcon';
import GlassButton from '../components/ui/GlassButton';
import GlassCard from '../components/ui/GlassCard';
import ChromeBadge from '../components/ui/ChromeBadge';
import '../styles/landing.css';

export default function Landing() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroRef.current) {
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      {/* Navigation */}
      <nav className="glass-nav">
        <div className="nav-container">
          <div className="nav-logo">
            <GearIcon size={32} spinning speed={20} />
            <span className="text-display">MECHANISO</span>
          </div>
          
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="nav-actions">
            <GlassButton onClick={() => window.location.href = '/login'}>
              Login
            </GlassButton>
            <GlassButton variant="primary" onClick={() => window.location.href = '/register'}>
              Get Started
            </GlassButton>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <div className="hero-bg">
          <div className="blueprint-grid"></div>
          <div className="floating-gears">
            <GearIcon size={120} spinning speed={15} className="gear-1" />
            <GearIcon size={80} spinning speed={10} className="gear-2" />
            <GearIcon size={100} spinning speed={12} className="gear-3" />
          </div>
          <div className="particle-field"></div>
        </div>

        <div className="hero-content">
          <ChromeBadge>PRECISION ENGINEERING</ChromeBadge>
          
          <h1 className="hero-title">
            <span className="text-display">MECHANISO</span>
            <span className="hero-subtitle">Industrial Luxury Redefined</span>
          </h1>

          <p className="hero-description">
            Where raw mechanical precision meets digital elegance. 
            Experience automotive excellence rendered in glass and light.
          </p>

          <div className="hero-actions">
            <GlassButton variant="primary" size="lg">
              Explore Services
            </GlassButton>
            <GlassButton size="lg">
              Watch Demo
            </GlassButton>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-value text-mono">8,500+</div>
              <div className="stat-label">RPM Performance</div>
            </div>
            <div className="stat-item">
              <div className="stat-value text-mono">450HP</div>
              <div className="stat-label">Power Output</div>
            </div>
            <div className="stat-item">
              <div className="stat-value text-mono">99.9%</div>
              <div className="stat-label">Precision Rate</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <GlassCard className="hero-card">
            <div className="piston-animation">
              <PistonIcon size={200} animated />
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section" id="features">
        <div className="section-header">
          <ChromeBadge>CAPABILITIES</ChromeBadge>
          <h2 className="section-title text-display">Engineered Excellence</h2>
        </div>

        <div className="features-grid">
          <GlassCard hover>
            <div className="feature-icon">
              <GearIcon size={48} spinning />
            </div>
            <h3>Precision Engineering</h3>
            <p>Micron-level accuracy in every component, every time.</p>
          </GlassCard>

          <GlassCard hover>
            <div className="feature-icon">
              <PistonIcon size={48} />
            </div>
            <h3>Performance Tuning</h3>
            <p>Optimize every aspect for maximum power delivery.</p>
          </GlassCard>

          <GlassCard hover>
            <div className="feature-icon">
              <GearIcon size={48} spinning speed={8} />
            </div>
            <h3>Real-time Diagnostics</h3>
            <p>Live telemetry and predictive maintenance systems.</p>
          </GlassCard>

          <GlassCard hover>
            <div className="feature-icon">
              <PistonIcon size={48} animated />
            </div>
            <h3>Custom Solutions</h3>
            <p>Bespoke engineering tailored to your specifications.</p>
          </GlassCard>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <GlassCard className="cta-card">
          <h2 className="text-display">Ready to Experience Precision?</h2>
          <p>Join thousands of engineers and enthusiasts who trust Mechaniso.</p>
          <GlassButton variant="primary" size="lg">
            Start Your Journey
          </GlassButton>
        </GlassCard>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <GearIcon size={40} spinning speed={20} />
            <span className="text-display">MECHANISO</span>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <a href="#">Features</a>
              <a href="#">Pricing</a>
              <a href="#">Documentation</a>
            </div>
            <div className="footer-column">
              <h4>Company</h4>
              <a href="#">About</a>
              <a href="#">Careers</a>
              <a href="#">Contact</a>
            </div>
            <div className="footer-column">
              <h4>Legal</h4>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Security</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p className="text-mono">© 2024 Mechaniso. Precision Engineered.</p>
        </div>
      </footer>
    </div>
  );
}
