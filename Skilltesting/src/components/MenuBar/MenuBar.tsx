import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import homeIcon from "../../assets/icons/home.svg";
import calendarIcon from "../../assets/icons/calendar-number.svg";
import userIcon from "../../assets/icons/user.svg";
import menuIcon from "../../assets/icons/menu.svg";

type MenuItems = 3 | 4 | 5;

export interface MenuBarProps extends React.HTMLAttributes<HTMLElement> {
  items?: MenuItems;
  activeIndex?: number;
  labels?: string[];
}

const iconMap: Record<string, string> = {
  "Inicio": homeIcon,
  "Agenda": calendarIcon,
  "Perfil": userIcon,
  "Gestion": menuIcon,
  "Portafolio": menuIcon,
};

export const MenuBar = React.forwardRef<HTMLElement, MenuBarProps>(
  ({ className, items = 5, activeIndex = 0, labels, ...props }, ref) => {
    const base = labels ?? ["Inicio", "Agenda", "Gestion", "Portafolio", "Perfil"];
    const visibleItems = base.slice(0, items);

    return (
      <nav
        ref={ref}
        className={cn("ds-menu-bar", `ds-menu-bar--${items}`, className)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: items === 5 ? tokens.spacing.sm : items === 4 ? tokens.spacing.md : tokens.spacing.xl,
          padding: tokens.spacing.sm,
          background: tokens.colors.white,
          boxShadow: tokens.shadows.card,
          borderRadius: tokens.radius.sm,
        }}
        {...props}
      >
        {visibleItems.map((label, index) => {
          const isActive = index === activeIndex;
          const icon = iconMap[label];
          return (
            <button
              key={`${label}-${index}`}
              type="button"
              className={cn("ds-menu-bar__item", isActive && "ds-menu-bar__item--active")}
              style={{
                border: "none",
                background: isActive ? "rgba(153,179,218,0.3)" : "transparent",
                color: tokens.colors.primary,
                borderRadius: tokens.radius.xs,
                padding: `${tokens.spacing.xs} ${tokens.spacing.sm}`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: tokens.spacing.xs,
                cursor: "pointer",
                fontFamily: "Solomon Sans",
                fontSize: "12px",
              }}
            >
              {icon ? (
                <img src={icon} alt={label} style={{ width: "18px", height: "18px", opacity: isActive ? 1 : 0.6 }} />
              ) : (
                <span aria-hidden>{isActive ? "⬤" : "◦"}</span>
              )}
              <span>{label}</span>
            </button>
          );
        })}
      </nav>
    );
  }
);

MenuBar.displayName = "MenuBar";
