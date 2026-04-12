import * as React from 'react'
import styles from './Button.module.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'error'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  children?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      disabled = false,
      children,
      ...props
    },
    ref
  ) => {
    const variantClass = styles[`button${variant.charAt(0).toUpperCase() + variant.slice(1)}`] || styles.buttonPrimary
    const sizeClass = styles[`button${size.toUpperCase()}`] || styles.buttonMd

    return (
      <button
        ref={ref}
        className={`${styles.button} ${variantClass} ${sizeClass} ${disabled ? styles.disabled : ''} ${className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
