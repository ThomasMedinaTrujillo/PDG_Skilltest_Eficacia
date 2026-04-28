import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import checkIcon from "../../assets/icons/add.svg";

type Matrix = boolean[][];

const getDefaultMatrix = (rows: number, columns: number, mode: "checkbox" | "radio"): Matrix => {
  if (mode === "radio") {
    const selectedByRow = [0, 1, 0, 0];
    return Array.from({ length: rows }, (_, row) =>
      Array.from({ length: columns }, (_, column) => selectedByRow[row] === column)
    );
  }

  return Array.from({ length: rows }, (_, row) =>
    Array.from({ length: columns }, (_, column) => {
      if (column !== 1) {
        return true;
      }
      return row === 1 || row === 2;
    })
  );
};

export interface ContenidoDeTablaProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
  mode?: "checkbox" | "radio";
  rows?: number;
  columns?: number;
  value?: Matrix;
  defaultValue?: Matrix;
  onValueChange?: (value: Matrix) => void;
}

export const ContenidoDeTabla = React.forwardRef<HTMLDivElement, ContenidoDeTablaProps>(
  ({ className, mode = "checkbox", rows = 4, columns = 3, value, defaultValue, onValueChange, ...props }, ref) => {
    const fallback = React.useMemo(() => getDefaultMatrix(rows, columns, mode), [rows, columns, mode]);
    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = React.useState<Matrix>(defaultValue ?? fallback);
    const currentValue = isControlled ? (value as Matrix) : internalValue;

    const updateMatrix = (next: Matrix) => {
      if (!isControlled) {
        setInternalValue(next);
      }
      onValueChange?.(next);
    };

    const handleCellChange = (rowIndex: number, columnIndex: number, checked: boolean) => {
      const next = currentValue.map((row) => [...row]);

      if (mode === "radio") {
        next[rowIndex] = next[rowIndex].map((_, idx) => idx === columnIndex);
      } else {
        next[rowIndex][columnIndex] = checked;
      }

      updateMatrix(next);
    };

    return (
      <div
        ref={ref}
        className={cn("ds-contenido-tabla", `ds-contenido-tabla--${mode}`, className)}
        style={{
          width: "240px",
          minHeight: "170px",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
        }}
        {...props}
      >
        {currentValue.map((row, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              borderBottom: `1px solid ${tokens.colors.disabled}`,
              padding: tokens.spacing.md,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              minHeight: "42px",
              boxSizing: "border-box",
            }}
          >
            {row.map((isChecked, columnIndex) => {
              const inputType = mode === "radio" ? "radio" : "checkbox";

              return (
                <label
                  key={`${rowIndex}-${columnIndex}`}
                  style={{
                    width: "24px",
                    height: "24px",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <input
                    type={inputType}
                    name={mode === "radio" ? `radio-row-${rowIndex}` : undefined}
                    checked={isChecked}
                    onChange={(event) => handleCellChange(rowIndex, columnIndex, event.target.checked)}
                    style={{ display: "none" }}
                  />

                  {mode === "checkbox" ? (
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
                      {isChecked ? <img src={checkIcon} alt="" style={{ width: "10px", height: "10px", objectFit: "contain" }} /> : null}
                    </span>
                  ) : (
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
                          border: `1px solid ${isChecked ? tokens.colors.buttonBackground : "transparent"}`,
                        }}
                      />
                    </span>
                  )}
                </label>
              );
            })}
          </div>
        ))}
      </div>
    );
  }
);

ContenidoDeTabla.displayName = "ContenidoDeTabla";
