import { Link } from 'react-router-dom';
import type { ReactNode, ButtonHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'invert' | 'invertGhost';
type Size = 'sm' | 'md';

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
};

const variants: Record<Variant, string> = {
  primary: 'bg-black text-white hover:bg-gray-800 focus-visible:ring-black',
  secondary:
    'border border-gray-300 bg-white text-black hover:border-gray-400 hover:bg-gray-50 focus-visible:ring-gray-400',
  ghost: 'text-gray-700 hover:text-black focus-visible:ring-gray-300',
  invert: 'bg-white text-black hover:bg-gray-100 focus-visible:ring-white',
  invertGhost:
    'border border-white/30 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white/40',
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
};

type ButtonAsAnchor = CommonProps & {
  to: string;
};

type ButtonAsButton = CommonProps & {
  to?: undefined;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className' | 'children'>;

export function Button(props: ButtonAsAnchor | ButtonAsButton) {
  const { children, variant = 'primary', size = 'md', className = '' } = props;
  const classes = [base, sizes[size], variants[variant], className].filter(Boolean).join(' ');

  if ('to' in props && props.to) {
    return (
      <Link to={props.to} className={classes}>
        {children}
      </Link>
    );
  }
  const { to: _to, ...rest } = props as ButtonAsButton;
  void _to;
  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
