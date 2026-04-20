import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

type CardCheckState = "enabled" | "disabled" | "prueba";

export interface CardCheckProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: CardCheckState;
  title?: string;
  subTitle?: string;
  label?: string;
  number?: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const CardCheck = React.forwardRef<HTMLButtonElement, CardCheckProps>(
  (
    {
      className,
      state = "enabled",
      title = "Categoria 1",
      subTitle = "label",
      label = "| TQ",
      number = "2",
      checked = false,
      onCheckedChange,
      ...props
    },
    ref
  ) => {
    const isError = state === "prueba";
    const isDisabled = state === "disabled";
    const titleColor = isError ? tokens.colors.warning : isDisabled ? tokens.colors.textSecondary : tokens.colors.primary;

    return (
      <button
        ref={ref}
        type="button"
        className={cn("ds-card-check", `ds-card-check--${state}`, className)}
        style={{
          width: "100%",
          border: "none",
          borderRadius: tokens.radius.sm,
          background: tokens.colors.white,
          boxShadow: tokens.shadows.card,
          padding: tokens.spacing.sm,
          display: "flex",
          alignItems: "center",
          gap: tokens.spacing.sm,
          textAlign: "left",
          cursor: isDisabled ? "not-allowed" : "pointer",
          opacity: isDisabled ? 0.8 : 1,
        }}
        {...props}
      >
        <span aria-hidden style={{ width: "24px", height: "24px", borderRadius: tokens.radius.xs, background: titleColor, display: "inline-block" }} />

        <span style={{ flex: 1, display: "flex", alignItems: "center", gap: tokens.spacing.xs }}>
          <span style={{ display: "flex", flexDirection: "column", gap: tokens.spacing.xs }}>
            <span style={{ color: titleColor, fontFamily: "Solomon Sans", fontSize: "14px", fontWeight: 600 }}>{title}</span>
            <span style={{ color: titleColor, fontFamily: "Solomon Sans", fontSize: "12px" }}>{subTitle}</span>
          </span>
          <span style={{ color: titleColor, fontFamily: "Solomon Sans", fontSize: "12px" }}>{label}</span>
        </span>

        <span style={{ color: titleColor, fontFamily: "Solomon Sans", fontSize: "16px", fontWeight: 600 }}>{number}</span>

        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onCheckedChange?.(e.target.checked)}
          style={{ width: "18px", height: "18px", accentColor: isError ? tokens.colors.warning : tokens.colors.textSecondary }}
        />

        <span aria-hidden style={{ color: titleColor, fontSize: "20px", lineHeight: 1 }}>›</span>
      </button>
    );
  }
);

CardCheck.displayName = "CardCheck";
