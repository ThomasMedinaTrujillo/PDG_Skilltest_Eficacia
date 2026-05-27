import * as React from "react";
import { cn } from "@/lib/cn";

export interface MenuItem {
  key: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  children?: MenuItem[];
}

export type MenuTheme = "light";
export type MenuMode = "inline";

export interface MenuProps extends Omit<React.HTMLAttributes<HTMLElement>, "onSelect"> {
  items?: MenuItem[];
  selectedKey?: string;
  defaultSelectedKey?: string;
  openKeys?: string[];
  defaultOpenKeys?: string[];
  onSelect?: (key: string) => void;
  onOpenChange?: (keys: string[]) => void;
  collapsed?: boolean;
  logo?: React.ReactNode;
  mode?: MenuMode;
  theme?: MenuTheme;
}

const defaultItems: MenuItem[] = [
  { key: "mail-1", label: "Navigation Item", icon: "mail" },
  { key: "mail-2", label: "Navigation Item", icon: "mail" },
  {
    key: "submenu",
    label: "Submenu",
    icon: "mail",
    children: [
      { key: "submenu-1", label: "Navigation Item" },
      { key: "submenu-2", label: "Navigation Item" },
      { key: "submenu-3", label: "Navigation Item" },
    ],
  },
  { key: "mail-3", label: "Navigation Item", icon: "mail" },
  { key: "mail-4", label: "Navigation Item", icon: "mail" },
];

function MenuIcon({ children }: { children?: React.ReactNode }) {
  if (!children) return null;
  return <span className="ds-menu__icon" aria-hidden="true">{children}</span>;
}

export const Menu = React.forwardRef<HTMLElement, MenuProps>(
  (
    {
      className,
      items = defaultItems,
      selectedKey,
      defaultSelectedKey = "mail-1",
      openKeys,
      defaultOpenKeys = ["submenu"],
      onSelect,
      onOpenChange,
      collapsed = false,
      logo = "Company",
      mode = "inline",
      theme = "light",
      ...props
    },
    ref,
  ) => {
    const [internalSelectedKey, setInternalSelectedKey] = React.useState(defaultSelectedKey);
    const [internalOpenKeys, setInternalOpenKeys] = React.useState(defaultOpenKeys);
    const isSelectionControlled = selectedKey !== undefined;
    const isOpenControlled = openKeys !== undefined;
    const activeKey = isSelectionControlled ? selectedKey : internalSelectedKey;
    const expandedKeys = isOpenControlled ? openKeys : internalOpenKeys;

    const selectItem = (key: string) => {
      if (!isSelectionControlled) {
        setInternalSelectedKey(key);
      }
      onSelect?.(key);
    };

    const toggleOpen = (key: string) => {
      const nextKeys = expandedKeys.includes(key)
        ? expandedKeys.filter((openKey) => openKey !== key)
        : [...expandedKeys, key];
      if (!isOpenControlled) {
        setInternalOpenKeys(nextKeys);
      }
      onOpenChange?.(nextKeys);
    };

    return (
      <nav
        ref={ref}
        className={cn(
          "ds-menu",
          `ds-menu--${theme}`,
          `ds-menu--${mode}`,
          collapsed && "ds-menu--collapsed",
          className,
        )}
        data-node-id="1010:3922"
        {...props}
      >
        {logo ? (
          <div className="ds-menu__logo">
            <span className="ds-menu__logo-mark" aria-hidden="true" />
            {!collapsed ? <span className="ds-menu__logo-text">{logo}</span> : null}
          </div>
        ) : null}
        <ul className="ds-menu__list">
          {items.map((item) => {
            const isOpen = expandedKeys.includes(item.key);
            const isSelected = activeKey === item.key;
            const hasChildren = Boolean(item.children?.length);

            return (
              <li className="ds-menu__entry" key={item.key}>
                <button
                  className={cn("ds-menu__item", isSelected && "ds-menu__item--selected")}
                  type="button"
                  aria-current={isSelected ? "page" : undefined}
                  aria-expanded={hasChildren ? isOpen : undefined}
                  onClick={() => (hasChildren ? toggleOpen(item.key) : selectItem(item.key))}
                >
                  <MenuIcon>{item.icon}</MenuIcon>
                  {!collapsed ? <span className="ds-menu__label">{item.label}</span> : null}
                  {hasChildren && !collapsed ? <span className="ds-menu__chevron" aria-hidden="true" /> : null}
                </button>
                {hasChildren && isOpen && !collapsed ? (
                  <ul className="ds-menu__submenu">
                    {item.children?.map((child) => {
                      const childSelected = activeKey === child.key;
                      return (
                        <li key={child.key}>
                          <button
                            className={cn("ds-menu__item", "ds-menu__item--child", childSelected && "ds-menu__item--selected")}
                            type="button"
                            aria-current={childSelected ? "page" : undefined}
                            onClick={() => selectItem(child.key)}
                          >
                            <span className="ds-menu__label">{child.label}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  },
);

Menu.displayName = "Menu";
