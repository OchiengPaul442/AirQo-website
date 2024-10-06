import { cn } from '@lib/utils';
import React from 'react';

import { ButtonProps } from './button';

interface CustomButtonProps extends ButtonProps {
  className?: string;
  children: React.ReactNode;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cn(
        'px-6 py-4 text-sm font-medium transition-transform duration-300',
        'active:scale-95',
        'bg-blue-600 text-white',
        'border-none shadow-none focus:outline-none',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
