import React, { forwardRef, type InputHTMLAttributes, type TextareaHTMLAttributes, useState } from 'react';
import './Input.css';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement> & TextareaHTMLAttributes<HTMLTextAreaElement>, 'type'> {
  className?: string;
  alert?: boolean;
  alertText?: string;
  icon?: boolean;
  labelText?: string;
  requested?: boolean;
  selectIcon?: React.ReactNode | null;
  state?: "Enable" | "Selected" | "Error";
  inputType?: "TextField" | "Multiline";
}

export const Input = forwardRef<HTMLElement, InputProps>(
  (
    {
      className,
      alert = false,
      alertText = "Participación diferente de lo esperado",
      icon = false,
      labelText = "Label",
      requested = true,
      selectIcon = null,
      state = "Enable",
      inputType = "TextField",
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState("");
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (!isControlled) {
        setInternalValue(e.target.value);
      }
      if (onChange) {
        onChange(e as any);
      }
    };

    const wrapperClasses = [
      "ds-input",
      `ds-input--${state.toLowerCase()}`,
      `ds-input--${inputType.toLowerCase()}`,
      className
    ].filter(Boolean).join(" ");

    return (
      <div className={wrapperClasses}>
        <div className="ds-input__header">
          <label className="ds-input__label">{labelText}</label>
          {requested && <span className="ds-input__asterisk">*</span>}
        </div>
        
        <div className="ds-input__field-wrapper">
          {inputType === "Multiline" ? (
            <textarea
              ref={ref as any}
              className="ds-input__field ds-input__textarea"
              value={currentValue}
              onChange={handleChange}
              {...props}
            />
          ) : (
            <input
              ref={ref as any}
              className="ds-input__field"
              type="text"
              value={currentValue}
              onChange={handleChange}
              {...props}
            />
          )}
          {icon && (
            <span className="ds-input__icon">
              {selectIcon || <span className="ds-input__icon-placeholder" />}
            </span>
          )}
        </div>

        {state === "Error" && (
          <span className="ds-input__error-msg">Datos incorrectos</span>
        )}

        {alert && (
          <div className="ds-input__alert">
            <span className="ds-input__alert-text">{alertText}</span>
            <span className="ds-input__alert-icon">✕</span>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
