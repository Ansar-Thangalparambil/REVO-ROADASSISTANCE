import type { CSSProperties, ReactNode } from 'react';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className = '' }: ContainerProps) {
  const baseStyle: CSSProperties = {
    width: '100%',
    maxWidth: '1280px',
    margin: '0 auto',
    paddingInline: 'clamp(16px, 2.5vw, 24px)',
  };

  return (
    <div
      style={baseStyle}
      className={className}
    >
      {children}
    </div>
  );
}
