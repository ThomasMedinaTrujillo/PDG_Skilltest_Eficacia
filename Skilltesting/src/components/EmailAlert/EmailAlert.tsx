import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import closeIcon from "../../assets/icons/close.svg";

const CLOSE_ICON = closeIcon;

export interface EmailAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  email?: string;
  name?: string;
  onClose?: () => void;
  closable?: boolean;
}

export const EmailAlert = React.forwardRef<HTMLDivElement, EmailAlertProps>(
  ({ className, email = "daniela1.perez2@xxx.co", name = "Daniela Perez", onClose, closable = true, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("ds-email-alert", className)}
        style={{
          background: tokens.colors.blueScaleEb700,
          borderRadius: tokens.radius.sm,
          padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: tokens.spacing.md,
        }}
        {...props}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          <span
            style={{
              color: tokens.colors.white,
              fontFamily: tokens.typography.caption.fontFamily,
              fontSize: tokens.typography.caption.fontSize,
              fontWeight: tokens.typography.body.fontWeight,
              lineHeight: "1",
            }}
          >
            {name}
          </span>

          <span
            style={{
              color: tokens.colors.white,
              fontFamily: tokens.typography.body.fontFamily,
              fontSize: tokens.typography.body.fontSize,
              fontWeight: tokens.typography.body.fontWeight,
              lineHeight: "1",
            }}
          >
            {email}
          </span>
        </div>

        {closable ? (
          <button
            type="button"
            onClick={onClose}
            className={cn("ds-email-alert__close")}
            style={{
              width: "18px",
              height: "18px",
              border: "none",
              background: "transparent",
              padding: tokens.spacing.none,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <img src={CLOSE_ICON} alt="Cerrar" style={{ width: "10px", height: "10px" }} />
          </button>
        ) : null}
      </div>
    );
  }
);

EmailAlert.displayName = "EmailAlert";
