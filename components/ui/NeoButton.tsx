import React from 'react';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'alert' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  
  const baseStyles = "font-bold border-2 border-neo-black transition-all duration-150 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none uppercase tracking-widest";
  
  const variants = {
    primary: "bg-neo-blue text-white shadow-neo hover:bg-blue-600",
    secondary: "bg-neo-white text-neo-black shadow-neo hover:bg-gray-100",
    alert: "bg-neo-red text-white shadow-neo hover:bg-red-600",
    ghost: "bg-transparent text-neo-black border-2 border-transparent hover:border-neo-black hover:shadow-neo-sm hover:bg-neo-yellow",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} disabled:opacity-50 disabled:cursor-not-allowed`}
      {...props}
    >
      {children}
    </button>
  );
};