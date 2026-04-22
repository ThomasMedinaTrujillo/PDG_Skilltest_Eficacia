import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

type CategoryCardState = "complete" | "incomplete" | "prueba";

const ICON_COMPLETE = "http://localhost:3845/assets/5e0bd55b4114cf0c8f79691c1300db2ee15626e0.svg";
const ICON_INCOMPLETE = "http://localhost:3845/assets/8dd1c86c663e94d8cb7eb07ec8cd1c992e7101be.svg";
const ICON_PRUEBA = "http://localhost:3845/assets/bb1cf9e14a06e9cdde58e21859a0e54d371ad790.svg";
const CHECK_ICON = "http://localhost:3845/assets/9345b44c9c9e7fa600eeb8d53ef2b209a47af1d0.svg";

export interface CategoryCardProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: CategoryCardState;
  title?: string;
  text?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  leftIcon?: React.ReactNode;
}

const getStateColor = (state: CategoryCardState): string => {
  if (state === "complete") {
    return tokens.colors.primary;
  }
  if (state === "prueba") {
    return tokens.colors.warning;
  }
  return tokens.colors.textSecondary;
};

const getIconByState = (state: CategoryCardState): string => {
  if (state === "complete") {
    return ICON_COMPLETE;
  }
  if (state === "prueba") {
    return ICON_PRUEBA;
  }
  return ICON_INCOMPLETE;
};

export const CategoryCard = React.forwardRef<HTMLDivElement, CategoryCardProps>(
  (
    {
      className,
      state = "complete",
      title = "Nombre Categoria",
      text = "# Marca | # Propias",
      checked,
      defaultChecked = state === "complete",
      onCheckedChange,
      leftIcon,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;
    const disabled = state === "incomplete";

    const toggleChecked = () => {
      if (disabled) {
        return;
      }
      const next = !isChecked;
      if (!isControlled) {
        setInternalChecked(next);
      }
      onCheckedChange?.(next);
    };

    return (
      <div
        ref={ref}
        className={cn("ds-category-card", `ds-category-card--${state}`, className)}
        style={{
          width: "339px",
          minHeight: "60px",
          borderRadius: tokens.radius.sm,
          background: tokens.colors.backgroundSecondary,
          padding: tokens.spacing.sm,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: tokens.spacing.md,
        }}
        {...props}
      >
        <div style={{ minWidth: 0, flex: 1, display: "flex", alignItems: "center", gap: tokens.spacing.md }}>
          <span style={{ width: "24px", height: "24px", display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
            {leftIcon ?? <img src={getIconByState(state)} alt="" aria-hidden style={{ width: "24px", height: "24px", objectFit: "contain" }} />}
          </span>

          <span style={{ minWidth: 0, display: "flex", flexDirection: "column", gap: "1px" }}>
            <span
              style={{
                margin: 0,
                color: getStateColor(state),
                fontFamily: tokens.typography.body.fontFamily,
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              {title}
            </span>
            <span
              style={{
                margin: 0,
                color: tokens.colors.darkGrey,
                fontFamily: tokens.typography.body.fontFamily,
                fontSize: tokens.typography.caption.fontSize,
                fontWeight: 400,
                lineHeight: 1,
              }}
            >
              {text}
            </span>
          </span>
        </div>

        <button
          type="button"
          onClick={toggleChecked}
          disabled={disabled}
          className={cn("ds-category-card__toggle", isChecked && "ds-category-card__toggle--checked")}
          style={{
            width: "24px",
            height: "24px",
            border: "none",
            background: "transparent",
            padding: 0,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.8 : 1,
            flexShrink: 0,
          }}
          aria-pressed={isChecked}
          aria-label="Marcar categoria"
        >
          {isChecked ? (
            <span
              style={{
                width: "18px",
                height: "18px",
                borderRadius: "3px",
                background: tokens.colors.primary,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={CHECK_ICON} alt="" aria-hidden style={{ width: "10px", height: "10px", objectFit: "contain" }} />
            </span>
          ) : (
            <span
              style={{
                width: "18px",
                height: "18px",
                borderRadius: tokens.radius.xs,
                border: `1px solid ${tokens.colors.textSecondary}`,
                display: "inline-block",
              }}
            />
          )}
        </button>
      </div>
    );
  }
);

CategoryCard.displayName = "CategoryCard";
