import React from "react"
import { cn } from "../lib/cn"

export interface DatesProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: "default" | "active"
  children?: React.ReactNode
}

export const Dates = React.forwardRef<HTMLButtonElement, DatesProps>(
  ({ className, state = "default", children = "1", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex flex-col h-[40px] w-[42px] items-center justify-center p-[10px] cursor-pointer rounded-none bg-transparent border-none",
          state === "active" && "bg-[#0063a8] border border-solid border-[#f4f4f4]",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "font-['Benton_Sans_BBVA:Medium'] text-[15px] whitespace-nowrap",
            state === "active" ? "text-[#fefefe]" : "text-[#666666]"
          )}
        >
          {children}
        </span>
      </button>
    )
  }
)
Dates.displayName = "Dates"
