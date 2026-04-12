import * as React from 'react'
import styles from './Toggle.module.css'

export interface ToggleProps extends React.HTMLAttributes<HTMLButtonElement> {
  checked?: boolean
  onChange?: (checked: boolean) => void
  disabled?: boolean
  label?: string
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  (
    {
      className = '',
      checked = false,
      onChange,
      disabled = false,
      label,
      ...props
    },
    ref
  ) => {
    const [isChecked, setIsChecked] = React.useState(checked)

    const handleClick = () => {
      if (!disabled) {
        const newState = !isChecked
        setIsChecked(newState)
        onChange?.(newState)
      }
    }

    return (
      <div className={`${styles.toggleWrapper} ${className}`}>
        {label && <span className={styles.label}>{label}</span>}
        <button
          ref={ref}
          className={`${styles.toggle} ${isChecked ? styles.checked : ''} ${disabled ? styles.disabled : ''}`}
          role="switch"
          aria-checked={isChecked}
          onClick={handleClick}
          disabled={disabled}
          {...props}
        >
          <div className={styles.toggleButton} />
        </button>
      </div>
    )
  }
)

Toggle.displayName = 'Toggle'

export default Toggle
