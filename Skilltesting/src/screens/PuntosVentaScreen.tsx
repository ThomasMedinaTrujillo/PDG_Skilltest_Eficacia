import { CardCheck } from "../components/CardCheck/CardCheck";
import { MenuBar } from "../components/MenuBar/MenuBar";
import { PrincipalMenu } from "../components/PrincipalMenu/PrincipalMenu";
import { tokens } from "../Token";
import "./PuntosVentaScreen.css";

const routeOptions = [
  {
    title: "Éxito Unicentro Cali",
    subTitle: "Visita completa - 08:00 AM",
  },
  {
    title: "Éxito Unicentro Cali",
    subTitle: "Visita completa - 08:00 AM",
  },
];

export default function PuntosVentaScreen() {
  return (
    <main className="puntos-venta-screen" style={{ background: tokens.colors.backgroundPrimary }}>
      <div className="puntos-venta-screen__shell">
        <PrincipalMenu mode="header" />

        <div className="puntos-venta-screen__body">
          <header className="puntos-venta-screen__header">
            <h1 style={{ color: "var(--text-heading)", fontFamily: "var(--font-heading-h3)", fontSize: "var(--font-size-h3)", fontWeight: "var(--font-weight-bold)", lineHeight: 1 }}>
              Puntos de venta
            </h1>
            <p style={{ color: "var(--text-subtitle)", fontFamily: "var(--font-body-large)", fontSize: "var(--font-size-body-large)", fontWeight: "var(--font-weight-normal)", lineHeight: 1 }}>
              Viernes, 24 de noviembre 2023
            </p>
          </header>

          <section className="puntos-venta-screen__routes" aria-label="Opciones para la selección de rutas">
            <h2 style={{ color: "var(--text-heading)", fontFamily: "var(--font-body-medium)", fontSize: "var(--font-size-subtitle)", fontWeight: "var(--font-weight-semibold)", lineHeight: 1.2 }}>
              Opciones para la selección de rutas
            </h2>

            <div className="puntos-venta-screen__route-list">
              {routeOptions.map((route, index) => (
                <CardCheck
                  key={`${route.title}-${index}`}
                  state="enabled"
                  title={route.title}
                  subTitle={route.subTitle}
                  label=""
                  number=""
                  checked={false}
                />
              ))}
            </div>
          </section>
        </div>

        <footer className="puntos-venta-screen__footer">
          <MenuBar items={3} activeIndex={0} labels={["Inicio", "Agenda", "Perfil"]} />
        </footer>
      </div>
    </main>
  );
}