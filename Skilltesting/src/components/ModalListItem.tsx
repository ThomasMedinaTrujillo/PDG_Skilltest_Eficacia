import React from "react"
import { cn } from "../lib/cn"

export interface ModalListItemProps extends React.HTMLAttributes<HTMLDivElement> {
  state?: "default" | "pressed"
  placeholderText?: string
}

export const ModalListItem = React.forwardRef<HTMLDivElement, ModalListItemProps>(
  ({ className, state = "default", placeholderText = "Label", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "border-b border-solid border-[#d4d3d3] flex items-center px-[16px] py-[24px] w-[358px] cursor-pointer",
          state === "pressed" ? "bg-[#f4f4f4]" : "bg-white",
          className
        )}
        {...props}
      >
        <span className="font-['Benton_Sans_BBVA:Book'] text-[16px] text-[#090909] whitespace-nowrap">
          {placeholderText}
        </span>
      </div>
    )
  }
)
ModalListItem.displayName = "ModalListItem"
