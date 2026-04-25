import { forwardRef } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';

// Use a simple class concatenation or a library like 'clsx' for cleaner class merging.
const cx = (...classes: (string | undefined | false | null)[]) => classes.filter(Boolean).join(' ');

export type TextFieldVariant = 'search' | 'form';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Optional label for the text field */
  label?: string;
  /** Optional icon to render inside the input field (on the left) */
  icon?: ReactNode;
  /** Select a predefined style variant. Defaults to 'form' */
  variant?: TextFieldVariant;
  /** Custom classes for the outer container div */
  containerClassName?: string;
  /** Custom classes specifically for the HTML <input> element */
  inputClassName?: string;
  /** Error message to display below the input */
  error?: string | boolean;
}

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      label,
      icon,
      variant = 'form',
      containerClassName,
      inputClassName,
      error,
      id,
      className, // standard prop to append to the end of input classes
      ...props
    },
    ref
  ) => {
    // Generate a default ID for label/input association if not provided
    const inputId = id || (label ? `textfield-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
    
    // 1. Base input styles common to both variants
    const baseInputClasses = 'w-full px-4 py-3 outline-none transition duration-150 ease-in-out text-[15px] focus:ring-2';
    
    // 2. Map variant-specific styles
    const variantInputClasses: Record<TextFieldVariant, string> = {
      // Style 1 (Gray background like from the Search Bar / image_2.png and image_5.png)
      search: 'bg-gray-100 text-gray-900 placeholder-gray-600 rounded-lg focus:ring-gray-300/50',
      
      // Style 2 (White background + border like from the Newsletter / image_0.png and image_6.png)
      // I'm using your specific light blue-gray border color here: border-[#A7B6D4]
      form: 'bg-white border border-[#A7B6D4] text-gray-900 placeholder-gray-500 rounded-xl focus:border-[#255CBA] focus:ring-[#255CBA]/30',
    };

    // 3. Handle icon spacing: add left padding if an icon is present
    const iconPaddingClass = icon ? 'pl-11' : 'pl-4';
    
    // Assemble the final class list for the <input> element
    const finalInputClasses = cx(
      baseInputClasses,
      variantInputClasses[variant],
      iconPaddingClass,
      error ? '!border-red-500 !focus:ring-red-200' : undefined, // Error styling (override base)
      inputClassName, // spezifisch for user overrides
      className // standard appended classes from 'props'
    );

    return (
      <div className={cx('relative', containerClassName)}>
        {label && inputId && (
          <label htmlFor={inputId} className="block text-sm font-medium text-gray-700 mb-1.5 pl-1">
            {label}
          </label>
        )}
        
        {/* Render the icon inside the component and position it */}
        {icon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none z-10">
            {icon}
          </div>
        )}
        
        <input
          id={inputId}
          ref={ref}
          className={finalInputClasses}
          {...props} // Spread all standard HTML input props (type, placeholder, value, etc.)
        />
        
        {/* Optional Error Message */}
        {error && typeof error === 'string' && (
          <p className="text-xs text-red-600 mt-1 pl-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

TextField.displayName = 'TextField';
export default TextField;
