import * as React from "react";
import { cn } from "@/lib/cn";
import { tokens } from "@/Token";

type BadgeStatus = "success" | "error" | "default" | "processing" | "warning";

export interface BadgeStatusProps extends React.HTMLAttributes<HTMLDivElement> {
  status?: BadgeStatus;
  label?: boolean;
  text?: string;
}

const statusColors: Record<BadgeStatus, string> = {
  success: tokens.colors.success,
  error: tokens.colors.error,
  default: tokens.colors.border,
  processing: tokens.colors.info,
  warning: tokens.colors.warning,
};

export const BadgeStatus = React.forwardRef<HTMLDivElement, BadgeStatusProps>(
  ({ className, status = "success", label = true, text, children, ...props }, ref) => {
    const labelText = text || (typeof children === "string" ? children : undefined);

    return (
      <div
        ref={ref}
        className={cn("ds-badge", `ds-badge--${status}`, className)}
        style={{ display: "inline-flex", alignItems: "center", gap: tokens.spacing.xs }}
        {...props}
      >
        <span
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "999px",
            backgroundColor: statusColors[status],
          }}
        />
        {label && (
          <span
            style={{
              fontFamily: tokens.typography.baseNormal.fontFamily,
              fontSize: tokens.typography.baseNormal.fontSize,
              fontWeight: tokens.typography.baseNormal.fontWeight,
              lineHeight: tokens.typography.baseNormal.lineHeight,
              color: tokens.colors.text,
            }}
          >
            {labelText || status[0].toUpperCase() + status.slice(1)}
          </span>
        )}
      </div>
    );
  }
);

BadgeStatus.displayName = "BadgeStatus";
