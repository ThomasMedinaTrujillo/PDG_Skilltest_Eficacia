import * as React from 'react'
import styles from './CardCheck.module.css'

export interface CardCheckProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  subtitle?: string
  state?: 'enabled' | 'disabled' | 'checked'
  showCheckbox?: boolean
  showIcon?: boolean
  icon?: React.ReactNode
}

export const CardCheck = React.forwardRef<HTMLDivElement, CardCheckProps>(
  (
    {
      className = '',
      title = 'Categoria 1',
      subtitle = 'label',
      state = 'enabled',
      showCheckbox = true,
      showIcon = true,
      icon,
      ...props
    },
    ref
  ) => {
    const stateClass = styles[`card${state.charAt(0).toUpperCase() + state.slice(1)}`] || styles.cardEnabled

    return (
      <div
        ref={ref}
        className={`${styles.card} ${stateClass} ${className}`}
        {...props}
      >
        <div className={styles.content}>
          {showIcon && (
            <div className={styles.iconWrapper}>
              {icon ? (
                icon
              ) : (
                <div className={styles.defaultIcon} />
              )}
            </div>
          )}

          {state === 'enabled' && (
            <div className={styles.textContent}>
              {title && <h4 className={styles.title}>{title}</h4>}
              {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
          )}

          {state === 'disabled' && (
            <div className={styles.textContent}>
              {title && <h4 className={`${styles.title} ${styles.disabledText}`}>{title}</h4>}
              {subtitle && <p className={`${styles.subtitle} ${styles.disabledText}`}>{subtitle}</p>}
            </div>
          )}

          {state === 'checked' && (
            <div className={styles.textContent}>
              {title && <h4 className={`${styles.title} ${styles.checkedText}`}>{title}</h4>}
              {subtitle && <p className={`${styles.subtitle} ${styles.checkedText}`}>{subtitle}</p>}
            </div>
          )}
        </div>

        {showCheckbox && (
          <div className={`${styles.checkbox} ${state === 'checked' ? styles.checkboxChecked : ''}`}>
            {state === 'checked' && (
              <span className={styles.checkmark}>✓</span>
            )}
          </div>
        )}
      </div>
    )
  }
)

CardCheck.displayName = 'CardCheck'

export default CardCheck
