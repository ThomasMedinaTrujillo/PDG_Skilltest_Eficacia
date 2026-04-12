import * as React from 'react'
import styles from './FormAlert.module.css'

export interface FormAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  message?: string
  type?: 'error' | 'info' | 'warning'
}

export const FormAlert = React.forwardRef<HTMLDivElement, FormAlertProps>(
  (
    {
      className = '',
      message = 'Debes completar todas las preguntas',
      type = 'error',
      ...props
    },
    ref
  ) => {
    const typeClass = styles[`alert${type.charAt(0).toUpperCase() + type.slice(1)}`] || styles.alertError

    return (
      <div
        ref={ref}
        className={`${styles.formAlert} ${typeClass} ${className}`}
        role="alert"
        {...props}
      >
        <span className={styles.icon}>!</span>
        <span className={styles.message}>{message}</span>
      </div>
    )
  }
)

FormAlert.displayName = 'FormAlert'

export default FormAlert
