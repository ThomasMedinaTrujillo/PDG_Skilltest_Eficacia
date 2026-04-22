import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

const HERO_IMAGE = "http://localhost:3845/assets/8e95e2d423857691449d0c8f5691331e1c1cb27f.png";
const HERO_MASK = "http://localhost:3845/assets/4c91ee4c74f7113b47ee2d9d2ef5653ed623d369.svg";
const AVATAR_IMAGE = "http://localhost:3845/assets/76968f9d7d897431c4ace3d4f1989e04d1b9c6b3.png";
const ICON_LIKE = "http://localhost:3845/assets/275384bef1f75274127ad9c10a465f195f88a49b.svg";
const ICON_SHARE = "http://localhost:3845/assets/fffbc644c7d9646a6b34c2c0f3e2ceff190170b5.svg";
const ICON_COMMENT = "http://localhost:3845/assets/263aa0c65b6ad75cef8ddc118990ba34ab2130d8.svg";

type ActionType = "like" | "share" | "comment";

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  caption?: string;
  title?: string;
  body?: string;
  showImage?: boolean;
  showAvatar?: boolean;
  activeAction?: ActionType;
  defaultActiveAction?: ActionType;
  onActiveActionChange?: (action: ActionType) => void;
}

const ActionButton = ({
  icon,
  label,
  selected,
  onClick,
}: {
  icon: string;
  label: string;
  selected: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn("ds-testimonial-card__action", selected && "ds-testimonial-card__action--active")}
      style={{
        border: "none",
        background: "transparent",
        display: "inline-flex",
        alignItems: "center",
        gap: tokens.spacing.xs,
        padding: tokens.spacing.none,
        cursor: "pointer",
      }}
    >
      <img src={icon} alt="" aria-hidden style={{ width: "18px", height: "18px", objectFit: "contain" }} />
      <span
        style={{
          color: selected ? tokens.colors.primary : tokens.colors.textSecondary,
          fontFamily: tokens.typography.body.fontFamily,
          fontSize: "10px",
          fontWeight: 700,
          lineHeight: 1,
          whiteSpace: "nowrap",
        }}
      >
        {label}
      </span>
    </button>
  );
};

export const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  (
    {
      className,
      caption = "Hace una hora",
      title = "Ha llegado Diana Lora, bienvenida!",
      body = "Se une a trade marketing Cali, le damos la bienvenida a este equipo de alto rendimiento.",
      showImage = true,
      showAvatar = true,
      activeAction,
      defaultActiveAction = "like",
      onActiveActionChange,
      ...props
    },
    ref
  ) => {
    const [internalAction, setInternalAction] = React.useState<ActionType>(defaultActiveAction);
    const isControlled = activeAction !== undefined;
    const currentAction = isControlled ? activeAction : internalAction;

    const setAction = (next: ActionType) => {
      if (!isControlled) {
        setInternalAction(next);
      }
      onActiveActionChange?.(next);
    };

    return (
      <div
        ref={ref}
        className={cn("ds-testimonial-card", className)}
        style={{
          width: "339px",
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
        }}
        {...props}
      >
        {showImage && (
          <div style={{ width: "100%", height: "97px", position: "relative", overflow: "hidden", borderRadius: `${tokens.radius.sm} ${tokens.radius.sm} 0 0` }}>
            <div
              style={{
                position: "absolute",
                inset: 0,
                maskImage: `url(${HERO_MASK})`,
                maskSize: "339px 97px",
                maskRepeat: "no-repeat",
              }}
            >
              <img src={HERO_IMAGE} alt="" aria-hidden style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
        )}

        <div
          style={{
            width: "100%",
            background: tokens.colors.backgroundSecondary,
            borderRadius: showImage ? `0 0 ${tokens.radius.sm} ${tokens.radius.sm}` : tokens.radius.sm,
            padding: tokens.spacing.md,
            display: "flex",
            flexDirection: "column",
            gap: tokens.spacing.md,
          }}
        >
          <div style={{ width: "100%", display: "flex", alignItems: "center", gap: tokens.spacing.md }}>
            {showAvatar && (
              <img
                src={AVATAR_IMAGE}
                alt=""
                aria-hidden
                style={{ width: "40px", height: "40px", borderRadius: "9999px", objectFit: "cover", flexShrink: 0 }}
              />
            )}

            <div style={{ minWidth: 0, flex: 1, display: "flex", flexDirection: "column" }}>
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
                {caption}
              </p>
              <p
                style={{
                  margin: 0,
                  color: tokens.colors.primary,
                  fontFamily: tokens.typography.body.fontFamily,
                  fontSize: tokens.typography.body.fontSize,
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {title}
              </p>
            </div>
          </div>

          <p
            style={{
              margin: 0,
              color: tokens.colors.textSecondary,
              fontFamily: tokens.typography.body.fontFamily,
              fontSize: tokens.typography.caption.fontSize,
              fontWeight: 400,
              lineHeight: 1,
            }}
          >
            {body}
          </p>

          <div style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <ActionButton icon={ICON_LIKE} label="Te gusta" selected={currentAction === "like"} onClick={() => setAction("like")} />
            <ActionButton icon={ICON_SHARE} label="Compartelo" selected={currentAction === "share"} onClick={() => setAction("share")} />
            <ActionButton icon={ICON_COMMENT} label="Comenta" selected={currentAction === "comment"} onClick={() => setAction("comment")} />
          </div>
        </div>
      </div>
    );
  }
);

TestimonialCard.displayName = "TestimonialCard";
