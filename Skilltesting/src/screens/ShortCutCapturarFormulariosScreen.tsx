import * as React from "react";
import { PrincipalMenu } from "../components/PrincipalMenu/PrincipalMenu";
import { MenuBar } from "../components/MenuBar/MenuBar";
import { CardCheck } from "../components/CardCheck/CardCheck";
import { AlertsState } from "../components/AlertsState/AlertsState";
import { MobileButtons } from "../components/MobileButtons/MobileButtons";
import { tokens } from "../Token";

export default function ShortCutCapturarFormulariosScreen() {
  const [selectedFormula, setSelectedFormula] = React.useState<number | null>(null);

  const formulas = [
    { id: 1, title: "Empresa 1", subTitle: "Código EMP001", label: "| TQ", number: "2" },
    { id: 2, title: "Empresa 2", subTitle: "Código EMP002", label: "| TQ", number: "3" },
    { id: 3, title: "Empresa 3", subTitle: "Código EMP003", label: "| TQ", number: "1" },
    { id: 4, title: "Empresa 4", subTitle: "Código EMP004", label: "| TQ", number: "4" },
  ];

  const handleCardCheck = (id: number, checked: boolean) => {
    if (checked) {
      setSelectedFormula(id);
    } else {
      setSelectedFormula(null);
    }
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
            Formularios disponibles
          </h1>
          <p
            style={{
              fontSize: "14px",
              color: tokens.colors.textSecondary,
              fontFamily: "Solomon Sans",
              margin: 0,
            }}
          >
            Selecciona una empresa para capturar formularios
          </p>
        </div>

        {/* Cards List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: tokens.spacing.md,
          }}
        >
          {formulas.map((formula) => (
            <CardCheck
              key={formula.id}
              title={formula.title}
              subTitle={formula.subTitle}
              label={formula.label}
              number={formula.number}
              state="enabled"
              checked={selectedFormula === formula.id}
              onCheckedChange={(checked) => handleCardCheck(formula.id, checked)}
            />
          ))}
        </div>

        {/* Back Button */}
        <div style={{ marginTop: tokens.spacing.md }}>
          <MobileButtons
            styleType="text"
            onClick={() => console.log("Back")}
          >
            Volver
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
