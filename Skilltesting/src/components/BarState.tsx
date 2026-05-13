import React from "react"
import { cn } from "../lib/cn"

export interface BarStateProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: "selected" | "inactive"
}

export const BarState = React.forwardRef<HTMLDivElement, BarStateProps>(
  ({ className, state = "selected", ...props }, ref) => {
    return (
      <div 
        ref={ref}
        className={cn("h-[53px] w-[28px] relative", className)}
        {...props}
      >
        <div 
          className={cn(
            "absolute inset-0 rounded-tl-[5px] rounded-tr-[5px]",
            state === "inactive" ? "bg-[#d4d3d3]" : "bg-[#004284]"
          )}
        />
      </div>
    )
  }
)
BarState.displayName = "BarState"
