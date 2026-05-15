import * as React from "react";
import { cn } from "@/lib/cn";
import "../design-system.css";

export type ToggleTabItemState = "inactive" | "hovered" | "selected";

export interface ToggleTabItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  defaultSelected?: boolean;
  label?: React.ReactNode;
  selected?: boolean;
  state?: ToggleTabItemState;
  onSelectedChange?: (selected: boolean) => void;
}

export const ToggleTabItem = React.forwardRef<HTMLButtonElement, ToggleTabItemProps>(
  (
    {
      children,
      className,
      defaultSelected = false,
      label = "Title",
      onClick,
      onSelectedChange,
      selected,
      state,
      ...props
    },
    ref,
  ) => {
    const [internalSelected, setInternalSelected] = React.useState(defaultSelected);
    const isSelected = state ? state === "selected" : selected ?? internalSelected;
    const visualState: ToggleTabItemState = isSelected ? "selected" : state ?? "inactive";

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      const nextSelected = !isSelected;
      if (selected === undefined && state === undefined) {
        setInternalSelected(nextSelected);
      }
      onSelectedChange?.(nextSelected);
      onClick?.(event);
    };

    return (
      <button
        ref={ref}
        className={cn(
          "ds-component ds-toggle-tab-item",
          visualState !== "inactive" && `ds-toggle-tab-item--${visualState}`,
          className,
        )}
        aria-pressed={isSelected}
        data-state={visualState}
        onClick={handleClick}
        {...props}
      >
        {children ?? label}
      </button>
    );
  },
);

ToggleTabItem.displayName = "ToggleTabItem";
