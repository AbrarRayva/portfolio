import { Button as HeadlessButton, type ButtonProps } from '@headlessui/react'
import clsx from 'clsx'

interface CustomButtonProps extends ButtonProps {
  variant?: 'primary' | 'white' | 'outline'
}

export default function CustomButton({ 
  children, 
  variant = 'primary', 
  className, 
  ...props 
}: CustomButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-pill px-5 py-2.5 text-sm font-medium transition-all duration-200 focus:outline-none data-[focus]:ring-2 data-[focus]:ring-offset-2 data-[hover]:brightness-80 data-[active]:brightness-90 data-[disabled]:opacity-50 data-[disabled]:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-blue-brand-1 text-white data-[focus]:ring-blue-brand-1',
    white: 'bg-white text-blue-brand-1 data-[focus]:ring-white',
    outline: 'border border-white-300 text-white data-[focus]:ring-white'
  }

  return (
    <HeadlessButton
      {...props}
      className={clsx(baseStyles, variants[variant], className)}
    >
      {children}
    </HeadlessButton>
  )
}