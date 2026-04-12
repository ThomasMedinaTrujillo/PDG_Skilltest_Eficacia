import * as React from 'react'
import styles from './MenuItem.module.css'

export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  label?: string
  badge?: string | number
  selected?: boolean
  children?: React.ReactNode
}

export const MenuItem = React.forwardRef<HTMLButtonElement, MenuItemProps>(
  (
    {
      className = '',
      icon,
      label,
      badge,
      selected = false,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={`${styles.menuItem} ${selected ? styles.selected : ''} ${className}`}
        {...props}
      >
        {icon && <div className={styles.icon}>{icon}</div>}
        <span className={styles.label}>{label || children}</span>
        {badge && (
          <span className={styles.badge}>
            {typeof badge === 'number' && badge > 99 ? '99+' : badge}
          </span>
        )}
      </button>
    )
  }
)

MenuItem.displayName = 'MenuItem'

export default MenuItem
