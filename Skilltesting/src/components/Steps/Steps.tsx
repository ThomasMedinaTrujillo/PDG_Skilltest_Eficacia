import * as React from "react";
import { cn } from "@/lib/cn";

export type StepStatus = "finish" | "process" | "wait";
export type StepsDirection = "vertical";
export type StepsSize = "small";
export type StepsType = "basic";

export interface StepItem {
  title: React.ReactNode;
  description?: React.ReactNode;
  status?: StepStatus;
}

export interface StepsProps extends Omit<React.HTMLAttributes<HTMLOListElement>, "onChange"> {
  items?: StepItem[];
  current?: number;
  defaultCurrent?: number;
  direction?: StepsDirection;
  size?: StepsSize;
  type?: StepsType;
  onChange?: (current: number) => void;
}

const defaultItems: StepItem[] = [
  { title: "Finished", description: "This is a description." },
  { title: "In Progress", description: "This is a description." },
  { title: "Waiting", description: "This is a description." },
  { title: "Waiting", description: "This is a description." },
];

export const Steps = React.forwardRef<HTMLOListElement, StepsProps>(
  (
    {
      className,
      items = defaultItems,
      current,
      defaultCurrent = 1,
      direction = "vertical",
      size = "small",
      type = "basic",
      onChange,
      ...props
    },
    ref,
  ) => {
    const [internalCurrent, setInternalCurrent] = React.useState(defaultCurrent);
    const isControlled = current !== undefined;
    const activeStep = isControlled ? current : internalCurrent;

    const setStep = (index: number) => {
      if (!isControlled) {
        setInternalCurrent(index);
      }
      onChange?.(index);
    };

    return (
      <ol
        ref={ref}
        className={cn(
          "ds-steps",
          `ds-steps--${direction}`,
          `ds-steps--${size}`,
          `ds-steps--${type}`,
          className,
        )}
        data-node-id="1010:3939"
        {...props}
      >
        {items.map((item, index) => {
          const status = item.status ?? (index < activeStep ? "finish" : index === activeStep ? "process" : "wait");
          return (
            <li className={cn("ds-steps__item", `ds-steps__item--${status}`)} key={index}>
              <button className="ds-steps__marker" type="button" onClick={() => setStep(index)} aria-current={index === activeStep ? "step" : undefined}>
                {status === "finish" ? <span className="ds-steps__check" aria-hidden="true" /> : index + 1}
              </button>
              <span className="ds-steps__tail" aria-hidden="true" />
              <span className="ds-steps__content">
                <span className="ds-steps__title">{item.title}</span>
                {item.description ? <span className="ds-steps__description">{item.description}</span> : null}
              </span>
            </li>
          );
        })}
      </ol>
    );
  },
);

Steps.displayName = "Steps";
