import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ComponentsShowcase from "./components/ComponentsShowcase";
import PuntosVentaScreen from "./screens/PuntosVentaScreen";
import ShowcaseScreen from "./screens/Showcase";
import TipoFinishScreen from "./screens/TipoFinishScreen";
import ReporteAgotadosScreen from "./screens/ReporteAgotadosScreen";
import SurtidoPuntoVentaScreen from "./screens/SurtidoPuntoVentaScreen";
import QuestionButtonWebScreen from "./screens/QuestionButtonWebScreen";
import FormularioDisponiblesScreen from "./screens/FormularioDisponiblesScreen";
import LoginScreen from "./screens/LoginScreen";
import FormularioVisitasScreen from "./screens/FormularioVisitasScreen";
import LoginFormScreen from "./screens/LoginFormScreen";
import CardCheckDemoScreen from "./screens/CardCheckDemoScreen";
import FlujoVisualizacionScreen from "./screens/FlujoVisualizacionScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ComponentsShowcase />} />
        <Route path="/showcase" element={<ShowcaseScreen />} />
        <Route path="/puntos-venta" element={<PuntosVentaScreen />} />
        <Route path="/reporte-agotados" element={<ReporteAgotadosScreen />} />
        <Route path="/surtido-punto-venta" element={<SurtidoPuntoVentaScreen />} />
        <Route path="/tipo-finish" element={<TipoFinishScreen />} />
        <Route path="/question-button" element={<QuestionButtonWebScreen />} />
        <Route path="/formularios-disponibles" element={<FormularioDisponiblesScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/formulario-visitas" element={<FormularioVisitasScreen />} />
        <Route path="/login-form" element={<LoginFormScreen />} />
        <Route path="/card-check-demo" element={<CardCheckDemoScreen />} />
        <Route path="/flujo-visualizacion" element={<FlujoVisualizacionScreen />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;