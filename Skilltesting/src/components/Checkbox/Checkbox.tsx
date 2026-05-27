import * as React from "react";
import { cn } from "@/lib/cn";

export type CheckboxStatus = "active" | "inactive" | "indeterminate";
export type CheckboxState = "default" | "hover" | "focused" | "disabled";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  state?: CheckboxState;
  label?: React.ReactNode;
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      checked,
      defaultChecked = false,
      indeterminate = false,
      state = "default",
      label = "Checkbox",
      disabled,
      onCheckedChange,
      ...props
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const isControlled = checked !== undefined;
    const isChecked = isControlled ? checked : internalChecked;
    const isDisabled = disabled || state === "disabled";
    const status: CheckboxStatus = indeterminate ? "indeterminate" : isChecked ? "active" : "inactive";

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextChecked = event.target.checked;
      if (!isControlled) {
        setInternalChecked(nextChecked);
      }
      onCheckedChange?.(nextChecked);
    };

    return (
      <label
        className={cn(
          "ds-checkbox",
          `ds-checkbox--${status}`,
          `ds-checkbox--${state}`,
          isDisabled && "ds-checkbox--disabled",
          className,
        )}
        data-node-id="983:6897"
      >
        <input
          ref={ref}
          className="ds-checkbox__input"
          type="checkbox"
          checked={isChecked}
          disabled={isDisabled}
          onChange={handleChange}
          aria-checked={indeterminate ? "mixed" : isChecked}
          {...props}
        />
        <span className="ds-checkbox__box" aria-hidden="true" />
        {label ? <span className="ds-checkbox__label">{label}</span> : null}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
