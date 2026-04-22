import { useState } from "react";
import { CardCheck } from "../components/CardCheck/CardCheck";
import { AlertsState } from "../components/AlertsState/AlertsState";
import { Dropdown } from "../components/Dropdown/Dropdown";
import { DropdownCard } from "../components/DropdownCard/DropdownCard";
import { MobileButtons } from "../components/MobileButtons/MobileButtons";
import { PrincipalMenu } from "../components/PrincipalMenu/PrincipalMenu";
import "./ReporteAgotadosScreen.css";

const activityTime = "Tiempo PDV - 00:18:25 / 00:22:00";
const activityDetail =
  "Identificar productos agotados y verificar cuáles siguen disponibles en el punto de venta para completar el reporte de captura.";

export default function ReporteAgotadosScreen() {
  const [detailOpen, setDetailOpen] = useState(true);

  return (
    <main className="reporte-agotados-screen">
      <div className="reporte-agotados-screen__shell">
        <PrincipalMenu mode="header" />

        <div className="reporte-agotados-screen__content">
          <section className="reporte-agotados-screen__activity-bar" aria-label="Estado de la actividad">
            <AlertsState styleType="success" textAlert={activityTime} showIcon onClose={() => undefined} className="reporte-agotados-screen__alert" />

            <MobileButtons
              size="small"
              styleType="text"
              state="active"
              color="primary"
              aria-label="Cerrar actividad"
              className="reporte-agotados-screen__close-button"
            >
              ×
            </MobileButtons>
          </section>

          <p className="reporte-agotados-screen__context">PDV Unicentro</p>

          <DropdownCard
            state={detailOpen ? "card-open" : "card-close"}
            header="Reporte de agotados"
            caption="PDV Unicentro | Regional Centro"
            title="Detalle"
            subtitle="Captura operativa del punto de venta"
            body={activityDetail}
            textState="En progreso"
            onToggle={() => setDetailOpen((current) => !current)}
          />

          <section className="reporte-agotados-screen__filters" aria-label="Categorías disponibles">
            <h2>Categorías disponibles</h2>

            <Dropdown title="Label" placeholder="Selecciona un filtro" defaultOpen={false} />

            <MobileButtons size="medium" styleType="contained" state="active" color="primary">
              Aplicar filtro
            </MobileButtons>
          </section>

          <section className="reporte-agotados-screen__categories" aria-label="Listado de categorías">
            <CardCheck
              state="enabled"
              title="Categoría 1"
              subTitle="PDV Unicentro"
              label="agotados"
              number="2"
              checked={false}
            />
          </section>

          <section className="reporte-agotados-screen__activity-bar reporte-agotados-screen__activity-bar--bottom" aria-label="Resumen de tiempo">
            <AlertsState styleType="success" textAlert={activityTime} showIcon onClose={() => undefined} className="reporte-agotados-screen__alert" />
          </section>

          <MobileButtons size="medium" styleType="contained" state="active" color="primary">
            Guardar captura
          </MobileButtons>
        </div>
      </div>
    </main>
  );
}