import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

const DEFAULT_AVATAR = "http://localhost:3845/assets/76968f9d7d897431c4ace3d4f1989e04d1b9c6b3.png";

export interface NewsCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  body?: string;
  caption?: string;
  avatarSrc?: string;
}

export const NewsCard = React.forwardRef<HTMLDivElement, NewsCardProps>(
  (
    {
      className,
      title = "Nuevo equipo en tu portafolio!",
      body = "Echale un vistazo al nuevo Motorola G20",
      caption = "Hace unos segundos",
      avatarSrc = DEFAULT_AVATAR,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("ds-news-card", className)}
        style={{
          width: "321px",
          background: tokens.colors.backgroundSecondary,
          borderRadius: tokens.radius.sm,
          padding: tokens.spacing.md,
          display: "flex",
          alignItems: "flex-start",
          gap: tokens.spacing.md,
        }}
        {...props}
      >
        <img
          src={avatarSrc}
          alt=""
          aria-hidden
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "9999px",
            objectFit: "cover",
            flexShrink: 0,
          }}
        />

        <div
          style={{
            minWidth: 0,
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: tokens.spacing.sm,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: tokens.spacing.none }}>
            <p
              style={{
                margin: 0,
                color: tokens.colors.primary,
                fontFamily: tokens.typography.caption.fontFamily,
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              {title}
            </p>
            <p
              style={{
                margin: 0,
                color: tokens.colors.textSecondary,
                fontFamily: tokens.typography.body.fontFamily,
                fontSize: tokens.typography.caption.fontSize,
                fontWeight: tokens.typography.body.fontWeight,
                lineHeight: 1,
              }}
            >
              {body}
            </p>
          </div>

          <p
            style={{
              margin: 0,
              color: tokens.colors.textSecondary,
              fontFamily: tokens.typography.body.fontFamily,
              fontSize: tokens.typography.caption.fontSize,
              fontWeight: tokens.typography.body.fontWeight,
              lineHeight: 1,
            }}
          >
            {children ?? caption}
          </p>
        </div>
      </div>
    );
  }
);

NewsCard.displayName = "NewsCard";
