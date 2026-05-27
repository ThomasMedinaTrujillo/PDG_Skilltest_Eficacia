import * as React from "react";
import { cn } from "@/lib/cn";

export type BadgeStatus = "success" | "error" | "default" | "processing" | "warning";
export type BadgeType = "default" | "dot" | "small";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  status?: BadgeStatus;
  type?: BadgeType;
  text?: React.ReactNode;
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, status = "success", type = "default", text, children, ...props }, ref) => {
    const label = children ?? text ?? status[0].toUpperCase() + status.slice(1);

    return (
      <span
        ref={ref}
        className={cn("ds-badge", `ds-badge--${status}`, `ds-badge--${type}`, className)}
        data-node-id="983:6876"
        {...props}
      >
        <span className="ds-badge__dot" aria-hidden="true" />
        {type !== "dot" ? <span className="ds-badge__text">{label}</span> : null}
      </span>
    );
  },
);

Badge.displayName = "Badge";
