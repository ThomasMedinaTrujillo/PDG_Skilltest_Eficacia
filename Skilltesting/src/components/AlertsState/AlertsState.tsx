import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

type AlertStyle = "default" | "success" | "pending" | "warning";

export interface AlertsStateProps extends React.HTMLAttributes<HTMLDivElement> {
  styleType?: AlertStyle;
  textAlert?: string;
  showIcon?: boolean;
  onClose?: () => void;
}

const toneByStyle: Record<AlertStyle, { bg: string; fg: string }> = {
  default: { bg: tokens.colors.backgroundSecondary, fg: tokens.colors.textCaption },
  success: { bg: tokens.colors.success, fg: tokens.colors.white },
  pending: { bg: tokens.colors.pending, fg: tokens.colors.white },
  warning: { bg: tokens.colors.warning, fg: tokens.colors.white },
};

export const AlertsState = React.forwardRef<HTMLDivElement, AlertsStateProps>(
  ({ className, styleType = "default", textAlert = "Estado", showIcon = true, onClose, ...props }, ref) => {
    const tone = toneByStyle[styleType];

    return (
      <div
        ref={ref}
        className={cn("ds-alerts-state", `ds-alerts-state--${styleType}`, className)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: tokens.spacing.sm,
          padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
          borderRadius: tokens.radius.sm,
          background: tone.bg,
          color: tone.fg,
          boxShadow: tokens.shadows.card,
        }}
        {...props}
      >
        {showIcon && <span className="ds-alerts-state__dot" aria-hidden style={{ width: "14px", height: "14px", borderRadius: "50%", background: tokens.colors.white }} />}
        <span style={{ flex: 1, fontFamily: "Solomon Sans", fontSize: "14px" }}>{textAlert}</span>
        <button
          type="button"
          className={cn("ds-alerts-state__close", "ds-alerts-state--active")}
          aria-label="Close alert"
          onClick={onClose}
          style={{
            border: "none",
            background: "transparent",
            color: tone.fg,
            fontSize: "20px",
            lineHeight: 1,
            cursor: "pointer",
          }}
        >
          ×
        </button>
      </div>
    );
  }
);

AlertsState.displayName = "AlertsState";
