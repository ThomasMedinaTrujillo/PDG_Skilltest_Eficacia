import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
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
import ShortCutCapturarFormulariosScreen from "./screens/ShortCutCapturarFormulariosScreen";
import FormulariosListScreen from "./screens/FormulariosListScreen";
import AgendaDetallesEncuestasScreen from "./screens/AgendaDetallesEncuestasScreen";
import FormInputMixedScreen from "./screens/FormInputMixedScreen";
import FormInputAdvancedScreen from "./screens/FormInputAdvancedScreen";
import FormSelectionComplexScreen from "./screens/FormSelectionComplexScreen";
import "./styles/Layout.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navigation />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<ComponentsShowcase />} />
            <Route path="/showcase" element={<ShowcaseScreen />} />
            <Route path="/puntos-venta" element={<PuntosVentaScreen />} />
            <Route path="/reporte-agotados" element={<ReporteAgotadosScreen />} />
            <Route path="/surtido-punto-venta" element={<SurtidoPuntoVentaScreen />} />
            <Route path="/tipo-finish" element={<TipoFinishScreen />} />
            <Route path="/formularios-disponibles" element={<FormularioDisponiblesScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/formulario-visitas" element={<FormularioVisitasScreen />} />
            <Route path="/login-form" element={<LoginFormScreen />} />
            <Route path="/flujo-visualizacion" element={<FlujoVisualizacionScreen />} />
            <Route path="/shortcut-capturar-formularios" element={<ShortCutCapturarFormulariosScreen />} />
            <Route path="/formularios-list" element={<FormulariosListScreen />} />
            <Route path="/agenda-detalles-encuestas" element={<AgendaDetallesEncuestasScreen />} />
            <Route path="/form-input-mixed" element={<FormInputMixedScreen />} />
            <Route path="/form-input-advanced" element={<FormInputAdvancedScreen />} />
            <Route path="/form-selection-complex" element={<FormSelectionComplexScreen />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;