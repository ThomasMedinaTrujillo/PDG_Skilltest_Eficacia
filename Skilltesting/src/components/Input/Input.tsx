import * as React from "react";
import { cn } from "@/lib/cn";
import { tokens } from "@/Token";

type InputSize = "small" | "default" | "large";
type InputStatus = "default" | "success" | "warning" | "error";
type InputState = "default" | "hover" | "focused" | "typing" | "filled" | "disabled";

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: InputSize;
  status?: InputStatus;
  state?: InputState;
  prefix?: string;
  suffix?: string;
  leftIcon?: React.ReactNode | null;
  rightIcon?: React.ReactNode | null;
  showStatusIcon?: boolean;
  width?: string;
}

const statusIcons = {
  error: "src/assets/figma/7251bfe77de606d4bf18c8a468ad1188d5970f21.svg",
  warning: "src/assets/figma/af1a8ed20deb234378a0344354e2e7346962bbb3.svg",
  success: "src/assets/figma/bc19af98810493a38315d913d33545cf8ebb8786.svg",
};

const defaultUserIcon = "src/assets/figma/911659bb4325616cdf2ecc7e0a3e55433dece3e3.svg";

const getInputBorderColor = (status: InputStatus, state: InputState) => {
  if (status === "error") return tokens.colors.error;
  if (status === "warning") return tokens.colors.warning;
  if (status === "success") return tokens.colors.border;

  if (state === "hover" || state === "typing") return tokens.colors.primaryHover;
  if (state === "focused") return tokens.colors.primary;

  return tokens.colors.border;
};

const getInputShadow = (status: InputStatus, state: InputState) => {
  if (state !== "focused") return "none";
  if (status === "error") return tokens.shadows.errorActiveShadow;
  if (status === "warning") return tokens.shadows.warningActiveShadow;
  return tokens.shadows.activeShadow;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size = "default",
      status = "default",
      state = "default",
      prefix,
      suffix,
      leftIcon,
      rightIcon,
      showStatusIcon = true,
      width = "360px",
      disabled,
      ...props
    },
    ref
  ) => {
    const resolvedState = disabled ? "disabled" : state;
    const sizeConfig = tokens.components.input.variants.size[size];

    const wrapperStyle: React.CSSProperties = {
      width,
      height: sizeConfig.height,
      padding: sizeConfig.padding,
      borderRadius:
        size === "small"
          ? tokens.radius.sm
          : size === "large"
          ? tokens.radius.lg
          : tokens.radius.md,
      borderWidth: "1px",
      borderStyle: "solid",
      borderColor: getInputBorderColor(status, resolvedState),
      backgroundColor:
        resolvedState === "disabled"
          ? tokens.colors.bgContainerDisabled
          : tokens.colors.bgContainer,
      boxShadow: getInputShadow(status, resolvedState),
      display: "flex",
      alignItems: "center",
      gap: size === "large" ? tokens.spacing.sm : tokens.spacing.xs,
      overflow: "hidden",
    };

    const textStyle: React.CSSProperties = {
      fontFamily:
        size === "large"
          ? tokens.typography.lgNormal.fontFamily
          : tokens.typography.baseNormal.fontFamily,
      fontSize:
        size === "large"
          ? tokens.typography.lgNormal.fontSize
          : tokens.typography.baseNormal.fontSize,
      fontWeight:
        size === "large"
          ? tokens.typography.lgNormal.fontWeight
          : tokens.typography.baseNormal.fontWeight,
      lineHeight:
        size === "large"
          ? tokens.typography.lgNormal.lineHeight
          : tokens.typography.baseNormal.lineHeight,
      color:
        resolvedState === "disabled"
          ? tokens.colors.textDisabled
          : tokens.colors.text,
    };

    const inputStyle: React.CSSProperties = {
      ...textStyle,
      flex: 1,
      minWidth: 0,
      border: "none",
      outline: "none",
      background: "transparent",
      color:
        resolvedState === "disabled"
          ? tokens.colors.textDisabled
          : tokens.colors.text,
    };

    const showStatus = status !== "default" && showStatusIcon;

    return (
      <div
        className={cn(
          "ds-input",
          `ds-input--${size}`,
          `ds-input--${status}`,
          `ds-input--${resolvedState}`,
          className
        )}
        style={wrapperStyle}
      >
        {(leftIcon || prefix) && (
          <div className="ds-input__left" style={{ display: "flex", gap: tokens.spacing.xxs, alignItems: "center" }}>
            {leftIcon || (
              <img
                alt=""
                src={defaultUserIcon}
                style={{ width: "16px", height: "16px" }}
              />
            )}
            {prefix && <span style={textStyle}>{prefix}</span>}
          </div>
        )}
        <input ref={ref} disabled={resolvedState === "disabled"} style={inputStyle} {...props} />
        {(suffix || rightIcon || showStatus) && (
          <div className="ds-input__right" style={{ display: "flex", gap: tokens.spacing.xxs, alignItems: "center" }}>
            {suffix && <span style={textStyle}>{suffix}</span>}
            {rightIcon}
            {showStatus && (
              <img
                alt=""
                src={statusIcons[status]}
                style={{ width: "16px", height: "16px" }}
              />
            )}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
