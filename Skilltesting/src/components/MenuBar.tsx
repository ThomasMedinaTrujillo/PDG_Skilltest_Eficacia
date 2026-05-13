import * as React from "react";
import { cn } from "@/lib/cn";
import { tokens } from "@/Token";
import home from "@/assets/icons/home.svg";
import bookmark from "@/assets/icons/bookmark-filled.svg";
import add from "@/assets/icons/add.svg";
import portfolio from "@/assets/basket-check.svg";
import "./MenuBar.css";

const c = tokens.colors;
const sp = tokens.spacing;
const rad = tokens.radius;
const sh = tokens.shadows;

export type MenuBarKey = "inicio" | "agenda" | "gestion" | "portafolio";

export interface MenuBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onSelect"> {
  activeKey?: MenuBarKey;
  defaultActiveKey?: MenuBarKey;
  onItemSelect?: (key: MenuBarKey) => void;
}

const ITEMS: { key: MenuBarKey; label: string; icon: string }[] = [
  { key: "inicio", label: "Inicio", icon: home },
  { key: "agenda", label: "Agenda", icon: bookmark },
  { key: "gestion", label: "Gestión", icon: add },
  { key: "portafolio", label: "Portafolio", icon: portfolio },
];

export const MenuBar = React.forwardRef<HTMLDivElement, MenuBarProps>(
  ({ className, activeKey: activeKeyProp, defaultActiveKey = "inicio", onItemSelect, style, ...rest }, ref) => {
    const [internal, setInternal] = React.useState<MenuBarKey>(defaultActiveKey);
    const isControlled = activeKeyProp !== undefined;
    const active = isControlled ? activeKeyProp : internal;

    const cssVars: React.CSSProperties = {
      ["--mb-bg" as string]: c.text.nsWhite,
      ["--mb-gap" as string]: sp.padding.lg,
      ["--mb-pad" as string]: sp.padding.sm,
      ["--mb-shadow" as string]: sh.card,
      ["--mb-item-fg" as string]: c.text.headersTitles,
      ["--mb-item-active-bg" as string]: c.buttons.bgOutlinePressed,
      ["--mb-item-px" as string]: sp.padding.sm,
      ["--mb-item-py" as string]: sp.padding.xs,
      ["--mb-item-radius" as string]: rad.xs,
    };

    const select = (key: MenuBarKey) => {
      if (!isControlled) setInternal(key);
      onItemSelect?.(key);
    };

    return (
      <nav
        ref={ref}
        className={cn("menu-bar", className)}
        style={{ ...cssVars, ...style }}
        aria-label="Navegación principal"
        {...rest}
      >
        {ITEMS.map((item) => (
          <button
            key={item.key}
            type="button"
            className={cn("menu-bar__item", item.key === active && "menu-bar__item--active")}
            onClick={() => select(item.key)}
            aria-current={item.key === active ? "page" : undefined}
          >
            <span className="menu-bar__icon-wrap">
              <img src={item.icon} alt="" className="menu-bar__icon" width={20} height={20} />
            </span>
            <span className="menu-bar__label">{item.label}</span>
          </button>
        ))}
      </nav>
    );
  },
);

MenuBar.displayName = "MenuBar";
