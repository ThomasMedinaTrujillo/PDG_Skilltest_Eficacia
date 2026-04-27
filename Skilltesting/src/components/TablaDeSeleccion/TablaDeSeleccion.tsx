import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import { ContenidoDeTabla } from "../ContenidoDeTabla/ContenidoDeTabla";

type Matrix = boolean[][];

export interface TablaDeSeleccionProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'defaultValue'> {
  title?: string;
  mode?: "checkbox" | "radio";
  columnLabels?: [string, string, string];
  rowLabels?: [string, string, string, string];
  value?: Matrix;
  defaultValue?: Matrix;
  onValueChange?: (value: Matrix) => void;
}

export const TablaDeSeleccion = React.forwardRef<HTMLDivElement, TablaDeSeleccionProps>(
  (
    {
      className,
      title = "selecciona multible respuestas",
      mode = "radio",
      columnLabels = ["Columna 1", "Columna 2", "Columna 3"],
      rowLabels = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"],
      value,
      defaultValue,
      onValueChange,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("ds-tabla-seleccion", `ds-tabla-seleccion--${mode}`, className)}
        style={{
          width: "359px",
          maxWidth: "100%",
          display: "flex",
          flexDirection: "column",
          gap: tokens.spacing.lg,
        }}
        {...props}
      >
        <div style={{ padding: tokens.spacing.sm }}>
          <h3
            style={{
              margin: 0,
              color: tokens.colors.primary,
              fontFamily: tokens.typography.heading1.fontFamily,
              fontSize: "24px",
              fontWeight: 700,
              lineHeight: 1,
              textTransform: "lowercase",
            }}
          >
            {title}
          </h3>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", width: "100%" }}>
          <div style={{ width: "83px", minHeight: "171px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            {rowLabels.map((label) => (
              <div
                key={label}
                style={{
                  minHeight: "42px",
                  borderBottom: `1px solid ${tokens.colors.buttonDisabled}`,
                  display: "flex",
                  alignItems: "center",
                  padding: `0 ${tokens.spacing.md}`,
                  boxSizing: "border-box",
                }}
              >
                <span
                  style={{
                    color: tokens.colors.primary,
                    fontFamily: tokens.typography.caption.fontFamily,
                    fontSize: tokens.typography.caption.fontSize,
                    fontWeight: tokens.typography.body.fontWeight,
                    lineHeight: 1,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>

          <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: "17px" }}>
              {columnLabels.map((label, index) => (
                <span
                  key={label}
                  style={{
                    flex: 1,
                    color: tokens.colors.primary,
                    fontFamily: tokens.typography.caption.fontFamily,
                    fontSize: tokens.typography.caption.fontSize,
                    fontWeight: tokens.typography.body.fontWeight,
                    lineHeight: 1,
                    textAlign: index === 0 ? "left" : index === columnLabels.length - 1 ? "right" : "center",
                  }}
                >
                  {label}
                </span>
              ))}
            </div>

            <ContenidoDeTabla mode={mode} value={value} defaultValue={defaultValue} onValueChange={onValueChange} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    );
  }
);

TablaDeSeleccion.displayName = "TablaDeSeleccion";
