import { ReactNode } from 'react';

interface GlassButtonProps {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function GlassButton({ 
  children, 
  variant = 'default', 
  size = 'md',
  onClick,
  className = '',
  disabled = false,
  type = 'button'
}: GlassButtonProps) {
  const sizeClasses = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base'
  };

  const variantClass = variant === 'primary' ? 'glass-btn-primary' : 'glass-btn';

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${variantClass} ${sizeClasses[size]} ${className} relative z-10`}
    >
      {children}
    </button>
  );
}
