import * as React from "react";
import { PrincipalMenu } from "../components/PrincipalMenu/PrincipalMenu";
import { MenuBar } from "../components/MenuBar/MenuBar";
import { CardCheck } from "../components/CardCheck/CardCheck";
import { tokens } from "../Token";

const imgBackArrow = "http://localhost:3845/assets/d9c2dcaaf5567f7fc71e4dd76c6a22b41a8182b6.svg";
const imgCheckIcon = "http://localhost:3845/assets/8f596d652be11ce2a225b96c97ff6777e48c601d.svg";
const imgClose = "http://localhost:3845/assets/c83dbb8c602c3f7ca4e091a1545fff117a4c9337.svg";

export default function FormularioDisponiblesScreen() {
  const [checkedItems, setCheckedItems] = React.useState<Record<string, boolean>>({
    "exito-unicentro": true,
    "exito-unicentro-2": false,
    "exito-unicentro-3": false,
  });

  const handleCheckChange = (key: string) => {
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
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
      <PrincipalMenu mode="header" />

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: tokens.spacing.lg,
          gap: tokens.spacing.lg,
          overflowY: "auto",
        }}
      >
        {/* Back Button + Title Section */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: tokens.spacing.md }}>
          <button
            type="button"
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Go back"
          >
            <img src={imgBackArrow} alt="back" style={{ width: "18px", height: "18px" }} />
          </button>

          <div style={{ flex: 1 }}>
            {/* Alert Box */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: tokens.spacing.sm,
                padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
                background: tokens.colors.white,
                borderRadius: tokens.radius.sm,
                boxShadow: tokens.shadows.card,
                marginBottom: tokens.spacing.lg,
              }}
            >
              <img src={imgCheckIcon} alt="check" style={{ width: "18px", height: "18px" }} />
              <div style={{ flex: 1, fontSize: "12px", color: tokens.colors.textCaption, fontFamily: "Nunito Sans" }}>
                Sincronización - 80%
              </div>
              <button
                type="button"
                style={{
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
                aria-label="Close alert"
              >
                <img src={imgClose} alt="close" style={{ width: "18px", height: "18px" }} />
              </button>
            </div>

            {/* Title Section */}
            <div style={{ display: "flex", alignItems: "center", gap: tokens.spacing.md, marginBottom: tokens.spacing.lg }}>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: tokens.colors.primary,
                  fontFamily: "Solomon Sans",
                }}
              >
                Formularios disponibles
              </div>
            </div>

            {/* Form Details */}
            <div style={{ marginBottom: tokens.spacing.xl }}>
              <h1 style={{ fontSize: "24px", fontWeight: 700, color: tokens.colors.primary, margin: 0 }}>
                Puntos de venta
              </h1>
              <p style={{ fontSize: "14px", color: tokens.colors.textSecondary, margin: `${tokens.spacing.xs} 0 0 0` }}>
                Viernes, 24 de noviembre 2023
              </p>
            </div>

            {/* Route Info */}
            <div style={{ marginBottom: tokens.spacing.xl }}>
              <h2 style={{ fontSize: "16px", fontWeight: 600, color: tokens.colors.primary, margin: 0 }}>
                Ruta sur RS12053 (Bolsa)
              </h2>
            </div>

            {/* Card List */}
            <div style={{ display: "flex", flexDirection: "column", gap: tokens.spacing.lg }}>

        

              {/* Card 2 - Unchecked */}
              <CardCheck
                title="Éxito Unicentro Cali"
                label="Visita completa - 08:00 AM"
                state="enabled"
                checked={checkedItems["exito-unicentro-2"]}
                onCheckedChange={() => handleCheckChange("exito-unicentro-2")}
              />

              {/* Card 3 - Unchecked */}
              <CardCheck
                title="Éxito Unicentro Cali"
                label="Visita completa - 08:00 AM"
                state="enabled"
                checked={checkedItems["exito-unicentro-3"]}
                onCheckedChange={() => handleCheckChange("exito-unicentro-3")}
              />
            </div>

            {/* Save Button */}
            <button
              type="button"
              style={{
                width: "100%",
                padding: tokens.spacing.lg,
                marginTop: tokens.spacing.xl,
                background: tokens.colors.buttonBackground,
                color: tokens.colors.white,
                border: "none",
                borderRadius: tokens.radius.sm,
                fontSize: "16px",
                fontWeight: 600,
                fontFamily: "Solomon Sans",
                cursor: "pointer",
              }}
            >
              Guardar sección
            </button>
          </div>
        </div>
      </div>

      {/* Footer MenuBar */}
      <MenuBar items={3} activeIndex={0} labels={["Inicio", "Agenda", "Perfil"]} />
    </div>
  );
}
