import * as React from "react";
import { cn } from "@/lib/cn";
import "../design-system.css";

export type ButtonSize = "small" | "medium" | "large";
export type ButtonState = "default" | "pressed" | "disabled";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: ButtonSize;
  state?: ButtonState;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children = "Button", className, disabled, size = "medium", state = "default", ...props }, ref) => {
    const isDisabled = disabled || state === "disabled";

    return (
      <button
        ref={ref}
        className={cn(
          "ds-component ds-button",
          `ds-button--${size}`,
          state !== "default" && `ds-button--${state}`,
          className,
        )}
        disabled={isDisabled}
        data-state={state}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
