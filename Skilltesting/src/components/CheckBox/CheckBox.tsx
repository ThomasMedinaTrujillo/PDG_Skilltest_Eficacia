import * as React from 'react'
import styles from './CheckBox.module.css'

interface CheckBoxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  (
    {
      className = '',
      label,
      disabled = false,
      id,
      defaultChecked,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(defaultChecked ?? false)
    const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setIsChecked(e.target.checked)
      props.onChange?.(e)
    }

    return (
      <div className={`${styles.checkboxWrapper} ${className}`}>
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          defaultChecked={defaultChecked}
          disabled={disabled}
          className={styles.input}
          onChange={handleChange}
          {...props}
        />
        <label htmlFor={checkboxId} className={styles.label}>
          <span className={`${styles.box} ${isChecked ? styles.boxChecked : ''}`}>
            {isChecked && <span className={styles.checkmark}>✓</span>}
          </span>
          {label && <span className={styles.labelText}>{label}</span>}
        </label>
      </div>
    )
  }
)

CheckBox.displayName = 'CheckBox'

export default CheckBox
