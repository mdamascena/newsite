import { useState } from "react";
import AcompanhamentoLayout from "../AcompanhamentoLayout";
import Ajuda from "./Ajuda";
import Historico from "./Historico";
import Home from "./Home";
import Ofertas from "./Ofertas";
import Perfil from "./Perfil";

const views = {
  home: Home,
  historico: Historico,
  ofertas: Ofertas,
  perfil: Perfil,
  ajuda: Ajuda,
};

export default function Cliente() {
  const [activeView, setActiveView] = useState("home");
  const [targetOfertaId, setTargetOfertaId] = useState(null);
  const ActiveComponent = views[activeView] || Home;

  const handleViewChange = (view, options = {}) => {
    setActiveView(view);
    setTargetOfertaId(view === "ofertas" ? options.ofertaId || null : null);
  };

  return (
    <AcompanhamentoLayout activeView={activeView} onViewChange={handleViewChange}>
      <ActiveComponent onNavigate={handleViewChange} targetOfertaId={targetOfertaId} />
    </AcompanhamentoLayout>
  );
}
