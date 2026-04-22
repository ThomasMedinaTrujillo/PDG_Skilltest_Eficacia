import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import { ChevronLeftIcon, ChevronRightIcon } from "../_shared/DesignIcons";

export interface NumberSliderProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export const NumberSlider = React.forwardRef<HTMLDivElement, NumberSliderProps>(
  (
    {
      className,
      label = "00 - 00",
      value,
      defaultValue = 1,
      onValueChange,
      min = 1,
      max = 5,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(clamp(defaultValue, min, max));
    const isControlled = value !== undefined;
    const currentValue = clamp(isControlled ? value : internalValue, min, max);

    const setValue = (nextValue: number) => {
      const clamped = clamp(nextValue, min, max);
      if (!isControlled) {
        setInternalValue(clamped);
      }
      onValueChange?.(clamped);
    };

    const visiblePages = React.useMemo(() => {
      const allPages = Array.from({ length: max - min + 1 }, (_, index) => min + index);
      if (allPages.length <= 5) {
        return allPages;
      }

      const start = clamp(currentValue - 2, min, max - 4);
      return Array.from({ length: 5 }, (_, index) => start + index);
    }, [currentValue, max, min]);

    return (
      <div
        ref={ref}
        className={cn("ds-number-slider", `ds-number-slider--${disabled ? "disabled" : "active"}`, className)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: tokens.spacing.sm,
          width: "100%",
          maxWidth: "398px",
          color: tokens.colors.primary,
        }}
        {...props}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "34px",
            borderBottom: `1px solid ${tokens.colors.textSecondary}`,
            paddingBottom: tokens.spacing.sm,
          }}
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
            {label}
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: tokens.spacing.sm, borderBottom: `1px solid ${tokens.colors.textSecondary}`, paddingBottom: tokens.spacing.sm }}>
          <button
            type="button"
            onClick={() => setValue(currentValue - 1)}
            disabled={disabled || currentValue <= min}
            aria-label="Previous page"
            style={{
              border: "none",
              background: "transparent",
              color: tokens.colors.primary,
              padding: tokens.spacing.xs,
              cursor: disabled || currentValue <= min ? "not-allowed" : "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: disabled || currentValue <= min ? 0.35 : 1,
            }}
          >
            <ChevronLeftIcon />
          </button>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 0, flex: 1, minWidth: 0 }}>
            {visiblePages.map((page) => {
              const isActive = page === currentValue;
              return (
                <button
                  key={page}
                  type="button"
                  onClick={() => setValue(page)}
                  disabled={disabled}
                  style={{
                    flex: 1,
                    minWidth: 0,
                    border: "none",
                    background: "transparent",
                    padding: `${tokens.spacing.sm} ${tokens.spacing.xs}`,
                    color: isActive ? tokens.colors.primary : tokens.colors.textSecondary,
                    fontFamily: isActive ? tokens.typography.heading1.fontFamily : tokens.typography.body.fontFamily,
                    fontSize: isActive ? tokens.typography.heading1.fontSize : tokens.typography.body.fontSize,
                    fontWeight: isActive ? 700 : 400,
                    lineHeight: 1,
                    cursor: disabled ? "not-allowed" : "pointer",
                    opacity: disabled ? 0.45 : 1,
                  }}
                >
                  {page}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => setValue(currentValue + 1)}
            disabled={disabled || currentValue >= max}
            aria-label="Next page"
            style={{
              border: "none",
              background: "transparent",
              color: tokens.colors.primary,
              padding: tokens.spacing.xs,
              cursor: disabled || currentValue >= max ? "not-allowed" : "pointer",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: disabled || currentValue >= max ? 0.35 : 1,
            }}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>
    );
  }
);

NumberSlider.displayName = "NumberSlider";
