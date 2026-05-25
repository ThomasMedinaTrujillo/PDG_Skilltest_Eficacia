
import "./ComponentsShowcase.css";
import { BadgeStatus } from "./Badge/BadgeStatus";
import { Button } from "./Button/Button";
import { Checkbox } from "./Checkbox/Checkbox";
import { Input } from "./Input/Input";
import { Message } from "./Message/Message";
import { Statistic } from "./Statistic/Statistic";

const buttonVariants = ["primary", "default", "dashed", "text", "link"] as const;
const buttonSizes = ["small", "default", "large"] as const;
const buttonStates = [
  "default",
  "hover",
  "focused",
  "pressed",
  "disabled",
] as const;

const inputSizes = ["small", "default", "large"] as const;
const inputStates = [
  "default",
  "hover",
  "focused",
  "typing",
  "filled",
  "disabled",
] as const;
const inputStatuses = ["default", "success", "warning", "error"] as const;

const checkboxStatuses = ["active", "inactive", "indeterminate"] as const;
const checkboxStates = ["default", "hover", "focused", "disabled"] as const;

const badgeStatuses = ["success", "error", "default", "processing", "warning"] as const;
const messageTypes = ["normal", "warning", "success", "error", "loading"] as const;
const statisticTypes = ["basic", "down", "up"] as const;

export default function ComponentsShowcase() {
  return (
    <main className="components-showcase">
      <section className="components-showcase__section">
        <h2>Buttons</h2>
        <div className="components-showcase__grid">
          {buttonVariants.map((variant) =>
            buttonSizes.map((size) =>
              buttonStates.map((state) => (
                <Button
                  key={`${variant}-${size}-${state}-solid`}
                  variant={variant}
                  size={size}
                  state={state}
                >
                  {variant}
                </Button>
              ))
            )
          )}
          {buttonVariants.map((variant) =>
            buttonSizes.map((size) =>
              buttonStates.map((state) => (
                <Button
                  key={`${variant}-${size}-${state}-ghost`}
                  variant={variant}
                  size={size}
                  state={state}
                  ghost
                >
                  {variant} ghost
                </Button>
              ))
            )
          )}
          {buttonVariants.map((variant) =>
            buttonSizes.map((size) =>
              buttonStates.map((state) => (
                <Button
                  key={`${variant}-${size}-${state}-danger`}
                  variant={variant}
                  size={size}
                  state={state}
                  danger
                >
                  {variant} danger
                </Button>
              ))
            )
          )}
        </div>
      </section>

      <section className="components-showcase__section">
        <h2>Inputs</h2>
        <div className="components-showcase__grid">
          {inputStatuses.map((status) =>
            inputSizes.map((size) =>
              inputStates.map((state) => (
                <Input
                  key={`${status}-${size}-${state}`}
                  status={status}
                  size={size}
                  state={state}
                  placeholder="Input"
                />
              ))
            )
          )}
        </div>
      </section>

      <section className="components-showcase__section">
        <h2>Checkboxes</h2>
        <div className="components-showcase__grid">
          {checkboxStatuses.map((status) =>
            checkboxStates.map((state) => (
              <Checkbox
                key={`${status}-${state}`}
                status={status}
                state={state}
                defaultChecked={status === "active"}
                defaultIndeterminate={status === "indeterminate"}
                disabled={state === "disabled"}
              />
            ))
          )}
        </div>
      </section>

      <section className="components-showcase__section">
        <h2>Badges</h2>
        <div className="components-showcase__grid">
          {badgeStatuses.map((status) => (
            <BadgeStatus key={status} status={status} />
          ))}
        </div>
      </section>

      <section className="components-showcase__section">
        <h2>Messages</h2>
        <div className="components-showcase__grid">
          {messageTypes.map((type) => (
            <Message key={type} type={type} />
          ))}
        </div>
      </section>

      <section className="components-showcase__section">
        <h2>Statistics</h2>
        <div className="components-showcase__grid">
          {statisticTypes.map((type) => (
            <Statistic key={type} type={type} />
          ))}
        </div>
      </section>
    </main>
  );
}
