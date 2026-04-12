import * as React from 'react'
import styles from './Badge.module.css'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'error' | 'info'
  size?: 'sm' | 'md' | 'lg'
  children?: React.ReactNode
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      className = '',
      variant = 'info',
      size = 'md',
      children,
      ...props
    },
    ref
  ) => {
    const variantClass = styles[`badge${variant.charAt(0).toUpperCase() + variant.slice(1)}`] || styles.badgeInfo
    const sizeClass = styles[`badge${size.toUpperCase()}`] || styles.badgeMd

    return (
      <span
        ref={ref}
        className={`${styles.badge} ${variantClass} ${sizeClass} ${className}`}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = 'Badge'

export default Badge
