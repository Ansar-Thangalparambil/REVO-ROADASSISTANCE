interface GearIconProps {
  size?: number;
  spinning?: boolean;
  speed?: number;
  className?: string;
}

export default function GearIcon({ 
  size = 64, 
  spinning = false, 
  speed = 10,
  className = '' 
}: GearIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${spinning ? 'animate-spin' : ''} ${className}`}
      style={{
        animationDuration: spinning ? `${speed}s` : undefined,
        animationTimingFunction: 'linear'
      }}
    >
      <defs>
        <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C0C0C0" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#A8A8A8" />
        </linearGradient>
      </defs>
      
      {/* Gear teeth */}
      {[...Array(8)].map((_, i) => {
        const angle = (i * 45) * (Math.PI / 180);
        const x2 = 50 + Math.cos(angle) * 45;
        const y2 = 50 + Math.sin(angle) * 45;
        
        return (
          <rect
            key={i}
            x={x2 - 4}
            y={y2 - 6}
            width="8"
            height="12"
            fill="url(#gearGradient)"
            transform={`rotate(${i * 45} ${x2} ${y2})`}
          />
        );
      })}
      
      {/* Main gear body */}
      <circle
        cx="50"
        cy="50"
        r="30"
        fill="url(#gearGradient)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
      />
      
      {/* Center hole */}
      <circle
        cx="50"
        cy="50"
        r="12"
        fill="var(--carbon-black)"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="1"
      />
    </svg>
  );
}
