
import './App.css'
import { AlertsState } from './components/AlertsState/AlertsState'
import { Button } from './components/Button/Button'
import { Input } from './components/Input/Input'

const buttonAppearances = ['contained', 'outline', 'text'] as const
const buttonColors = ['primary', 'error'] as const
const buttonSizes = ['small', 'medium'] as const
const buttonStates = ['active', 'disable', 'pressed'] as const
const buttonOrientations = ['center', 'left'] as const

const inputVariants = [
  { state: 'enable', type: 'textField' },
  { state: 'enable', type: 'multiline' },
  { state: 'selected', type: 'textField' },
  { state: 'selected', type: 'multiline' },
  { state: 'error', type: 'textField' },
  { state: 'error', type: 'multiline' },
] as const

const alertVariants = ['default', 'success', 'pending', 'warning'] as const

function App() {
  return (
    <main className="showcase-page">
      <header className="showcase-header">
        <p className="showcase-kicker">Design System</p>
        <h1>Component Showcase</h1>
        <p>All extracted variants for Button, Input, and AlertsState.</p>
      </header>

      <section className="showcase-section">
        <div className="section-title-row">
          <h2>Button</h2>
          <span>{buttonAppearances.length * buttonColors.length * buttonSizes.length * buttonStates.length * buttonOrientations.length} variants</span>
        </div>
        <div className="button-grid">
          {buttonAppearances.flatMap((appearance) =>
            buttonColors.flatMap((color) =>
              buttonSizes.flatMap((size) =>
                buttonStates.flatMap((state) =>
                  buttonOrientations.map((orientation) => {
                    const key = [appearance, color, size, state, orientation].join('-')
                    return (
                      <div className="showcase-card" key={key}>
                        <p className="variant-label">{key}</p>
                        <Button
                          appearance={appearance}
                          color={color}
                          size={size}
                          state={state}
                          orientation={orientation}
                          leftIcon={<span aria-hidden>{'O'}</span>}
                          rightIcon={<span aria-hidden>{'>'}</span>}
                        >
                          button
                        </Button>
                      </div>
                    )
                  }),
                ),
              ),
            ),
          )}
        </div>
      </section>

      <section className="showcase-section">
        <div className="section-title-row">
          <h2>Input</h2>
          <span>{inputVariants.length} variants</span>
        </div>
        <div className="input-grid">
          {inputVariants.map((variant) => {
            const key = `${variant.state}-${variant.type}`
            return (
              <div className="showcase-card" key={key}>
                <p className="variant-label">{key}</p>
                <Input
                  state={variant.state}
                  type={variant.type}
                  showAlert={variant.state === 'enable'}
                  rightIcon={variant.type === 'textField' ? <span aria-hidden>*</span> : undefined}
                />
              </div>
            )
          })}
        </div>
      </section>

      <section className="showcase-section">
        <div className="section-title-row">
          <h2>AlertsState</h2>
          <span>{alertVariants.length} variants</span>
        </div>
        <div className="alert-stack">
          {alertVariants.map((variant) => (
            <div className="showcase-card" key={variant}>
              <p className="variant-label">{variant}</p>
              <AlertsState styleType={variant} textAlert="Estado" showIcon />
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
