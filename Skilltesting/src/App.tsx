
import './App.css'
import { Button } from './components/Button/Button'
import { CardCheck } from './components/CardCheck/CardCheck'
import { CheckBoxStatus } from './components/CheckBoxStatus/CheckBoxStatus'
import { DropdownCard } from './components/DropdownCard/DropdownCard'
import { MenuBar } from './components/MenuBar/MenuBar'
import { PrincipalMenu } from './components/PrincipalMenu/PrincipalMenu'

const categories = [
  { title: 'Adhesivos', checked: true },
  { title: 'Apple', checked: true },
  { title: 'Coloración del cabello', checked: false },
  { title: 'Compuestos de moldeo', checked: false },
  { title: 'Cuidado personal', checked: false },
]

function App() {
  return (
    <main className="report-screen">
      <div className="report-screen__phone">
        <header className="report-screen__topbar">
          <PrincipalMenu property1="Header" style={{ width: '100%' }} />
        </header>

        <div className="report-screen__body">
          <Button appearance="text" color="primary" size="small" state="active" orientation="left" className="back-button" style={{ width: 'auto', minHeight: 'auto', padding: 0, background: 'transparent' }} leftIcon={<span aria-hidden>‹</span>}>
            Volver
          </Button>

          <div className="status-shell">
            <div className="status-shell__content">
              <CheckBoxStatus status="Add" />
              <span>Tiempo PDV - 00:18:25 / 00:22:00</span>
            </div>

            <Button appearance="text" color="primary" size="small" state="active" orientation="center" className="status-shell__close" style={{ width: 'auto', minHeight: 'auto', padding: 0, background: 'transparent' }}>
              ×
            </Button>
          </div>

          <h1 className="report-screen__title">PDV Unicentro</h1>

          <DropdownCard
            state="Card open"
            header="Reporte de inventario"
            caption="Nombre del PDV - Ubicación / Regional"
            showState={false}
            title="Detalle"
            subtitle="¿Qué debo hacer?"
            body="En esta actividad se deben capturar los volúmenes o cantidad de elementos disponibles en las referencias seleccionadas, las categorías o productos a continuación definen cuáles deben ser reportados."
            style={{ width: '100%' }}
          />

          <div className="section-header">
            <h2>Categorías por reportar</h2>
            <Button appearance="text" color="primary" size="small" state="active" orientation="center" className="filter-button" style={{ width: 'auto', minHeight: 'auto', padding: 0, background: 'transparent' }}>
              <span className="filter-button__plus" aria-hidden>
                <span />
                <span />
              </span>
              <span>Filtrar</span>
            </Button>
          </div>

          <div className="categories-table-head">
            <span>Categoría</span>
            <span>Estado de reporte</span>
          </div>

          <section className="categories-list" aria-label="Categorías por reportar">
            {categories.map((category) => (
              <CardCheck
                key={category.title}
                state={category.checked ? 'enabled' : 'disabled'}
                title={category.title}
                subTitle="10 Productos"
                label=""
                number=""
                showLabel={false}
                showNumber={false}
                showIconRight={false}
                style={{ width: '100%' }}
              />
            ))}
          </section>

          <div className="report-screen__actions">
            <Button appearance="contained" color="primary" size="medium" state="active">
              Guardar reporte
            </Button>
          </div>
        </div>

        <footer className="report-screen__footer">
          <MenuBar items="3" style={{ width: '100%' }} />
        </footer>
      </div>
    </main>
  )
}

export default App
