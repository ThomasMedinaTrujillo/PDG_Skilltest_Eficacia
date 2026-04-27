import * as React from "react";
import { PrincipalMenu } from "../components/PrincipalMenu/PrincipalMenu";
import { MenuBar } from "../components/MenuBar/MenuBar";
import { CardCheck } from "../components/CardCheck/CardCheck";
import { AlertsState } from "../components/AlertsState/AlertsState";
import { tokens } from "../Token";

export default function FormularioVisitasScreen() {
  const [activeAlert, setActiveAlert] = React.useState(true);
  const [checkedItems, setCheckedItems] = React.useState<Record<string, boolean>>({
    "exito-1": true,
    "exito-2": false,
    "exito-3": false,
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
        {/* Alert */}
        {activeAlert && (
          <AlertsState
            styleType="default"
            textAlert="Sincronización - 80%"
            showIcon={true}
            onClose={() => setActiveAlert(false)}
          />
        )}

        {/* Section Title */}
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

        {/* Form Title & Details */}
        <div>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: tokens.colors.primary,
              margin: 0,
              fontFamily: "Solomon Sans",
            }}
          >
            Puntos de venta
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: tokens.colors.textSecondary,
              margin: `${tokens.spacing.xs} 0 0 0`,
              fontFamily: "Solomon Sans",
            }}
          >
            Viernes, 24 de noviembre 2023
          </p>
        </div>

        {/* Route Section */}
        <div>
          <h2
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: tokens.colors.primary,
              margin: 0,
              fontFamily: "Solomon Sans",
            }}
          >
            Ruta sur RS12053 (Bolsa)
          </h2>
        </div>

        {/* Cards List */}
        <div style={{ display: "flex", flexDirection: "column", gap: tokens.spacing.lg }}>
          <CardCheck
            title="Éxito Unicentro Cali"
            label="Visita completa - 08:00 AM"
            state="enabled"
            checked={checkedItems["exito-1"]}
            onCheckedChange={() => handleCheckChange("exito-1")}
          />
          <CardCheck
            title="Éxito Unicentro Cali"
            label="Visita completa - 08:00 AM"
            state="enabled"
            checked={checkedItems["exito-2"]}
            onCheckedChange={() => handleCheckChange("exito-2")}
          />
          <CardCheck
            title="Éxito Unicentro Cali"
            label="Visita completa - 08:00 AM"
            state="enabled"
            checked={checkedItems["exito-3"]}
            onCheckedChange={() => handleCheckChange("exito-3")}
          />
        </div>

        {/* Save Button */}
        <button
          type="button"
          style={{
            padding: tokens.spacing.lg,
            marginTop: tokens.spacing.lg,
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

      {/* Footer MenuBar */}
      <MenuBar items={3} activeIndex={0} labels={["Inicio", "Agenda", "Perfil"]} />
    </div>
  );
}
