import * as React from "react";
import { tokens } from "../Token";

const imgVector = "http://localhost:3845/assets/1e5dcbc13364ad120161d18400f26038832da2f0.svg";
const imgUnion = "http://localhost:3845/assets/4a78fd39d2f7a619c656d4a110933c32d102daa4.svg";
const imgQuestion = "http://localhost:3845/assets/9e05247af843da5317f6cea147902ec8c4e2a0d1.svg";

interface QuestionButtonWebProps {
  state?: "Enable" | "Hover";
  tooltipText?: string;
}

export const QuestionButtonWeb = React.forwardRef<HTMLDivElement, QuestionButtonWebProps>(
  ({ state = "Hover", tooltipText = "¿Cómo podemos ayudarte?" }, ref) => {
    const isHover = state === "Hover";
    const isEnable = state === "Enable";

    return (
      <div
        ref={ref}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          gap: isHover ? tokens.spacing.md : tokens.spacing.md,
          justifyContent: isHover ? "flex-end" : "flex-end",
          position: "relative",
          width: "fit-content",
        }}
      >
        {/* Question Button */}
        <button
          type="button"
          style={{
            background: tokens.colors.success,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: tokens.spacing.sm,
            padding: tokens.spacing.md,
            borderRadius: tokens.radius.xl,
            border: "none",
            cursor: "pointer",
            width: "64px",
            height: "64px",
            flexShrink: 0,
          }}
        >
          <img
            src={isHover ? imgQuestion : imgVector}
            alt="question"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </button>

        {/* Tooltip - Only show when Enable state */}
        {isEnable && (
          <div
            style={{
              position: "absolute",
              top: "-54px",
              right: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              paddingLeft: tokens.spacing.sm,
              paddingRight: tokens.spacing.sm,
              paddingTop: tokens.spacing.md,
              paddingBottom: tokens.spacing.md,
              width: "197px",
              zIndex: 10,
            }}
          >
            {/* Tooltip background */}
            <img
              src={imgUnion}
              alt=""
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            />
            {/* Tooltip text */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                fontSize: "14px",
                fontFamily: "Solomon Sans",
                fontWeight: 400,
                color: tokens.colors.textSecondary,
                whiteSpace: "nowrap",
              }}
            >
              {tooltipText}
            </div>
          </div>
        )}
      </div>
    );
  }
);

QuestionButtonWeb.displayName = "QuestionButtonWeb";

export default function QuestionButtonWebScreen() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: tokens.colors.backgroundPrimary,
        padding: tokens.spacing.lg,
      }}
    >
      <QuestionButtonWeb state="Enable" tooltipText="¿Cómo podemos ayudarte?" />
    </div>
  );
}
