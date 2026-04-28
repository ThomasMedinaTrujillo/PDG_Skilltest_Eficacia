import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import questionIcon from "../../assets/icons/question.svg";

const QUESTION_ICON = questionIcon;

export interface QuestionButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  active?: boolean;
  defaultActive?: boolean;
  onActiveChange?: (active: boolean) => void;
  tooltipText?: string;
  children?: React.ReactNode;
}

export const QuestionButton = React.forwardRef<HTMLButtonElement, QuestionButtonProps>(
  (
    {
      className,
      active,
      defaultActive = false,
      onActiveChange,
      tooltipText = "¿Cómo podemos ayudarte?",
      children,
      onClick,
      disabled,
      ...props
    },
    ref
  ) => {
    const isControlled = active !== undefined;
    const [internalActive, setInternalActive] = React.useState(defaultActive);
    const isActive = isControlled ? active : internalActive;

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        return;
      }
      const next = !isActive;
      if (!isControlled) {
        setInternalActive(next);
      }
      onActiveChange?.(next);
      onClick?.(event);
    };

    return (
      <div
        className={cn("ds-question-button", isActive && "ds-question-button--active", className)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: tokens.spacing.md,
          width: isActive ? "198px" : "64px",
          maxWidth: "100%",
        }}
      >
        {isActive ? (
          <div
            style={{
              display: "inline-flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: tokens.spacing.xs,
              width: "100%",
            }}
          >
            <div
              style={{
                background: tokens.colors.backgroundSecondary,
                color: tokens.colors.textSecondary,
                borderRadius: tokens.radius.sm,
                padding: `${tokens.spacing.sm} 12px`,
                fontFamily: tokens.typography.body.fontFamily,
                fontSize: tokens.typography.body.fontSize,
                fontWeight: tokens.typography.body.fontWeight,
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              {tooltipText}
            </div>
            <span
              aria-hidden
              style={{
                width: "10px",
                height: "10px",
                background: tokens.colors.backgroundSecondary,
                transform: "rotate(45deg)",
                marginRight: "16px",
              }}
            />
          </div>
        ) : null}

        <button
          ref={ref}
          type="button"
          disabled={disabled}
          onClick={handleClick}
          className={cn("ds-question-button__trigger", isActive && "ds-question-button__trigger--active")}
          style={{
            width: "64px",
            height: "64px",
            borderRadius: tokens.radius.xl,
            border: "none",
            background: tokens.colors.success,
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: disabled ? "not-allowed" : "pointer",
          }}
          {...props}
        >
          {children ?? <img src={QUESTION_ICON} alt="Question" style={{ width: "28px", height: "28px", objectFit: "contain" }} />}
        </button>
      </div>
    );
  }
);

QuestionButton.displayName = "QuestionButton";
