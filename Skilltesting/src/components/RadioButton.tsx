import React from "react"
import { cn } from "../lib/cn"

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  state?: "default" | "pressed" | "disabled"
  title?: string
  description?: string
  descriptionLabel?: boolean
}

export const RadioButton = React.forwardRef<HTMLInputElement, RadioButtonProps>(
  ({ className, state = "disabled", title = "Option", description = "Option description", descriptionLabel = true, ...props }, ref) => {
    // using div as wrapper since it has complex layout
    const isDisabled = state === "disabled"
    const isPressed = state === "pressed"

    return (
      <label
        className={cn(
          "flex p-[16px] gap-[16px] w-[358px] rounded-[5px] bg-[#fefefe] cursor-pointer border border-solid",
          isPressed ? "border-[2px] border-[#00c5c5] items-start" : 
          isDisabled ? "border-[#d4d3d3] items-center cursor-not-allowed" : 
          "border-[#bebebe] items-center",
          className
        )}
      >
        <input 
          type="radio"
          ref={ref}
          disabled={isDisabled}
          checked={isPressed}
          onChange={() => {}}
          className="sr-only"
          {...props}
        />
        
        <div className="relative shrink-0 size-[20px] rounded-full border-2 border-solid flex items-center justify-center border-[#090909]">
          {isPressed && <div className="size-[10px] rounded-full bg-[#00c5c5]" />}
        </div>
        
        <div className="flex flex-col gap-[8px] flex-[1_0_0]">
          <span className={cn(
            "font-['Benton_Sans_BBVA:Medium'] text-[16px] whitespace-nowrap",
            isDisabled ? "text-[#d4d3d3]" : "text-[#090909]"
          )}>
            {title}
          </span>
          {isPressed && descriptionLabel && (
            <span className="font-['Benton_Sans_BBVA:Book'] text-[15px] text-[#090909]">
              {description}
            </span>
          )}
        </div>
      </label>
    )
  }
)
RadioButton.displayName = "RadioButton"
