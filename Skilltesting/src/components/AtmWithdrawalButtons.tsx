import React from "react"
import { cn } from "../lib/cn"

export interface AtmWithdrawalButtonsProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: "default" | "pressed"
  amount?: string
}

export const AtmWithdrawalButtons = React.forwardRef<HTMLButtonElement, AtmWithdrawalButtonsProps>(
  ({ className, state = "default", amount = "$ 20.000", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "flex items-center justify-center px-[16px] py-[24px] w-[171px] rounded-[5px] cursor-pointer",
          state === "pressed"
            ? "bg-[#002e64] text-[#fefefe] border-none"
            : "border border-solid border-[#bebebe] bg-transparent text-[#666666]",
          className
        )}
        {...props}
      >
        <span className="font-['Benton_Sans_BBVA:Medium'] text-[16px] flex-[1_0_0] text-center">
          {amount}
        </span>
      </button>
    )
  }
)
AtmWithdrawalButtons.displayName = "AtmWithdrawalButtons"
