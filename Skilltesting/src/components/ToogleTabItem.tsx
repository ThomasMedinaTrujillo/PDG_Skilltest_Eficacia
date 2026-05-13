import React from "react"
import { cn } from "../lib/cn"

export interface ToogleTabItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: "inactive" | "hovered" | "selected"
  title?: string
}

export const ToogleTabItem = React.forwardRef<HTMLButtonElement, ToogleTabItemProps>(
  ({ className, state = "inactive", title = "Title", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex h-[34px] w-[110px] items-center justify-center rounded-[5px] p-[8px] cursor-pointer",
          state === "selected" ? "bg-[#004284] text-[#f4f4f4]" : 
          state === "hovered" ? "bg-[#bebebe] text-[#666666]" : 
          "bg-transparent text-[#bebebe]",
          className
        )}
        {...props}
      >
        <span className="font-['Benton_Sans_BBVA:Book'] text-[15px] whitespace-nowrap">
          {title}
        </span>
      </button>
    )
  }
)
ToogleTabItem.displayName = "ToogleTabItem"
