interface PistonIconProps {
  size?: number;
  animated?: boolean;
  className?: string;
}

export default function PistonIcon({ 
  size = 64, 
  animated = false,
  className = '' 
}: PistonIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
    >
      <defs>
        <linearGradient id="pistonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#E8C547" />
          <stop offset="100%" stopColor="#FF4D1C" />
        </linearGradient>
      </defs>
      
      {/* Piston head */}
      <rect
        x="30"
        y="20"
        width="40"
        height="25"
        rx="3"
        fill="url(#pistonGradient)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
        className={animated ? 'animate-pulse' : ''}
      />
      
      {/* Piston rings */}
      <line x1="30" y1="28" x2="70" y2="28" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
      <line x1="30" y1="37" x2="70" y2="37" stroke="rgba(255,255,255,0.5)" strokeWidth="1" />
      
      {/* Connecting rod */}
      <rect
        x="45"
        y="45"
        width="10"
        height="30"
        fill="rgba(255,255,255,0.2)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
      />
      
      {/* Crankshaft connection */}
      <circle
        cx="50"
        cy="80"
        r="8"
        fill="rgba(255,255,255,0.1)"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="1"
      />
    </svg>
  );
}
