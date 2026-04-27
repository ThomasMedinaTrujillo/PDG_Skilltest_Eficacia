import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import { CheckBox } from "../CheckBox/CheckBox";
import basketCheckIcon from "../../assets/basket-check.svg";

// Icon component using basket-check.svg as placeholder
const Icon = ({ className, size = "24px" }: { className?: string; size?: string }) => (
  <img src={basketCheckIcon} alt="icon" className={className} style={{ width: size, height: size, flexShrink: 0 }} />
);

type ProductCardVariant = "floating" | "little-card" | "product" | "price-card" | "type5" | "type6";

export interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ProductCardVariant;
  title?: string;
  caption?: string;
  price?: string;
  category?: string;
  productName?: string;
  information1?: string;
  information2?: string;
  information3?: string;
  showCheckbox?: boolean;
  showIcon?: boolean;
  showIcon1?: boolean;
  showIcon2?: boolean;
  showIcon3?: boolean;
  showNumbers?: boolean;
  showArrow?: boolean;
  categoryIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
}

export const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  (
    {
      className,
      variant = "product",
      title = "Reporte de agotados",
      caption = "8:15 AM",
      price = "$120.000",
      category = "Categoría",
      productName = "Nombre del producto 1",
      information1 = "50",
      information2 = "2",
      information3 = "4",
      showCheckbox = true,
      showIcon = true,
      showIcon1 = true,
      showIcon2 = true,
      showIcon3 = true,
      showNumbers = true,
      showArrow = true,
      categoryIcon,
      leftIcon,
      ...props
    },
    ref
  ) => {
    const isFloating = variant === "floating";
    const isLittleCard = variant === "little-card";
    const isPriceCard = variant === "price-card";
    const isProduct = variant === "product";
    const isType5 = variant === "type5";
    const isType6 = variant === "type6";
    const isGridVariant = isType5 || isType6;

    // Grid variants - Type 5 & 6
    if (isGridVariant) {
      return (
        <div
          ref={ref}
          className={cn("product-card", `product-card--${variant}`, className)}
          style={{
            display: "grid",
            gridTemplateColumns: "47px 1fr 1fr",
            gridTemplateRows: "auto auto",
            backgroundColor: tokens.colors.backgroundSecondary,
            borderRadius: tokens.radius.sm,
            boxShadow: tokens.shadows.card,
            padding: `${tokens.spacing.xs} ${tokens.spacing.xs} ${tokens.spacing.xs} 21px`,
            gap: tokens.spacing.xs,
          }}
          {...props}
        >
          {/* Icon - Top Left */}
          <div style={{ gridColumn: "1", gridRow: "1", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Icon />
          </div>

          {/* Product Name - Top Middle */}
          <div style={{ gridColumn: "2", gridRow: "1", display: "flex", alignItems: "center", minWidth: 0 }}>
            <span style={{ fontSize: "14px", color: tokens.colors.textSecondary, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {isType5 ? "Adhesivo Aquence" : "Nombre del pedido"}
            </span>
          </div>

          {/* Price & Arrow - Top Right */}
          <div style={{ gridColumn: "3", gridRow: "1", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: tokens.spacing.sm }}>
            <span style={{ fontSize: "14px", fontWeight: 600, color: tokens.colors.textSecondary, whiteSpace: "nowrap" }}>
              {price}
            </span>
            {isType6 && <span style={{ flexShrink: 0 }}>→</span>}
          </div>

          {/* Badge - Bottom Left (Type 5 only) */}
          {isType5 && (
            <div
              style={{
                gridColumn: "1",
                gridRow: "2",
                backgroundColor: tokens.colors.primary,
                color: tokens.colors.white,
                padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
                borderRadius: tokens.radius.xl,
                fontSize: "9px",
                fontWeight: 500,
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Nuevo
            </div>
          )}

          {/* Metadata - Bottom Middle */}
          <div style={{ gridColumn: "2", gridRow: "2", display: "flex", alignItems: "center", minWidth: 0 }}>
            <span style={{ fontSize: "9px", color: tokens.colors.textMuted, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              Regional | Distribuidor | Tipo | Fecha
            </span>
          </div>

          {/* Footer Right - Bottom Right */}
          <div style={{ gridColumn: "3", gridRow: "2", display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
            <span style={{ fontSize: "10px", color: tokens.colors.textSecondary, whiteSpace: "nowrap" }}>
              {isType6 ? "9/15" : isType5 ? "20 Productos" : ""}
            </span>
          </div>
        </div>
      );
    }

    // Product variant
    if (isProduct) {
      return (
        <div
          ref={ref}
          className={cn("product-card", `product-card--${variant}`, className)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: tokens.spacing.xs,
            backgroundColor: tokens.colors.backgroundSecondary,
            borderRadius: tokens.radius.sm,
            boxShadow: tokens.shadows.card,
            padding: `${tokens.spacing.xs} ${tokens.spacing.md}`,
          }}
          {...props}
        >
          {/* Checkbox */}
          {showCheckbox && (
            <CheckBox defaultChecked={false} />
          )}

          {/* Product Info - Flexible */}
          <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
            <div style={{ fontSize: "14px", fontWeight: 700, color: tokens.colors.textDisabled }}>
              {productName}
            </div>
            <div style={{ fontSize: "10px", color: tokens.colors.textSecondary }}>
              {category}
            </div>
          </div>

          {/* Numbers - No shrink */}
          {showNumbers && (
            <div style={{ flexShrink: 0, display: "flex", gap: tokens.spacing.xs, fontSize: "12px", fontWeight: 700 }}>
              <span>5000</span>
              <span>5000</span>
            </div>
          )}

          {/* Icon - No shrink */}
          <div style={{ flexShrink: 0 }}>
            {categoryIcon || <Icon />}
          </div>
        </div>
      );
    }

    // Price Card variant
    if (isPriceCard) {
      return (
        <div
          ref={ref}
          className={cn("product-card", `product-card--${variant}`, className)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: tokens.spacing.md,
            backgroundColor: tokens.colors.backgroundSecondary,
            borderRadius: tokens.radius.sm,
            boxShadow: tokens.shadows.card,
            padding: tokens.spacing.xs,
          }}
          {...props}
        >
          {/* Left Icon - No shrink */}
          <div style={{ flexShrink: 0 }}>
            <Icon />
          </div>

          {/* Product Name - Flexible */}
          <div style={{ flex: 1, fontSize: "14px", color: tokens.colors.textSecondary, minWidth: 0 }}>
            Adhesivo Aquence
          </div>

          {/* Price - No shrink */}
          <div
            style={{
              flexShrink: 0,
              fontSize: "14px",
              fontWeight: 600,
              color: tokens.colors.warning,
              whiteSpace: "nowrap",
            }}
          >
            {price}
          </div>
        </div>
      );
    }

    // Little Card variant
    if (isLittleCard) {
      return (
        <div
          ref={ref}
          className={cn("product-card", `product-card--${variant}`, className)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: tokens.spacing.xs,
            backgroundColor: tokens.colors.backgroundSecondary,
            borderRadius: tokens.radius.sm,
            boxShadow: tokens.shadows.card,
            padding: tokens.spacing.xs,
          }}
          {...props}
        >
          {/* Left Icon + Title - No shrink */}
          <div style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: "6px" }}>
            {leftIcon || <Icon size="18px" />}
            <div style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <div style={{ fontSize: "12px", fontWeight: 600, color: tokens.colors.textDisabled, whiteSpace: "nowrap" }}>
                {title}
              </div>
              <div style={{ fontSize: "10px", color: tokens.colors.textDisabled, whiteSpace: "nowrap" }}>
                {caption}
              </div>
            </div>
          </div>

          {/* Icon Indicators - Flexible */}
          <div style={{ flex: 1, display: "flex", gap: tokens.spacing.xs, alignItems: "center", minWidth: 0, flexWrap: "wrap" }}>
            {showIcon1 && (
              <div style={{ display: "flex", gap: "2px", alignItems: "center", flexShrink: 0 }}>
                <Icon size="20px" />
                <span style={{ fontSize: "10px", color: tokens.colors.textDisabled }}>({information1})</span>
              </div>
            )}
            {showIcon2 && (
              <div style={{ display: "flex", gap: "2px", alignItems: "center", flexShrink: 0 }}>
                <Icon size="20px" />
                <span style={{ fontSize: "10px", color: tokens.colors.textDisabled }}>({information2})</span>
              </div>
            )}
            {showIcon3 && (
              <div style={{ display: "flex", gap: "2px", alignItems: "center", flexShrink: 0 }}>
                <Icon size="20px" />
                <span style={{ fontSize: "10px", color: tokens.colors.textDisabled }}>({information3})</span>
              </div>
            )}
          </div>

          {/* Arrow - No shrink */}
          {showArrow && (
            <div style={{ flexShrink: 0, fontSize: "20px", color: tokens.colors.textSecondary }}>
              →
            </div>
          )}
        </div>
      );
    }

    // Floating variant
    if (isFloating) {
      return (
        <div
          ref={ref}
          className={cn("product-card", `product-card--${variant}`, className)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: tokens.spacing.sm,
            backgroundColor: tokens.colors.backgroundSecondary,
            borderRadius: tokens.radius.sm,
            boxShadow: tokens.shadows.card,
            padding: tokens.spacing.xs,
          }}
          {...props}
        >
          {/* Icon + Text - Flexible */}
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: tokens.spacing.xs, minWidth: 0 }}>
            {showIcon && <Icon />}
            <span style={{ fontSize: "10px", color: tokens.colors.textSecondary, whiteSpace: "nowrap" }}>
              20 Productos
            </span>
          </div>

          {/* Close Icon - No shrink */}
          <div style={{ flexShrink: 0, fontSize: "20px" }}>
            {leftIcon || <span>✕</span>}
          </div>
        </div>
      );
    }

    return null;
  }
);

ProductCard.displayName = "ProductCard";
