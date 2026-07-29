// shared/ui/button/Button.tsx
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'icon';
}

export const Button = ({ children, variant = 'primary', className, ...rest }: ButtonProps) => {
  return (
    <button className={`button ${variant} ${className ?? ''}`} {...rest}>
      {children}
    </button>
  );
};