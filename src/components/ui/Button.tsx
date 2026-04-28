import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const variantClasses: Record<string, string> = {
  primary: 'bg-[#4361ee] hover:bg-[#3451de] text-white',
  secondary: 'bg-[#0f3460] hover:bg-[#16213e] text-white border border-[#4361ee]/40',
  success: 'bg-[#06d6a0] hover:bg-[#05c492] text-[#1a1a2e]',
  danger: 'bg-[#ef476f] hover:bg-[#e03562] text-white',
  ghost: 'bg-transparent hover:bg-white/10 text-white border border-white/20',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-base',
  lg: 'px-8 py-3.5 text-lg',
};

export function Button({ variant = 'primary', size = 'md', children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`
        rounded-xl font-semibold transition-all duration-150
        active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed
        cursor-pointer
        ${variantClasses[variant]} ${sizeClasses[size]} ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
