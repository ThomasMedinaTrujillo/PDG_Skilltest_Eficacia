import * as React from 'react'
import styles from './ActionPopup.module.css'

export interface ActionPopupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  caption?: string
  showHeader?: boolean
  showToggles?: boolean
  toggleLabel1?: string
  toggleLabel2?: string
  children?: React.ReactNode
}

export const ActionPopup = React.forwardRef<HTMLDivElement, ActionPopupProps>(
  (
    {
      className = '',
      title = 'Página incompleta',
      caption = 'Debes completar las preguntas (*)',
      showHeader = true,
      showToggles = true,
      toggleLabel1 = 'PDV ejecutados',
      toggleLabel2 = 'PDV ejecutados',
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`${styles.popup} ${className}`}
        {...props}
      >
        {showHeader && (
          <div className={styles.header}>
            <div className={styles.titleSection}>
              <h2 className={styles.title}>{title}</h2>
              <div className={styles.captionLine}>
                <div className={styles.line} />
                <span className={styles.caption}>{caption}</span>
                <div className={styles.line} />
              </div>
            </div>
          </div>
        )}

        {showToggles && (
          <div className={styles.togglesSection}>
            <div className={styles.toggleItem}>
              <span className={styles.toggleLabel}>{toggleLabel1}</span>
              <div className={styles.toggle} role="switch" aria-checked="false">
                <div className={styles.toggleButton} />
              </div>
            </div>
            <div className={styles.toggleItem}>
              <span className={styles.toggleLabel}>{toggleLabel2}</span>
              <div className={styles.toggle} role="switch" aria-checked="false">
                <div className={styles.toggleButton} />
              </div>
            </div>
          </div>
        )}

        {children && <div className={styles.content}>{children}</div>}
      </div>
    )
  }
)

ActionPopup.displayName = 'ActionPopup'

export default ActionPopup
