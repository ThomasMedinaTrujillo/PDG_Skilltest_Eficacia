import * as React from "react"
import { cn } from "../lib/cn"

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  type?: "dot" | "default" | "small"
  status?: "success" | "error" | "default" | "processing" | "warning"
  text?: React.ReactNode
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, type = "default", status = "default", text, children, ...props }, ref) => {
    return (
      <span ref={ref} className={cn("ds-badge-wrapper", className)} {...props}>
        {children}
        <sup className={cn("ds-badge", `ds-badge--${type}`, `ds-badge-status-${status}`)}>
          {type !== "dot" && text}
        </sup>
      </span>
    )
  }
)

Badge.displayName = "Badge"