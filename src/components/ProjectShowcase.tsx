import React, { useState } from "react";
import { Building, Award, Wind, CheckCircle2, Eye, ShieldAlert, Sparkles, Home, Layers } from "lucide-react";

interface BuildingData {
  id: string;
  name: string;
  units: number;
  floors: number;
  progress: number;
  status: "Planificación" | "Cimentación" | "Estructuración" | "Terminaciones" | "Entregado";
  sustainability: string[];
  twinUrl: string;
}

export default function ProjectShowcase() {
  // Generate the 16 buildings making up the 288 homes (18 homes per building = 288 total apartments)
  const buildings: BuildingData[] = [
    { id: "A", name: "Edificio Alerce", units: 18, floors: 5, progress: 100, status: "Entregado", sustainability: ["Termopanel", "Energía Solar", "Aislación EIFS"], twinUrl: "Active" },
    { id: "B", name: "Edificio Coigüe", units: 18, floors: 5, progress: 100, status: "Entregado", sustainability: ["Reciclaje de Agua", "EIFS", "Termopanel"], twinUrl: "Active" },
    { id: "C", name: "Edificio Lenga", units: 18, floors: 5, progress: 95, status: "Terminaciones", sustainability: ["Termopanel", "Energía Solar"], twinUrl: "Active" },
    { id: "D", name: "Edificio Mañío", units: 18, floors: 5, progress: 90, status: "Terminaciones", sustainability: ["Energía Solar", "Aislación EIFS"], twinUrl: "Active" },
    { id: "E", name: "Edificio Ciprés", units: 18, floors: 5, progress: 85, status: "Terminaciones", sustainability: ["Termopanel", "Ventilación Pasiva"], twinUrl: "Active" },
    { id: "F", name: "Edificio Ñirre", units: 18, floors: 5, progress: 75, status: "Estructuración", sustainability: ["Aislación EIFS", "Ventilación Pasiva"], twinUrl: "Active" },
    { id: "G", name: "Edificio Arrayán", units: 18, floors: 5, progress: 70, status: "Estructuración", sustainability: ["Termopanel", "Reciclaje de Agua"], twinUrl: "Active" },
    { id: "H", name: "Edificio Quillay", units: 18, floors: 5, progress: 65, status: "Estructuración", sustainability: ["Energía Solar", "Ventilación Pasiva"], twinUrl: "Active" },
    { id: "I", name: "Edificio Boldo", units: 18, floors: 5, progress: 50, status: "Estructuración", sustainability: ["Termopanel", "EIFS"], twinUrl: "Preparing" },
    { id: "J", name: "Edificio Maitén", units: 18, floors: 5, progress: 45, status: "Cimentación", sustainability: ["Aislación EIFS", "Ventilación Pasiva"], twinUrl: "Preparing" },
    { id: "K", name: "Edificio Peumo", units: 18, floors: 5, progress: 40, status: "Cimentación", sustainability: ["Energía Solar", "Reciclaje de Agua"], twinUrl: "Preparing" },
    { id: "L", name: "Edificio Belloto", units: 18, floors: 5, progress: 30, status: "Cimentación", sustainability: ["Termopanel", "Ventilación Pasiva"], twinUrl: "Preparing" },
    { id: "M", name: "Edificio Lingue", units: 18, floors: 5, progress: 20, status: "Planificación", sustainability: ["EIFS", "Ventilación Pasiva"], twinUrl: "Preparing" },
    { id: "N", name: "Edificio Molle", units: 18, floors: 5, progress: 15, status: "Planificación", sustainability: ["Termopanel", "Energía Solar"], twinUrl: "Preparing" },
    { id: "O", name: "Edificio Arrayán Sur", units: 18, floors: 5, progress: 10, status: "Planificación", sustainability: ["Reciclaje de Agua", "Ventilación Pasiva"], twinUrl: "Preparing" },
    { id: "P", name: "Edificio Raulí", units: 18, floors: 5, progress: 5, status: "Planificación", sustainability: ["Energía Solar", "Termopanel"], twinUrl: "Preparing" },
  ];

  const [selectedBuilding, setSelectedBuilding] = useState<BuildingData>(buildings[0]);
  const [vrInteractiveFloor, setVrInteractiveFloor] = useState<number>(3);
  const [loadingTwin, setLoadingTwin] = useState<boolean>(false);

  // Stats
  const totalCompletedRooms = 288;
  const currentAvgProgress = Math.round(buildings.reduce((acc, b) => acc + b.progress, 0) / 16);

  const triggerVRLoad = (b: BuildingData) => {
    setSelectedBuilding(b);
    setLoadingTwin(true);
    setTimeout(() => {
      setLoadingTwin(false);
    }, 700);
  };

  return (
    <section id="projects" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-mono text-amber-500 tracking-[0.3em] uppercase block mb-3">
              Desarrollo Inmobiliario Sostenible
            </span>
            <h2 className="text-4xl font-display font-light text-slate-100 tracking-tight">
              Condominio <span className="serif-display text-amber-500">Zubiaurre SpA</span>
            </h2>
            <p className="text-xs text-slate-400 font-mono mt-2 tracking-wide uppercase">
              PROYECTO HABITACIONAL DS49 • 16 EDIFICIOS • 288 DEPARTAMENTOS
            </p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-6">
            <div className="text-center md:text-right border-l md:border-l-0 md:border-r border-slate-800 px-4 md:px-6">
              <span className="text-xs font-mono text-slate-500 uppercase block">Avance Promedio</span>
              <span className="text-2xl font-mono font-bold text-amber-500 mt-1 block">{currentAvgProgress}%</span>
            </div>
            <div className="text-center md:text-right">
              <span className="text-xs font-mono text-slate-500 uppercase block">Total Soluciones</span>
              <span className="text-2xl font-mono font-bold text-slate-200 mt-1 block">{totalCompletedRooms} Viv.</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Grid of the 16 buildings */}
          <div className="lg:col-span-7 bg-slate-900/50 p-6 rounded-2xl border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-display font-semibold text-slate-200 uppercase tracking-widest">
                Mapa General de Edificaciones
              </h3>
              <span className="text-[10px] font-mono text-slate-500">Haz clic para inspeccionar un edificio</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {buildings.map((b) => {
                const isSelected = selectedBuilding.id === b.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => triggerVRLoad(b)}
                    className={`p-4 rounded-xl border transition-all text-left relative flex flex-col justify-between h-32 select-none cursor-pointer ${
                      isSelected
                        ? "bg-gradient-to-br from-slate-900 to-amber-950/20 border-amber-500 ring-1 ring-amber-500 shadow-md shadow-amber-500/5"
                        : "bg-slate-950 border-slate-800 hover:border-slate-700 hover:bg-slate-900"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="w-6 h-6 rounded-full bg-slate-900 border border-slate-800 text-[10px] font-mono font-bold flex items-center justify-center text-slate-300">
                          {b.id}
                        </span>
                        <span
                          className={`text-[8px] font-mono px-1.5 py-0.5 rounded ${
                            b.status === "Entregado"
                              ? "bg-emerald-500/10 text-emerald-400"
                              : b.status === "Terminaciones"
                              ? "bg-amber-500/10 text-amber-400"
                              : "bg-blue-500/10 text-blue-400"
                          }`}
                        >
                          {b.status}
                        </span>
                      </div>
                      <h4 className="text-xs font-display font-semibold text-slate-200 mt-3 truncate">{b.name}</h4>
                    </div>

                    <div className="mt-3">
                      <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                        <span>{b.units} Viv.</span>
                        <span>{b.progress}%</span>
                      </div>
                      <div className="w-full bg-slate-800 h-1 rounded-full overflow-hidden">
                        <div
                          className="bg-amber-500 h-1 rounded-full transition-all duration-500"
                          style={{ width: `${b.progress}%` }}
                        />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Interactive Inspection panel & Digital Twin Mockup (Connected to Virtualizar identity) */}
          <div className="lg:col-span-5 bg-slate-900 p-6 rounded-2xl border border-slate-800 shadow-2xl">
            <h3 className="text-sm font-display font-semibold text-slate-200 uppercase tracking-widest mb-6 border-b border-slate-800 pb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              Gemelo Digital (Virtualizar®)
            </h3>

            {loadingTwin ? (
              <div className="bg-slate-950 rounded-xl h-64 border border-slate-800 flex flex-col items-center justify-center gap-3">
                <div className="w-8 h-8 rounded-full border-2 border-t-amber-500 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest animate-pulse">
                  Conectando con Servidores Virtualizar...
                </span>
              </div>
            ) : (
              <div className="bg-slate-950 rounded-xl p-5 border border-slate-800 shadow-inner">
                {/* 3D Model Mockup Renderer */}
                <div className="relative bg-slate-900 rounded-lg h-56 border border-slate-800 flex flex-col justify-between overflow-hidden p-4">
                  {/* Grid layout mock overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

                  {/* Top status bar */}
                  <div className="flex items-center justify-between z-10">
                    <div className="flex items-center gap-2 bg-slate-950/80 px-2.5 py-1 rounded-full border border-slate-800">
                      <div className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-[8px] font-mono text-slate-300 uppercase tracking-wider">
                        Virtualizar RV {selectedBuilding.id}-Twin Online
                      </span>
                    </div>
                    <span className="text-[8px] font-mono text-slate-500">Muestreo Georreferenciado</span>
                  </div>

                  {/* Mock building construction visualizer in SVG */}
                  <div className="flex justify-center items-end h-32 relative z-10 my-2">
                    <div className="flex flex-col gap-0.5 items-center w-28">
                      {[5, 4, 3, 2, 1].map((floor) => {
                        const isFloorSelected = vrInteractiveFloor === floor;
                        return (
                          <button
                            key={floor}
                            onClick={() => setVrInteractiveFloor(floor)}
                            className={`w-full py-1 text-[9px] font-mono text-center rounded transition-all cursor-pointer ${
                              isFloorSelected
                                ? "bg-amber-500 text-slate-950 font-bold border border-amber-400 scale-105"
                                : "bg-slate-950/60 text-slate-500 hover:text-slate-300 hover:bg-slate-950 border border-slate-800/40"
                            }`}
                          >
                            PISO {floor} {isFloorSelected && "✔"}
                          </button>
                        );
                      })}
                    </div>

                    <div className="absolute bottom-1 right-2 bg-slate-950/90 py-1.5 px-2.5 rounded border border-slate-800 text-[8px] font-mono flex flex-col">
                      <span className="text-slate-500">Piso Seleccionado:</span>
                      <span className="text-amber-500 font-bold">Unidades {vrInteractiveFloor}01-{vrInteractiveFloor}04</span>
                      <span className="text-slate-400 mt-0.5">Ventilación cruzada</span>
                    </div>
                  </div>

                  {/* Foot navigation helper */}
                  <div className="flex items-center justify-between text-[8px] font-mono text-slate-500 z-10 border-t border-slate-800/60 pt-2">
                    <span>Cámara: Orbit 360°</span>
                    <span>Resolución: 4K Fotorrealista</span>
                  </div>
                </div>

                {/* Building details */}
                <div className="mt-5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-display font-bold text-slate-200">{selectedBuilding.name}</h4>
                    <span className="text-xs font-mono text-slate-500">Hito Habitabilidad</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                      <span className="text-[9px] text-slate-500 font-mono block uppercase">Capacidad Estándar</span>
                      <span className="text-xs font-semibold text-slate-300 mt-1 block">
                        {selectedBuilding.units} Departamentos
                      </span>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded border border-slate-800">
                      <span className="text-[9px] text-slate-500 font-mono block uppercase">Altura Máxima</span>
                      <span className="text-xs font-semibold text-slate-300 mt-1 block">
                        {selectedBuilding.floors} Pisos (SERVIU)
                      </span>
                    </div>
                  </div>

                  {/* Sustainability Indicators */}
                  <div className="mt-4 pt-4 border-t border-slate-800/60">
                    <span className="text-[10px] font-mono text-slate-500 uppercase block mb-2">
                      Sustentabilidad y Atributos:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {selectedBuilding.sustainability.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] bg-slate-900 text-amber-500 border border-slate-800 rounded px-2 py-0.5 flex items-center gap-1"
                        >
                          <span className="w-1 h-1 rounded-full bg-amber-500" />
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
