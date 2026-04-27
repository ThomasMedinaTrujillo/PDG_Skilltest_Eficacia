import * as React from "react";
import { PrincipalMenu } from "../components/PrincipalMenu/PrincipalMenu";
import { MenuBar } from "../components/MenuBar/MenuBar";
import { MobileButtons } from "../components/MobileButtons/MobileButtons";
import { RadioButtons } from "../components/RadioButtons/RadioButtons";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { Slider } from "../components/Slider/Slider";
import { NumberSlider } from "../components/NumberSlider/NumberSlider";
import { tokens } from "../Token";

export default function TipoFinishScreen() {
  const [formData, setFormData] = React.useState({
    allowLabor: "si",
    department: "dept1",
    qualityRating: 4,
    numberRange: 3,
  });

  const handleSaveSection = () => {
    console.log("Saving final form with data:", formData);
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
      <PrincipalMenu mode="header" />

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: tokens.spacing.md,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: tokens.spacing.md,
        }}
      >
        <div style={{ width: "100%", maxWidth: "500px" }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: tokens.spacing.lg,
            }}
          >
            <h1
              style={{
                fontSize: "28px",
                fontWeight: 700,
                color: tokens.colors.primary,
                fontFamily: "Solomon Sans",
                margin: `0 0 ${tokens.spacing.sm} 0`,
              }}
            >
              Finalización
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: tokens.colors.textSecondary,
                fontFamily: "Solomon Sans",
                margin: 0,
              }}
            >
              Completa los últimos campos requeridos
            </p>
          </div>

          {/* Radio Buttons Section */}
          <div
            style={{
              padding: tokens.spacing.md,
              background: tokens.colors.backgroundSecondary,
              borderRadius: tokens.radius.sm,
              marginBottom: tokens.spacing.md,
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
              ¿Permite labor en el punto de venta?
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
                  checked={formData.allowLabor === "si"}
                  onCheckedChange={() =>
                    setFormData({ ...formData, allowLabor: "si" })
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
                  checked={formData.allowLabor === "no"}
                  onCheckedChange={() =>
                    setFormData({ ...formData, allowLabor: "no" })
                  }
                />
                <span style={{ fontSize: "14px", color: tokens.colors.textPrimary }}>
                  No
                </span>
              </label>
            </div>
          </div>

          {/* Dropdown Section */}
          <div
            style={{
              padding: tokens.spacing.md,
              background: tokens.colors.backgroundSecondary,
              borderRadius: tokens.radius.sm,
              marginBottom: tokens.spacing.md,
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
              Departamento
            </label>
            <Dropdown
              options={[
                { value: "dept1", label: "Departamento 1" },
                { value: "dept2", label: "Departamento 2" },
                { value: "dept3", label: "Departamento 3" },
                { value: "dept4", label: "Departamento 4" },
              ]}
              value={formData.department}
              onValueChange={(value: string) =>
                setFormData({ ...formData, department: value })
              }
            />
          </div>

          {/* Slider Section */}
          <div
            style={{
              padding: tokens.spacing.md,
              background: tokens.colors.backgroundSecondary,
              borderRadius: tokens.radius.sm,
              marginBottom: tokens.spacing.md,
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
              Calificación de calidad (0-5)
            </label>
            <Slider
              value={formData.qualityRating}
              onValueChange={(value: number) =>
                setFormData({ ...formData, qualityRating: value })
              }
              min={0}
              max={5}
              step={1}
            />
          </div>

          {/* Number Slider Section */}
          <div
            style={{
              padding: tokens.spacing.md,
              background: tokens.colors.backgroundSecondary,
              borderRadius: tokens.radius.sm,
              marginBottom: tokens.spacing.lg,
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
              Selecciona un rango
            </label>
            <NumberSlider
              min={1}
              max={6}
              value={formData.numberRange}
              onValueChange={(value: number) =>
                setFormData({ ...formData, numberRange: value })
              }
            />
          </div>

          {/* Save Button */}
          <MobileButtons
            styleType="contained"
            onClick={handleSaveSection}
          >
            Guardar sección
          </MobileButtons>
        </div>
      </main>

      {/* Footer Navigation */}
      <div style={{ padding: tokens.spacing.md, background: tokens.colors.backgroundSecondary }}>
        <MenuBar
          items={3}
          labels={["Inicio", "Agenda", "Gestión"]}
          activeIndex={1}
        />
      </div>
    </div>
  );
}
