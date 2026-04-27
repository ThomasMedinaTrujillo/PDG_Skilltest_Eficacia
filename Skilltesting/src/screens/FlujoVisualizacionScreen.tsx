import * as React from "react";
import { PrincipalMenu } from "../components/PrincipalMenu/PrincipalMenu";
import { tokens } from "../Token";

const imgImage46 = "http://localhost:3845/assets/d35bbfd8606a98d2183a8cad89575cba10c8ca04.png";
const imgSubtract = "http://localhost:3845/assets/69a3aa8d495165eab493865419e7ee52875496f5.svg";
const imgChevronRight = "http://localhost:3845/assets/e8551afa918fd1a04412a3bd31a503533234a435.svg";
const imgFrame9 = "http://localhost:3845/assets/d9c2dcaaf5567f7fc71e4dd76c6a22b41a8182b6.svg";
const imgQuestion = "http://localhost:3845/assets/9e05247af843da5317f6cea147902ec8c4e2a0d1.svg";
const imgUnion = "http://localhost:3845/assets/4a78fd39d2f7a619c656d4a110933c32d102daa4.svg";

interface QuestionButtonWebProps {
  state?: "Enable" | "Hover";
  tooltipText?: string;
}

const QuestionButtonWeb: React.FC<QuestionButtonWebProps> = ({ 
  state = "Enable", 
  tooltipText = "¿Cómo podemos ayudarte?" 
}) => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: state === "Enable" ? 0 : tokens.spacing.md,
      position: "relative",
    }}
  >
    {/* Button */}
    <button
      type="button"
      style={{
        width: "64px",
        height: "64px",
        borderRadius: tokens.radius.xl,
        background: tokens.colors.success,
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: tokens.spacing.md,
        boxShadow: tokens.shadows.card,
        flexShrink: 0,
      }}
    >
      <img src={imgQuestion} alt="help" style={{ width: "44px", height: "44px" }} />
    </button>

    {/* Tooltip - Only shown when Enable state */}
    {state === "Enable" && (
      <div
        style={{
          position: "absolute",
          top: "-54px",
          right: 0,
          background: tokens.colors.white,
          padding: `${tokens.spacing.md} ${tokens.spacing.sm}`,
          borderRadius: tokens.radius.sm,
          boxShadow: tokens.shadows.card,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "197px",
        }}
      >
        <img
          src={imgUnion}
          alt="tooltip-bg"
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            height: "100%",
            borderRadius: tokens.radius.sm,
            zIndex: -1,
          }}
        />
        <span
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: tokens.colors.textSecondary,
            fontFamily: "Solomon Sans",
            whiteSpace: "nowrap",
            zIndex: 1,
          }}
        >
          {tooltipText}
        </span>
      </div>
    )}
  </div>
);

interface InfoCardProps {
  title: string;
  description: string;
  buttonLabel: string;
  onButtonClick?: () => void;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, buttonLabel, onButtonClick }) => (
  <div
    style={{
      background: tokens.colors.white,
      borderRadius: tokens.radius.sm,
      boxShadow: tokens.shadows.card,
      padding: tokens.spacing.md,
      display: "flex",
      flexDirection: "column",
      gap: tokens.spacing.md,
      width: "100%",
      minHeight: "123px",
    }}
  >
    {/* Card Header */}
    <div style={{ display: "flex", flexDirection: "column", gap: tokens.spacing.xs }}>
      <h3
        style={{
          fontSize: "16px",
          fontWeight: 600,
          color: tokens.colors.primary,
          margin: 0,
          fontFamily: "Solomon Sans",
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "14px",
          fontWeight: 400,
          color: tokens.colors.textSecondary,
          margin: 0,
          fontFamily: "Solomon Sans",
          lineHeight: "1.4",
        }}
      >
        {description}
      </p>
    </div>

    {/* Card Button */}
    <button
      type="button"
      onClick={onButtonClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: tokens.spacing.sm,
        padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
        background: "transparent",
        border: "none",
        cursor: "pointer",
        color: tokens.colors.primary,
        fontFamily: "Solomon Sans",
        fontWeight: 600,
        fontSize: "14px",
      }}
    >
      {buttonLabel}
      <img src={imgChevronRight} alt="next" style={{ width: "24px", height: "24px" }} />
    </button>
  </div>
);

export default function FlujoVisualizacionScreen() {
  const [showTooltip] = React.useState(true);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: tokens.colors.backgroundPrimary,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <PrincipalMenu mode="header" />

      {/* Main Content */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          padding: tokens.spacing.lg,
          gap: tokens.spacing.lg,
          overflowY: "auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Top Notification */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: tokens.spacing.sm,
            justifyContent: "space-between",
            padding: tokens.spacing.sm,
            background: tokens.colors.white,
            borderRadius: tokens.radius.sm,
            boxShadow: tokens.shadows.card,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: tokens.spacing.sm, flex: 1 }}>
            <img src={imgSubtract} alt="timer" style={{ width: "13px", height: "13px" }} />
            <span
              style={{
                fontSize: "14px",
                fontWeight: 600,
                color: tokens.colors.textSecondary,
                fontFamily: "Solomon Sans",
                whiteSpace: "nowrap",
              }}
            >
              Tiempo PDV - 00:18:25 / 00:22:00
            </span>
          </div>
          <button
            type="button"
            onClick={() => console.log("Close notification")}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <img src={imgFrame9} alt="close" style={{ width: "26px", height: "33px", flexShrink: 0 }} />
          </button>
        </div>

        {/* Section Title & Description */}
        <div style={{ display: "flex", flexDirection: "column", gap: tokens.spacing.xs }}>
          <h2
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: tokens.colors.primary,
              margin: 0,
              fontFamily: "Solomon Sans",
            }}
          >
            Servicios disponibles
          </h2>
          <p
            style={{
              fontSize: "12px",
              fontWeight: 400,
              color: tokens.colors.textSecondary,
              margin: 0,
              fontFamily: "Solomon Sans",
              lineHeight: "1.4",
            }}
          >
            Los equipos comerciales de alto desempeño, necesitan herramientas de última generación. Selecciona la
            plataforma de servicios
          </p>
        </div>

        {/* Info Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: tokens.spacing.md }}>
          <InfoCard
            title="Titulo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam ultricies blandit..."
            buttonLabel="Label"
            onButtonClick={() => console.log("Card 1 clicked")}
          />
          <InfoCard
            title="Titulo"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquam ultricies blandit..."
            buttonLabel="Label"
            onButtonClick={() => console.log("Card 2 clicked")}
          />
        </div>
      </div>

      {/* Floating Question Button */}
      <div
        style={{
          position: "absolute",
          right: tokens.spacing.lg,
          bottom: "200px",
          zIndex: 10,
        }}
      >
        <QuestionButtonWeb state={showTooltip ? "Enable" : "Hover"} />
      </div>

      {/* Bottom Image */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "179px",
          height: "121px",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <img
          src={imgImage46}
          alt="decorative"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* Version Footer */}
      <div
        style={{
          position: "absolute",
          bottom: tokens.spacing.lg,
          right: tokens.spacing.lg,
          fontSize: "16px",
          color: tokens.colors.textSecondary,
          fontFamily: "Solomon Sans",
          textAlign: "right",
          zIndex: 1,
        }}
      >
        V2.001
      </div>
    </div>
  );
}
