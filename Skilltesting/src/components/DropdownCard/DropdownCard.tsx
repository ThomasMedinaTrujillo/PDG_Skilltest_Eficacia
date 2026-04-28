import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

export interface DropdownCardProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: "card-open" | "card-close";
  header?: string;
  caption?: string;
  title?: string;
  subtitle?: string;
  body?: string;
  textState?: string;
  onToggle?: () => void;
}

export const DropdownCard = React.forwardRef<HTMLDivElement, DropdownCardProps>(
  (
    {
      className,
      state = "card-close",
      header = "Verificacion de limpieza en gondola",
      caption = "Unica ejecucion",
      title = "Detalle",
      subtitle = "Visita comercial completa",
      body = "Lorem ipsum dolor sit amet.",
      textState = "Text state",
      onToggle,
      ...props
    },
    ref
  ) => {
    const isOpen = state === "card-open";

    return (
      <div
        ref={ref}
        className={cn("ds-dropdown-card", `ds-dropdown-card--${state}`, className)}
        style={{
          background: tokens.colors.white,
          borderRadius: tokens.radius.sm,
          boxShadow: tokens.shadows.card,
          padding: tokens.spacing.sm,
          display: "flex",
          flexDirection: "column",
          gap: isOpen ? tokens.spacing.sm : tokens.spacing.none,
        }}
        {...props}
      >
        <button
          type="button"
          onClick={onToggle}
          className="ds-dropdown-card__head"
          style={{
            border: "none",
            width: "100%",
            background: "transparent",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "left",
            cursor: "pointer",
          }}
        >
          <span style={{ display: "flex", flexDirection: "column", gap: tokens.spacing.xs }}>
            <span style={{ color: tokens.colors.primary, fontFamily: "Solomon Sans", fontSize: "14px", fontWeight: 600 }}>{header}</span>
            <span style={{ color: tokens.colors.textSecondary, fontFamily: "Solomon Sans", fontSize: "12px" }}>{caption}</span>
          </span>
          <span aria-hidden style={{ color: tokens.colors.primary, fontSize: "20px" }}>{isOpen ? "⌄" : "›"}</span>
        </button>

        {isOpen && <hr style={{ border: 0, borderTop: `1px solid ${tokens.colors.neutral300}` }} />}

        {isOpen && (
          <div style={{ display: "flex", justifyContent: "space-between", color: tokens.colors.textSecondary, fontFamily: "Solomon Sans" }}>
            <span style={{ fontWeight: 600 }}>Estado</span>
            <span style={{ color: tokens.colors.success, fontWeight: 700 }}>{textState}</span>
          </div>
        )}

        {isOpen && (
          <div style={{ display: "flex", flexDirection: "column", gap: tokens.spacing.sm, color: tokens.colors.textSecondary, fontFamily: "Solomon Sans" }}>
            <span style={{ color: tokens.colors.textDisabled, fontWeight: 600 }}>{title}</span>
            <span style={{ color: tokens.colors.buttonDisabled, fontSize: "12px" }}>{subtitle}</span>
            <span style={{ fontSize: "12px" }}>{body}</span>
          </div>
        )}
      </div>
    );
  }
);

DropdownCard.displayName = "DropdownCard";
