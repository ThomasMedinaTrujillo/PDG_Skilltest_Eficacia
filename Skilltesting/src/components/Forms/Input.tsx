import * as React from 'react'
import styles from './Input.module.css'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string
  state?: 'Enable' | 'Selected' | 'Error'
  type?: 'TextField' | 'Multiline'
  alert?: boolean
  icon?: boolean
  requested?: boolean
  multilineText?: string
  selectIcon?: React.ReactNode | null
  errorMessage?: string
  alertMessage?: string
}

export const Input = React.forwardRef<HTMLDivElement, InputProps>(
  (
    {
      className = '',
      labelText = 'Label',
      state = 'Enable',
      type = 'TextField',
      alert = false,
      icon = false,
      requested = true,
      multilineText = 'Enter text here',
      selectIcon = null,
      value,
      onChange,
      placeholder,
      errorMessage = 'Datos incorrectos',
      alertMessage = 'Participación diferente de lo esperado',
      ...props
    },
    ref
  ) => {
    const stateClass = styles[`state${state}`] || styles.stateEnable
    const typeClass = styles[`type${type}`] || styles.typeTextField

    return (
      <div
        ref={ref}
        className={`${styles.inputContainer} ${stateClass} ${typeClass} ${className}`}
        {...props}
      >
        <div className={styles.titleGroup}>
          <label className={styles.title}>{labelText}</label>
          {requested && <span className={styles.required}>*</span>}
        </div>

        {type === 'TextField' ? (
          <div className={styles.textfieldWrapper}>
            <input
              className={styles.input}
              placeholder={placeholder || 'Value'}
              value={value}
              onChange={onChange}
              type="text"
            />
            {icon && (
              <div className={styles.iconContainer}>
                {selectIcon}
              </div>
            )}
          </div>
        ) : (
          <div className={styles.multilineWrapper}>
            <textarea
              className={styles.textarea}
              placeholder={multilineText}
              value={value}
              onChange={onChange}
            />
          </div>
        )}

        {state === 'Error' && (
          <div className={styles.errorMessage}>{errorMessage}</div>
        )}

        {alert && (
          <div className={styles.alertBox}>
            <span className={styles.alertText}>{alertMessage}</span>
            <button className={styles.alertClose} type="button">✕</button>
          </div>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
