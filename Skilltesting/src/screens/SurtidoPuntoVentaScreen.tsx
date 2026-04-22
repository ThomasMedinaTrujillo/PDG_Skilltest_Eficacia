import { useState } from "react";
import { CheckBox } from "../components/CheckBox/CheckBox";
import { DropdownCard } from "../components/DropdownCard/DropdownCard";
import { MobileButtons } from "../components/MobileButtons/MobileButtons";
import { PrincipalMenu } from "../components/PrincipalMenu/PrincipalMenu";
import { QuestionButton } from "../components/QuestionButton/QuestionButton";
import "./SurtidoPuntoVentaScreen.css";

const activityDescription =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Esta visita comercial completa permite validar el surtido y registrar el avance en sitio.";

export default function SurtidoPuntoVentaScreen() {
  const [isDetailOpen, setIsDetailOpen] = useState(true);

  return (
    <main className="surtido-pdv-screen">
      <div className="surtido-pdv-screen__shell">
        <PrincipalMenu mode="header" />

        <div className="surtido-pdv-screen__body">
          <a href="#" className="surtido-pdv-screen__back-link">
            Atrás
          </a>

          <DropdownCard
            state={isDetailOpen ? "card-open" : "card-close"}
            header="Surtido de punto de venta"
            caption="Tiempo máximo de ejecución · 35 minutos"
            title="Detalle"
            subtitle="Visita comercial completa"
            body={activityDescription}
            textState="Disponible"
            onToggle={() => setIsDetailOpen((current) => !current)}
          />

          <section className="surtido-pdv-screen__timer-card" aria-label="Tiempo estimado y cronómetro">
            <div className="surtido-pdv-screen__timer-copy">
              <span className="surtido-pdv-screen__label">Tiempo estimado</span>
              <strong className="surtido-pdv-screen__range">20–35 minutos</strong>
            </div>

            <div className="surtido-pdv-screen__digital-timer" aria-label="Cronómetro">
              00:00:00
            </div>
          </section>

          <section className="surtido-pdv-screen__report" aria-label="Reporte requerido">
            <h2>Reporte requerido</h2>

            <div className="surtido-pdv-screen__report-item">
              <CheckBox checked aria-label="Formulario de surtido seleccionado" />
              <span>Formulario de surtido</span>
            </div>
          </section>

          <section className="surtido-pdv-screen__actions" aria-label="Acciones de la actividad">
            <MobileButtons size="medium" styleType="outline" state="active" color="primary">
              Registro de actividad
            </MobileButtons>
            <MobileButtons size="medium" styleType="contained" state="active" color="primary">
              Continuar con las actividades
            </MobileButtons>
          </section>
        </div>

        <div className="surtido-pdv-screen__help">
          <QuestionButton defaultActive={false} aria-label="Ayuda o soporte" />
        </div>
      </div>
    </main>
  );
}