import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

type ProgressStatus = "green" | "yellow" | "red";

export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number;
  defaultValue?: number;
  onValueChange?: (value: number) => void;
  status?: ProgressStatus;
  showPercent?: boolean;
}

const statusColor: Record<ProgressStatus, string> = {
  green: tokens.colors.success,
  yellow: tokens.colors.pending,
  red: tokens.colors.warning,
};

const clamp = (value: number): number => {
  if (value < 0) {
    return 0;
  }
  if (value > 100) {
    return 100;
  }
  return value;
};

export const ProgressBar = React.forwardRef<HTMLDivElement, ProgressBarProps>(
  (
    {
      className,
      value,
      defaultValue = 65,
      onValueChange,
      status = "green",
      showPercent = true,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(clamp(defaultValue));
    const isControlled = value !== undefined;
    const currentValue = clamp(isControlled ? value : internalValue);

    React.useEffect(() => {
      if (!isControlled) {
        onValueChange?.(currentValue);
      }
    }, [currentValue, isControlled, onValueChange]);

    return (
      <div
        ref={ref}
        className={cn("ds-progress-bar", `ds-progress-bar--${status}`, className)}
        style={{ width: "382px", display: "flex", flexDirection: "column" }}
        {...props}
      >
        <div style={{ width: "100%", position: "relative", paddingTop: "6px" }}>
          <div
            style={{
              width: "100%",
              height: "7px",
              borderRadius: "3.668px",
              background: tokens.colors.buttonDisabled,
              opacity: 0.5,
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "6px",
              left: 0,
              width: `${currentValue}%`,
              height: "7px",
              borderRadius: "3.668px",
              background: statusColor[status],
            }}
          />

          {showPercent && (
            <span
              style={{
                position: "absolute",
                top: 0,
                left: `calc(${currentValue}% - 21px)`,
                minWidth: "42px",
                height: "19px",
                borderRadius: "55px",
                background: statusColor[status],
                color: tokens.colors.white,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: tokens.typography.body.fontFamily,
                fontSize: tokens.typography.caption.fontSize,
                fontWeight: 700,
                lineHeight: 1,
                padding: "2px 8px",
              }}
            >
              {`${Math.round(currentValue)}%`}
            </span>
          )}
        </div>

        {!isControlled && (
          <input
            type="range"
            min={0}
            max={100}
            value={currentValue}
            onChange={(event) => {
              const next = clamp(Number(event.target.value));
              setInternalValue(next);
              onValueChange?.(next);
            }}
            aria-label="Progress"
            style={{
              marginTop: tokens.spacing.md,
              width: "100%",
              accentColor: statusColor[status],
            }}
          />
        )}
      </div>
    );
  }
);

ProgressBar.displayName = "ProgressBar";
