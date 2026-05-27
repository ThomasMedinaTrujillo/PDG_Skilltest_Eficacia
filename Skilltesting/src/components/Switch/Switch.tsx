import * as React from "react";
import { cn } from "@/lib/cn";

export type SwitchSize = "small" | "default";
export type SwitchState = "default" | "pressed" | "loading" | "disabled";
export type SwitchType = "basic" | "icon" | "number";

export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange" | "type"> {
  checked?: boolean;
  defaultChecked?: boolean;
  size?: SwitchSize;
  state?: SwitchState;
  type?: SwitchType;
  checkedChildren?: React.ReactNode;
  unCheckedChildren?: React.ReactNode;
  loading?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className,
      checked,
      defaultChecked = false,
      size = "default",
      state = "default",
      type = "basic",
      checkedChildren,
      unCheckedChildren,
      loading,
      disabled,
      onCheckedChange,
      onClick,
      ...props
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;
    const isLoading = loading || state === "loading";
    const isDisabled = disabled || state === "disabled" || isLoading;
    const label = isChecked ? checkedChildren : unCheckedChildren;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      onClick?.(event);

      if (event.defaultPrevented || isDisabled) {
        return;
      }

      const nextChecked = !isChecked;
      if (!isControlled) {
        setInternalChecked(nextChecked);
      }
      onCheckedChange?.(nextChecked);
    };

    return (
      <button
        ref={ref}
        className={cn(
          "ds-switch",
          `ds-switch--${size}`,
          `ds-switch--${state}`,
          `ds-switch--${type}`,
          isChecked && "ds-switch--active",
          isDisabled && "ds-switch--disabled",
          className,
        )}
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={isDisabled}
        data-node-id="1001:3308"
        onClick={handleClick}
        {...props}
      >
        {label ? <span className="ds-switch__label">{label}</span> : null}
        <span className="ds-switch__handle" aria-hidden="true">
          {isLoading ? <span className="ds-switch__spinner" /> : null}
        </span>
      </button>
    );
  },
);

Switch.displayName = "Switch";
