import React, { useState } from "react";
import { DollarSign, ShieldAlert, Sparkles, TrendingUp, Users, Leaf, ArrowRight } from "lucide-react";

export default function ImpactCalculator() {
  const [investment, setInvestment] = useState<number>(250000000); // 250M CLP default

  // Calculators logic based on typical housing co-funding parameters under SERVIU DS19/DS49 in Chile
  const costPerResidence = 32000000; // Average co-funding share per unit in CLP
  const familyFactor = 3.8;
  const co2FactorPerUnit = 2.4; // tons saved per year using energy efficiency EIFS + sun heater

  const unitsFunded = Math.round(investment / costPerResidence * 10) / 10;
  const familiesSupported = Math.round(unitsFunded * familyFactor);
  const tonsCo2Saved = Math.round(unitsFunded * co2FactorPerUnit * 10) / 10;
  const digitalTwinCoverage = Math.round(unitsFunded * 1.2 * 10) / 10;

  // ROI estimation ranges depending on capital bracket
  const getProjectedIrr = (val: number) => {
    if (val < 100000000) return "8.5% - 9.8%";
    if (val < 500000000) return "9.8% - 11.4%";
    return "11.4% - 12.6%";
  };

  const formatCLP = (val: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatUSD = (val: number) => {
    // approx 1 USD = 900 CLP
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(val / 900);
  };

  const presetTiers = [
    { label: "Mínimo Semilla", amount: 50000000 },
    { label: "Medio Preferente", amount: 250000000 },
    { label: "Socio Principal", amount: 600000000 },
    { label: "Estructura Global", amount: 1000000000 },
  ];

  return (
    <section id="calculator" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-amber-500 tracking-[0.3em] uppercase block mb-3">
            Inversión Responsable & Tecnológica
          </span>
          <h2 className="text-4xl font-display font-light text-slate-100 tracking-tight">
            Calculadora de <span className="serif-display text-amber-500">Impacto & Retorno</span>
          </h2>
          <p className="text-xs text-slate-400 font-mono mt-2 tracking-wide uppercase">
            ESTIMA TU PARTICIPACIÓN CAPITALISTA EN EL ECO-DESARROLLO URBANO CHILENO
          </p>
          <div className="w-12 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Slider input column */}
          <div className="lg:col-span-6 bg-slate-950 p-8 rounded-2xl border border-slate-800 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-display font-semibold text-slate-200 uppercase tracking-widest mb-6">
                Define tu Monto de Participación
              </h3>

              {/* Presets buttons */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {presetTiers.map((tier, idx) => (
                  <button
                    key={idx}
                    onClick={() => setInvestment(tier.amount)}
                    className={`p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      investment === tier.amount
                        ? "bg-amber-500/10 border-amber-500 text-amber-400"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700 hover:bg-slate-900"
                    }`}
                  >
                    <span className="text-[10px] uppercase font-mono block text-slate-500">{tier.label}</span>
                    <span className="text-xs font-bold font-mono block mt-1">{formatCLP(tier.amount)}</span>
                  </button>
                ))}
              </div>

              {/* Slider Input */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xs font-mono text-slate-500 uppercase">Ajuste Manual</span>
                  <span className="text-xs text-slate-400 font-mono">Min: $50M CLP / Max: $1.200M CLP</span>
                </div>
                <input
                  type="range"
                  min="50000000"
                  max="1200000000"
                  step="10000000"
                  value={investment}
                  onChange={(e) => setInvestment(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                
                {/* Detailed Values Display */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4 p-4 bg-slate-900 rounded-xl border border-slate-800">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Monto Inversión</span>
                    <span className="text-2xl font-mono font-bold text-amber-500 block mt-1">
                      {formatCLP(investment)}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block text-right">Equivalencia aproximada</span>
                    <span className="text-sm text-slate-400 block tracking-wider font-mono text-right">
                      {formatUSD(investment)} USD
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 flex gap-3 text-[11px] text-slate-400 leading-relaxed font-sans mt-6">
              <ShieldAlert className="w-5 h-5 text-amber-500 flex-shrink-0" />
              <div>
                <strong>Nota Regulatoria:</strong> Las estimaciones se realizan en base a costos estándar de cofinanciamiento SERVIU y rentabilidad anual de carteras habitacionales con coberturas preferentes. Retornos varían según los plazos contractuales del fideicomiso.
              </div>
            </div>
          </div>

          {/* Impact Results column */}
          <div className="lg:col-span-6 bg-slate-950 p-8 rounded-2xl border border-slate-800 flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Back Glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl" />

            <div>
              <h3 className="text-sm font-display font-semibold text-slate-200 uppercase tracking-widest mb-8 border-b border-slate-800 pb-3 flex items-center justify-between">
                <span>Indicadores de Impacto Estimados</span>
                <span className="text-[10px] bg-amber-500/10 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded uppercase font-mono">
                  Sello Sostenible
                </span>
              </h3>

              <div className="grid grid-cols-2 gap-6">
                {/* Stat 1: Funded residences */}
                <div className="flex gap-4 items-start">
                  <div className="bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20 text-amber-500">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Viviendas Cofinanciadas</span>
                    <span className="text-2xl font-mono font-bold text-slate-100 mt-1 block">
                      {unitsFunded} u.
                    </span>
                    <p className="text-[9px] text-slate-400 mt-0.5 leading-normal">
                      Aporte directo a la urbanización e integraciones.
                    </p>
                  </div>
                </div>

                {/* Stat 2: Families protected */}
                <div className="flex gap-4 items-start">
                  <div className="bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20 text-amber-500">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Familias Beneficiadas</span>
                    <span className="text-2xl font-mono font-bold text-slate-100 mt-1 block">
                      ~ {familiesSupported}
                    </span>
                    <p className="text-[9px] text-slate-400 mt-0.5 leading-normal">
                      Personas integradas en complejos de alta habitabilidad.
                    </p>
                  </div>
                </div>

                {/* Stat 3: CO2 Saved */}
                <div className="flex gap-4 items-start">
                  <div className="bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20 text-amber-500">
                    <Leaf className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Reducción CO2 / Año</span>
                    <span className="text-2xl font-mono font-bold text-slate-100 mt-1 block">
                      {tonsCo2Saved} Toneladas
                    </span>
                    <p className="text-[9px] text-slate-400 mt-0.5 leading-normal">
                      Eficiencia mediante envolvente térmica y colectores solares.
                    </p>
                  </div>
                </div>

                {/* Stat 4: Digital twin generated */}
                <div className="flex gap-4 items-start">
                  <div className="bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/20 text-amber-500">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 uppercase block">Áreas en Virtualización</span>
                    <span className="text-2xl font-mono font-bold text-slate-100 mt-1 block">
                      {digitalTwinCoverage} km²
                    </span>
                    <p className="text-[9px] text-slate-400 mt-0.5 leading-normal">
                      Gemelos digitales cargados en tecnología inmersiva.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Financial indicators block */}
            <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 -mx-8 -mb-8 p-6">
              <div>
                <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest block font-bold">
                  TIR Proyectada (Retorno Anual de Inversión)
                </span>
                <span className="text-3xl font-mono font-bold text-slate-100 mt-1.5 block">
                  {getProjectedIrr(investment)}
                </span>
              </div>
              <a
                href="#contact"
                className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-5 py-2.5 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-2 uppercase tracking-wider"
              >
                <span>Solicitar Dossier</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
