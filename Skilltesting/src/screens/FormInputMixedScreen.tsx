import * as React from "react";
import { MobileButtons } from "../components/MobileButtons/MobileButtons";
import { Input } from "../components/Input/Input";
import { Slider } from "../components/Slider/Slider";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { FileUpload } from "../components/FileUpload/FileUpload";
import { RadioButtons } from "../components/RadioButtons/RadioButtons";
import { CheckBox } from "../components/CheckBox/CheckBox";
import { NumberSlider } from "../components/NumberSlider/NumberSlider";
import { tokens } from "../Token";

export default function FormInputMixedScreen() {
  const [formData, setFormData] = React.useState({
    textInput: "",
    sliderValue: 3,
    dropdownValue: "option1",
    radioValue: "si",
    checkboxes: { option1: false, option2: false },
    numberSlider: 5,
  });

  const handleSaveSection = () => {
    console.log("Saving section with data:", formData);
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
          Formulario Mixto
        </h1>
        <p
          style={{
            fontSize: "12px",
            color: tokens.colors.textSecondary,
            fontFamily: "Solomon Sans",
            margin: `${tokens.spacing.xs} 0 0 0`,
          }}
        >
          Sección 1 de 3
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
        {/* Text Input */}
        <div>
          <Input
            labelText="Nombre completo"
            requested={true}
            state="enable"
            type="textfield"
            placeholder="Ingrese su nombre"
            value={formData.textInput}
            onValueChange={(value) =>
              setFormData({ ...formData, textInput: value })
            }
          />
        </div>

        {/* Slider */}
        <div>
          <label
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: tokens.colors.primary,
              fontFamily: "Solomon Sans",
              display: "block",
              marginBottom: tokens.spacing.xs,
            }}
          >
            Calificación (0-5)
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

        {/* Dropdown */}
        <div>
          <label
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: tokens.colors.primary,
              fontFamily: "Solomon Sans",
              display: "block",
              marginBottom: tokens.spacing.xs,
            }}
          >
            Categoría
          </label>
          <Dropdown
            options={[
              { value: "option1", label: "Opción 1" },
              { value: "option2", label: "Opción 2" },
              { value: "option3", label: "Opción 3" },
            ]}
            value={formData.dropdownValue}
            onValueChange={(value: string) =>
              setFormData({ ...formData, dropdownValue: value })
            }
          />
        </div>

        {/* File Upload */}
        <div>
          <FileUpload
            onFileChange={(file) => console.log("File selected:", file)}
          />
        </div>

        {/* Radio Buttons */}
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
            ¿Autoriza continuación?
          </label>
          <div
            style={{
              display: "flex",
              gap: tokens.spacing.md,
              alignItems: "center",
            }}
          >
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: tokens.spacing.sm,
                cursor: "pointer",
              }}
            >
              <RadioButtons
                checked={formData.radioValue === "si"}
                onCheckedChange={() =>
                  setFormData({ ...formData, radioValue: "si" })
                }
              />
              <span style={{ fontSize: "14px", color: tokens.colors.textPrimary }}>
                Sí
              </span>
            </label>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                gap: tokens.spacing.sm,
                cursor: "pointer",
              }}
            >
              <RadioButtons
                checked={formData.radioValue === "no"}
                onCheckedChange={() =>
                  setFormData({ ...formData, radioValue: "no" })
                }
              />
              <span style={{ fontSize: "14px", color: tokens.colors.textPrimary }}>
                No
              </span>
            </label>
          </div>
        </div>

        {/* Checkboxes */}
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
            Selecciona opciones
          </label>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: tokens.spacing.sm,
            }}
          >
            {["option1", "option2"].map((option) => (
              <label
                key={option}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: tokens.spacing.sm,
                  cursor: "pointer",
                }}
              >
                <CheckBox
                  checked={formData.checkboxes[option as keyof typeof formData.checkboxes]}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      checkboxes: {
                        ...formData.checkboxes,
                        [option]: checked,
                      },
                    })
                  }
                />
                <span style={{ fontSize: "14px", color: tokens.colors.textPrimary }}>
                  {option === "option1" ? "Opción A" : "Opción B"}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Number Slider */}
        <div>
          <label
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: tokens.colors.primary,
              fontFamily: "Solomon Sans",
              display: "block",
              marginBottom: tokens.spacing.xs,
            }}
          >
            Rango de edad
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
