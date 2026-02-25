import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "px-8 py-3 uppercase tracking-widest text-sm font-bold transition-all duration-300 font-sans clip-path-slant";
  
  const variants = {
    primary: "bg-blood-800 hover:bg-blood-700 text-white shadow-[0_0_15px_rgba(185,28,28,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] border border-blood-900",
    outline: "bg-transparent border border-neutral-700 text-neutral-300 hover:border-blood-600 hover:text-white hover:bg-neutral-900",
    ghost: "bg-transparent text-neutral-400 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};