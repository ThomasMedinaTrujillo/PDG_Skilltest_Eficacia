import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";

const USER_ICON = "http://localhost:3845/assets/cd2ef9df38cc2e2710183f7ee532bf58a2a7db0a.svg";

export interface IconTextProps extends React.HTMLAttributes<HTMLDivElement> {
  text?: string;
  leftIcon?: React.ReactNode;
}

export const IconText = React.forwardRef<HTMLDivElement, IconTextProps>(
  ({ className, text = "C.C 1130618976 Gaiman, Argentina", leftIcon, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("ds-icon-text", className)}
        style={{
          display: "flex",
          alignItems: "flex-end",
          gap: tokens.spacing.sm,
        }}
        {...props}
      >
        <span
          aria-hidden
          style={{
            width: "24px",
            height: "24px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {leftIcon ?? <img src={USER_ICON} alt="" style={{ width: "100%", height: "100%" }} />}
        </span>

        <span
          style={{
            color: tokens.colors.textDisabled,
            fontFamily: tokens.typography.body.fontFamily,
            fontSize: tokens.typography.body.fontSize,
            fontWeight: tokens.typography.body.fontWeight,
            lineHeight: "1",
          }}
        >
          {children ?? text}
        </span>
      </div>
    );
  }
);

IconText.displayName = "IconText";
