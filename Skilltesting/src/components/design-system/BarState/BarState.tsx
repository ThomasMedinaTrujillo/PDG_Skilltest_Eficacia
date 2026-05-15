import * as React from "react";
import { cn } from "@/lib/cn";
import "../design-system.css";

export type BarStateValue = "selected" | "inactive";

export interface BarStateProps extends React.HTMLAttributes<HTMLSpanElement> {
  state?: BarStateValue;
}

export const BarState = React.forwardRef<HTMLSpanElement, BarStateProps>(
  ({ className, state = "inactive", ...props }, ref) => (
    <span
      ref={ref}
      className={cn("ds-component ds-bar-state", state === "selected" && "ds-bar-state--selected", className)}
      data-state={state}
      {...props}
    />
  ),
);

BarState.displayName = "BarState";
