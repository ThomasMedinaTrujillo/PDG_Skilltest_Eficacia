import React from "react"
import { cn } from "../lib/cn"

export interface CircularChartCountProps extends React.HTMLAttributes<HTMLDivElement> {
  itemCount?: "5" | "4" | "3" | "2"
  label?: string
  moneyNumber?: string
}

export const CircularChartCount = React.forwardRef<HTMLDivElement, CircularChartCountProps>(
  ({ className, itemCount = "5", label = "Item label", moneyNumber = "$ 1.180.970,00", ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative size-[210px]", className)} {...props}>
        {/* SVG/Images omitted for brevity based on the extracted component logic */}
        <div className="absolute inset-0 border-[10px] border-[#00c5c5] rounded-full opacity-50" />
        <div className="absolute inset-0 border-[10px] border-[#004284] rounded-full border-t-transparent border-l-transparent rotate-45" />

        <div className="-translate-x-1/2 absolute bottom-[37%] flex flex-col items-center justify-center text-center left-1/2 top-[39%]">
          <span className="font-['Benton_Sans_BBVA:Book'] text-[22px] text-[#090909]">
            {moneyNumber}
          </span>
          <span className="font-['Benton_Sans_BBVA:Book'] text-[15px] text-[#666666] whitespace-nowrap mt-[4px]">
            {label}
          </span>
        </div>
      </div>
    )
  }
)
CircularChartCount.displayName = "CircularChartCount"
