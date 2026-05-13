import * as React from "react";
import { cn } from "@/lib/cn";
import { tokens } from "@/Token";
import alertIcon from "@/assets/icons/alert.svg";
import arrowRight from "@/assets/icons/arrow-right.svg";
import "./Alert.css";

const c = tokens.colors;
const sp = tokens.spacing;
const sh = tokens.shadows;

export type AlertTone = "pending";

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: AlertTone;
  showIcon?: boolean;
  text?: string;
  onTrailClick?: () => void;
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      className,
      tone = "pending",
      showIcon = true,
      text = "Estado",
      onTrailClick,
      style,
      ...rest
    },
    ref,
  ) => {
    const cssVars: React.CSSProperties = {
      ["--al-gap" as string]: sp.padding.sm,
      ["--al-px" as string]: sp.padding.lg,
      ["--al-py" as string]: sp.padding.md,
      ["--al-radius" as string]: sp.padding.sm,
      ["--al-shadow" as string]: sh.card,
      ["--al-body-pad" as string]: sp.padding.xs,
      ["--al-fg" as string]: c.text.nsWhite,
      ["--al-bg" as string]: tone === "pending" ? c.semantic.pending : c.semantic.pending,
    };

    return (
      <div
        ref={ref}
        role="status"
        className={cn("ds-alert", className)}
        style={{ ...cssVars, ...style }}
        {...rest}
      >
        {showIcon ? (
          <div className="ds-alert__icon" aria-hidden>
            <img src={alertIcon} alt="" width={16} height={16} />
          </div>
        ) : null}
        <div className="ds-alert__body">
          <p className="ds-alert__text">{text}</p>
        </div>
        <button type="button" className="ds-alert__trail" onClick={onTrailClick} aria-label="Más">
          <img src={arrowRight} alt="" width={10} height={10} />
        </button>
      </div>
    );
  },
);

Alert.displayName = "Alert";
