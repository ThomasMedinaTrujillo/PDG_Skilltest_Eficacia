import * as React from "react";
import { MobileButtons } from "../components/MobileButtons/MobileButtons";
import { NumberSlider } from "../components/NumberSlider/NumberSlider";
import { CheckBox } from "../components/CheckBox/CheckBox";
import { ProductCard } from "../components/ProductCard/ProductCard";
import { Input } from "../components/Input/Input";
import { tokens } from "../Token";

type FormDataType = {
  numberSlider: number;
  tableSelections: Record<string, string[]>;
  qrInput: string;
};

export default function FormSelectionComplexScreen() {
  const [formData, setFormData] = React.useState<FormDataType>({
    numberSlider: 3,
    tableSelections: {
      option1: ["col1", "col2"],
      option2: ["col1"],
      option3: ["col2", "col3"],
      option4: [],
    },
    qrInput: "",
  });

  const options = ["Opción 1", "Opción 2", "Opción 3", "Opción 4"];
  const columns = ["Columna 1", "Columna 2", "Columna 3"];

  const handleSaveSection = () => {
    console.log("Saving complex selection with data:", formData);
  };

  const handleTableCellChange = (
    rowId: string,
    colId: string,
    checked: boolean
  ) => {
    setFormData((prev) => ({
      ...prev,
      tableSelections: {
        ...prev.tableSelections,
        [rowId]: checked
          ? [...(prev.tableSelections[rowId as keyof typeof prev.tableSelections] || []), colId]
          : (prev.tableSelections[rowId as keyof typeof prev.tableSelections] || []).filter((c) => c !== colId),
      },
    }));
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: tokens.colors.backgroundPrimary,
      }}
    >
      {/* Header */}
      <div
        style={{
          padding: tokens.spacing.md,
          background: tokens.colors.backgroundSecondary,
          borderBottom: `1px solid ${tokens.colors.neutral300}`,
        }}
      >
        <h1
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: tokens.colors.primary,
            fontFamily: "Solomon Sans",
            margin: 0,
          }}
        >
          Selección Compleja
        </h1>
        <p
          style={{
            fontSize: "12px",
            color: tokens.colors.textSecondary,
            fontFamily: "Solomon Sans",
            margin: `${tokens.spacing.xs} 0 0 0`,
          }}
        >
          Tabla de selección múltiple
        </p>
      </div>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: tokens.spacing.md,
          display: "flex",
          flexDirection: "column",
          gap: tokens.spacing.md,
          overflowY: "auto",
        }}
      >
        {/* Number Slider Section */}
        <div
          style={{
            padding: tokens.spacing.md,
            background: tokens.colors.backgroundSecondary,
            borderRadius: tokens.radius.sm,
          }}
        >
          <label
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: tokens.colors.primary,
              fontFamily: "Solomon Sans",
              display: "block",
              marginBottom: tokens.spacing.sm,
            }}
          >
            Rango de precios
          </label>
          <NumberSlider
            min={1}
            max={6}
            value={formData.numberSlider}
            onValueChange={(value) =>
              setFormData({ ...formData, numberSlider: value })
            }
          />
        </div>

        {/* Selection Table */}
        <div
          style={{
            padding: tokens.spacing.md,
            background: tokens.colors.backgroundSecondary,
            borderRadius: tokens.radius.sm,
            overflowX: "auto",
          }}
        >
          <label
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: tokens.colors.primary,
              fontFamily: "Solomon Sans",
              display: "block",
              marginBottom: tokens.spacing.md,
            }}
          >
            Matriz de selección
          </label>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              minWidth: "300px",
            }}
          >
            <thead>
              <tr
                style={{
                  borderBottom: `2px solid ${tokens.colors.neutral300}`,
                }}
              >
                <th
                  style={{
                    padding: tokens.spacing.sm,
                    textAlign: "left",
                    fontSize: "12px",
                    fontWeight: 600,
                    color: tokens.colors.primary,
                  }}
                >
                  Elemento
                </th>
                {columns.map((col) => (
                  <th
                    key={col}
                    style={{
                      padding: tokens.spacing.sm,
                      textAlign: "center",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: tokens.colors.primary,
                      minWidth: "80px",
                    }}
                  >
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {options.map((option, rowIdx) => (
                <tr
                  key={option}
                  style={{
                    borderBottom: `1px solid ${tokens.colors.neutral300}`,
                  }}
                >
                  <td
                    style={{
                      padding: tokens.spacing.sm,
                      fontSize: "14px",
                      color: tokens.colors.textPrimary,
                    }}
                  >
                    {option}
                  </td>
                  {columns.map((_, colIdx) => {
                    const colId = `col${colIdx + 1}`;
                    const rowId = `option${rowIdx + 1}`;
                    const isChecked = (formData.tableSelections as Record<string, string[]>)[rowId]?.includes(colId) || false;

                    return (
                      <td
                        key={colId}
                        style={{
                          padding: tokens.spacing.sm,
                          textAlign: "center",
                        }}
                      >
                        <CheckBox
                          checked={isChecked || false}
                          onCheckedChange={(checked) =>
                            handleTableCellChange(rowId, colId, checked)
                          }
                        />
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Status Cards */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: tokens.spacing.md,
          }}
        >
          <ProductCard
            title="Términos y Condiciones"
            caption="Pendiente de aceptación"
            price="Estado: Pendiente"
          />
          <ProductCard
            title="Política de Privacidad"
            caption="Aceptado"
            price="Estado: Aceptado"
          />
        </div>

        {/* QR Input */}
        <div>
          <Input
            labelText="Código QR"
            requested={false}
            state="enable"
            type="textfield"
            placeholder="Escanea o ingresa el código QR"
            value={formData.qrInput}
            onValueChange={(value) =>
              setFormData({ ...formData, qrInput: value })
            }
          />
        </div>

        {/* Save Button */}
        <div style={{ marginTop: tokens.spacing.md }}>
          <MobileButtons
            styleType="contained"
            onClick={handleSaveSection}
          >
            Guardar sección
          </MobileButtons>
        </div>
      </main>
    </div>
  );
}
