import * as React from "react";
import { cn } from "@/lib/cn";

export type StatisticType = "basic" | "up" | "down";

export interface StatisticProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "title" | "prefix"> {
  type?: StatisticType;
  title?: React.ReactNode;
  value?: React.ReactNode;
  prefix?: React.ReactNode;
  showIcon?: boolean;
}

const trendIcon: Record<Exclude<StatisticType, "basic">, string> = {
  up: "↑",
  down: "↓",
};

export const Statistic = React.forwardRef<HTMLDivElement, StatisticProps>(
  (
    {
      className,
      type = "basic",
      title = "Statistic Title",
      value = "112,893",
      prefix,
      showIcon = type !== "basic",
      ...props
    },
    ref,
  ) => {
    const icon = prefix ?? (type !== "basic" ? trendIcon[type] : null);

    return (
      <div ref={ref} className={cn("ds-statistic", `ds-statistic--${type}`, className)} data-node-id="983:8606" {...props}>
        <span className="ds-statistic__title">{title}</span>
        <span className="ds-statistic__value">
          {showIcon && icon ? <span className="ds-statistic__icon">{icon}</span> : null}
          <span>{value}</span>
        </span>
      </div>
    );
  },
);

Statistic.displayName = "Statistic";
