import * as React from "react";
import { cn } from "@/lib/cn";

export type InputStatus = "default" | "success" | "warning" | "error";
export type InputSize = "small" | "default" | "large";
export type InputState = "default" | "hover" | "focused" | "typing" | "filled" | "disabled";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "prefix"> {
  status?: InputStatus;
  size?: InputSize;
  state?: InputState;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      status = "default",
      size = "default",
      state = "default",
      prefix,
      suffix,
      leftIcon,
      rightIcon,
      disabled,
      value,
      defaultValue,
      onChange,
      placeholder = "Input",
      ...props
    },
    ref,
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue?.toString() ?? "");
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const isDisabled = disabled || state === "disabled";

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(event.target.value);
      }
      onChange?.(event);
    };

    return (
      <label
        className={cn(
          "ds-input",
          `ds-input--${status}`,
          `ds-input--${size}`,
          `ds-input--${state}`,
          isDisabled && "ds-input--disabled",
          className,
        )}
        data-node-id="983:7823"
      >
        {leftIcon ? <span className="ds-input__icon">{leftIcon}</span> : null}
        {prefix ? <span className="ds-input__affix">{prefix}</span> : null}
        <input
          ref={ref}
          className="ds-input__control"
          disabled={isDisabled}
          value={currentValue}
          onChange={handleChange}
          placeholder={placeholder}
          {...props}
        />
        {suffix ? <span className="ds-input__affix">{suffix}</span> : null}
        {rightIcon ? <span className="ds-input__icon">{rightIcon}</span> : null}
      </label>
    );
  },
);

Input.displayName = "Input";
