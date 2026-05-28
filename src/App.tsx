import React, { useState } from "react";
import {
  Building2,
  Award,
  Zap,
  Shield,
  Key,
  ArrowRight,
  ChevronDown,
  TrendingUp,
  Cpu,
  BookmarkCheck,
  Building,
} from "lucide-react";
import IdentityLogo from "./components/IdentityLogo";
import AboutLeader from "./components/AboutLeader";
import ProjectShowcase from "./components/ProjectShowcase";
import ZuloagaHeritage from "./components/ZuloagaHeritage";
import ImpactCalculator from "./components/ImpactCalculator";
import LeadsManager from "./components/LeadsManager";
import AssistantChat from "./components/AssistantChat";

export default function App() {
  const [activeTab, setActiveTab] = useState<"holding" | "inmobiliaria" | "tecnologia">("holding");

  return (
    <div className="min-h-screen bg-slate-950 text-slate-150 selection:bg-amber-500 selection:text-slate-950 scroll-smooth flex flex-col justify-between relative">
      {/* Elegantly styled margin annotations matching Basque modernist gallery styling */}
      <div className="absolute left-6 top-1/3 -translate-y-1/2 rotate-180 [writing-mode:vertical-lr] text-[9px] font-mono uppercase tracking-[0.25em] text-slate-500 opacity-25 hidden xl:block pointer-events-none select-none">
        Inversiones Troncoso SpA • Est. 2004 — Chile
      </div>
      <div className="absolute right-6 top-1/2 -translate-y-1/2 [writing-mode:vertical-lr] text-[9px] font-mono uppercase tracking-[0.25em] text-slate-500 opacity-25 hidden xl:block pointer-events-none select-none">
        Inversión Sostenible • Realidad Virtual e Inteligencia Artificial
      </div>

      {/* Dynamic Header Navbar */}
      <nav className="sticky top-0 z-40 w-full glass-panel border-b border-sep leading-none">
        <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group cursor-pointer focus:outline-none select-none">
            {/* Embedded Mini-Brand Vector representing the double T logo */}
            <div className="w-8 h-8 rounded-lg bg-slate-900 border border-sep flex items-center justify-center relative shadow-inner shadow-amber-500/5 group-hover:border-amber-500/50 transition-all duration-300">
              <span className="text-[14px] font-mono font-bold tracking-tighter text-amber-500">T</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/5 to-transparent rounded-lg" />
            </div>
            <div className="flex flex-col">
              <span className="text-[9px] uppercase tracking-[0.2em] text-slate-500 font-sans leading-none">Inversiones</span>
              <span className="text-base font-display italic font-semibold tracking-[0.05em] text-slate-100 leading-none mt-1">Troncoso</span>
            </div>
          </a>

          {/* Desktop Navigation Links (Inter, refined uppercase tracking) */}
          <div className="hidden md:flex items-center gap-8 text-[11px] font-mono tracking-widest text-slate-400 uppercase select-none">
            <a href="#ecosistema" className="hover:text-amber-500 transition-colors">Ecosistema</a>
            <a href="#projects" className="hover:text-amber-500 transition-colors">Desarrollos</a>
            <a href="#leadership" className="hover:text-amber-500 transition-colors">Dirección</a>
            <a href="#zuloaga-heritage" className="hover:text-amber-500 transition-colors">Arte Zuloaga</a>
            <a href="#calculator" className="hover:text-amber-500 transition-colors">Simulación</a>
            <a href="#contact" className="hover:text-amber-500 transition-colors">Inversión</a>
          </div>

          {/* Call to Action Navigation button */}
          <a
            href="#contact"
            className="bg-slate-900 hover:bg-slate-850 text-amber-500 border border-sep font-bold px-4 py-2 rounded-lg text-xs font-mono transition-all flex items-center gap-2 uppercase tracking-widest cursor-pointer leading-none"
          >
            <span>Contacto</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>

      {/* Main Structural Body Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative pt-24 pb-20 overflow-hidden bg-slate-950">
          {/* Accent Gold back-glow circles */}
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0c_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] opacity-40" />

          <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Column Left: High-end Copy block */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="flex items-center gap-2 self-start bg-slate-900 border border-sep px-3 py-1 rounded-full text-[9px] font-mono text-amber-500 tracking-wider uppercase font-semibold">
                <BookmarkCheck className="w-3.5 h-3.5" />
                <span>Inversión • Desarrollo • Futuro</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-light tracking-tight text-slate-100 leading-[1.12]">
                El futuro de la inversión urbana, potenciado por{" "}
                <span className="serif-display text-amber-500 font-normal">
                  tecnología de vanguardia
                </span>
                .
              </h1>

              <p className="text-sm sm:text-base text-slate-400 font-sans leading-relaxed max-w-2xl">
                <strong>Inversiones Troncoso SpA</strong> lidera el desarrollo habitacional sostenible de Chile (Subsidios DS49/DS19) integrándolo de forma holística con un ecosistema tecnológico inmersivo de clase mundial y soluciones financieras de alta fidelidad.
              </p>

              <div className="flex flex-wrap gap-4 mt-3">
                <a
                  href="#projects"
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold px-6 py-3 rounded-lg text-xs font-mono uppercase tracking-widest transition-all flex items-center gap-2 cursor-pointer"
                >
                  <span>Explorar Desarrollos</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#calculator"
                  className="bg-slate-900 hover:bg-slate-850 text-slate-200 border border-sep font-bold px-6 py-3 rounded-lg text-xs font-mono uppercase tracking-widest transition-all cursor-pointer"
                >
                  Simular Retorno
                </a>
              </div>
            </div>

            {/* Column Right: Elegant Logo and identity display */}
            <div className="lg:col-span-5 flex justify-center items-center py-8">
              <div className="bg-slate-900 p-10 rounded-2xl border border-slate-800 shadow-2xl relative w-full max-w-[400px] glass-panel flex flex-col items-center">
                {/* Embedded decorative circular borders */}
                <div className="absolute inset-0 border border-amber-500/5 rounded-2xl pointer-events-none scale-102" />
                <div className="absolute inset-0 border border-amber-500/5 rounded-2xl pointer-events-none scale-104 animate-pulse" />

                <IdentityLogo className="h-44" />
              </div>
            </div>
          </div>
        </section>

        {/* Ecosistema Segment Tabs */}
        <section id="ecosistema" className="py-20 bg-slate-950/40 border-t border-slate-900 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-mono text-amber-500 tracking-[0.3em] uppercase block mb-3">
                Nuestro Holding
              </span>
              <h2 className="text-3xl font-display font-light text-slate-100 tracking-tight">
                Ecosistema de Mayor Impacto
              </h2>
              <p className="text-xs text-slate-500 mt-2 tracking-wide uppercase font-mono">
                Sinergia corporativa de Inversión, Tecnología y Solución Social
              </p>
            </div>

            {/* Division selectors */}
            <div className="flex justify-center border-b border-sep max-w-lg mx-auto mb-10 select-none">
              <button
                onClick={() => setActiveTab("holding")}
                className={`flex-1 py-3 text-xs font-mono uppercase tracking-widest border-b-2 transition-all cursor-pointer ${
                  activeTab === "holding"
                    ? "border-amber-500 text-amber-500 font-bold"
                    : "border-transparent text-slate-500 hover:text-slate-300"
                }`}
              >
                Holding
              </button>
              <button
                onClick={() => setActiveTab("inmobiliaria")}
                className={`flex-1 py-3 text-xs font-mono uppercase tracking-widest border-b-2 transition-all cursor-pointer ${
                  activeTab === "inmobiliaria"
                    ? "border-amber-500 text-amber-500 font-bold"
                    : "border-transparent text-slate-500 hover:text-slate-300"
                }`}
              >
                Inmobiliario
              </button>
              <button
                onClick={() => setActiveTab("tecnologia")}
                className={`flex-1 py-3 text-xs font-mono uppercase tracking-widest border-b-2 transition-all cursor-pointer ${
                  activeTab === "tecnologia"
                    ? "border-amber-500 text-amber-500 font-bold"
                    : "border-transparent text-slate-500 hover:text-slate-300"
                }`}
              >
                Tecnología
              </button>
            </div>

            {/* Division Contents */}
            {activeTab === "holding" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 fade-in-up">
                <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
                  <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500 w-12 h-12 flex items-center justify-center mb-6">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-display font-semibold text-slate-200 uppercase tracking-widest mb-3">
                    Fideicomiso & Estabilidad
                  </h3>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    Efectuamos el resguardo y crecimiento de activos de manera blindada, vinculando el capital inversor con desarrollos habitacionales chilenos legalmente validados.
                  </p>
                </div>
                <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
                  <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500 w-12 h-12 flex items-center justify-center mb-6">
                    <Award className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-display font-semibold text-slate-200 uppercase tracking-widest mb-3">
                    Impacto Humano Sostenible
                  </h3>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    Diseñamos comunidades bajo marcos DS49 y DS19 fomentando la inclusión social, la eficiencia energética y la habitabilidad de excelencia para sectores preferentes.
                  </p>
                </div>
                <div className="bg-slate-900 p-8 rounded-xl border border-slate-800">
                  <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500 w-12 h-12 flex items-center justify-center mb-6">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-display font-semibold text-slate-200 uppercase tracking-widest mb-3">
                    Digitalización Profunda
                  </h3>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    Integramos gemelos de Realidad Virtual (por Virtualizar) y automatizaciones inteligentes para auditorías, reduciendo fugas y maximizando el progreso de construcción.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "inmobiliaria" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in-up items-center">
                <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 flex flex-col gap-5">
                  <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500 w-12 h-12 flex items-center justify-center">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-semibold text-slate-200 uppercase tracking-widest">
                      Inversiones Troncoso SpA
                    </h3>
                    <p className="text-xs text-amber-500 font-mono mt-1">Sello Inmobiliario y de Capitalización</p>
                  </div>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    Somos promotores de vivienda urbana de gran escala en Chile. Nuestra cartera abarca terrenos urbanos ideales para conjuntos habitacionales integrados, estructurados bajo el régimen SERVIU, logrando un binomio perfecto de máxima rentabilidad de portafolios de inversión y alto beneficio social.
                  </p>
                  <ul className="text-xs text-slate-300 font-mono space-y-2">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      16 Edificios Sostenibles en etapa coordinada
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      288 Soluciones Habitacionales con envolventes térmicas
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                      Fideicomisos con garantías preferentes corporativas
                    </li>
                  </ul>
                </div>
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800"
                    alt="Sustainable Architecture Minimalist Buildings"
                    className="rounded-xl border border-slate-800 shadow-2xl brightness-75 hover:brightness-100 transition-all duration-500 h-[380px] w-full object-cover grayscale saturate-50"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            )}

            {activeTab === "tecnologia" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 fade-in-up items-center">
                <div>
                  <img
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800"
                    alt="High Tech Digital Twin Virtual Reality Systems"
                    className="rounded-xl border border-slate-800 shadow-2xl brightness-75 hover:brightness-100 transition-all duration-500 h-[380px] w-full object-cover grayscale contrast-125"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 flex flex-col gap-5">
                  <div className="bg-amber-500/10 p-3 rounded-lg text-amber-500 w-12 h-12 flex items-center justify-center">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-display font-semibold text-slate-200 uppercase tracking-widest">
                      Tecno-Ecosistema Virtualizar
                    </h3>
                    <p className="text-xs text-amber-500 font-mono mt-1">Pioneros en Inmersión y Automatización AI</p>
                  </div>
                  <p className="text-xs text-slate-400 font-sans leading-relaxed">
                    Nuestra infraestructura digital está impulsada por las marcas de tecnología del holding lideradas por Pablo Troncoso, permitiéndonos realizar la reingeniería total de la construcción e inversión habitual:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs leading-none">
                    <div className="p-3 bg-slate-950 rounded border border-slate-800">
                      <strong className="text-slate-200 font-display uppercase tracking-wider block text-[10px]">
                        VIRTUALIZAR® (RA/RV)
                      </strong>
                      <span className="text-[10px] text-slate-500 block mt-1 font-mono">+350 apps, 1.5M usuarios</span>
                    </div>
                    <div className="p-3 bg-slate-950 rounded border border-slate-800">
                      <strong className="text-slate-200 font-display uppercase tracking-wider block text-[10px]">
                        JHEDAI AI® Engine
                      </strong>
                      <span className="text-[10px] text-slate-500 block mt-1 font-mono">1º en optimización LLM</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Dynamic Project Unit Showcase (16 Buildings / 288 Rooms) */}
        <ProjectShowcase />

        {/* Corporate Profile - CV Pablo Troncoso */}
        <AboutLeader />

        {/* Art historical connection to Basque Modernism and Ignacio Zuloaga */}
        <ZuloagaHeritage />

        {/* Live ROI Dynamic Calculator */}
        <ImpactCalculator />

        {/* Live leads intake and log dashboard form */}
        <LeadsManager />
      </main>

      {/* Embedded Assistant AI Consulting Chat Drawer (Gemini Server powered) */}
      <AssistantChat />

      {/* Styled Corporate Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900 relative">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left select-none">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2">
              <span className="text-amber-500 font-mono font-bold text-sm tracking-widest">[T]</span>
              <span className="font-display font-semibold tracking-widest text-slate-100 text-sm">INVERSIONES TRONCOSO</span>
            </div>
            <span className="text-[10px] text-slate-500 font-mono mt-2 block uppercase">
              Inversión • Desarrollo • Futuro • © 2026 Inversiones Troncoso SpA
            </span>
          </div>
          <div className="text-[10px] font-mono text-slate-500 uppercase flex flex-wrap justify-center gap-6">
            <a href="#ecosistema" className="hover:text-amber-500">Holding</a>
            <a href="#projects" className="hover:text-amber-500">Inmobiliaria</a>
            <a href="#leadership" className="hover:text-amber-500">Liderazgo</a>
            <a href="#zuloaga-heritage" className="hover:text-amber-500">Arte Zuloaga</a>
            <a href="#calculator" className="hover:text-amber-500">Retornos</a>
          </div>
          <div className="text-[10px] text-slate-600 font-sans md:text-right">
            Representación Corporativa: Santiago de Chile. Todos los derechos de auditoría informática y modelos de IA bajo sello registrado de Jhedai AI & Virtualizar Labs. En el marco de la reglamentación MINVU/SERVIU.
          </div>
        </div>
      </footer>
    </div>
  );
}
