import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

const CLOSE_ICON = "http://localhost:3845/assets/cf9bf4b4460d3c81185e303739ddd96f230c2e26.svg";

export interface FormAlertProps extends React.HTMLAttributes<HTMLDivElement> {
  textAlert?: string;
  onClose?: () => void;
  closable?: boolean;
}

export const FormAlert = React.forwardRef<HTMLDivElement, FormAlertProps>(
  ({ className, textAlert = "Participación diferente de lo esperado", onClose, closable = true, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("ds-form-alert", className)}
        style={{
          background: tokens.colors.pending,
          borderRadius: "2px",
          padding: `${tokens.spacing.none} ${tokens.spacing.sm}`,
          height: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: tokens.spacing.sm,
        }}
        {...props}
      >
        <span
          style={{
            color: tokens.colors.primary,
            fontFamily: tokens.typography.caption.fontFamily,
            fontSize: tokens.typography.caption.fontSize,
            fontWeight: tokens.typography.body.fontWeight,
            lineHeight: "1",
          }}
        >
          {children ?? textAlert}
        </span>

        {closable ? (
          <button
            type="button"
            onClick={onClose}
            className={cn("ds-form-alert__close")}
            style={{
              width: "8px",
              height: "8px",
              border: "none",
              background: "transparent",
              padding: tokens.spacing.none,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <img src={CLOSE_ICON} alt="Cerrar" style={{ width: "100%", height: "100%" }} />
          </button>
        ) : null}
      </div>
    );
  }
);

FormAlert.displayName = "FormAlert";
