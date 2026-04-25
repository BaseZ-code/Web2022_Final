import { forwardRef } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

// Utility to cleanly merge Tailwind classes
const cx = (...classes: (string | undefined | false | null)[]) => classes.filter(Boolean).join(' ');

export type ButtonVariant = 'primary' | 'white' | 'outline' | 'custom';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'custom';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style of the button */
  variant?: ButtonVariant;
  /** The size/padding of the button */
  size?: ButtonSize;
  /** Optional icon to display */
  icon?: ReactNode;
  /** Position of the icon (defaults to 'left') */
  iconPosition?: 'left' | 'right';
  /** If true, the button will take up the full width of its container */
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = 'primary',
      size = 'md',
      icon,
      iconPosition = 'left',
      fullWidth = false,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    // 1. Base styles shared across ALL buttons
    const baseClasses = "font-['Plus_Jakarta_Sans'] font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-200 whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-offset-2";

    // 2. Size styles
    const sizeClasses = {
      sm: 'px-4 py-2 text-[14px]',
      md: 'px-6 py-3 text-[15px]',
      lg: 'px-8 py-4 text-[16px]',
      custom: '', 
    };

    // 3. Variant styles
    const variantClasses = {
      primary: 'bg-[#255CBA] text-white hover:bg-[#1E4B99] shadow-sm focus:ring-[#255CBA]',
      white: 'bg-white text-gray-900 hover:bg-gray-100 shadow-sm focus:ring-gray-200',
      outline: 'bg-transparent border-2 border-white text-white hover:bg-white/10 focus:ring-white',
      custom: '', 
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cx(
          baseClasses,
          sizeClasses[size],
          variantClasses[variant],
          fullWidth ? 'w-full' : '',
          // ADDED 'cursor-pointer' to the active state here:
          disabled ? 'opacity-60 cursor-not-allowed hover:transform-none' : 'cursor-pointer hover:-translate-y-0.5 active:translate-y-0',
          className
        )}
        {...props}
      >
        {/* Render Icon on the Left */}
        {icon && iconPosition === 'left' && <span className="flex-shrink-0">{icon}</span>}
        
        {/* Render Text */}
        <span>{children}</span>

        {/* Render Icon on the Right */}
        {icon && iconPosition === 'right' && <span className="flex-shrink-0">{icon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
