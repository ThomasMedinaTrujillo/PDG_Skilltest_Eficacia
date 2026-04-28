import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import arrowLeftIcon from "../../assets/icons/arrow-left.svg";
import arrowRightIcon from "../../assets/icons/arrow-right.svg";

const LINE_LEFT = arrowLeftIcon;
const LINE_RIGHT = arrowRightIcon;

export interface CaptionWarningProps extends React.HTMLAttributes<HTMLDivElement> {
  caption?: string;
}

export const CaptionWarning = React.forwardRef<HTMLDivElement, CaptionWarningProps>(
  ({ className, caption = "Debes completar las preguntas (*)", children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("ds-caption-warning", className)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: tokens.spacing.sm,
          width: "100%",
        }}
        {...props}
      >
        <img src={LINE_LEFT} alt="" style={{ width: "45px", height: "1px" }} />

        <span
          style={{
            color: tokens.colors.buttonDisabled,
            fontFamily: tokens.typography.body.fontFamily,
            fontSize: tokens.typography.caption.fontSize,
            fontWeight: tokens.typography.body.fontWeight,
            lineHeight: "1",
            textAlign: "center",
            whiteSpace: "nowrap",
          }}
        >
          {children ?? caption}
        </span>

        <img src={LINE_RIGHT} alt="" style={{ width: "45px", height: "1px" }} />
      </div>
    );
  }
);

CaptionWarning.displayName = "CaptionWarning";
