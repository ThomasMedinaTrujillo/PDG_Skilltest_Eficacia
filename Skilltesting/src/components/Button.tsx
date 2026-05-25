import * as React from "react"
import { cn } from "../lib/cn"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "default" | "dashed" | "text" | "link"
  size?: "small" | "default" | "large"
  ghost?: boolean
  danger?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ghost = false, danger = false, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          "ds-button",
          `ds-button--${variant}`,
          `ds-button--${size}`,
          ghost && "ds-button--ghost",
          danger && "ds-button--danger",
          className
        )}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"