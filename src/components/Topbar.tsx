import React, { useState, useEffect } from 'react';
import Button from './Button';

export interface NavLink {
  label: string;
  href: string;
}

export interface NavButton {
  label: string;
  onClick?: () => void;
  href?: string;
  primary?: boolean;
}

interface TopbarProps {
  logo: React.ReactNode;
  navLinks?: NavLink[];
  buttons?: NavButton[];
  currentPath?: string;
}

const Topbar: React.FC<TopbarProps> = ({ 
  logo, 
  navLinks = [], 
  buttons = [], 
  currentPath = "" 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Updated Button Styles specifically targeting the custom variant of our Button component
  const getCustomButtonClasses = (isPrimary?: boolean, isMobile?: boolean) => {
    const base = `
      h-[36px] !rounded-[8px] 
      px-[16px] py-[8px]
      !font-semibold !text-[14px] leading-[20px] tracking-[0px]
      opacity-100 shadow-none
    `;
    
    // Handle fixed widths for desktop vs full width for mobile
    const widthClass = isMobile ? 'w-full' : (isPrimary ? 'w-[138.58px]' : 'w-[76.33px]');
    
    if (isPrimary) {
      return `${base} ${widthClass} bg-[#005CBD] text-[#FFFFFF] hover:opacity-90`;
    }
    return `${base} ${widthClass} bg-transparent text-[#475569] hover:bg-slate-50`;
  };

  // Updated Nav Link Typography
  const navLinkClass = (isActive: boolean) => `
    inline-flex items-center align-middle
    font-['Plus_Jakarta_Sans'] font-semibold text-[14px] 
    leading-[20px] tracking-[-0.35px] 
    transition-colors h-full border-b-2
    ${isActive 
      ? 'text-[#005CBD] border-[#005CBD]' 
      : 'text-[#475569] border-transparent hover:text-[#005CBD]'}
  `;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 dark:bg-[rgba(255,255,255,0.8)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 gap-4">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            {typeof logo === 'string' ? (
              <span className="text-xl font-bold text-slate-900">{logo}</span>
            ) : (
              logo
            )}
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex flex-1 justify-start space-x-8 h-full">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={navLinkClass(currentPath === link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            {buttons.map((btn, idx) => {
              const btnClasses = getCustomButtonClasses(btn.primary, false);

              if (btn.href) {
                return (
                  <a key={idx} href={btn.href} className="block">
                    <Button variant="custom" size="custom" className={btnClasses}>
                      {btn.label}
                    </Button>
                  </a>
                );
              }
              
              return (
                <Button 
                  key={idx} 
                  variant="custom" 
                  size="custom" 
                  onClick={btn.onClick}
                  className={btnClasses}
                >
                  {btn.label}
                </Button>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-slate-500 hover:bg-slate-100 focus:outline-none"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-white border-t border-slate-100`}
      >
        <div className="px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block px-3 py-4 font-['Plus_Jakarta_Sans'] font-semibold text-[14px] text-slate-700 hover:bg-slate-50 rounded-md"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col space-y-3 items-start w-full">
            {buttons.map((btn, idx) => {
              const btnClasses = getCustomButtonClasses(btn.primary, true);

              return (
                <div key={idx} className="w-full">
                  {btn.href ? (
                    <a href={btn.href} className="block w-full">
                       <Button variant="custom" size="custom" fullWidth className={btnClasses}>
                         {btn.label}
                       </Button>
                    </a>
                  ) : (
                    <Button 
                      variant="custom" 
                      size="custom" 
                      fullWidth
                      onClick={btn.onClick}
                      className={btnClasses}
                    >
                      {btn.label}
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
