import { Dropdown } from "../components/Dropdown/Dropdown";
import { MenuBar } from "../components/MenuBar/MenuBar";
import { MobileButtons } from "../components/MobileButtons/MobileButtons";
import { NumberSlider } from "../components/NumberSlider/NumberSlider";
import { PrincipalMenu } from "../components/PrincipalMenu/PrincipalMenu";
import { RadioButtons } from "../components/RadioButtons/RadioButtons";
import { Slider } from "../components/Slider/Slider";
import "./TipoFinishScreen.css";

export default function TipoFinishScreen() {
  return (
    <main className="tipo-finish-screen">
      <div className="tipo-finish-screen__phone-shell">
        <PrincipalMenu mode="header" />

        <section className="tipo-finish-screen__content">
          <div className="tipo-finish-screen__back-action">
            <MobileButtons size="medium" styleType="text" state="active" color="primary">
              Volver
            </MobileButtons>
          </div>

          <header className="tipo-finish-screen__titles">
            <h1>Nombre del formulario</h1>
            <h2>Nombre de la sección</h2>
          </header>

          <section className="tipo-finish-screen__question-block" aria-label="Pregunta principal">
            <p className="tipo-finish-screen__question-text">¿Permite Labor en el punto de venta?</p>

            <div className="tipo-finish-screen__option-row">
              <RadioButtons name="permit-labor"  />
              <span>Sí</span>
            </div>

            <div className="tipo-finish-screen__option-row">
              <RadioButtons name="permit-labor"   />
              <span>No</span>
            </div>
          </section>

          <Dropdown title="Título dropdown" placeholder="Label" />

          <Slider title="Escala (Slider Título)"  />

          <NumberSlider label="21 - 30" min={1} max={5} />

          <div className="tipo-finish-screen__save-action">
            <MobileButtons size="medium" styleType="contained" state="active" color="primary">
              Guardar sección
            </MobileButtons>
          </div>
        </section>

        <footer className="tipo-finish-screen__footer">
          <MenuBar items={3} activeIndex={0} labels={["Inicio", "Agenda", "Gestión"]} />
        </footer>
      </div>
    </main>
  );
}
