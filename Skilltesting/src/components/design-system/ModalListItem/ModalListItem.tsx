import * as React from "react";
import { cn } from "@/lib/cn";
import "../design-system.css";

export type ModalListItemState = "default" | "pressed";

export interface ModalListItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: React.ReactNode;
  state?: ModalListItemState;
}

export const ModalListItem = React.forwardRef<HTMLButtonElement, ModalListItemProps>(
  ({ children, className, label = "Label", state = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "ds-component ds-modal-list-item",
        state === "pressed" && "ds-modal-list-item--pressed",
        className,
      )}
      data-state={state}
      {...props}
    >
      {children ?? label}
    </button>
  ),
);

ModalListItem.displayName = "ModalListItem";
