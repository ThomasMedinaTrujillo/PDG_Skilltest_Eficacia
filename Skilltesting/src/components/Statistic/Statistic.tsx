import * as React from "react";
import { cn } from "@/lib/cn";
import { tokens } from "@/Token";

type StatisticType = "basic" | "up" | "down";

export interface StatisticProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: StatisticType;
  title?: string;
  value?: string;
  icon?: React.ReactNode | null;
  showIcon?: boolean;
}

const arrowUpIcon = "src/assets/figma/3e2a1ad3003e92918458544b72a65b77a5fd745a.svg";
const arrowDownIcon = "src/assets/figma/c5892c90d1c58ec29daf26359cfa520e1611d060.svg";

export const Statistic = React.forwardRef<HTMLDivElement, StatisticProps>(
  (
    {
      className,
      type = "basic",
      title = "Statistic Title",
      value = "112,893",
      icon = null,
      showIcon = true,
      ...props
    },
    ref
  ) => {
    const valueColor =
      type === "up"
        ? tokens.colors.success
        : type === "down"
        ? tokens.colors.error
        : tokens.colors.text;

    const defaultIcon =
      type === "up"
        ? arrowUpIcon
        : type === "down"
        ? arrowDownIcon
        : null;

    return (
      <div
        ref={ref}
        className={cn("ds-statistic", `ds-statistic--${type}`, className)}
        style={{ display: "inline-flex", flexDirection: "column", gap: tokens.spacing.xxs }}
        {...props}
      >
        <span
          style={{
            fontFamily: tokens.typography.baseNormal.fontFamily,
            fontSize: tokens.typography.baseNormal.fontSize,
            fontWeight: tokens.typography.baseNormal.fontWeight,
            lineHeight: tokens.typography.baseNormal.lineHeight,
            color: tokens.colors.textDescription,
          }}
        >
          {title}
        </span>
        <div style={{ display: "inline-flex", alignItems: "center", gap: tokens.spacing.xxs }}>
          {showIcon && (icon || defaultIcon) && (
            typeof icon === "string" ? (
              <img
                alt=""
                src={icon}
                style={{ width: "24px", height: "24px" }}
              />
            ) : icon ? (
              icon
            ) : (
              <img
                alt=""
                src={defaultIcon as string}
                style={{ width: "24px", height: "24px" }}
              />
            )
          )}
          <span
            style={{
              fontFamily: tokens.typography.heading3.fontFamily,
              fontSize: tokens.typography.heading3.fontSize,
              fontWeight: tokens.typography.heading3.fontWeight,
              lineHeight: tokens.typography.heading3.lineHeight,
              color: valueColor,
            }}
          >
            {value}
          </span>
        </div>
      </div>
    );
  }
);

Statistic.displayName = "Statistic";
