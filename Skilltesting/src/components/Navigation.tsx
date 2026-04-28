import { Link, useLocation } from "react-router-dom";
import "../styles/Navigation.css";

interface NavItem {
  label: string;
  path: string;
}

const navItems: NavItem[] = [
  { label: "Components Showcase", path: "/" },
  { label: "Showcase", path: "/showcase" },
  { label: "Puntos Venta", path: "/puntos-venta" },
  { label: "Reporte Agotados", path: "/reporte-agotados" },
  { label: "Surtido Punto Venta", path: "/surtido-punto-venta" },
  { label: "Tipo Finish", path: "/tipo-finish" },
  { label: "Formularios Disponibles", path: "/formularios-disponibles" },
  { label: "Login", path: "/login" },
  { label: "Formulario Visitas", path: "/formulario-visitas" },
  { label: "Login Form", path: "/login-form" },
  { label: "Flujo Visualización", path: "/flujo-visualizacion" },
  { label: "Shortcut Capturar Formularios", path: "/shortcut-capturar-formularios" },
  { label: "Formularios List", path: "/formularios-list" },
  { label: "Agenda Detalles Encuestas", path: "/agenda-detalles-encuestas" },
  { label: "Form Input Mixed", path: "/form-input-mixed" },
  { label: "Form Input Advanced", path: "/form-input-advanced" },
  { label: "Form Selection Complex", path: "/form-selection-complex" },
];

export default function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-header">
        <h1>Screen Navigator</h1>
      </div>
      <div className="nav-menu">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? "active" : ""}`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
