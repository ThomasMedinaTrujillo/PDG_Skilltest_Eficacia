import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

export interface RadioButtonsProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size" | "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  state?: "enabled" | "pressed";
}

export const RadioButtons = React.forwardRef<HTMLInputElement, RadioButtonsProps>(
  ({ className, checked, defaultChecked, onCheckedChange, state = "enabled", disabled, ...props }, ref) => {
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked ?? state === "pressed");
    const isChecked = isControlled ? checked : internalChecked;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const next = event.target.checked;
      if (!isControlled) {
        setInternalChecked(next);
      }
      onCheckedChange?.(next);
    };

    return (
      <label
        className={cn("ds-radio-buttons", isChecked && "ds-radio-buttons--pressed", disabled && "ds-radio-buttons--disabled", className)}
        style={{
          width: "24px",
          height: "24px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          cursor: disabled ? "not-allowed" : "pointer",
          opacity: disabled ? 0.7 : 1,
        }}
      >
        <input
          ref={ref}
          type="radio"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          style={{ display: "none" }}
          {...props}
        />
        <span
          aria-hidden
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "9999px",
            border: `1px solid ${isChecked ? tokens.colors.buttonBackground : tokens.colors.iconGray}`,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "9999px",
              background: isChecked ? tokens.colors.buttonBackground : "transparent",
              border: `1px solid ${isChecked ? tokens.colors.buttonBackground : "transparent"}`,
            }}
          />
        </span>
      </label>
    );
  }
);

RadioButtons.displayName = "RadioButtons";
