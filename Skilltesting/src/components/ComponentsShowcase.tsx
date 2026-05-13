import { Alert } from "./Alert";
import { Input } from "./Input";
import { MenuBar, type MenuBarKey } from "./MenuBar";
import { MobileButton, type MobileButtonColor, type MobileButtonOrientation, type MobileButtonSize, type MobileButtonStyle } from "./MobileButton";
import { PrincipalMenu } from "./PrincipalMenu";
import "./ComponentsShowcase.css";

const MENU_KEYS: MenuBarKey[] = ["inicio", "agenda", "gestion", "portafolio"];

const MOBILE_COLORS: MobileButtonColor[] = ["primary", "error"];
const MOBILE_VARIANTS: MobileButtonStyle[] = ["contained", "outline", "text"];
const MOBILE_SIZES: MobileButtonSize[] = ["sm", "md"];
const MOBILE_ORIENTS: MobileButtonOrientation[] = ["center", "left"];

type MobileCombo = {
  color: MobileButtonColor;
  variant: MobileButtonStyle;
  size: MobileButtonSize;
  orientation: MobileButtonOrientation;
  disabled: boolean;
};

function mobileButtonCombos(): MobileCombo[] {
  const out: MobileCombo[] = [];
  for (const disabled of [false, true]) {
    for (const color of MOBILE_COLORS) {
      for (const variant of MOBILE_VARIANTS) {
        for (const size of MOBILE_SIZES) {
          for (const orientation of MOBILE_ORIENTS) {
            out.push({ color, variant, size, orientation, disabled });
          }
        }
      }
    }
  }
  return out;
}

const MOBILE_BUTTON_MATRIX = mobileButtonCombos();

function comboLabel(c: MobileCombo): string {
  const bits = [
    c.color,
    c.variant,
    c.size,
    c.orientation === "left" ? "izq" : "ctr",
    c.disabled ? "off" : "on",
  ];
  return bits.join(" · ");
}

export default function ComponentsShowcase() {
  return (
    <div className="components-showcase">
      <section className="components-showcase__section">
        <h2 className="components-showcase__title">MobileButton</h2>
        <p className="components-showcase__caption">
          Matriz: color × estilo × tamaño × alineación × activo / deshabilitado (48 combinaciones).
        </p>
        <div className="components-showcase__variant-grid">
          {MOBILE_BUTTON_MATRIX.map((c, i) => (
            <div key={i} className="components-showcase__variant-cell">
              <span className="components-showcase__variant-tag">{comboLabel(c)}</span>
              <MobileButton
                color={c.color}
                variant={c.variant}
                size={c.size}
                orientation={c.orientation}
                disabled={c.disabled}
                showIconStart={c.orientation === "left"}
                showIconEnd={c.orientation === "left"}
                label="button"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="components-showcase__section">
        <h2 className="components-showcase__title">PrincipalMenu</h2>
        <h3 className="components-showcase__subtitle">Header</h3>
        <PrincipalMenu variant="header" />

        <h3 className="components-showcase__subtitle">Drawer · lista completa (8 ítems)</h3>
        <div className="components-showcase__drawer-shell">
          <PrincipalMenu variant="drawer" showExtraItems />
        </div>

        <h3 className="components-showcase__subtitle">Drawer · lista compacta (4 ítems)</h3>
        <div className="components-showcase__drawer-shell">
          <PrincipalMenu variant="drawer" showExtraItems={false} />
        </div>
      </section>

      <section className="components-showcase__section">
        <h2 className="components-showcase__title">MenuBar</h2>
        <p className="components-showcase__caption">Cada fila fija un tab activo distinto.</p>
        <div className="components-showcase__stack">
          {MENU_KEYS.map((key) => (
            <div key={key} className="components-showcase__menu-preview">
              <span className="components-showcase__variant-tag">Activo: {key}</span>
              <MenuBar activeKey={key} onItemSelect={() => {}} />
            </div>
          ))}
        </div>
      </section>

      <section className="components-showcase__section">
        <h2 className="components-showcase__title">Input</h2>
        <p className="components-showcase__caption">
          Variantes de error, aviso, icono, asterisco obligatorio y deshabilitado.
        </p>
        <div className="components-showcase__variant-grid components-showcase__variant-grid--inputs">
          <div className="components-showcase__variant-cell">
            <span className="components-showcase__variant-tag">error + alerta + icono + *</span>
            <Input defaultValue="" placeholder="Value" showAlert showTrailingIcon />
          </div>
          <div className="components-showcase__variant-cell">
            <span className="components-showcase__variant-tag">error + icono (sin alerta)</span>
            <Input showAlert={false} showTrailingIcon defaultValue="" placeholder="Value" />
          </div>
          <div className="components-showcase__variant-cell">
            <span className="components-showcase__variant-tag">error + alerta (sin icono)</span>
            <Input showAlert showTrailingIcon={false} defaultValue="" placeholder="Value" />
          </div>
          <div className="components-showcase__variant-cell">
            <span className="components-showcase__variant-tag">error sin *</span>
            <Input requiredMark={false} showAlert defaultValue="" placeholder="Value" />
          </div>
          <div className="components-showcase__variant-cell">
            <span className="components-showcase__variant-tag">válido (sin error)</span>
            <Input
              error={false}
              helperText=""
              showAlert={false}
              showTrailingIcon={false}
              placeholder="Texto correcto"
              label="Campo ok"
            />
          </div>
          <div className="components-showcase__variant-cell">
            <span className="components-showcase__variant-tag">válido + icono</span>
            <Input
              error={false}
              helperText=""
              showTrailingIcon
              label="Con icono"
              placeholder="Buscar…"
            />
          </div>
          <div className="components-showcase__variant-cell">
            <span className="components-showcase__variant-tag">válido + alerta amarilla</span>
            <Input error={false} helperText="" showAlert showTrailingIcon={false} label="Info" />
          </div>
          <div className="components-showcase__variant-cell">
            <span className="components-showcase__variant-tag">deshabilitado · error</span>
            <Input disabled defaultValue="No editable" showTrailingIcon />
          </div>
          <div className="components-showcase__variant-cell">
            <span className="components-showcase__variant-tag">deshabilitado · válido</span>
            <Input disabled error={false} helperText="" defaultValue="Ok deshabilitado" label="Solo lectura" />
          </div>
          <div className="components-showcase__variant-cell">
            <span className="components-showcase__variant-tag">error sin texto de ayuda</span>
            <Input helperText="" showTrailingIcon={false} defaultValue="" placeholder="Value" />
          </div>
        </div>
      </section>

      <section className="components-showcase__section">
        <h2 className="components-showcase__title">Alert</h2>
        <p className="components-showcase__caption">Variantes expuestas por el componente (`showIcon`).</p>
        <div className="components-showcase__row components-showcase__row--alerts">
          <div className="components-showcase__variant-cell">
            <span className="components-showcase__variant-tag">con icono</span>
            <Alert text="Estado" showIcon />
          </div>
          <div className="components-showcase__variant-cell">
            <span className="components-showcase__variant-tag">sin icono</span>
            <Alert text="Estado" showIcon={false} />
          </div>
        </div>
      </section>
    </div>
  );
}
