import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

export interface PrincipalMenuMenuItemProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: React.ReactNode;
  itemMenuText?: string;
  active?: boolean;
}

export const PrincipalMenuMenuItem = React.forwardRef<
  HTMLButtonElement,
  PrincipalMenuMenuItemProps
>(({ className, leftIcon, itemMenuText = "Text", active = false, children, ...props }, ref) => {
  return (
    <button
      ref={ref}
      type="button"
      className={cn("ds-principal-menu-item", active && "ds-principal-menu-item--active", className)}
      style={{
        display: "flex",
        alignItems: "center",
        gap: tokens.spacing.md,
        width: "100%",
        border: "none",
        background: tokens.colors.white,
        padding: tokens.spacing.sm,
        color: tokens.colors.primary,
        fontFamily: "Solomon Sans",
        fontWeight: 600,
        fontSize: "16px",
        textAlign: "left",
        cursor: "pointer",
      }}
      {...props}
    >
      <span aria-hidden style={{ width: "24px", height: "24px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
        {leftIcon ?? "↩"}
      </span>
      <span style={{ lineHeight: 1.2 }}>{children ?? itemMenuText}</span>
    </button>
  );
});

PrincipalMenuMenuItem.displayName = "PrincipalMenuMenuItem";
