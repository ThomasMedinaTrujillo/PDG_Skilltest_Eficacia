import * as React from "react";
import { cn } from "@/lib/cn";

export type MessageType = "normal" | "warning" | "success" | "error" | "loading";

export interface MessageProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: MessageType;
  icon?: React.ReactNode;
}

const icons: Record<MessageType, string> = {
  normal: "i",
  warning: "!",
  success: "✓",
  error: "×",
  loading: "◌",
};

const labels: Record<MessageType, string> = {
  normal: "Normal message",
  warning: "Warning message",
  success: "Success message",
  error: "Error message",
  loading: "Loading message",
};

export const Message = React.forwardRef<HTMLDivElement, MessageProps>(
  ({ className, type = "normal", icon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("ds-message", `ds-message--${type}`, className)}
        role={type === "error" || type === "warning" ? "alert" : "status"}
        data-node-id="983:8581"
        {...props}
      >
        <span className="ds-message__icon" aria-hidden="true">
          {icon ?? icons[type]}
        </span>
        <span className="ds-message__content">{children ?? labels[type]}</span>
      </div>
    );
  },
);

Message.displayName = "Message";
