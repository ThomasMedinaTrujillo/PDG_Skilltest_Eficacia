import * as React from "react";
import { cn } from "@/lib/cn";

export type ButtonType = "primary" | "default" | "dashed" | "text" | "link";
export type ButtonSize = "small" | "default" | "large";
export type ButtonState = "default" | "hover" | "focused" | "pressed" | "disabled";

export interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "type"> {
  type?: ButtonType;
  htmlType?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
  size?: ButtonSize;
  state?: ButtonState;
  ghost?: boolean;
  danger?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      type = "default",
      htmlType = "button",
      size = "default",
      state = "default",
      ghost = false,
      danger = false,
      disabled,
      leftIcon,
      rightIcon,
      children = "Button",
      ...props
    },
    ref,
  ) => {
    const isDisabled = disabled || state === "disabled";

    return (
      <button
        ref={ref}
        className={cn(
          "ds-button",
          `ds-button--${type}`,
          `ds-button--${size}`,
          `ds-button--${state}`,
          ghost && "ds-button--ghost",
          danger && "ds-button--danger",
          className,
        )}
        type={htmlType}
        disabled={isDisabled}
        data-node-id="983:7042"
        {...props}
      >
        {leftIcon ? <span className="ds-button__icon">{leftIcon}</span> : null}
        <span className="ds-button__label">{children}</span>
        {rightIcon ? <span className="ds-button__icon">{rightIcon}</span> : null}
      </button>
    );
  },
);

Button.displayName = "Button";
