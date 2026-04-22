import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

const PDF_ICON = "http://localhost:3845/assets/36380dc292f30406dd0a51c37ecb407a58c326c7.svg";

type InfoCardVariant = "default" | "with-image";

export interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: InfoCardVariant;
  title?: string;
  subtitle?: string;
  body?: string;
  showButton?: boolean;
  buttonLabel?: string;
  onButtonClick?: () => void;
}

export const InfoCard = React.forwardRef<HTMLDivElement, InfoCardProps>(
  (
    {
      className,
      variant = "with-image",
      title = "Titulo",
      subtitle = "Subtitulo",
      body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      showButton = true,
      buttonLabel = "Label",
      onButtonClick,
      ...props
    },
    ref
  ) => {
    const withImage = variant === "with-image";

    return (
      <div
        ref={ref}
        className={cn("ds-info-card", `ds-info-card--${variant}`, className)}
        style={{
          width: "339px",
          background: tokens.colors.backgroundSecondary,
          borderRadius: tokens.radius.sm,
          padding: "8px 12px",
          display: "flex",
          alignItems: withImage ? "center" : "flex-start",
          justifyContent: "space-between",
          gap: tokens.spacing.md,
        }}
        {...props}
      >
        <div style={{ minWidth: 0, flex: 1, display: "flex", flexDirection: "column", gap: withImage ? tokens.spacing.md : tokens.spacing.xs }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p
              style={{
                margin: 0,
                color: withImage ? tokens.colors.primary : tokens.colors.primary,
                fontFamily: tokens.typography.body.fontFamily,
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              {title}
            </p>

            {withImage && (
              <p
                style={{
                  margin: 0,
                  color: tokens.colors.textSecondary,
                  fontFamily: tokens.typography.body.fontFamily,
                  fontSize: "10px",
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                {subtitle}
              </p>
            )}
          </div>

          <p
            style={{
              margin: 0,
              color: tokens.colors.textSecondary,
              fontFamily: tokens.typography.body.fontFamily,
              fontSize: tokens.typography.body.fontSize,
              fontWeight: tokens.typography.body.fontWeight,
              lineHeight: 1,
            }}
          >
            {body}
          </p>

          {!withImage && showButton && (
            <button
              type="button"
              onClick={onButtonClick}
              className={cn("ds-info-card__button")}
              style={{
                alignSelf: "flex-end",
                border: "none",
                background: "transparent",
                color: tokens.colors.primary,
                fontFamily: tokens.typography.body.fontFamily,
                fontSize: tokens.typography.body.fontSize,
                fontWeight: 600,
                lineHeight: 1,
                padding: tokens.spacing.none,
                cursor: "pointer",
              }}
            >
              {buttonLabel}
            </button>
          )}
        </div>

        {withImage && (
          <div
            style={{
              width: "97px",
              height: "108px",
              borderRadius: tokens.radius.xs,
              background: tokens.colors.primary,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: tokens.spacing.md,
              flexShrink: 0,
            }}
            aria-hidden
          >
            <img src={PDF_ICON} alt="" style={{ width: "36px", height: "36px", objectFit: "contain" }} />
          </div>
        )}
      </div>
    );
  }
);

InfoCard.displayName = "InfoCard";
