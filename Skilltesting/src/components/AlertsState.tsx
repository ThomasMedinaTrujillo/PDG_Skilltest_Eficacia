import { forwardRef, type HTMLAttributes } from 'react';
import './AlertsState.css';

export interface AlertsStateProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  showIcon?: boolean;
  alertStyle?: "Default" | "Succes" | "Warning" | "Pending";
  textAlert?: string;
}

export const AlertsState = forwardRef<HTMLDivElement, AlertsStateProps>(
  (
    {
      className,
      showIcon = true,
      alertStyle = "Default",
      textAlert = "Estado",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={[
          "ds-alerts-state",
          `ds-alerts-state--${alertStyle.toLowerCase()}`,
          className
        ].filter(Boolean).join(" ")}
        {...props}
      >
        {showIcon && (
          <div className="ds-alerts-state__icon-wrapper">
            <span className="ds-alerts-state__icon" />
          </div>
        )}
        
        <div className="ds-alerts-state__content">
          <p className="ds-alerts-state__text">{textAlert}</p>
        </div>
        
        {alertStyle === "Default" ? (
          <div className="ds-alerts-state__close">
            <span className="ds-alerts-state__close-icon">✕</span>
          </div>
        ) : (
          <div className="ds-alerts-state__arrow">
            <span className="ds-alerts-state__arrow-icon">➔</span>
          </div>
        )}
      </div>
    );
  }
);

AlertsState.displayName = "AlertsState";
