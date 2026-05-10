import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import ComponentsShowcase from "./components/ComponentsShowcase";
import "./styles/Layout.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-layout">
        <Navigation />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<ComponentsShowcase />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;