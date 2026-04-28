import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import calendarIcon from "../../assets/icons/calendar-number.svg";

type InputState = "enable" | "selected" | "error";
type InputType = "textfield" | "multiline";

export interface InputProps extends React.HTMLAttributes<HTMLDivElement> {
  labelText?: string;
  requested?: boolean;
  state?: InputState;
  type?: InputType;
  value?: string;
  onValueChange?: (value: string) => void;
  placeholder?: string;
}

export const Input = React.forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>(
  (
    {
      className,
      labelText = "Label",
      requested = true,
      state = "enable",
      type = "textfield",
      value,
      onValueChange,
      placeholder = "Value",
      ...props
    },
    ref
  ) => {
    const isError = state === "error";
    const isSelected = state === "selected";

    const borderColor = isError
      ? tokens.colors.warning
      : isSelected
        ? tokens.colors.primary
        : tokens.colors.buttonDisabled;

    const textColor = isError
      ? tokens.colors.warning
      : isSelected
        ? tokens.colors.primary
        : tokens.colors.graySoft;

    return (
      <div className={cn("ds-input", `ds-input--${state}`, `ds-input--${type}`, className)} style={{ display: "flex", flexDirection: "column", gap: tokens.spacing.xs, width: "100%" }} {...props}>
        <label style={{ color: tokens.colors.primary, fontFamily: "Solomon Sans", fontSize: "14px", fontWeight: 600 }}>
          {labelText}
          {requested && " *"}
        </label>

        <div style={{ display: "flex", alignItems: "center", gap: tokens.spacing.xs, position: "relative" }}>
          <input
            ref={ref as React.ForwardedRef<HTMLInputElement>}
            value={value}
            onChange={(e) => onValueChange?.(e.target.value)}
            placeholder={placeholder}
            className="ds-input__field"
            style={{
              border: `1px solid ${borderColor}`,
              borderRadius: tokens.radius.xs,
              padding: tokens.spacing.sm,
              color: textColor,
              fontFamily: "Solomon Sans",
              fontSize: "14px",
              outline: "none",
                          flex: 1,
            }}
          />
          {type === "textfield" && <img src={calendarIcon} alt="" style={{ width: "16px", height: "16px", opacity: 0.6 }} />}
        </div>

        {type === "multiline" && (
          <textarea
            ref={ref as React.ForwardedRef<HTMLTextAreaElement>}
            value={value}
            onChange={(e) => onValueChange?.(e.target.value)}
            placeholder={placeholder}
            className="ds-input__field ds-input__field--multiline"
            rows={3}
            style={{
              border: `1px solid ${borderColor}`,
              borderRadius: tokens.radius.xs,
              padding: tokens.spacing.sm,
              color: textColor,
              fontFamily: "Solomon Sans",
              fontSize: "14px",
              outline: "none",
              resize: "vertical",
            }}
          />
        )}

        {isError && <span style={{ color: tokens.colors.warning, fontFamily: "Solomon Sans", fontSize: "12px" }}>Datos incorrectos</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
