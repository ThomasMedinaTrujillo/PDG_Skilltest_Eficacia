import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import { ChevronDownIcon, ChevronUpIcon } from "../_shared/DesignIcons";

export interface DropdownOption {
  label: string;
  value: string;
}

export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  placeholder?: string;
  errorMessage?: string;
  options?: DropdownOption[];
  value?: string;
  defaultValue?: string;
  open?: boolean;
  defaultOpen?: boolean;
  error?: boolean;
  onValueChange?: (value: string) => void;
  onOpenChange?: (open: boolean) => void;
}

const DEFAULT_OPTIONS: DropdownOption[] = [
  { label: "Option 1", value: "option-1" },
  { label: "Option 1", value: "option-2" },
  { label: "Option 1", value: "option-3" },
];

export const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  (
    {
      className,
      title = "Título dropdown",
      placeholder = "Label",
      errorMessage = "Label-error",
      options = DEFAULT_OPTIONS,
      value,
      defaultValue,
      open,
      defaultOpen = false,
      error = false,
      onValueChange,
      onOpenChange,
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(defaultOpen);
    const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
    const isOpenControlled = open !== undefined;
    const isValueControlled = value !== undefined;
    const isOpen = isOpenControlled ? open : internalOpen;
    const currentValue = isValueControlled ? value : internalValue;
    const selectedOption = options.find((option) => option.value === currentValue) ?? null;
    const triggerLabel = selectedOption?.label ?? placeholder;

    const setOpen = (nextOpen: boolean) => {
      if (!isOpenControlled) {
        setInternalOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    };

    const setValue = (nextValue: string) => {
      if (!isValueControlled) {
        setInternalValue(nextValue);
      }
      onValueChange?.(nextValue);
    };

    const borderColor = error ? tokens.colors.warning : tokens.colors.inputBorder;
    const triggerTextColor = error ? tokens.colors.warning : tokens.colors.inputBorder;

    return (
      <div
        ref={ref}
        className={cn("ds-dropdown", `ds-dropdown--${error ? "error" : isOpen ? "open" : "closed"}`, className)}
        style={{ display: "flex", flexDirection: "column", gap: tokens.spacing.xs, width: "100%", maxWidth: "339px" }}
        {...props}
      >
        <span
          style={{
            color: tokens.colors.primary,
            fontFamily: tokens.typography.body.fontFamily,
            fontSize: tokens.typography.body.fontSize,
            fontWeight: 600,
            lineHeight: 1,
          }}
        >
          {title}
        </span>

        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <button
            type="button"
            onClick={() => setOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            style={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: tokens.spacing.sm,
              border: `1px solid ${borderColor}`,
              borderRadius: tokens.radius.xs,
              background: tokens.colors.backgroundSecondary,
              padding: tokens.spacing.sm,
              color: triggerTextColor,
              fontFamily: tokens.typography.caption.fontFamily,
              fontSize: tokens.typography.caption.fontSize,
              fontWeight: 400,
              lineHeight: 1,
              cursor: "pointer",
            }}
          >
            <span style={{ textAlign: "left", flex: 1, minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {triggerLabel}
            </span>
            <span style={{ display: "inline-flex", color: triggerTextColor, flexShrink: 0 }}>
              {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
            </span>
          </button>

          {error && <span style={{ color: tokens.colors.warning, fontFamily: tokens.typography.caption.fontFamily, fontSize: tokens.typography.caption.fontSize, marginTop: tokens.spacing.xs }}>{errorMessage}</span>}

          {isOpen && (
            <div
              role="listbox"
              aria-label={title}
              style={{
                border: `1px solid ${borderColor}`,
                borderTop: "none",
                borderBottomLeftRadius: tokens.radius.xs,
                borderBottomRightRadius: tokens.radius.xs,
                overflow: "hidden",
                background: tokens.colors.backgroundSecondary,
              }}
            >
              {options.map((option) => (
                <button
                  key={option.value}
                  type="button"
                  role="option"
                  aria-selected={option.value === currentValue}
                  onClick={() => {
                    setValue(option.value);
                    setOpen(false);
                  }}
                  style={{
                    width: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    border: "none",
                    borderTop: `1px solid ${borderColor}`,
                    background: tokens.colors.backgroundSecondary,
                    padding: tokens.spacing.sm,
                    color: tokens.colors.inputBorder,
                    fontFamily: tokens.typography.caption.fontFamily,
                    fontSize: tokens.typography.caption.fontSize,
                    fontWeight: 400,
                    lineHeight: 1,
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                >
                  {option.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";
