import { forwardRef, type HTMLAttributes } from 'react';
import './PrincipalMenu.css';

export interface PrincipalMenuProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  variant?: "Header" | "floating";
  showItem?: boolean;
}

export const PrincipalMenu = forwardRef<HTMLDivElement, PrincipalMenuProps>(
  (
    {
      className,
      variant = "Header",
      showItem = true,
      ...props
    },
    ref
  ) => {
    
    if (variant === "Header") {
      return (
        <header
          ref={ref}
          className={["ds-principal-menu ds-principal-menu--header", className].filter(Boolean).join(" ")}
          {...props}
        >
          <button className="ds-principal-menu__hamburger" aria-label="Menu">
            ☰
          </button>
          
          <div className="ds-principal-menu__search">
            <span className="ds-principal-menu__search-icon">🔍</span>
            <span className="ds-principal-menu__search-text">Buscar</span>
          </div>
          
          <div className="ds-principal-menu__actions">
            <span className="ds-principal-menu__notification">🔔</span>
            <div className="ds-principal-menu__avatar">
              <img src="/placeholder-avatar.png" alt="Avatar" />
              <span className="ds-principal-menu__avatar-badge" />
            </div>
          </div>
        </header>
      );
    }

    return (
      <aside
        ref={ref}
        className={["ds-principal-menu ds-principal-menu--floating", className].filter(Boolean).join(" ")}
        {...props}
      >
        <div className="ds-principal-menu__floating-header">
          <div className="ds-principal-menu__logo">Eficacia</div>
          <button className="ds-principal-menu__close" aria-label="Close">✕</button>
        </div>

        <nav className="ds-principal-menu__nav">
          {[1, 2, 3, 4].map((i) => (
            <div key={`item-${i}`} className="ds-principal-menu__nav-item">
              <span className="ds-principal-menu__nav-icon">📄</span>
              <span className="ds-principal-menu__nav-text">Text</span>
            </div>
          ))}
          {showItem && [5, 6, 7, 8].map((i) => (
            <div key={`item-${i}`} className="ds-principal-menu__nav-item">
              <span className="ds-principal-menu__nav-icon">📄</span>
              <span className="ds-principal-menu__nav-text">Text</span>
            </div>
          ))}
        </nav>

        <div className="ds-principal-menu__bottom-items">
          {[9, 10].map((i) => (
            <div key={`bottom-item-${i}`} className="ds-principal-menu__nav-item ds-principal-menu__nav-item--bottom">
              <span className="ds-principal-menu__nav-icon">🚪</span>
              <span className="ds-principal-menu__nav-text">Text</span>
            </div>
          ))}
        </div>
      </aside>
    );
  }
);

PrincipalMenu.displayName = "PrincipalMenu";
