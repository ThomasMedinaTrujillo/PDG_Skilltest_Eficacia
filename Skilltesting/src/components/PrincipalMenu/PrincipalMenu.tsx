import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import { PrincipalMenuMenuItem } from "../PrincipalMenuMenuItem/PrincipalMenuMenuItem";

type PrincipalMenuMode = "header" | "floating";

export interface PrincipalMenuProps extends React.HTMLAttributes<HTMLElement> {
  mode?: PrincipalMenuMode;
  items?: string[];
}

export const PrincipalMenu = React.forwardRef<HTMLElement, PrincipalMenuProps>(
  ({ className, mode = "floating", items, ...props }, ref) => {
    const resolvedItems = items ?? ["Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text", "Text"];

    if (mode === "header") {
      return (
        <nav
          ref={ref}
          className={cn("ds-principal-menu", "ds-principal-menu--header", className)}
          style={{
            width: "100%",
            background: tokens.colors.primary,
            padding: tokens.spacing.md,
            display: "flex",
            alignItems: "center",
            gap: tokens.spacing.sm,
          }}
          {...props}
        >
          <button type="button" style={{ border: "none", background: "transparent", color: tokens.colors.white, fontSize: "20px", cursor: "pointer" }} aria-label="Open menu">☰</button>
          <input
            aria-label="Search"
            placeholder="Buscar"
            style={{
              flex: 1,
              border: "none",
              borderRadius: tokens.radius.xs,
              padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
              color: tokens.colors.textSecondary,
              fontFamily: "Solomon Sans",
            }}
          />
          <button type="button" style={{ border: "none", background: "transparent", color: tokens.colors.white, fontSize: "18px", cursor: "pointer" }} aria-label="Notifications">🔔</button>
          <span aria-hidden style={{ width: "28px", height: "28px", borderRadius: "50%", background: tokens.colors.neutral300, display: "inline-block" }} />
        </nav>
      );
    }

    return (
      <nav
        ref={ref}
        className={cn("ds-principal-menu", "ds-principal-menu--floating", className)}
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "420px",
          background: tokens.colors.white,
          borderRadius: tokens.radius.sm,
          overflow: "hidden",
        }}
        {...props}
      >
        <div>
          <div style={{ background: tokens.colors.primary, color: tokens.colors.white, display: "flex", justifyContent: "space-between", alignItems: "center", padding: tokens.spacing.md }}>
            <strong style={{ fontFamily: "Solomon Sans" }}>eficacia</strong>
            <button type="button" aria-label="Close menu" style={{ border: "none", background: "transparent", color: tokens.colors.white, fontSize: "24px", cursor: "pointer" }}>×</button>
          </div>

          {resolvedItems.slice(0, 8).map((item, index) => (
            <PrincipalMenuMenuItem key={`${item}-${index}`} itemMenuText={item} />
          ))}
        </div>

        <div>
          {resolvedItems.slice(8).map((item, index) => (
            <PrincipalMenuMenuItem key={`${item}-bottom-${index}`} itemMenuText={item} />
          ))}
        </div>
      </nav>
    );
  }
);

PrincipalMenu.displayName = "PrincipalMenu";
