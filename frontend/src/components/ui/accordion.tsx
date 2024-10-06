'use client';

import * as AccordionPrimitive from '@radix-ui/react-accordion';
import * as React from 'react';

import { cn } from '@/lib/utils';

type AccordionProps =
  | {
      type: 'single';
      defaultValue?: string;
      collapsible?: boolean;
      children: React.ReactNode;
    }
  | {
      type: 'multiple';
      defaultValue?: string[];
      collapsible?: boolean;
      children: React.ReactNode;
    };

const Accordion = ({
  type,
  defaultValue,
  collapsible = true,
  children,
  ...props
}: AccordionProps) => {
  return (
    <AccordionPrimitive.Root
      type={type}
      defaultValue={defaultValue}
      collapsible={collapsible}
      {...props}
    >
      {children}
    </AccordionPrimitive.Root>
  );
};

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      'border-none data-[state=open]:bg-[#E7EDF3] data-[state=open]:rounded-lg transition-all',
      className,
    )}
    {...props}
  />
));
AccordionItem.displayName = 'AccordionItem';

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-start text-left py-4 px-4 text-lg font-semibold transition-all focus:outline-none data-[state=open]:bg-[#E7EDF3] data-[state=open]:rounded-t-lg',
        className,
      )}
      {...props}
    >
      {children}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className={cn(
      'overflow-hidden text-sm transition-all duration-300 data-[state=open]:bg-[#E7EDF3] data-[state=open]:p-4 data-[state=open]:rounded-b-lg data-[state=open]:text-gray-700',
      className,
    )}
    {...props}
  >
    <div>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
