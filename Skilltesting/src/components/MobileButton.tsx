import * as React from "react";
import { cn } from "@/lib/cn";
import { tokens } from "@/Token";
import arrowLeft from "@/assets/icons/arrow-left.svg";
import arrowRight from "@/assets/icons/arrow-right.svg";
import "./MobileButton.css";

const c = tokens.colors;
const sp = tokens.spacing;
const sw = tokens.spacing.strokeWidth;
const rad = tokens.radius;
const typo = tokens.typography.mobile;

export type MobileButtonColor = "primary" | "error";
export type MobileButtonSize = "sm" | "md";
export type MobileButtonStyle = "contained" | "outline" | "text";
export type MobileButtonOrientation = "center" | "left";

function cssVar(name: string, value: string): React.CSSProperties {
  return { [name]: value } as React.CSSProperties;
}

function skin(
  tone: MobileButtonColor,
  look: MobileButtonStyle,
  disabled: boolean,
): React.CSSProperties {
  const stroke = c.buttons.disable;
  const disableFg = c.text.disable;

  if (disabled) {
    if (look === "contained") {
      return {
        ...cssVar("--mb-bg", c.buttons.disable),
        ...cssVar("--mb-fg", disableFg),
        ...cssVar("--mb-border-w", "0px"),
      };
    }
    if (look === "outline") {
      return {
        ...cssVar("--mb-bg", "transparent"),
        ...cssVar("--mb-fg", disableFg),
        ...cssVar("--mb-border", stroke),
        ...cssVar("--mb-border-w", sw.buttonOutline),
      };
    }
    return {
      ...cssVar("--mb-bg", "transparent"),
      ...cssVar("--mb-fg", disableFg),
      ...cssVar("--mb-border-w", "0px"),
    };
  }

  if (tone === "primary") {
    if (look === "contained") {
      return {
        ...cssVar("--mb-bg", c.buttons.background),
        ...cssVar("--mb-bg-hover", c.buttons.bgHover),
        ...cssVar("--mb-bg-active", c.buttons.selected),
        ...cssVar("--mb-fg", c.text.nsWhite),
        ...cssVar("--mb-fg-active", c.primaries.primaryWhiteBackground),
        ...cssVar("--mb-border-w", "0px"),
      };
    }
    if (look === "outline") {
      return {
        ...cssVar("--mb-bg", "transparent"),
        ...cssVar("--mb-bg-hover", c.buttons.bgOutlineHover),
        ...cssVar("--mb-bg-active", c.buttons.bgOutlinePressed),
        ...cssVar("--mb-fg", c.primaries.primaryBlue),
        ...cssVar("--mb-border", c.buttons.background),
        ...cssVar("--mb-border-w", sw.buttonOutline),
      };
    }
    return {
      ...cssVar("--mb-bg", "transparent"),
      ...cssVar("--mb-bg-hover", c.buttons.bgOutlineHover),
      ...cssVar("--mb-bg-active", c.buttons.bgOutlinePressed),
      ...cssVar("--mb-fg", c.primaries.primaryBlue),
      ...cssVar("--mb-border-w", "0px"),
    };
  }

  if (look === "contained") {
    return {
      ...cssVar("--mb-bg", c.semantic.warningError),
      ...cssVar("--mb-bg-hover", c.buttons.bgContainedErrorHover),
      ...cssVar("--mb-bg-active", c.buttons.bgContentPressed),
      ...cssVar("--mb-fg", c.text.nsWhite),
      ...cssVar("--mb-fg-active", c.primaries.primaryWhiteBackground),
      ...cssVar("--mb-border-w", "0px"),
    };
  }
  if (look === "outline") {
    return {
      ...cssVar("--mb-bg", "transparent"),
      ...cssVar("--mb-bg-hover", c.buttons.bgOutlineErrorHover),
      ...cssVar("--mb-bg-active", c.buttons.bgOutlineErrorPressed),
      ...cssVar("--mb-fg", c.semantic.warningError),
      ...cssVar("--mb-border", c.semantic.warningError),
      ...cssVar("--mb-border-w", sw.buttonOutline),
    };
  }
  return {
    ...cssVar("--mb-bg", "transparent"),
    ...cssVar("--mb-bg-hover", c.buttons.bgOutlineErrorHover),
    ...cssVar("--mb-bg-active", c.buttons.bgOutlineErrorPressed),
    ...cssVar("--mb-fg", c.semantic.warningError),
    ...cssVar("--mb-border-w", "0px"),
  };
}

export interface MobileButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: MobileButtonColor;
  size?: MobileButtonSize;
  variant?: MobileButtonStyle;
  orientation?: MobileButtonOrientation;
  label?: string;
  showIconStart?: boolean;
  showIconEnd?: boolean;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}

export const MobileButton = React.forwardRef<HTMLButtonElement, MobileButtonProps>(
  (
    {
      className,
      color = "primary",
      size = "sm",
      variant = "contained",
      orientation = "center",
      label = "button",
      showIconStart = false,
      showIconEnd = false,
      iconStart,
      iconEnd,
      disabled,
      children,
      style,
      ...rest
    },
    ref,
  ) => {
    const fontSize =
      size === "sm" ? typo.buttonSmall.fontSize : typo.buttonMedium.fontSize;
    const py = size === "sm" ? sp.padding.md : sp.padding.lg;
    const px = sp.padding.sm;

    const baseStyle: React.CSSProperties = {
      ...skin(color, variant, Boolean(disabled)),
      ...cssVar("--mb-radius", rad.sm),
      ...cssVar("--mb-px", px),
      ...cssVar("--mb-py", py),
      ...cssVar("--mb-gap", sp.padding.sm),
      ...cssVar("--mb-focus", c.primaries.primaryBlue),
      fontSize,
      lineHeight: 1,
    };

    const content = children ?? <span className="ds-mobile-button__label">{label}</span>;

    const start =
      showIconStart &&
      (iconStart ?? (
        <img src={arrowLeft} alt="" className="ds-mobile-button__icon" width={24} height={24} />
      ));

    const end =
      showIconEnd &&
      (iconEnd ?? (
        <img src={arrowRight} alt="" className="ds-mobile-button__icon" width={24} height={24} />
      ));

    const inner =
      orientation === "left" ? (
        <span className={cn("ds-mobile-button__row", "ds-mobile-button__row--fill")}>
          <span className="ds-mobile-button__row">
            {start}
            {content}
          </span>
          {end}
        </span>
      ) : (
        <span className="ds-mobile-button__row">
          {start}
          {content}
          {end}
        </span>
      );

    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={cn(
          "ds-mobile-button",
          orientation === "left" && "ds-mobile-button--spread",
          className,
        )}
        style={{ ...baseStyle, ...style }}
        {...rest}
      >
        {inner}
      </button>
    );
  },
);

MobileButton.displayName = "MobileButton";
