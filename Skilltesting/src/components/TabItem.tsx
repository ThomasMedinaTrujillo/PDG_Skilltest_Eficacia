import React from "react"
import { cn } from "../lib/cn"

export interface TabItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
  size?: "small" | "large"
  state?: "selected" | "disabled" | "default"
}

export const TabItem = React.forwardRef<HTMLButtonElement, TabItemProps>(
  ({ className, label = "Placeholder", size = "small", state = "selected", ...props }, ref) => {
    return (
      <button
        ref={ref}
        disabled={state === "disabled"}
        className={cn(
          "flex h-[55px] items-center justify-center px-[5px] py-[10px] border-b-[2px] border-solid bg-transparent cursor-pointer",
          size === "large" ? "w-[195px]" : "w-[130px]",
          state === "disabled" ? "border-[#d4d3d3]" : 
          state === "selected" ? "border-[#004284]" : 
          "border-transparent",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "font-['Benton_Sans_BBVA:Medium'] text-[15px] whitespace-nowrap",
            state === "disabled" ? "text-[#d4d3d3]" :
            state === "selected" ? "text-[#004284]" :
            "text-[#090909]"
          )}
        >
          {label}
        </span>
      </button>
    )
  }
)
TabItem.displayName = "TabItem"
