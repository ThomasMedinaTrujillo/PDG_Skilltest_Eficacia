import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import checkIcon from "../../assets/icons/add.svg";

const CHECK_ICON = checkIcon;

export interface InputCheckProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  label?: string;
  controlType?: "round" | "check";
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const InputCheck = React.forwardRef<HTMLInputElement, InputCheckProps>(
  ({ className, label = "Input", controlType = "round", checked, defaultChecked, onCheckedChange, ...props }, ref) => {
    const isControlled = checked !== undefined;
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked ?? controlType === "round");
    const isChecked = isControlled ? checked : internalChecked;

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const next = event.target.checked;
      if (!isControlled) {
        setInternalChecked(next);
      }
      onCheckedChange?.(next);
    };

    const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const next = event.target.checked;
      if (!isControlled) {
        setInternalChecked(next);
      }
      onCheckedChange?.(next);
    };

    return (
      <div
        className={cn("ds-input-check", `ds-input-check--${controlType}`, className)}
        style={{
          borderBottom: `1px solid ${tokens.colors.buttonDisabled}`,
          width: "339px",
          maxWidth: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: `${tokens.spacing.md} ${tokens.spacing.sm}`,
          boxSizing: "border-box",
        }}
        {...props}
      >
        <span
          style={{
            color: tokens.colors.textSecondary,
            fontFamily: tokens.typography.body.fontFamily,
            fontSize: tokens.typography.body.fontSize,
            fontWeight: 600,
            lineHeight: 1,
          }}
        >
          {label}
        </span>

        {controlType === "round" ? (
          <label style={{ width: "24px", height: "24px", display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <input
              ref={ref}
              type="radio"
              checked={isChecked}
              onChange={handleRadioChange}
              style={{ display: "none" }}
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
                }}
              />
            </span>
          </label>
        ) : (
          <label style={{ width: "24px", height: "24px", display: "inline-flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <input
              ref={ref}
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              style={{ display: "none" }}
            />
            <span
              aria-hidden
              style={{
                width: "18px",
                height: "18px",
                borderRadius: tokens.radius.xs,
                border: `1px solid ${tokens.colors.iconGray}`,
                background: isChecked ? tokens.colors.buttonBackground : "transparent",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {isChecked ? <img src={CHECK_ICON} alt="" style={{ width: "10px", height: "10px", objectFit: "contain" }} /> : null}
            </span>
          </label>
        )}
      </div>
    );
  }
);

InputCheck.displayName = "InputCheck";
