import * as React from "react";
import { tokens } from "../Token";

const imgEficaciaLogo = "http://localhost:3845/assets/d35bbfd8606a98d2183a8cad89575cba10c8ca04.png";
const imgCalendarIcon = "http://localhost:3845/assets/8046ef8a11944dfaabc9f7621d1eb2e088ab69f1.svg";

interface LoginScreenProps {
  onSubmit?: (data: { email: string; password: string }) => void;
}

export default function LoginScreen({ onSubmit }: LoginScreenProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.({ email, password });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: tokens.colors.backgroundPrimary,
        justifyContent: "space-between",
      }}
    >
      {/* Header Section with Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "148px",
          background: tokens.colors.backgroundPrimary,
          overflow: "hidden",
        }}
      >
        <img
          src={imgEficaciaLogo}
          alt="Eficacia"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
            transform: "scaleX(-1)",
          }}
        />
      </div>

      {/* Welcome Text */}
      <div style={{ padding: tokens.spacing.lg }}>
        <h1
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: tokens.colors.primary,
            margin: 0,
            marginBottom: tokens.spacing.xs,
            fontFamily: "Solomon Sans",
          }}
        >
          Hola,
        </h1>
        <h2
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: tokens.colors.primary,
            margin: 0,
            marginBottom: tokens.spacing.md,
            fontFamily: "Solomon Sans",
          }}
        >
          Ingresa al ecosistema de servicios
        </h2>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: tokens.colors.textPrimary,
            margin: 0,
            fontFamily: "Solomon Sans",
            lineHeight: 1.5,
          }}
        >
          Somos expertos en Soluciones Comerciales y de Mercadeo, y en Soluciones de Gestión Humana.
        </p>
      </div>

      {/* Form Section */}
      <form onSubmit={handleSubmit} style={{ padding: tokens.spacing.lg, flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Email Field */}
        <div style={{ marginBottom: tokens.spacing.lg }}>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: 600,
              color: tokens.colors.primary,
              marginBottom: tokens.spacing.xs,
              fontFamily: "Solomon Sans",
            }}
          >
            Label
            <span style={{ color: tokens.colors.warning }}>*</span>
          </label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: tokens.spacing.sm,
              padding: tokens.spacing.sm,
              background: tokens.colors.white,
              border: `1px solid ${tokens.colors.disabled}`,
              borderRadius: tokens.radius.xs,
            }}
          >
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Value"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "14px",
                color: tokens.colors.textPrimary,
                fontFamily: "Solomon Sans",
                background: "transparent",
              }}
            />
            <img src={imgCalendarIcon} alt="calendar" style={{ width: "20px", height: "20px" }} />
          </div>
        </div>

        {/* Password Field */}
        <div style={{ marginBottom: tokens.spacing.lg }}>
          <label
            style={{
              display: "block",
              fontSize: "14px",
              fontWeight: 600,
              color: tokens.colors.primary,
              marginBottom: tokens.spacing.xs,
              fontFamily: "Solomon Sans",
            }}
          >
            Label
            <span style={{ color: tokens.colors.warning }}>*</span>
          </label>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: tokens.spacing.sm,
              padding: tokens.spacing.sm,
              background: tokens.colors.white,
              border: `1px solid ${tokens.colors.disabled}`,
              borderRadius: tokens.radius.xs,
            }}
          >
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Value"
              style={{
                flex: 1,
                border: "none",
                outline: "none",
                fontSize: "14px",
                color: tokens.colors.textPrimary,
                fontFamily: "Solomon Sans",
                background: "transparent",
              }}
            />
            <img src={imgCalendarIcon} alt="calendar" style={{ width: "20px", height: "20px" }} />
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            padding: tokens.spacing.lg,
            background: tokens.colors.buttonBackground,
            color: tokens.colors.white,
            border: "none",
            borderRadius: tokens.radius.sm,
            fontSize: "16px",
            fontWeight: 600,
            fontFamily: "Solomon Sans",
            cursor: "pointer",
            marginBottom: tokens.spacing.md,
          }}
        >
          Ingresar
        </button>

        {/* Forgot Password Link */}
        <div style={{ textAlign: "center" }}>
          <button
            type="button"
            style={{
              background: "transparent",
              border: "none",
              color: tokens.colors.textSecondary,
              fontSize: "14px",
              fontWeight: 400,
              fontFamily: "Solomon Sans",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>
      </form>

      {/* Footer Version */}
      <div
        style={{
          padding: tokens.spacing.md,
          textAlign: "right",
          fontSize: "16px",
          color: tokens.colors.textSecondary,
          fontFamily: "Solomon Sans",
        }}
      >
        V2.001
      </div>
    </div>
  );
}
