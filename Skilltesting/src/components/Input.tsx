import * as React from "react"
import { cn } from "../lib/cn"
import { useState } from "react"

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  status?: "default" | "success" | "warning" | "error"
  size?: "small" | "default" | "large"
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, status = "default", size = "default", value: propValue, defaultValue, onChange, children, ...props }, ref) => {
    const [internalValue, setInternalValue] = useState(defaultValue ?? "")
    const isControlled = propValue !== undefined
    const value = isControlled ? propValue : internalValue

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) setInternalValue(e.target.value)
      onChange?.(e)
    }

    return (
      <input
        ref={ref}
        value={value}
        onChange={handleChange}
        className={cn(
          "ds-input",
          `ds-input--${status}`,
          `ds-input--${size}`,
          className
        )}
        {...props}
      />
    )
  }
)

Input.displayName = "Input"