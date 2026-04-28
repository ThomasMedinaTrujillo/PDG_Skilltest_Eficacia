import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import checkIcon from "../../assets/icons/add.svg";

export interface CheckBoxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  state?: "default" | "checked";
}

export const CheckBox = React.forwardRef<HTMLInputElement, CheckBoxProps>(
  ({ className, checked, defaultChecked, onCheckedChange, state = "default", disabled, ...props }, ref) => {
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked ?? state === "checked");
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
        className={cn("ds-checkbox", isChecked && "ds-checkbox--checked", className)}
        style={{
          width: "24px",
          height: "24px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: disabled ? "not-allowed" : "pointer",
        }}
      >
        <div
          style={{
            width: "18px",
            height: "18px",
            borderRadius: tokens.radius.xs,
            border: `2px solid ${isChecked ? tokens.colors.primary : tokens.colors.buttonDisabled}`,
            background: isChecked ? tokens.colors.primary : "transparent",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {isChecked && <img src={checkIcon} alt="" style={{ width: "12px", height: "12px", filter: "brightness(0) invert(1)" }} />}
        </div>
        <input
          type="checkbox"
          ref={ref}
          disabled={disabled}
          checked={isChecked}
          onChange={handleChange}
          style={{ display: "none" }}
          aria-hidden
          tabIndex={-1}
          {...props}
        />
      </label>
    );
  }
);

CheckBox.displayName = "CheckBox";
