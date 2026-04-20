import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

type ButtonSize = "small" | "medium";
type ButtonTone = "primary" | "error";
type ButtonState = "active" | "disable" | "pressed";
type ButtonStyle = "contained" | "outline" | "text";
type ButtonOrientation = "left" | "center";

export interface MobileButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  color?: ButtonTone;
  state?: ButtonState;
  styleType?: ButtonStyle;
  orientation?: ButtonOrientation;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const MobileButtons = React.forwardRef<HTMLButtonElement, MobileButtonsProps>(
  (
    {
      className,
      size = "small",
      color = "primary",
      state = "active",
      styleType = "contained",
      orientation = "center",
      leftIcon,
      rightIcon,
      children = "button",
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || state === "disable";
    const height = size === "small" ? "41px" : "51px";

    const palette = color === "primary"
      ? {
          base: tokens.colors.primary,
          pressed: tokens.colors.buttonSelected,
          text: tokens.colors.white,
          subtle: "rgba(153,179,218,0.3)",
        }
      : {
          base: tokens.colors.warning,
          pressed: tokens.colors.buttonBgContentPressed,
          text: tokens.colors.white,
          subtle: tokens.colors.buttonBgOutlineErrorPressed,
        };

    const activeBg = styleType === "contained" ? palette.base : "transparent";
    const pressedBg = styleType === "contained" ? palette.pressed : palette.subtle;
    const background = state === "pressed" ? pressedBg : activeBg;
    const border = styleType === "outline" ? `1px solid ${palette.base}` : "1px solid transparent";
    const textColor = styleType === "contained" ? palette.text : palette.base;

    return (
      <button
        ref={ref}
        type="button"
        disabled={isDisabled}
        className={cn(
          "ds-mobile-button",
          `ds-mobile-button--${size}`,
          `ds-mobile-button--${color}`,
          `ds-mobile-button--${state}`,
          `ds-mobile-button--${styleType}`,
          `ds-mobile-button--${orientation}`,
          className
        )}
        style={{
          width: "100%",
          minHeight: height,
          borderRadius: tokens.radius.sm,
          border,
          background,
          color: isDisabled ? tokens.colors.buttonDisabled : textColor,
          opacity: isDisabled ? 0.85 : 1,
          padding: `${tokens.spacing.sm} ${tokens.spacing.sm}`,
          display: "flex",
          alignItems: "center",
          justifyContent: orientation === "left" ? "space-between" : "center",
          gap: tokens.spacing.sm,
          fontFamily: "Solomon Sans",
          fontSize: size === "small" ? "14px" : "16px",
          fontWeight: 600,
          cursor: isDisabled ? "not-allowed" : "pointer",
        }}
        {...props}
      >
        <span style={{ display: "inline-flex", alignItems: "center", gap: tokens.spacing.sm }}>
          {leftIcon}
          <span>{children}</span>
        </span>
        {orientation === "left" && <span aria-hidden>{rightIcon}</span>}
      </button>
    );
  }
);

MobileButtons.displayName = "MobileButtons";
