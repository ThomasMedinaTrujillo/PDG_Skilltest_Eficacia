import * as React from "react";
import { cn } from "@/lib/cn";
import "../design-system.css";

export type TabItemSize = "small" | "large";
export type TabItemState = "selected" | "disabled";

export interface TabItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: React.ReactNode;
  size?: TabItemSize;
  state?: TabItemState;
}

export const TabItem = React.forwardRef<HTMLButtonElement, TabItemProps>(
  ({ children, className, disabled, label = "Placeholder", size = "small", state = "disabled", ...props }, ref) => {
    const isDisabled = disabled || state === "disabled";

    return (
      <button
        ref={ref}
        className={cn(
          "ds-component ds-tab-item",
          size === "large" && "ds-tab-item--large",
          state === "selected" && "ds-tab-item--selected",
          isDisabled && "ds-tab-item--disabled",
          className,
        )}
        aria-selected={state === "selected"}
        data-size={size}
        data-state={state}
        disabled={isDisabled}
        role="tab"
        {...props}
      >
        {children ?? label}
      </button>
    );
  },
);

TabItem.displayName = "TabItem";
