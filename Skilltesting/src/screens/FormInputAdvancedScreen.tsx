import * as React from "react";
import { MobileButtons } from "../components/MobileButtons/MobileButtons";
import { RadioButtons } from "../components/RadioButtons/RadioButtons";
import { CheckBox } from "../components/CheckBox/CheckBox";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { Slider } from "../components/Slider/Slider";
import { Input } from "../components/Input/Input";
import { NumberSlider } from "../components/NumberSlider/NumberSlider";
import { tokens } from "../Token";

export default function FormInputAdvancedScreen() {
  const [formData, setFormData] = React.useState({
    radioSection1: "option1",
    checkboxSection1: { option1: false, option2: false, option3: false, option4: false },
    dropdownValue: "category1",
    sliderValue: 3,
    textInput: "",
    checkboxSection2: { option1: false, option2: false },
    numberSlider: 3,
  });

  const handleSaveSection = () => {
    console.log("Saving advanced form section with data:", formData);
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
          Formulario Avanzado
        </h1>
        <p
          style={{
            fontSize: "12px",
            color: tokens.colors.textSecondary,
            fontFamily: "Solomon Sans",
            margin: `${tokens.spacing.xs} 0 0 0`,
          }}
        >
          Sección 2 de 3
        </p>
      </div>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: tokens.spacing.md,
          display: "flex",
          flexDirection: "column",
          gap: tokens.spacing.lg,
          overflowY: "auto",
        }}
      >
        {/* Section 1: Radio Buttons */}
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
              marginBottom: tokens.spacing.md,
            }}
          >
            Selecciona una opción principal
          </label>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: tokens.spacing.md,
            }}
          >
            {["option1", "option2", "option3", "option4"].map((option, idx) => (
              <label
                key={option}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: tokens.spacing.md,
                  cursor: "pointer",
                }}
              >
                <RadioButtons
                  checked={formData.radioSection1 === option}
                  onCheckedChange={() =>
                    setFormData({ ...formData, radioSection1: option })
                  }
                />
                <span
                  style={{
                    fontSize: "14px",
                    color: tokens.colors.textPrimary,
                  }}
                >
                  Opción {idx + 1}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Section 2: Checkboxes */}
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
              marginBottom: tokens.spacing.md,
            }}
          >
            Selecciona múltiples elementos
          </label>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: tokens.spacing.md,
            }}
          >
            {["option1", "option2", "option3", "option4"].map((option, idx) => (
              <label
                key={option}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: tokens.spacing.md,
                  cursor: "pointer",
                }}
              >
                <CheckBox
                  checked={
                    formData.checkboxSection1[
                      option as keyof typeof formData.checkboxSection1
                    ]
                  }
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      checkboxSection1: {
                        ...formData.checkboxSection1,
                        [option]: checked,
                      },
                    })
                  }
                />
                <span
                  style={{
                    fontSize: "14px",
                    color: tokens.colors.textPrimary,
                  }}
                >
                  Elemento {idx + 1}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Section 3: Dropdown & Slider */}
        <div
          style={{
            padding: tokens.spacing.md,
            background: tokens.colors.backgroundSecondary,
            borderRadius: tokens.radius.sm,
            display: "flex",
            flexDirection: "column",
            gap: tokens.spacing.md,
          }}
        >
          <div>
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
              Categoría de producto
            </label>
            <Dropdown
              options={[
                { value: "category1", label: "Categoría 1" },
                { value: "category2", label: "Categoría 2" },
                { value: "category3", label: "Categoría 3" },
              ]}
              value={formData.dropdownValue}
              onValueChange={(value: string) =>
                setFormData({ ...formData, dropdownValue: value })
              }
            />
          </div>

          <div>
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
              Nivel de satisfacción
            </label>
            <Slider
              value={formData.sliderValue}
              onValueChange={(value: number) =>
                setFormData({ ...formData, sliderValue: value })
              }
              min={0}
              max={5}
              step={1}
            />
          </div>
        </div>

        {/* Section 4: Text Input */}
        <div>
          <Input
            labelText="Observaciones adicionales"
            requested={false}
            state="enable"
            type="multiline"
            placeholder="Escriba sus observaciones aquí..."
            value={formData.textInput}
            onValueChange={(value) =>
              setFormData({ ...formData, textInput: value })
            }
          />
        </div>

        {/* Section 5: Additional Checkboxes */}
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
              marginBottom: tokens.spacing.md,
            }}
          >
            Confirmaciones finales
          </label>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: tokens.spacing.md,
            }}
          >
            {["option1", "option2"].map((option) => (
              <label
                key={option}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: tokens.spacing.md,
                  cursor: "pointer",
                }}
              >
                <CheckBox
                  checked={formData.checkboxSection2[option as keyof typeof formData.checkboxSection2]}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      checkboxSection2: {
                        ...formData.checkboxSection2,
                        [option]: checked,
                      },
                    })
                  }
                />
                <span
                  style={{
                    fontSize: "14px",
                    color: tokens.colors.textPrimary,
                  }}
                >
                  {option === "option1"
                    ? "Confirmo los datos ingresados"
                    : "Acepto términos y condiciones"}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Section 6: Number Slider */}
        <div>
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
            Selecciona un rango
          </label>
          <NumberSlider
            min={1}
            max={6}
            value={formData.numberSlider}
            onValueChange={(value: number) =>
              setFormData({ ...formData, numberSlider: value })
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
