import * as React from "react";
import { cn } from "@/lib/cn";
import { tokens } from "@/Token";
import closeIcon from "@/assets/icons/close.svg";
import menuIcon from "@/assets/icons/menu.svg";
import searchIcon from "@/assets/icons/search.svg";
import componentIcon from "@/assets/icons/component-2.svg";
import userIcon from "@/assets/icons/user.svg";
import arrowLeft from "@/assets/icons/arrow-left.svg";
import icon2364 from "@/assets/icons/icon-2364.svg";
import hero from "@/assets/hero.png";
import "./PrincipalMenu.css";

const c = tokens.colors;
const sp = tokens.spacing;
const rad = tokens.radius;
const typo = tokens.typography.mobile;

export interface PrincipalMenuProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "header" | "drawer";
  /** When `drawer`, shows extra middle items (matches Figma `showItem`). */
  showExtraItems?: boolean;
  onClose?: () => void;
  onMenu?: () => void;
  onSearch?: () => void;
  onNavItem?: (index: number) => void;
}

const ITEM_COUNT_FULL = 8;
const ITEM_COUNT_COMPACT = 4;

export const PrincipalMenu = React.forwardRef<HTMLDivElement, PrincipalMenuProps>(
  (
    {
      className,
      variant = "header",
      showExtraItems = true,
      onClose,
      onMenu,
      onSearch,
      onNavItem,
      style,
      ...rest
    },
    ref,
  ) => {
    const cssVars: React.CSSProperties = {
      ["--pm-header-bg" as string]: c.text.headersTitles,
      ["--pm-drawer-bg" as string]: c.text.nsWhite,
      ["--pm-nav-border" as string]: c.text.nsBlueInputPlaceholder,
      ["--pm-logo-fg" as string]: c.text.nsWhite,
      ["--pm-item-bg" as string]: c.text.nsWhite,
      ["--pm-item-fg" as string]: c.text.headersTitles,
      ["--pm-search-bg" as string]: c.text.nsWhite,
      ["--pm-search-muted" as string]: c.text.subtitleBody,
      ["--pm-badge-bg" as string]: c.semantic.pending,
      ["--pm-gap-md" as string]: sp.padding.md,
      ["--pm-pad" as string]: sp.padding.lg,
      ["--pm-pad-y-lg" as string]: sp.gap.lg,
      ["--pm-stack-gap" as string]: sp.gap.lg,
      ["--pm-item-gap" as string]: sp.padding.xl,
      ["--pm-item-pad" as string]: sp.padding.md,
      ["--pm-search-gap" as string]: sp.padding.sm,
      ["--pm-search-px" as string]: sp.padding.sm,
      ["--pm-search-radius" as string]: rad.xs,
    };

    const itemLabelStyle: React.CSSProperties = {
      fontFamily: `"Solomon Sans", system-ui, sans-serif`,
      fontWeight: typo.subtitle.fontWeight,
      fontSize: typo.subtitle.fontSize,
      lineHeight: 1.2,
    };

    const topCount = showExtraItems ? ITEM_COUNT_FULL : ITEM_COUNT_COMPACT;

    const navRows = Array.from({ length: topCount }, (_, i) => (
      <button
        key={`nav-${i}`}
        type="button"
        className="principal-menu__item"
        onClick={() => onNavItem?.(i)}
      >
        <img src={arrowLeft} alt="" className="principal-menu__item-icon" width={24} height={24} />
        <span className="principal-menu__item-label" style={itemLabelStyle}>
          Text
        </span>
      </button>
    ));

    const bottomRows = [0, 1].map((i) => (
      <button
        key={`bottom-${i}`}
        type="button"
        className="principal-menu__item"
        onClick={() => onNavItem?.(topCount + i)}
      >
        <img src={arrowLeft} alt="" className="principal-menu__item-icon" width={24} height={24} />
        <span className="principal-menu__item-label" style={itemLabelStyle}>
          Text
        </span>
      </button>
    ));

    if (variant === "drawer") {
      return (
        <div
          ref={ref}
          className={cn("principal-menu", "principal-menu--drawer", className)}
          style={{ ...cssVars, ...style }}
          {...rest}
        >
          <div className="principal-menu__scroll">
            <div>
              <div className="principal-menu__nav">
                <div className="principal-menu__logo-mark" aria-hidden>
                  <img src={icon2364} alt="" width={28} height={28} style={{ objectFit: "contain" }} />
                  <span>eficacia</span>
                </div>
                <button type="button" className="principal-menu__icon-btn" onClick={onClose} aria-label="Cerrar">
                  <img src={closeIcon} alt="" width={20} height={20} />
                </button>
              </div>
              <div className="principal-menu__items">{navRows}</div>
            </div>
            <div className="principal-menu__bottom">{bottomRows}</div>
          </div>
        </div>
      );
    }

    return (
      <div
        ref={ref}
        role="banner"
        className={cn("principal-menu", "principal-menu--header", className)}
        style={{ ...cssVars, ...style }}
        {...rest}
      >
        <button type="button" className="principal-menu__icon-btn" onClick={onMenu} aria-label="Menú">
          <img src={menuIcon} alt="" width={24} height={24} />
        </button>
        <button type="button" className="principal-menu__search" onClick={onSearch}>
          <img src={searchIcon} alt="" className="principal-menu__search-icon" width={18} height={18} />
          <span className="principal-menu__search-placeholder">Buscar</span>
        </button>
        <div className="principal-menu__actions">
          <img src={componentIcon} alt="" className="principal-menu__action-icon" width={24} height={24} />
          <div className="principal-menu__avatar-wrap">
            <img src={hero} alt="" className="principal-menu__avatar" width={32} height={32} />
            <div className="principal-menu__badge" aria-hidden>
              <img src={userIcon} alt="" width={10} height={10} />
            </div>
          </div>
        </div>
      </div>
    );
  },
);

PrincipalMenu.displayName = "PrincipalMenu";
