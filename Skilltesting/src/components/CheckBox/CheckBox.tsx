import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

const CHECK_ICON = "http://localhost:3845/assets/9345b44c9c9e7fa600eeb8d53ef2b209a47af1d0.svg";

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
        <input
          ref={ref}
          type="checkbox"
          checked={isChecked}
          disabled={disabled}
          onChange={handleChange}
          style={{ display: "none" }}
          {...props}
        />

        <span
          aria-hidden
          style={{
            width: "18px",
            height: "18px",
            borderRadius: tokens.radius.xs,
            border: isChecked ? "none" : `var(--stroke-checkbox, 1px) solid ${tokens.colors.iconGray}`,
            background: isChecked ? tokens.colors.buttonBackground : "transparent",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {isChecked ? <img src={CHECK_ICON} alt="" style={{ width: "10px", height: "10px" }} /> : null}
        </span>
      </label>
    );
  }
);

CheckBox.displayName = "CheckBox";
