import { PrincipalMenu } from "../components/PrincipalMenu/PrincipalMenu";
import { MenuBar } from "../components/MenuBar/MenuBar";
import { ProgressCard } from "../components/ProgressCard/ProgressCard";
import { AlertsState } from "../components/AlertsState/AlertsState";
import { MobileButtons } from "../components/MobileButtons/MobileButtons";
import { tokens } from "../Token";

export default function FormulariosListScreen() {

  const forms = [
    {
      id: 1,
      title: "Formulario de Ventas",
      headLeftText: "12 preguntas",
      headRightText: "60%",
      activitiesText: "Ejecutados 18",
      goalsText: "Meta 30",
      percent: 60,
      status: "green" as const,
    },
    {
      id: 2,
      title: "Formulario de Inventario",
      headLeftText: "8 preguntas",
      headRightText: "45%",
      activitiesText: "No iniciado",
      goalsText: "Meta 15",
      percent: 45,
      status: "yellow" as const,
    },
    {
      id: 3,
      title: "Formulario de Cliente",
      headLeftText: "15 preguntas",
      headRightText: "100%",
      activitiesText: "Completado",
      goalsText: "Meta 34",
      percent: 100,
      status: "green" as const,
    },
    {
      id: 4,
      title: "Formulario de Obligatorio",
      headLeftText: "10 preguntas",
      headRightText: "30%",
      activitiesText: "Obligatorio",
      goalsText: "Meta 25",
      percent: 30,
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

      {/* Time Alert */}
      <div style={{ padding: tokens.spacing.md, background: tokens.colors.backgroundSecondary }}>
        <AlertsState
          styleType="default"
          textAlert="Tiempo PDV - 00:18:25 / 00:22:00"
        />
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
            Formularios
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: tokens.colors.textSecondary,
              fontFamily: "Solomon Sans",
              margin: 0,
            }}
          >
            Progreso de ejecución de formularios
          </p>
        </div>

        {/* Progress Cards List */}
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
          activeIndex={0}
        />
      </div>
    </div>
  );
}
