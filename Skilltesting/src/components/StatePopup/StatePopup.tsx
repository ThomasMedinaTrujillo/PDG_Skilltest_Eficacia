import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

type PopupTone = "success" | "pending" | "error";

export interface StatePopupProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: PopupTone;
  stateText?: string;
  title?: string;
  subtitle?: string;
  executionText?: string;
  description?: string;
  primaryLabel?: string;
  onPrimaryAction?: () => void;
  onClose?: () => void;
}

const toneColor: Record<PopupTone, string> = {
  success: tokens.colors.success,
  pending: tokens.colors.pending,
  error: tokens.colors.warning,
};

export const StatePopup = React.forwardRef<HTMLDivElement, StatePopupProps>(
  (
    {
      className,
      tone = "success",
      stateText = "Text state",
      title = "Titulo pop-up",
      subtitle = "Subtitulo dropdown",
      executionText = "Ejecucion (0/0)",
      description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      primaryLabel = "button",
      onPrimaryAction,
      onClose,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("ds-state-popup", `ds-state-popup--${tone}`, className)}
        style={{
          width: "369px",
          background: tokens.colors.backgroundSecondary,
          borderRadius: tokens.radius.sm,
          padding: tokens.spacing.md,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: tokens.spacing.md,
        }}
        {...props}
      >
        <div style={{ width: "100%", display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
          <p
            style={{
              margin: 0,
              width: "100%",
              textAlign: "center",
              color: toneColor[tone],
              fontFamily: tokens.typography.body.fontFamily,
              fontSize: tokens.typography.body.fontSize,
              fontWeight: 700,
              lineHeight: 1,
            }}
          >
            {stateText}
          </p>

          <button
            type="button"
            onClick={onClose}
            className={cn("ds-state-popup__close")}
            style={{
              border: "none",
              background: "transparent",
              color: tokens.colors.primary,
              width: "24px",
              height: "24px",
              fontSize: "24px",
              lineHeight: 1,
              padding: 0,
              cursor: "pointer",
            }}
            aria-label="Cerrar"
          >
            x
          </button>
        </div>

        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: tokens.spacing.xl }}>
          <div style={{ width: "100%", display: "flex", flexDirection: "column", textAlign: "center" }}>
            <h3
              style={{
                margin: 0,
                color: tokens.colors.primary,
                fontFamily: tokens.typography.heading1.fontFamily,
                fontSize: "40px",
                fontWeight: tokens.typography.heading1.fontWeight,
                lineHeight: 1,
              }}
            >
              {title}
            </h3>
            <p
              style={{
                margin: 0,
                color: tokens.colors.neutral700,
                fontFamily: tokens.typography.body.fontFamily,
                fontSize: tokens.typography.caption.fontSize,
                fontWeight: tokens.typography.body.fontWeight,
                lineHeight: 1,
              }}
            >
              {subtitle}
            </p>
          </div>

          <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
            <p
              style={{
                margin: 0,
                color: tokens.colors.primary,
                fontFamily: tokens.typography.body.fontFamily,
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              {executionText}
            </p>
            <p
              style={{
                margin: 0,
                color: tokens.colors.neutral700,
                fontFamily: tokens.typography.body.fontFamily,
                fontSize: tokens.typography.caption.fontSize,
                fontWeight: tokens.typography.body.fontWeight,
                lineHeight: 1,
              }}
            >
              {children ?? description}
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onPrimaryAction}
          className={cn("ds-state-popup__button")}
          style={{
            width: "100%",
            minHeight: "48px",
            border: "none",
            borderRadius: tokens.radius.sm,
            background: tokens.colors.primary,
            color: tokens.colors.white,
            fontFamily: tokens.typography.body.fontFamily,
            fontSize: "29px",
            fontWeight: 600,
            lineHeight: 1,
            padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
            cursor: "pointer",
          }}
        >
          {primaryLabel}
        </button>
      </div>
    );
  }
);

StatePopup.displayName = "StatePopup";
