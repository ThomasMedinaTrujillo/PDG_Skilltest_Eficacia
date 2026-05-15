import * as React from "react";
import { cn } from "@/lib/cn";
import "../design-system.css";

export type RadioButtonState = "default" | "pressed" | "disabled";

export interface RadioButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  description?: React.ReactNode;
  label?: React.ReactNode;
  state?: RadioButtonState;
  onCheckedChange?: (checked: boolean) => void;
}

export const RadioButton = React.forwardRef<HTMLButtonElement, RadioButtonProps>(
  (
    {
      checked,
      children,
      className,
      defaultChecked = false,
      description,
      disabled,
      label = "Option",
      onCheckedChange,
      onClick,
      state = "default",
      ...props
    },
    ref,
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const isDisabled = disabled || state === "disabled";
    const isChecked = state === "pressed" ? true : checked ?? internalChecked;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (isDisabled) {
        return;
      }
      if (checked === undefined && state !== "pressed") {
        setInternalChecked(true);
      }
      onCheckedChange?.(true);
      onClick?.(event);
    };

    return (
      <button
        ref={ref}
        className={cn(
          "ds-component ds-radio-button",
          isChecked && "ds-radio-button--pressed",
          isDisabled && "ds-radio-button--disabled",
          className,
        )}
        aria-checked={isChecked}
        data-state={isDisabled ? "disabled" : isChecked ? "pressed" : "default"}
        disabled={isDisabled}
        onClick={handleClick}
        role="radio"
        {...props}
      >
        <span className="ds-radio-button__mark" aria-hidden="true">
          {isChecked && <span className="ds-radio-button__dot" />}
        </span>
        <span className="ds-radio-button__content">
          <span>{children ?? label}</span>
          {description && <span className="ds-radio-button__description">{description}</span>}
        </span>
      </button>
    );
  },
);

RadioButton.displayName = "RadioButton";
