import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

export interface CheckBoxStatusProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  status?: "add" | "remove";
}

export const CheckBoxStatus = React.forwardRef<HTMLButtonElement, CheckBoxStatusProps>(
  ({ className, status = "add", ...props }, ref) => {
    const symbol = status === "remove" ? "−" : "+";

    return (
      <button
        ref={ref}
        type="button"
        className={cn("ds-checkbox-status", `ds-checkbox-status--${status}`, className)}
        style={{
          width: "18px",
          height: "18px",
          border: "none",
          borderRadius: "3px",
          background: tokens.colors.buttonBackground,
          color: tokens.colors.white,
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          fontFamily: "Solomon Sans",
          fontWeight: 700,
          lineHeight: 1,
        }}
        {...props}
      >
        {symbol}
      </button>
    );
  }
);

CheckBoxStatus.displayName = "CheckBoxStatus";
