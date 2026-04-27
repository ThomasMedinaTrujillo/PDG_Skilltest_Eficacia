import * as React from "react";
import { cn } from "../../lib/cn";
import { tokens } from "../../Token";
import basketCheckIcon from "../../assets/basket-check.svg";

const Icon = ({ size = "24px" }: { size?: string }) => (
  <img src={basketCheckIcon} alt="icon" style={{ width: size, height: size }} />
);

interface ProgressBarProps {
  percent?: number;
  showPercent?: boolean;
  status?: "green" | "yellow" | "red";
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percent,showPercent = false, status = "green" }) => {
  const statusColorMap = {
    green: tokens.colors.success,
    yellow: tokens.colors.pending,
    red: tokens.colors.warning,
  };

  const statusColor = statusColorMap[status];

  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "7px",
          backgroundColor: tokens.colors.buttonDisabled,
          borderRadius: "4px",
          overflow: "hidden",
          opacity: 0.5,
          marginBottom: tokens.spacing.xs,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            height: "100%",
            width: `${percent}%`,
            backgroundColor: statusColor,
            borderRadius: "4px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {showPercent && (
            <div
              style={{
                backgroundColor: statusColor,
                color: tokens.colors.white,
                padding: `2px ${tokens.spacing.xs}`,
                borderRadius: "55px",
                fontSize: "12px",
                fontWeight: 700,
                whiteSpace: "nowrap",
                marginRight: "-60px",
              }}
            >
              {percent}%
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export interface ProgressCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  headLeftText?: string;
  headRightText?: string;
  activitiesText?: string;
  goalsText?: string;
  percent?: number;
  showPercent?: boolean;
  showTitle?: boolean;
  showCheck?: boolean;
  showArrow?: boolean;
  showHeadText?: boolean;
  status?: "green" | "yellow" | "red";
}

export const ProgressCard = React.forwardRef<HTMLDivElement, ProgressCardProps>(
  (
    {
      className,
      title = "Encabezado",
      headLeftText = "Faltan 2 actividades",
      headRightText = "Meta 34",
      activitiesText = "Faltan 2 actividades",
      goalsText = "Meta 34",
      percent = 65,
      showPercent = true,
      showTitle = true,
      showCheck = true,
      showArrow = true,
      showHeadText = true,
      status = "green",
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("progress-card", className)}
        style={{
          display: "flex",
          backgroundColor: tokens.colors.backgroundSecondary,
          borderRadius: tokens.radius.sm,
          padding: tokens.spacing.md,
          gap: tokens.spacing.lg,
          alignItems: "center",
          boxShadow: tokens.shadows.card,
        }}
        {...props}
      >
        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            flex: 1,
          }}
        >
          {/* Header Info */}
          {showHeadText && (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: "12px",
                color: tokens.colors.textSecondary,
                paddingBottom: tokens.spacing.sm,
                borderBottom: `1px solid ${tokens.colors.neutral300}`,
              }}
            >
              <span>{headLeftText}</span>
              <span>{headRightText}</span>
            </div>
          )}

          {/* Title Section */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "19px",
              marginBottom: tokens.spacing.xs,
            }}
          >
            {showTitle && (
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 600,
                  color: tokens.colors.primary,
                }}
              >
                {title}
              </div>
            )}
            {showCheck && <Icon size="18px" />}
          </div>

          {/* Progress Bar */}
          <ProgressBar percent={percent} showPercent={showPercent} status={status} />

          {/* Footer Info */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "12px",
              color: tokens.colors.textSecondary,
              height: "14px",
            }}
          >
            <span>{activitiesText}</span>
            <span>{goalsText}</span>
          </div>
        </div>

        {/* Arrow Icon */}
        {showArrow && <Icon size="15px" />}
      </div>
    );
  }
);

ProgressCard.displayName = "ProgressCard";
