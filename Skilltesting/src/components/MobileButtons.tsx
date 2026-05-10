import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import './MobileButtons.css';

export interface MobileButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "Primary" | "Error";
  iconEnd?: ReactNode | null;
  iconStart?: ReactNode | null;
  label?: string;
  orientation?: "center" | "left";
  showIconEnd?: boolean;
  showIconStart?: boolean;
  size?: "Small" | "Medium";
  btnState?: "active" | "disable" | "pressed";
  btnStyle?: "Contained" | "Outline" | "Text";
}

export const MobileButtons = forwardRef<HTMLButtonElement, MobileButtonsProps>(
  (
    {
      className,
      color = "Primary",
      iconEnd = null,
      iconStart = null,
      label = "button",
      orientation = "center",
      showIconEnd = false,
      showIconStart = false,
      size = "Small",
      btnState = "active",
      btnStyle = "Contained",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={[
          "ds-mobile-btn",
          `ds-mobile-btn--${color.toLowerCase()}`,
          `ds-mobile-btn--${size.toLowerCase()}`,
          `ds-mobile-btn--${btnState.toLowerCase()}`,
          `ds-mobile-btn--${btnStyle.toLowerCase()}`,
          `ds-mobile-btn--${orientation.toLowerCase()}`,
          className
        ].filter(Boolean).join(" ")}
        disabled={btnState === "disable"}
        {...props}
      >
        <div className="ds-mobile-btn__inner">
          {showIconStart && (
            <span className="ds-mobile-btn__icon ds-mobile-btn__icon--start">
              {iconStart || <span className="ds-mobile-btn__icon-placeholder" />}
            </span>
          )}
          <span className="ds-mobile-btn__label">{label}</span>
          {showIconEnd && (
            <span className="ds-mobile-btn__icon ds-mobile-btn__icon--end">
              {iconEnd || <span className="ds-mobile-btn__icon-placeholder" />}
            </span>
          )}
        </div>
      </button>
    );
  }
);

MobileButtons.displayName = "MobileButtons";
