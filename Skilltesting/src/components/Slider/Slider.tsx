import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

export interface SliderProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  showTitle?: boolean;
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  labels?: Array<number | string>;
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      className,
      title = "Escala (Slider Título)",
      showTitle = true,
      value,
      defaultValue = 0,
      onValueChange,
      min = 0,
      max = 5,
      step = 1,
      labels,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(clamp(defaultValue, min, max));
    const isControlled = value !== undefined;
    const currentValue = clamp(isControlled ? value : internalValue, min, max);
    const sliderLabels = labels ?? Array.from({ length: max - min + 1 }, (_, index) => min + index);

    const setValue = (nextValue: number) => {
      const clamped = clamp(nextValue, min, max);
      if (!isControlled) {
        setInternalValue(clamped);
      }
      onValueChange?.(clamped);
    };

    const progress = ((currentValue - min) / (max - min || 1)) * 100;

    return (
      <div
        ref={ref}
        className={cn("ds-slider", className)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: tokens.spacing.sm,
          width: "100%",
          maxWidth: "371px",
          padding: tokens.spacing.sm,
        }}
        {...props}
      >
        {showTitle && (
          <div style={{ display: "flex", alignItems: "center", minHeight: "16px", padding: `0 ${tokens.spacing.sm}` }}>
            <span
              style={{
                color: tokens.colors.primary,
                fontFamily: tokens.typography.body.fontFamily,
                fontSize: "12px",
                fontWeight: 400,
                lineHeight: 1,
              }}
            >
              {title}
            </span>
          </div>
        )}

        <div style={{ display: "flex", flexDirection: "column", gap: tokens.spacing.lg, padding: `${tokens.spacing.md} ${tokens.spacing.sm}` }}>
          <div style={{ position: "relative", width: "100%", paddingTop: "14px", paddingBottom: "14px" }}>
            <div
              style={{
                height: "11px",
                borderRadius: "27px",
                background: tokens.colors.sliderTrack,
                opacity: 0.4,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                width: `${progress}%`,
                minWidth: currentValue === min ? "24px" : 0,
                height: "11px",
                borderRadius: "27px",
                background: tokens.colors.sliderFill,
              }}
            />
            <button
              type="button"
              onClick={() => setValue(min)}
              aria-label="Reset slider"
              style={{
                position: "absolute",
                top: "50%",
                left: `calc(${progress}% - 12px)`,
                width: "24px",
                height: "24px",
                transform: "translateY(-50%)",
                borderRadius: "999px",
                border: `1px solid ${tokens.colors.backgroundSecondary}`,
                background: tokens.colors.backgroundSecondary,
                boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                cursor: "pointer",
                padding: 0,
              }}
            />

            <input
              type="range"
              min={min}
              max={max}
              step={step}
              value={currentValue}
              onChange={(event) => setValue(Number(event.target.value))}
              aria-label={title}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                opacity: 0,
                cursor: "pointer",
              }}
            />
          </div>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: `0 ${tokens.spacing.xs}` }}>
            {sliderLabels.map((labelValue) => {
              const numericLabel = typeof labelValue === "number" ? labelValue : Number(labelValue);
              const isActive = numericLabel === currentValue;

              return (
                <button
                  key={String(labelValue)}
                  type="button"
                  onClick={() => setValue(numericLabel)}
                  style={{
                    border: "none",
                    background: "transparent",
                    padding: tokens.spacing.xs,
                    color: isActive ? tokens.colors.primary : tokens.colors.buttonDisabled,
                    fontFamily: isActive ? tokens.typography.heading1.fontFamily : tokens.typography.caption.fontFamily,
                    fontSize: isActive ? tokens.typography.heading1.fontSize : tokens.typography.caption.fontSize,
                    fontWeight: isActive ? 700 : 400,
                    lineHeight: 1,
                    cursor: "pointer",
                  }}
                >
                  {labelValue}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
);

Slider.displayName = "Slider";
