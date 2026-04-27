import * as React from "react";
import { MenuBar } from "../components/MenuBar/MenuBar";
import { Input } from "../components/Input/Input";
import { tokens } from "../Token";

const imgEficaciaLogo = "http://localhost:3845/assets/d35bbfd8606a98d2183a8cad89575cba10c8ca04.png";

export default function LoginFormScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { email, password });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: tokens.colors.backgroundPrimary,
      }}
    >
      {/* Header Logo */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: tokens.spacing.lg,
          minHeight: "100px",
          overflow: "hidden",
        }}
      >
        <img
          src={imgEficaciaLogo}
          alt="Eficacia Logo"
          style={{
            maxWidth: "80%",
            height: "auto",
            maxHeight: "80px",
            objectFit: "contain",
            transform: "scaleX(-1)",
          }}
        />
      </div>

      {/* Welcome Section */}
      <div style={{ padding: tokens.spacing.lg, marginBottom: tokens.spacing.lg }}>
        <h1
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: tokens.colors.primary,
            margin: 0,
            fontFamily: "Solomon Sans",
          }}
        >
          Hola,
        </h1>
        <p
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: tokens.colors.primary,
            margin: `${tokens.spacing.md} 0 0 0`,
            fontFamily: "Solomon Sans",
          }}
        >
          Ingresa al ecosistema de servicios
        </p>
        <p
          style={{
            fontSize: "14px",
            fontWeight: 400,
            color: tokens.colors.textPrimary,
            margin: `${tokens.spacing.md} 0 0 0`,
            fontFamily: "Solomon Sans",
          }}
        >
          Somos expertos en Soluciones Comerciales y de Mercadeo, y en Soluciones de Gestión Humana.
        </p>
      </div>

      {/* Form Section */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: tokens.spacing.lg,
          padding: tokens.spacing.lg,
          flex: 1,
        }}
      >
        {/* Email Input */}
        <Input
          labelText="Email"
          requested={true}
          state="enable"
          type="textfield"
          value={email}
          onValueChange={setEmail}
          placeholder="Ingresa tu email"
        />

        {/* Password Input */}
        <Input
          labelText="Contraseña"
          requested={true}
          state="enable"
          type="textfield"
          value={password}
          onValueChange={setPassword}
          placeholder="Ingresa tu contraseña"
        />

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
            marginTop: tokens.spacing.md,
          }}
        >
          Ingresar
        </button>

        {/* Forgot Password */}
        <div style={{ textAlign: "center" }}>
          <a
            href="#"
            style={{
              color: tokens.colors.textSecondary,
              textDecoration: "none",
              fontSize: "14px",
              fontFamily: "Solomon Sans",
            }}
          >
            ¿Olvidaste tu contraseña?
          </a>
        </div>
      </form>

      {/* Version Footer */}
      <div
        style={{
          padding: tokens.spacing.md,
          textAlign: "right",
          fontSize: "12px",
          color: tokens.colors.textSecondary,
          fontFamily: "Solomon Sans",
          marginBottom: tokens.spacing.md,
        }}
      >
        V2.001
      </div>

      {/* Footer MenuBar */}
      <MenuBar items={5} activeIndex={0} />
    </div>
  );
}
