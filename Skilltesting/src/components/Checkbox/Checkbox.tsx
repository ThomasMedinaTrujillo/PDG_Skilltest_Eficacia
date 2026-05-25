import * as React from "react";
import { cn } from "@/lib/cn";
import { tokens } from "@/Token";

type CheckboxStatus = "active" | "inactive" | "indeterminate";
type CheckboxState = "default" | "hover" | "focused" | "disabled";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  status?: CheckboxStatus;
  state?: CheckboxState;
  label?: boolean;
  text?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  indeterminate?: boolean;
  defaultIndeterminate?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      status,
      state,
      label = true,
      text = "Checkbox",
      checked,
      defaultChecked = false,
      indeterminate,
      defaultIndeterminate = false,
      disabled,
      onCheckedChange,
      children,
      ...props
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = React.useState(defaultChecked);
    const [internalIndeterminate, setInternalIndeterminate] = React.useState(
      defaultIndeterminate
    );

    const isChecked = checked !== undefined ? checked : internalChecked;
    const isIndeterminate =
      indeterminate !== undefined ? indeterminate : internalIndeterminate;

    const resolvedStatus: CheckboxStatus = status
      ? status
      : isIndeterminate
      ? "indeterminate"
      : isChecked
      ? "active"
      : "inactive";

    const resolvedState: CheckboxState = disabled
      ? "disabled"
      : state || "default";

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const nextChecked = event.target.checked;
      if (checked === undefined) {
        setInternalChecked(nextChecked);
      }
      if (indeterminate === undefined) {
        setInternalIndeterminate(false);
      }
      onCheckedChange?.(nextChecked);
    };

    React.useEffect(() => {
      if (ref && typeof ref !== "function" && ref?.current) {
        ref.current.indeterminate = isIndeterminate;
      }
    }, [ref, isIndeterminate]);

    const boxColors = (() => {
      if (resolvedState === "disabled") {
        return {
          backgroundColor: tokens.colors.bgContainerDisabled,
          borderColor: tokens.colors.border,
        };
      }

      if (resolvedStatus === "active" || resolvedStatus === "indeterminate") {
        return {
          backgroundColor: tokens.colors.primary,
          borderColor: tokens.colors.primary,
        };
      }

      if (resolvedState === "hover" || resolvedState === "focused") {
        return {
          backgroundColor: tokens.colors.bgContainer,
          borderColor: tokens.colors.primary,
        };
      }

      return {
        backgroundColor: tokens.colors.bgContainer,
        borderColor: tokens.colors.border,
      };
    })();

    const boxStyle: React.CSSProperties = {
      width: "16px",
      height: "16px",
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: tokens.radius.sm,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow:
        resolvedState === "focused" ? tokens.shadows.focusPrimary : "none",
      ...boxColors,
    };

    const checkStyle: React.CSSProperties = {
      width: "6px",
      height: "10px",
      borderRight: `2px solid ${tokens.colors.textLightSolid}`,
      borderBottom: `2px solid ${tokens.colors.textLightSolid}`,
      transform: "rotate(45deg)",
    };

    const indeterminateStyle: React.CSSProperties = {
      width: "8px",
      height: "2px",
      backgroundColor: tokens.colors.textLightSolid,
    };

    const labelStyle: React.CSSProperties = {
      fontFamily: tokens.typography.baseNormal.fontFamily,
      fontSize: tokens.typography.baseNormal.fontSize,
      fontWeight: tokens.typography.baseNormal.fontWeight,
      lineHeight: tokens.typography.baseNormal.lineHeight,
      color:
        resolvedState === "disabled"
          ? tokens.colors.textDisabled
          : tokens.colors.text,
    };

    return (
      <label
        className={cn(
          "ds-checkbox",
          `ds-checkbox--${resolvedStatus}`,
          `ds-checkbox--${resolvedState}`,
          className
        )}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: tokens.spacing.xs,
          cursor: resolvedState === "disabled" ? "not-allowed" : "pointer",
        }}
      >
        <input
          ref={ref}
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          disabled={resolvedState === "disabled"}
          style={{ position: "absolute", opacity: 0, pointerEvents: "none" }}
          {...props}
        />
        <span style={boxStyle}>
          {resolvedStatus === "active" && !isIndeterminate && (
            <span style={checkStyle} />
          )}
          {resolvedStatus === "indeterminate" && (
            <span style={indeterminateStyle} />
          )}
        </span>
        {label && <span style={labelStyle}>{children || text}</span>}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
