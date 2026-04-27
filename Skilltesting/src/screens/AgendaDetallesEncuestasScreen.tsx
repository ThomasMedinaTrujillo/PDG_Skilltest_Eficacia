import * as React from "react";
import { PrincipalMenu } from "../components/PrincipalMenu/PrincipalMenu";
import { MenuBar } from "../components/MenuBar/MenuBar";
import { DropdownCard } from "../components/DropdownCard/DropdownCard";
import { ProgressCard } from "../components/ProgressCard/ProgressCard";
import { MobileButtons } from "../components/MobileButtons/MobileButtons";
import { tokens } from "../Token";

export default function AgendaDetallesEncuestasScreen() {
  const [expandedDropdown, setExpandedDropdown] = React.useState<"card-open" | "card-close">("card-close");

  const forms = [
    {
      id: 1,
      title: "Encuesta de Satisfacción",
      headLeftText: "20 preguntas",
      headRightText: "75%",
      activitiesText: "Ejecutados 24",
      goalsText: "Meta 34",
      percent: 75,
      status: "green" as const,
    },
    {
      id: 2,
      title: "Encuesta de Calidad",
      headLeftText: "15 preguntas",
      headRightText: "50%",
      activitiesText: "En progreso",
      goalsText: "Meta 30",
      percent: 50,
      status: "yellow" as const,
    },
    {
      id: 3,
      title: "Encuesta de Servicio",
      headLeftText: "10 preguntas",
      headRightText: "100%",
      activitiesText: "Completado",
      goalsText: "Meta 20",
      percent: 100,
      status: "green" as const,
    },
    {
      id: 4,
      title: "Encuesta de Capacitación",
      headLeftText: "8 preguntas",
      headRightText: "40%",
      activitiesText: "Sin iniciar",
      goalsText: "Meta 18",
      percent: 40,
      status: "red" as const,
    },
  ];

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
          gap: tokens.spacing.md,
          overflowY: "auto",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "24px",
              fontWeight: 700,
              color: tokens.colors.primary,
              fontFamily: "Solomon Sans",
              margin: `0 0 ${tokens.spacing.sm} 0`,
            }}
          >
            Detalles de Encuestas
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: tokens.colors.textSecondary,
              fontFamily: "Solomon Sans",
              margin: 0,
            }}
          >
            Gestión de encuestas en punto de venta
          </p>
        </div>

        {/* Info Dropdown Card */}
        <DropdownCard
          header="Formularios en punto de venta"
          caption="Información general"
          state={expandedDropdown}
          body="Aquí se listarán los formularios disponibles en el punto de venta. Puedes seleccionar uno para ver más detalles."
          onToggle={() => setExpandedDropdown(expandedDropdown === "card-open" ? "card-close" : "card-open")}
        />

        {/* Forms List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: tokens.spacing.md,
          }}
        >
          {forms.map((form) => (
            <ProgressCard
              key={form.id}
              title={form.title}
              headLeftText={form.headLeftText}
              headRightText={form.headRightText}
              activitiesText={form.activitiesText}
              goalsText={form.goalsText}
              percent={form.percent}
              status={form.status}
            />
          ))}
        </div>

        {/* Back Button */}
        <div style={{ marginTop: tokens.spacing.md }}>
          <MobileButtons
            styleType="text"
            onClick={() => console.log("Back to home")}
          >
            Regresar al inicio
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
