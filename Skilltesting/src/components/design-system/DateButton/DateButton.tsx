import * as React from "react";
import { cn } from "@/lib/cn";
import "../design-system.css";

export type DateButtonState = "default" | "active";

export interface DateButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  date?: React.ReactNode;
  defaultActive?: boolean;
  active?: boolean;
  state?: DateButtonState;
  onActiveChange?: (active: boolean) => void;
}

export const DateButton = React.forwardRef<HTMLButtonElement, DateButtonProps>(
  (
    { active, children, className, date = 1, defaultActive = false, onActiveChange, onClick, state, ...props },
    ref,
  ) => {
    const [internalActive, setInternalActive] = React.useState(defaultActive);
    const isActive = state ? state === "active" : active ?? internalActive;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const nextActive = !isActive;
      if (active === undefined && state === undefined) {
        setInternalActive(nextActive);
      }
      onActiveChange?.(nextActive);
      onClick?.(event);
    };

    return (
      <button
        ref={ref}
        className={cn("ds-component ds-date-button", isActive && "ds-date-button--active", className)}
        aria-pressed={isActive}
        data-state={isActive ? "active" : "default"}
        onClick={handleClick}
        {...props}
      >
        {children ?? date}
      </button>
    );
  },
);

DateButton.displayName = "DateButton";
