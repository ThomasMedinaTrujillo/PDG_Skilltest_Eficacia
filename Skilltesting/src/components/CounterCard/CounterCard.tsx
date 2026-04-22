import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import { BagCheckedIcon } from "../_shared/DesignIcons";

type CounterCardVariant = "number" | "inventory-lg" | "inventory-sm" | "price";

type CounterCardItem = {
  label: string;
  value: string;
};

export interface CounterCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CounterCardVariant;
  title?: string;
  value?: string;
  subtitle?: string;
  items?: CounterCardItem[];
  productName?: string;
  price?: string;
  productCount?: string;
}

const defaultLgItems: CounterCardItem[] = [
  { value: "50/100", label: "Inventario" },
  { value: "50/100", label: "Inventario" },
  { value: "50/100", label: "Inventario" },
  { value: "50/100", label: "Inventario" },
];

const defaultSmItems: CounterCardItem[] = [
  { value: "6", label: "Inventario" },
  { value: "2", label: "Inventario" },
  { value: "2", label: "extra" },
  { value: "9", label: "Inventario" },
];

function InventoryItem({ value, label, iconSize }: CounterCardItem & { iconSize: number }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: tokens.spacing.sm, minWidth: 0 }}>
      <span style={{ width: `${iconSize}px`, height: `${iconSize}px`, display: "inline-flex", alignItems: "center", justifyContent: "center", color: tokens.colors.primary, flexShrink: 0 }}>
        <BagCheckedIcon size={iconSize} />
      </span>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", whiteSpace: "nowrap" }}>
        <span
          style={{
            color: tokens.colors.textSecondary,
            fontFamily: tokens.typography.body.fontFamily,
            fontSize: tokens.typography.body.fontSize,
            fontWeight: tokens.typography.body.fontWeight,
            lineHeight: 1,
          }}
        >
          {value}
        </span>
        <span
          style={{
            color: tokens.colors.buttonDisabled,
            fontFamily: tokens.typography.caption.fontFamily,
            fontSize: tokens.typography.caption.fontSize,
            fontWeight: 400,
            lineHeight: 1,
          }}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

export const CounterCard = React.forwardRef<HTMLDivElement, CounterCardProps>(
  (
    {
      className,
      variant = "number",
      title = "12 / 15",
      value = "12 / 15",
      subtitle = "Nombre del pedido",
      items,
      productName = "Regional | Distribuidor | Tipo",
      price = "$1.350.000",
      productCount = "20 Productos",
      children,
      ...props
    },
    ref
  ) => {
    const inventoryItems = variant === "inventory-lg" ? items ?? defaultLgItems : items ?? defaultSmItems;

    return (
      <article
        ref={ref}
        className={cn("ds-counter-card", `ds-counter-card--${variant}`, className)}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: tokens.spacing.sm,
          color: tokens.colors.textPrimary,
        }}
        {...props}
      >
        {variant === "number" && (
          <div
            style={{
              background: tokens.colors.backgroundSecondary,
              borderRadius: tokens.radius.sm,
              boxShadow: tokens.shadows.card,
              padding: `${tokens.spacing.lg} ${tokens.spacing.xl}`,
              minWidth: "344px",
              minHeight: "74px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                color: tokens.colors.primary,
                fontFamily: tokens.typography.heading1.fontFamily,
                fontSize: tokens.typography.heading1.fontSize,
                fontWeight: tokens.typography.heading1.fontWeight,
                lineHeight: 1,
              }}
            >
              {children ?? value}
            </span>
          </div>
        )}

        {variant === "inventory-lg" && (
          <div
            style={{
              background: tokens.colors.backgroundSecondary,
              borderRadius: tokens.radius.sm,
              boxShadow: tokens.shadows.card,
              padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
              minWidth: "468px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: tokens.spacing.lg,
              flexWrap: "wrap",
            }}
          >
            {inventoryItems.map((item) => (
              <InventoryItem key={`${item.label}-${item.value}`} {...item} iconSize={24} />
            ))}
          </div>
        )}

        {variant === "inventory-sm" && (
          <div
            style={{
              background: tokens.colors.backgroundSecondary,
              borderRadius: tokens.radius.sm,
              boxShadow: tokens.shadows.card,
              padding: `${tokens.spacing.md} ${tokens.spacing.md}`,
              minWidth: "372px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: tokens.spacing.lg,
              flexWrap: "wrap",
            }}
          >
            {inventoryItems.map((item) => (
              <InventoryItem key={`${item.label}-${item.value}`} {...item} iconSize={18} />
            ))}
          </div>
        )}

        {variant === "price" && (
          <div
            style={{
              background: tokens.colors.backgroundSecondary,
              borderRadius: tokens.radius.sm,
              boxShadow: tokens.shadows.card,
              padding: `${tokens.spacing.sm} ${tokens.spacing.sm}`,
              minWidth: "344px",
              minHeight: "58px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: tokens.spacing.md,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: tokens.spacing.sm, minWidth: 0 }}>
              <span style={{ width: "24px", height: "24px", display: "inline-flex", alignItems: "center", justifyContent: "center", color: tokens.colors.primary, flexShrink: 0 }}>
                <BagCheckedIcon size={24} />
              </span>
              <div style={{ display: "flex", flexDirection: "column", minWidth: 0 }}>
                <span
                  style={{
                    color: tokens.colors.textSecondary,
                    fontFamily: tokens.typography.body.fontFamily,
                    fontSize: "18px",
                    fontWeight: 500,
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {subtitle}
                </span>
                <span
                  style={{
                    color: tokens.colors.buttonDisabled,
                    fontFamily: tokens.typography.caption.fontFamily,
                    fontSize: tokens.typography.caption.fontSize,
                    fontWeight: 400,
                    lineHeight: 1,
                  }}
                >
                  {productName}
                </span>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", textAlign: "right" }}>
              <span
                style={{
                  color: tokens.colors.textSecondary,
                  fontFamily: tokens.typography.body.fontFamily,
                  fontSize: tokens.typography.body.fontSize,
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                {price}
              </span>
              <span
                style={{
                  color: tokens.colors.buttonDisabled,
                  fontFamily: tokens.typography.caption.fontFamily,
                  fontSize: tokens.typography.caption.fontSize,
                  fontWeight: 400,
                  lineHeight: 1,
                }}
              >
                {productCount}
              </span>
            </div>
          </div>
        )}
      </article>
    );
  }
);

CounterCard.displayName = "CounterCard";
