import { forwardRef, type HTMLAttributes } from 'react';
import './MenuBar.css';

export interface MenuBarProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  items?: "3" | "4" | "5";
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

export const MenuBar = forwardRef<HTMLDivElement, MenuBarProps>(
  (
    {
      className,
      items = "5",
      activeItem = "Inicio",
      onItemClick,
      ...props
    },
    ref
  ) => {
    
    const menuItems = [
      { id: "Inicio", label: "Inicio", icon: "🏠" },
      { id: "Agenda", label: "Agenda", icon: "📅" },
      { id: "Gestión", label: "Gestión", icon: "➕" },
      { id: "Portafolio", label: "Portafolio", icon: "💼" },
      { id: "Perfil", label: "Perfil", icon: "👤" }
    ];

    const itemsToDisplay = parseInt(items, 10);
    const displayedItems = menuItems.slice(0, itemsToDisplay);

    return (
      <div
        ref={ref}
        className={[
          "ds-menu-bar",
          `ds-menu-bar--items-${items}`,
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        {displayedItems.map((item) => {
          const isActive = activeItem === item.id;
          return (
            <button
              key={item.id}
              className={`ds-menu-bar__item ${isActive ? 'ds-menu-bar__item--active' : ''}`}
              onClick={() => onItemClick?.(item.id)}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="ds-menu-bar__icon">{item.icon}</span>
              <span className="ds-menu-bar__label">{item.label}</span>
            </button>
          );
        })}
      </div>
    );
  }
);

MenuBar.displayName = "MenuBar";
