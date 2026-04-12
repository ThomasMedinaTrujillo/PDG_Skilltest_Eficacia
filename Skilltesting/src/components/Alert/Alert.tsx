import * as React from 'react'
import styles from './Alert.module.css'

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'success' | 'warning' | 'pending'
  showIcon?: boolean
  message?: string
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { 
      className = '', 
      variant = 'default', 
      showIcon = true, 
      message = 'Estado',
      ...props 
    },
    ref
  ) => {
    const getVariantStyles = () => {
      const variantMap = {
        default: styles.alertDefault,
        success: styles.alertSuccess,
        warning: styles.alertWarning,
        pending: styles.alertPending,
      }
      return variantMap[variant]
    }

    const getTextColor = () => {
      if (variant !== 'default') {
        return styles.textWhite
      }
      return styles.textDefault
    }

    const getIcon = () => {
      if (!showIcon) return null

      // Icon variants based on alert type
      const icons = {
        default: '✕',
        success: '✓',
        warning: '!',
        pending: '⋯',
      }

      return (
        <span className={styles.icon} aria-hidden="true">
          {icons[variant]}
        </span>
      )
    }

    return (
      <div
        ref={ref}
        className={`${styles.alert} ${getVariantStyles()} ${className}`}
        role="alert"
        {...props}
      >
        {showIcon && getIcon()}
        <div className={`${styles.content} ${getTextColor()}`}>
          {message}
        </div>
        {variant === 'default' && showIcon && (
          <button
            className={styles.closeButton}
            aria-label="Close alert"
          >
            ✕
          </button>
        )}
      </div>
    )
  }
)

Alert.displayName = 'Alert'

export default Alert
