
import './App.css'
import { AlertsState } from './components/AlertsState/AlertsState'
import { Button } from './components/Button/Button'
import { CardCheck } from './components/CardCheck/CardCheck'
import { CheckBoxStatus } from './components/CheckBoxStatus/CheckBoxStatus'
import { DropdownCard } from './components/DropdownCard/DropdownCard'
import { Input } from './components/Input/Input'
import { MenuBar } from './components/MenuBar/MenuBar'
import { PrincipalMenu } from './components/PrincipalMenu/PrincipalMenu'

function App() {
  return (
    <main className="app-screen">
      <div className="app-shell">
        <header className="app-shell__header">
          <PrincipalMenu property1="Header" />
        </header>

        <div className="app-shell__content">
          <section className="hero-card">
            <p className="hero-card__eyebrow">Eficacia operativa</p>
            <h1>Control de visitas</h1>
            <p className="hero-card__copy">
              Supervisa el estado de ejecución, consulta alertas y avanza con la revisión diaria desde una sola pantalla.
            </p>

            <div className="hero-card__status">
              <CheckBoxStatus status="Add" />
              <span>8 categorías aprobadas</span>
            </div>
          </section>

          <AlertsState styleType="default" textAlert="Ejecución cerrada con éxito. 92% de cobertura registrada." showIcon />

          <section className="panel-card">
            <div className="panel-card__header">
              <h2>Buscar y filtrar</h2>
              <span>Filtro activo</span>
            </div>
            <Input state="selected" label="Buscar categoría" required={false} valueText="Verificación de limpieza en góndola" />
          </section>

          <section className="panel-card">
            <div className="panel-card__header">
              <h2>Detalle de la visita</h2>
              <span>Abierto</span>
            </div>
            <DropdownCard
              state="Card open"
              header="Verificación de limpieza en góndola"
              caption="Única ejecución"
              textState="Completado"
              title="Ruta activa"
              subtitle="Lunes · 08:30 - 12:00"
              body="La inspección quedó registrada con observaciones leves y cierre conforme."
            />
          </section>

          <section className="panel-card">
            <div className="panel-card__header">
              <h2>Tareas</h2>
              <span>3 ítems</span>
            </div>

            <div className="task-stack">
              <CardCheck state="enabled" title="Validación comercial" subTitle="Completada" label="01" number="2" />
              <CardCheck state="Prueba" title="Alertas pendientes" subTitle="Requiere revisión" label="02" number="1" />
              <CardCheck state="disabled" title="Cierre administrativo" subTitle="Bloqueado" label="03" number="0" />
            </div>
          </section>

          <section className="actions-card">
            <Button appearance="contained" color="primary" size="medium" state="active">
              Guardar cambios
            </Button>
            <Button appearance="outline" color="primary" size="medium" state="active">
              Ver detalle
            </Button>
          </section>
        </div>

        <footer className="app-shell__footer">
          <MenuBar items="5" />
        </footer>
      </div>
    </main>
  )
}

export default App
