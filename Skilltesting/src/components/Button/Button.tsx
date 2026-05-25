import * as React from "react";
import { cn } from "@/lib/cn";
import { tokens } from "@/Token";

type ButtonVariant = "primary" | "default" | "dashed" | "text" | "link";
type ButtonSize = "small" | "default" | "large";
type ButtonState = "default" | "hover" | "focused" | "pressed" | "disabled";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  state?: ButtonState;
  ghost?: boolean;
  danger?: boolean;
  disabled?: boolean;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const getButtonColors = (
  variant: ButtonVariant,
  state: ButtonState,
  ghost: boolean,
  danger: boolean
) => {
  const dangerBase = tokens.colors.error;
  const dangerHover = tokens.colors.errorHover;
  const dangerActive = tokens.colors.errorActive;

  const primaryBase = tokens.colors.primary;
  const primaryHover = tokens.colors.primaryHover;
  const primaryActive = tokens.colors.primaryActive;

  const baseText = tokens.colors.text;
  const baseBorder = tokens.colors.border;

  if (state === "disabled") {
    return {
      backgroundColor: tokens.colors.bgContainerDisabled,
      borderColor: baseBorder,
      color: tokens.colors.textDisabled,
    };
  }

  if (variant === "primary") {
    if (state === "hover") {
      return {
        backgroundColor: danger ? dangerHover : primaryHover,
        borderColor: danger ? dangerHover : primaryHover,
        color: tokens.colors.textLightSolid,
      };
    }
    if (state === "pressed") {
      return {
        backgroundColor: danger ? dangerActive : primaryActive,
        borderColor: danger ? dangerActive : primaryActive,
        color: tokens.colors.textLightSolid,
      };
    }
    return {
      backgroundColor: ghost ? "transparent" : danger ? dangerBase : primaryBase,
      borderColor: danger ? dangerBase : primaryBase,
      color: ghost ? (danger ? dangerBase : primaryBase) : tokens.colors.textLightSolid,
    };
  }

  if (variant === "text" || variant === "link") {
    if (state === "hover") {
      return {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: danger ? dangerHover : primaryHover,
      };
    }
    if (state === "pressed") {
      return {
        backgroundColor: "transparent",
        borderColor: "transparent",
        color: danger ? dangerActive : primaryActive,
      };
    }
    return {
      backgroundColor: "transparent",
      borderColor: "transparent",
      color: danger ? dangerBase : variant === "link" ? primaryBase : baseText,
    };
  }

  if (state === "hover") {
    return {
      backgroundColor: ghost ? "transparent" : tokens.colors.bgContainer,
      borderColor: danger ? dangerHover : primaryHover,
      color: danger ? dangerHover : primaryHover,
    };
  }
  if (state === "pressed") {
    return {
      backgroundColor: ghost ? "transparent" : tokens.colors.bgContainer,
      borderColor: danger ? dangerActive : primaryActive,
      color: danger ? dangerActive : primaryActive,
    };
  }

  return {
    backgroundColor: ghost ? "transparent" : tokens.colors.bgContainer,
    borderColor: danger ? dangerBase : baseBorder,
    color: danger ? dangerBase : baseText,
  };
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "default",
      size = "default",
      state = "default",
      ghost = false,
      danger = false,
      disabled,
      htmlType = "button",
      children,
      ...props
    },
    ref
  ) => {
    const resolvedState = disabled ? "disabled" : state;
    const sizeConfig = tokens.components.button.variants.size[size];
    const colors = getButtonColors(variant, resolvedState, ghost, danger);

    const style: React.CSSProperties = {
      height: sizeConfig.height,
      padding: sizeConfig.padding,
      borderRadius: tokens.radius.md,
      fontFamily: tokens.typography.baseStrong.fontFamily,
      fontSize: tokens.typography.baseStrong.fontSize,
      fontWeight: tokens.typography.baseStrong.fontWeight,
      lineHeight: tokens.typography.baseStrong.lineHeight,
      borderWidth: "1px",
      borderStyle: variant === "dashed" ? "dashed" : "solid",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: tokens.spacing.xs,
      cursor: resolvedState === "disabled" ? "not-allowed" : "pointer",
      transition: "all 0.2s ease",
      boxShadow:
        resolvedState === "focused"
          ? danger
            ? tokens.shadows.errorActiveShadow
            : tokens.shadows.focusPrimary
          : "none",
      ...colors,
    };

    return (
      <button
        ref={ref}
        type={htmlType}
        className={cn(
          "ds-button",
          `ds-button--${variant}`,
          `ds-button--${size}`,
          `ds-button--${resolvedState}`,
          ghost && "ds-button--ghost",
          danger && "ds-button--danger",
          className
        )}
        style={style}
        disabled={resolvedState === "disabled"}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
