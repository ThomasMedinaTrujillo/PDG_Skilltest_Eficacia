import * as React from "react"
import { cn } from "../lib/cn"
import { useState, useRef, useEffect } from "react"

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  indeterminate?: boolean
  checked?: boolean
  defaultChecked?: boolean
  onChange?: (checked: boolean) => void
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, disabled, indeterminate = false, checked: propChecked, defaultChecked = false, onChange, children, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked)
    const isControlled = propChecked !== undefined
    const checked = isControlled ? propChecked : internalChecked

    const internalRef = useRef<HTMLInputElement>(null)
    const combinedRef = (node: HTMLInputElement) => {
      internalRef.current = node
      if (typeof ref === "function") ref(node)
      else if (ref) (ref as React.MutableRefObject<HTMLInputElement>).current = node
    }

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = indeterminate
      }
    }, [indeterminate])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked
      if (!isControlled) setInternalChecked(newChecked)
      onChange?.(newChecked)
    }

    return (
      <div className={cn("ds-checkbox-wrapper", disabled && "ds-checkbox-wrapper--disabled", className)}>
        <input
          type="checkbox"
          ref={combinedRef}
          disabled={disabled}
          checked={checked}
          onChange={handleChange}
          className={cn(
            "ds-checkbox",
            indeterminate && "ds-checkbox--indeterminate"
          )}
          {...props}
        />
        {children && <span className="ds-checkbox-label">{children}</span>}
      </div>
    )
  }
)

Checkbox.displayName = "Checkbox"