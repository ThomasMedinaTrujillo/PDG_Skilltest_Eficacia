import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

export interface ToggleProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ className, checked, defaultChecked = false, onCheckedChange, disabled, ...props }, ref) => {
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const isChecked = isControlled ? checked : internalChecked;

    const handleClick = () => {
      if (disabled) return;
      const next = !isChecked;
      if (!isControlled) {
        setInternalChecked(next);
      }
      onCheckedChange?.(next);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={isChecked}
        disabled={disabled}
        onClick={handleClick}
        className={cn("ds-toggle", isChecked && "ds-toggle--checked", disabled && "ds-toggle--disabled", className)}
        style={{
          width: "40px",
          height: "24px",
          border: "none",
          borderRadius: tokens.radius.xl,
          background: isChecked ? tokens.colors.primary : tokens.colors.textSecondary,
          padding: "2px",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: isChecked ? "flex-end" : "flex-start",
          cursor: disabled ? "not-allowed" : "pointer",
          transition: "0.2s ease",
        }}
        {...props}
      >
        <span
          aria-hidden
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "9999px",
            background: isChecked ? "#c2d1e9" : tokens.colors.buttonDisabled,
            boxShadow: isChecked ? "inset 0 0 4px rgba(89, 89, 89, 0.31)" : "none",
            transition: "0.2s ease",
          }}
        />
      </button>
    );
  }
);

Toggle.displayName = "Toggle";
