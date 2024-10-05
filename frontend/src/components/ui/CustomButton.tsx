import { cn } from '@lib/utils';
import React from 'react';

import { Button } from './button';

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  return (
    <Button
      className={cn(
        'px-6 py-6 text-sm font-medium transition-transform duration-300',
        'hover:scale-105 active:scale-95',
        variant === 'primary'
          ? 'bg-blue-600 text-white hover:bg-blue-700'
          : 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        'border-none shadow-none focus:outline-none',
        className,
      )}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
