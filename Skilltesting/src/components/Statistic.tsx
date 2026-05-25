import * as React from "react"
import { cn } from "../lib/cn"

export interface StatisticProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "basic" | "up" | "down"
  title?: React.ReactNode
  value?: React.ReactNode
}

export const Statistic = React.forwardRef<HTMLDivElement, StatisticProps>(
  ({ className, type = "basic", title, value, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "ds-statistic",
          `ds-statistic--${type}`,
          className
        )}
        {...props}
      >
        {title && <div className="ds-statistic-title">{title}</div>}
        <div className="ds-statistic-content">
          <span className="ds-statistic-content-value">{value}</span>
        </div>
      </div>
    )
  }
)

Statistic.displayName = "Statistic"