import { useEffect, useState, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../components/layout/Container';

function MIcon({
  name,
  className = '',
  filled = false,
  size,
  weight = 400,
  style: styleProp,
}: {
  name: string;
  className?: string;
  filled?: boolean;
  size?: string;
  weight?: 300 | 400 | 500 | 600 | 700;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' ${weight}, 'GRAD' 0, 'opsz' 24`,
        ...styleProp,
      }}
      aria-hidden
    >
      {name}
    </span>
  );
}

const heroImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAwLQeGv8nhdd0A_kl6vS7jmMzJaU-CJcCfVp1_-PgFz3Cul_QN8DdbTnQXcMCskm8T8aOPQEByzsMYOQZ0AGwpGJNSCuls0yLfR_hGVqqk1lQ5iY4OrCFxWZuLVDEQrXY6oFxdFIPrpkvu6tHbyuBscdkjjdS4urw1HCi4kzny3yC20-GUGqUXw5RGBs51fAarpVDIDnfmDMQfJQe3ZxQVtBNpBnd2DwBPtLqYLyJwuAbvMkzC4uuPEOkFEA4Pjd5GOsHBs-wH9eS2';

const primaryBtn =
  'inline-flex h-11 min-w-[160px] items-center justify-center whitespace-nowrap rounded-[8px] border border-transparent bg-[#1C1C1E] px-7 text-sm font-medium tracking-[0.01em] text-white transition-all duration-200 hover:opacity-90';
const secondaryBtn =
  'inline-flex h-11 min-w-[160px] items-center justify-center whitespace-nowrap rounded-[8px] border-[1.5px] border-[#1C1C1E] bg-transparent px-7 text-sm font-medium tracking-[0.01em] text-[#1C1C1E] transition-all duration-200 hover:bg-white';
const sectionSpace = 'py-20 md:py-24';
const ctaRowClass = 'mt-8 flex flex-wrap items-center gap-3';
const h2Class = 'text-[32px] font-semibold leading-[1.2] text-[#1C1C1E] lg:text-[40px]';
const h3Class = 'text-[24px] font-medium leading-[1.3] text-[#1C1C1E]';
const bodyClass = 'text-base font-normal leading-[1.6] text-[#6B6B72]';
const labelClass = 'text-[11px] font-semibold uppercase tracking-[0.08em] text-[#6B6B72]';
const cardClass =
  'h-full rounded-xl border-[0.5px] border-[#E8E8E4] bg-white px-6 py-7 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-200 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]';

type EcosystemCard = {
  icon: string;
  title: string;
  body: string;
  bullets: string[];
  cta: string;
  to: string;
};

const ecosystem: EcosystemCard[] = [
  {
    icon: 'person',
    title: 'For Customers',
    body: 'Instant access to verified roadside services, emergency SOS dispatch, and a comprehensive directory of nearby maintenance hubs.',
    bullets: ['1-Tap SOS Dispatch', 'Service History Tracking'],
    cta: 'View Directory',
    to: '/directory',
  },
  {
    icon: 'engineering',
    title: 'For Providers',
    body: 'Powerful job management tools designed for fleet operators and independent technicians to manage high-stress calls.',
    bullets: ['Real-time Job Queue', 'Automated Billing'],
    cta: 'Provider Portal',
    to: '/register',
  },
  {
    icon: 'storefront',
    title: 'For Vendors',
    body: 'A specialized marketplace for fulfillment partners to distribute spare parts and maintenance consumables at scale.',
    bullets: ['Global Fulfillment', 'SKU Optimization'],
    cta: 'Explore Marketplace',
    to: '/register',
  },
];

type DirectoryCard = {
  icon: string;
  title: string;
  sub: string;
};

