interface ChromeBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function ChromeBadge({ children, className = '' }: ChromeBadgeProps) {
  return (
    <span className={`chrome-badge ${className}`}>
      {children}
    </span>
  );
}
