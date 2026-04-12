import * as React from 'react'
import styles from './EmailAlert.module.css'

export interface EmailAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string
  email?: string
  onClose?: () => void
}

export const EmailAlert = React.forwardRef<HTMLDivElement, EmailAlertProps>(
  (
    {
      className = '',
      name = 'Daniela Perez',
      email = 'daniela1.perez2@xxx.co',
      onClose,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`${styles.emailAlert} ${className}`}
        {...props}
        role="alert"
      >
        <div className={styles.content}>
          <div className={styles.nameText}>{name}</div>
          <div className={styles.emailText}>{email}</div>
        </div>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          ✕
        </button>
      </div>
    )
  }
)

EmailAlert.displayName = 'EmailAlert'

export default EmailAlert
