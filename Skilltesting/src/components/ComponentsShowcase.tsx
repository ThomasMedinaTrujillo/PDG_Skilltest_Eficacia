

import {
  AtmWithdrawalButton,
  BarState,
  Button,
  DateButton,
  ModalListItem,
  RadioButton,
  TabItem,
  ToggleTabItem,
} from "./design-system";
import "./ComponentsShowcase.css";

const buttonSizes = ["small", "medium", "large"] as const;
const buttonStates = ["default", "pressed", "disabled"] as const;

const tabSizes = ["small", "large"] as const;
const tabStates = ["selected", "disabled"] as const;

export default function ComponentsShowcase() {
  return (
    <main className="components-showcase">
      <header className="components-showcase__header">
        <h1>Component Showcase</h1>
      </header>

      <section className="showcase-section">
        <h2>Buttons</h2>
        <div className="showcase-grid showcase-grid--wide">
          {buttonSizes.flatMap((size) =>
            buttonStates.map((state) => (
              <div className="showcase-item" key={`${size}-${state}`}>
                <span className="showcase-label">
                  {size} / {state}
                </span>
                <Button size={size} state={state}>
                  Button
                </Button>
              </div>
            )),
          )}
        </div>
      </section>

      <section className="showcase-section">
        <h2>ATM Withdrawal Buttons</h2>
        <div className="showcase-grid">
          <div className="showcase-item">
            <span className="showcase-label">default</span>
            <AtmWithdrawalButton amount="$ 20.000" />
          </div>
          <div className="showcase-item">
            <span className="showcase-label">pressed</span>
            <AtmWithdrawalButton amount="$ 20.000" state="pressed" />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2>Bar State</h2>
        <div className="showcase-grid showcase-grid--compact">
          <div className="showcase-item">
            <span className="showcase-label">selected</span>
            <BarState state="selected" />
          </div>
          <div className="showcase-item">
            <span className="showcase-label">inactive</span>
            <BarState state="inactive" />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2>Dates</h2>
        <div className="showcase-grid showcase-grid--compact">
          <div className="showcase-item">
            <span className="showcase-label">default</span>
            <DateButton date={1} />
          </div>
          <div className="showcase-item">
            <span className="showcase-label">active</span>
            <DateButton date={1} state="active" />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2>Modal List Item</h2>
        <div className="showcase-grid">
          <div className="showcase-item">
            <span className="showcase-label">default</span>
            <ModalListItem label="Label" />
          </div>
          <div className="showcase-item">
            <span className="showcase-label">pressed</span>
            <ModalListItem label="Label" state="pressed" />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2>Radio Button</h2>
        <div className="showcase-grid showcase-grid--wide">
          <div className="showcase-item">
            <span className="showcase-label">default</span>
            <RadioButton label="Option" />
          </div>
          <div className="showcase-item">
            <span className="showcase-label">disabled</span>
            <RadioButton label="Option" state="disabled" />
          </div>
          <div className="showcase-item">
            <span className="showcase-label">pressed</span>
            <RadioButton label="Option" description="Option description" state="pressed" />
          </div>
        </div>
      </section>

      <section className="showcase-section">
        <h2>Tab Item</h2>
        <div className="showcase-grid">
          {tabSizes.flatMap((size) =>
            tabStates.map((state) => (
              <div className="showcase-item" key={`${size}-${state}`}>
                <span className="showcase-label">
                  {size} / {state}
                </span>
                <TabItem label="Placeholder" size={size} state={state} />
              </div>
            )),
          )}
        </div>
      </section>

      <section className="showcase-section">
        <h2>Toggle Tab Item</h2>
        <div className="showcase-grid showcase-grid--compact">
          <div className="showcase-item">
            <span className="showcase-label">inactive</span>
            <ToggleTabItem label="Title" state="inactive" />
          </div>
          <div className="showcase-item">
            <span className="showcase-label">hovered</span>
            <ToggleTabItem label="Title" state="hovered" />
          </div>
          <div className="showcase-item">
            <span className="showcase-label">selected</span>
            <ToggleTabItem label="Title" state="selected" />
          </div>
        </div>
      </section>
    </main>
  );
}