const directory: DirectoryCard[] = [
  { icon: 'local_gas_station', title: 'Fuel Support', sub: '24/7 Delivery & Hubs' },
  { icon: 'water_drop', title: 'Water Logistics', sub: 'Potable & Industrial' },
  { icon: 'car_repair', title: 'Body Shops', sub: 'Verified Structural Repair' },
  { icon: 'build_circle', title: 'Spare Parts', sub: 'Express Marketplace' },
];

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

  const apiLabel =
    backendStatus === 'checking' ? 'Checking' : backendStatus === 'online' ? 'Online' : 'Offline';

  return (
    <div className="min-h-screen bg-[#F7F7F5] text-[#1C1C1E] antialiased">
      <header className="sticky top-0 z-50 border-b border-[#E8E8E4] bg-white/90 backdrop-blur-sm">
        <Container>
          <div
            className="flex min-h-[72px] items-center justify-between gap-4"
            style={{ minHeight: '96px' }}
          >
            <div className="flex items-center gap-8">
              <Link to="/" className="text-2xl font-semibold tracking-tight text-[#1C1C1E]">
                Revō
              </Link>
              <nav className="hidden items-center gap-6 lg:flex">
                <Link to="/" className="text-sm font-medium text-[#1C1C1E]" style={{ padding: '8px 4px' }}>
                  Explore
                </Link>
                <Link
                  to="/directory"
                  className="text-sm font-medium text-[#6B6B72] hover:text-[#1C1C1E]"
                  style={{ padding: '8px 4px' }}
                >
                  Directory
                </Link>
                <Link
                  to="/register"
                  className="text-sm font-medium text-[#6B6B72] hover:text-[#1C1C1E]"
                  style={{ padding: '8px 4px' }}
                >
                  Marketplace
                </Link>
                <Link
                  to="/login"
                  className="text-sm font-medium text-[#6B6B72] hover:text-[#1C1C1E]"
                  style={{ padding: '8px 4px' }}
                >
                  SOS
                </Link>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <Link
                to="/register"
                className="inline-flex h-11 min-w-[148px] items-center justify-center gap-2 whitespace-nowrap rounded-[10px] border border-transparent bg-[#1C1C1E] px-5 text-sm font-medium leading-none text-white transition-colors duration-200 hover:bg-[#2A2A2D]"
                style={{ color: '#FFFFFF' }}
              >
                <MIcon name="app_registration" size="16px" />
                Join Now
              </Link>
              <Link
                to="/login"
                className="inline-flex h-11 min-w-[112px] items-center justify-center gap-2 whitespace-nowrap rounded-[10px] border border-[#DADADD] bg-white px-5 text-sm font-medium leading-none text-[#1C1C1E] transition-colors duration-200 hover:bg-[#F4F4F5]"
              >
                <MIcon name="person" size="16px" />
                Login
              </Link>
            </div>
          </div>
        </Container>
      </header>

      <main>
        <section className="pt-24 pb-20 md:pt-28 md:pb-24" style={{ paddingTop: '84px', paddingBottom: '84px' }}>
          <Container>
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div style={{ paddingRight: 'clamp(0px, 4vw, 56px)' }}>
                <p className={labelClass} style={{ marginBottom: '16px' }}>
                  Roadside Infrastructure
                </p>
                <h1
                  className="text-[42px] font-bold leading-[1.05] tracking-[-0.02em] text-[#15151A] lg:text-[62px]"
                  style={{ marginTop: 0 }}
                >
                  <span className="block text-[#131318]">The Pulse of</span>
                  <span className="block text-[#575862]">Precision</span>
                  <span className="block text-[#575862]">Logistics</span>
                </h1>
                <p
                  className="mt-6 max-w-[500px] text-[16px] font-normal leading-[1.65] text-[#6B6B72]"
                  style={{ marginTop: '20px' }}
                >
                  Every breakdown is a heartbeat in the global supply chain. Revō synchronizes roadside
                  assistance, spare parts, emergency services, and live tracking visibility into one
                  seamless ecosystem.
                </p>
                <div className={ctaRowClass} style={{ marginTop: '26px', gap: '10px' }}>
                  <Link to="/register" className={primaryBtn} style={{ color: '#FFFFFF', padding: '11px 24px' }}>
                    Get Started
                  </Link>
                  <Link to="/directory" className={secondaryBtn} style={{ padding: '11px 24px' }}>
                    Learn More
                  </Link>
                </div>
              </div>
              <div className="relative min-w-0 pb-4">
                <div
                  className="relative overflow-hidden rounded-[22px] border border-[#E8E8E4]"
                  style={{ boxShadow: '0 8px 24px rgba(17,19,23,0.08)' }}
                >
                  <img
                    alt="Modern logistics service vehicles in a high-tech studio"
                    className="block aspect-[16/13] w-full object-cover"
                    src={heroImg}
                  />
                  <div
                    className="pointer-events-none absolute inset-y-0 left-0 w-[48%]"
                    style={{ background: 'linear-gradient(90deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.55) 48%, rgba(255,255,255,0) 100%)' }}
                  />
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className={sectionSpace} style={{ paddingTop: '80px', paddingBottom: '80px', background: '#F7F7F5' }}>
          <Container>
            <div className="max-w-3xl text-left">
              <h2
                className={h2Class}
                style={{ fontSize: '42px', lineHeight: 1.12, fontWeight: 600, letterSpacing: '-0.015em', textAlign: 'left' }}
              >
                Ecosystem Roles
              </h2>
              <p
                className={`${bodyClass} mt-3`}
                style={{ marginBottom: '48px', maxWidth: '560px', fontSize: '15px', lineHeight: 1.55, color: '#75757D', textAlign: 'left' }}
              >
                Precision-engineered for every stakeholder in the logistics lifecycle.
              </p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3" style={{ alignItems: 'stretch' }}>
              {ecosystem.map((card) => (
                <div
                  key={card.title}
                  className={`${cardClass} flex flex-col`}
                  style={{ padding: '28px 24px', borderRadius: '16px', background: '#FFFFFF', minHeight: '330px' }}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#1C1C1E] text-white"
                    style={{ marginBottom: '20px', flexShrink: 0 }}
                  >
                    <MIcon name={card.icon} size="20px" />
                  </div>
                  <h3 className={h3Class} style={{ marginTop: 0, marginBottom: '8px' }}>
                    {card.title}
                  </h3>
                  <p className={`${bodyClass} min-h-[110px]`} style={{ marginTop: 0 }}>
                    {card.body}
                  </p>
                  <ul className="mt-4 space-y-2" style={{ marginTop: '16px' }}>
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2 text-base text-[#6B6B72]">
                        <MIcon name="check" size="14px" className="text-[#1C1C1E]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={card.to}
                    className="mt-auto pt-5 inline-flex items-center gap-2 text-sm font-medium text-[#1C1C1E] transition-colors duration-200 hover:text-[#6B6B72]"
                    style={{ color: '#1C1C1E', textDecoration: 'none' }}
                  >
                    {card.cta}
                    <MIcon name="arrow_forward" size="16px" />
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section
          className={sectionSpace}
          style={{
            paddingTop: '80px',
            paddingBottom: '80px',
            background: '#FFFFFF',
          }}
        >
          <Container>
            <div className="text-center" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <h2
                className={h2Class}
                style={{
                  marginBottom: '8px',
                  fontSize: '42px',
                  lineHeight: 1.12,
                  fontWeight: 600,
                  letterSpacing: '-0.015em',
                  textAlign: 'center',
                  marginInline: 'auto',
                  width: 'fit-content',
                }}
              >
                The Revō Directory
              </h2>
              <p
                className={`${bodyClass} mx-auto mt-3 max-w-[680px]`}
                style={{
                  marginBottom: '48px',
                  maxWidth: '520px',
                  fontSize: '15px',
                  lineHeight: 1.55,
                  color: '#75757D',
                  textAlign: 'center',
                  marginInline: 'auto',
                }}
              >
                Connecting drivers with vital infrastructure services across the continent with absolute
                reliability.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" style={{ alignItems: 'stretch' }}>
              {directory.map((item) => (
                <Link
                  key={item.title}
                  to="/directory"
                  className={`${cardClass} group relative min-h-[178px] overflow-hidden text-center transition-all duration-300 hover:-translate-y-0.5 hover:border-white/70 hover:bg-white/75 hover:shadow-[0_12px_24px_rgba(28,28,30,0.12)]`}
                  style={{
                    minHeight: '160px',
                    padding: '22px 18px',
                    borderRadius: '14px',
                    borderColor: '#ECEAE7',
                    background: '#F7F7F5',
                    boxShadow: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-x-3 top-2 h-12 rounded-full bg-white/70 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100"
                  />
                  <div
                    className="relative z-10 mx-auto flex h-10 w-10 items-center justify-center rounded-[8px] bg-[#1C1C1E] text-white transition-colors duration-300 group-hover:bg-white"
                    style={{
                      marginBottom: '16px',
                      width: '40px',
                      height: '40px',
                      borderRadius: '9999px',
                      background: '#FFFFFF',
                      color: '#1C1C1E',
                    }}
                  >
                    <MIcon name={item.icon} size="20px" />
                  </div>
                  <h3
                    className={`${h3Class} relative z-10 mt-5`}
                    style={{ marginTop: 0, marginBottom: '6px', fontSize: '21px', lineHeight: 1.2, fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`${bodyClass} relative z-10 mt-2`}
                    style={{
                      marginTop: 0,
                      fontSize: '13px',
                      lineHeight: 1.45,
                      color: '#777880',
                      maxWidth: '160px',
                      textAlign: 'center',
                    }}
                  >
                    {item.sub}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        <section className={sectionSpace} style={{ paddingTop: '64px', paddingBottom: '64px', background: '#F7F7F5' }}>
          <Container>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-20" style={{ gap: '80px' }}>
              {[
                { value: '14k+', label: 'Active Users' },
                { value: '800+', label: 'Daily Active Jobs' },
                { value: '92%', label: 'Service Level Agreement' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <p className="text-[48px] font-bold leading-none text-[#1C1C1E]">{s.value}</p>
                  <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#6B6B72]">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className={sectionSpace} style={{ paddingTop: '80px', paddingBottom: '80px' }}>
          <Container>
            <div
              className="rounded-[28px] shadow-[0_12px_36px_rgba(0,0,0,0.24)]"
              style={{
                margin: 0,
                background: 'linear-gradient(102deg, #090A0E 0%, #0F1218 56%, #232833 100%)',
              }}
            >
              <div
                className="w-full"
                style={{ padding: '68px clamp(24px, 6vw, 64px) 64px' }}
              >
                <div className="max-w-[560px] text-left">
                  <h2
                    className="text-[52px] font-bold leading-[1.08] tracking-[-0.02em] text-white"
                    style={{ color: '#FAFCFF', textShadow: '0 2px 18px rgba(0,0,0,0.34)' }}
                  >
                    Join the Revō Network
                  </h2>
                  <p className="mt-4 text-base font-normal leading-[1.65] text-white/65" style={{ color: 'rgba(245,248,255,0.82)' }}>
                    Whether you are a logistics provider seeking high-priority jobs or a vendor
                    looking to expand your parts distribution, Revō provides the infrastructure you
                    need to thrive.
                  </p>
                  <div className="mt-8 flex flex-wrap items-center gap-3" style={{ marginTop: '36px', rowGap: '12px' }}>
                    <Link
                      to="/register"
                      className="inline-flex h-11 min-w-[146px] items-center justify-center whitespace-nowrap rounded-[8px] border border-transparent bg-white px-5 text-[12px] font-semibold text-[#111317] transition-colors duration-200 hover:bg-[#F4F4F5]"
                    >
                      Become a Provider
                    </Link>
                    <Link
                      to="/directory"
                      className="inline-flex h-11 min-w-[116px] items-center justify-center whitespace-nowrap rounded-[8px] border border-white/35 bg-[#101525] px-5 text-[12px] font-semibold !text-[#F5F8FF] transition-colors duration-200 hover:bg-[#1A2030] hover:!text-white"
                    >
                      Order Parts
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>

      <footer
        className="relative z-10 border-t border-[#E8E8E4] bg-[#FFFFFF] py-24 md:py-28"
        style={{ padding: '64px 0 40px' }}
      >
        <Container>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4" style={{ gap: '40px' }}>
            <div>
              <p className="text-3xl font-semibold text-[#1C1C1E]">Revō</p>
              <p className={`${bodyClass} mt-4`}>
                The future of roadside infrastructure and logistics fulfillment.
              </p>
            </div>
            <div>
              <h5 className={labelClass} style={{ marginBottom: '16px' }}>
                Platform
              </h5>
              <ul className="mt-4 space-y-3 text-base text-[#6B6B72]" style={{ lineHeight: 2.2 }}>
                <li><Link to="/">How it works</Link></li>
                <li><Link to="/directory">Directory</Link></li>
                <li><Link to="/register">Marketplace</Link></li>
                <li><Link to="/login">SOS Dispatch</Link></li>
              </ul>
            </div>
            <div>
              <h5 className={labelClass} style={{ marginBottom: '16px' }}>
                Company
              </h5>
              <ul className="mt-4 space-y-3 text-base text-[#6B6B72]" style={{ lineHeight: 2.2 }}>
                <li>About Us</li>
                <li>Our Network</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h5 className={labelClass} style={{ marginBottom: '16px' }}>
                Connect
              </h5>
              <p className="mt-4 text-base text-[#6B6B72]">Emergency Support</p>
              <p className="mt-2 text-[24px] font-semibold text-[#1C1C1E]">0-800-REVO-SOS</p>
            </div>
          </div>
          <div className="mt-12 border-t border-[#E8E8E4] pt-8 text-sm text-[#6B6B72]" style={{ marginTop: '40px', paddingTop: '24px' }}>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p>© 2026 Revō Technologies. All rights reserved.</p>
              <p>
                API: <span className="font-medium text-[#1C1C1E]">{apiLabel}</span>
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
