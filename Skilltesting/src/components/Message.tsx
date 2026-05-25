import * as React from "react"
import { cn } from "../lib/cn"

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "normal" | "warning" | "success" | "error" | "loading"
}

export const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ className, type = "normal", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "ds-message",
          `ds-message--${type}`,
          className
        )}
        {...props}
      >
        <div className="ds-message-notice-content">
          <span className="ds-message-custom-content">
            {children}
          </span>
        </div>
      </div>
    )
  }
)

Message.displayName = "Message"