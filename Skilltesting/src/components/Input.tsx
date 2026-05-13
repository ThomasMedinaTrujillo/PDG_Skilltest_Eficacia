import * as React from "react";
import { cn } from "@/lib/cn";
import { tokens } from "@/Token";
import question from "@/assets/icons/question.svg";
import close from "@/assets/icons/close.svg";
import "./Input.css";

const c = tokens.colors;
const sp = tokens.spacing;
const rad = tokens.radius;
const typo = tokens.typography.mobile;

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  requiredMark?: boolean;
  helperText?: string;
  error?: boolean;
  /** Inline yellow notice under the field (Figma `alert`). */
  showAlert?: boolean;
  alertText?: string;
  trailingIcon?: React.ReactNode;
  showTrailingIcon?: boolean;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      label = "Label",
      requiredMark = true,
      helperText = "Datos incorrectos",
      error = true,
      showAlert = false,
      alertText = "Participación diferente de lo esperado",
      trailingIcon,
      showTrailingIcon = false,
      disabled,
      value: valueProp,
      defaultValue,
      onChange,
      placeholder = "Value",
      id,
      ...rest
    },
    ref,
  ) => {
    const genId = React.useId();
    const inputId = id ?? genId;
    const [internal, setInternal] = React.useState(defaultValue ?? "");
    const isControlled = valueProp !== undefined;
    const value = isControlled ? valueProp : internal;

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      if (!isControlled) setInternal(e.target.value);
      onChange?.(e);
    };

    const cssVars: React.CSSProperties = {
      ["--in-gap-xs" as string]: sp.padding.xs,
      ["--in-pad" as string]: sp.padding.sm,
      ["--in-radius" as string]: rad.xs,
      ["--in-border-w" as string]: sp.strokeWidth.form,
      ["--in-label" as string]: c.text.headersTitles,
      ["--in-label-size" as string]: typo.buttonSmall.fontSize,
      ["--in-value-size" as string]: typo.body.fontSize,
      ["--in-focus" as string]: c.primaries.primaryBlue,
      ["--in-placeholder" as string]: c.text.nsBlueInputPlaceholder,
      ["--in-alert-px" as string]: sp.padding.sm,
    };

    const palette =
      disabled
        ? {
            ...cssVar("--in-border", c.semantic.disable),
            ...cssVar("--in-value", c.text.disable),
            ...cssVar("--in-hint", c.text.disable),
          }
        : error
          ? {
              ...cssVar("--in-border", c.semantic.warningError),
              ...cssVar("--in-value", c.semantic.warningError),
              ...cssVar("--in-hint", c.semantic.warningError),
            }
          : {
              ...cssVar("--in-border", c.neutral.ns200),
              ...cssVar("--in-value", c.text.ns600),
              ...cssVar("--in-hint", c.text.subtitleBody),
            };

    return (
      <div className={cn("ds-input", className)} style={{ ...cssVars, ...palette }}>
        <label className="ds-input__label-row" htmlFor={inputId}>
          <span>{label}</span>
          {requiredMark ? <span aria-hidden>*</span> : null}
        </label>
        <div className="ds-input__control" style={{ ...cssVar("--in-bg", c.text.nsWhite) }}>
          <input
            ref={ref}
            id={inputId}
            className="ds-input__field"
            disabled={disabled}
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            aria-invalid={error}
            aria-describedby={helperText ? `${inputId}-hint` : undefined}
            {...rest}
          />
          {showTrailingIcon &&
            (trailingIcon ?? (
              <img src={question} alt="" className="ds-input__icon" width={20} height={20} />
            ))}
        </div>
        {helperText ? (
          <p className="ds-input__hint" id={`${inputId}-hint`}>
            {helperText}
          </p>
        ) : null}
        {showAlert ? (
          <div className="ds-input__alert" style={{ ...cssVar("--in-alert-bg", c.semantic.pending) }}>
            <p className="ds-input__alert-text" style={{ ...cssVar("--in-alert-fg", c.text.headersTitles) }}>
              {alertText}
            </p>
            <button type="button" className="ds-input__alert-dismiss" aria-label="Cerrar aviso">
              <img src={close} alt="" width={8} height={8} />
            </button>
          </div>
        ) : null}
      </div>
    );
  },
);

Input.displayName = "Input";

function cssVar(name: string, value: string): React.CSSProperties {
  return { [name]: value } as React.CSSProperties;
}
