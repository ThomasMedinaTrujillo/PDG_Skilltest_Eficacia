import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import arrowRightIcon from "../../assets/icons/arrow-right.svg";

const PRODUCT_ICON = arrowRightIcon;

export interface PriceCardSmallProps extends React.HTMLAttributes<HTMLDivElement> {
  productName?: string;
  price?: string;
  leftIcon?: React.ReactNode;
  rightSlot?: React.ReactNode;
}

export const PriceCardSmall = React.forwardRef<HTMLDivElement, PriceCardSmallProps>(
  ({ className, productName = "Adhesivo Aquence", price = "$120.000", leftIcon, rightSlot, children, ...props }, ref) => {
    return (
      <article
        ref={ref}
        className={cn("ds-price-card-small", className)}
        style={{
          background: tokens.colors.white,
          borderRadius: tokens.radius.sm,
          boxShadow: tokens.shadows.card,
          padding: tokens.spacing.sm,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: tokens.spacing.sm,
        }}
        {...props}
      >
        <div style={{ display: "flex", alignItems: "center", gap: tokens.spacing.sm }}>
          <span
            aria-hidden
            style={{ width: "24px", height: "24px", display: "inline-flex", alignItems: "center", justifyContent: "center" }}
          >
            {leftIcon ?? <img src={PRODUCT_ICON} alt="" style={{ width: "100%", height: "100%" }} />}
          </span>

          <span
            style={{
              color: tokens.colors.textSecondary,
              fontFamily: tokens.typography.body.fontFamily,
              fontSize: tokens.typography.body.fontSize,
              fontWeight: tokens.typography.body.fontWeight,
              lineHeight: "1",
            }}
          >
            {children ?? productName}
          </span>
        </div>

        <span
          style={{
            color: tokens.colors.warning,
            fontFamily: tokens.typography.body.fontFamily,
            fontSize: tokens.typography.body.fontSize,
            fontWeight: 600,
            lineHeight: "1",
          }}
        >
          {rightSlot ?? price}
        </span>
      </article>
    );
  }
);

PriceCardSmall.displayName = "PriceCardSmall";
