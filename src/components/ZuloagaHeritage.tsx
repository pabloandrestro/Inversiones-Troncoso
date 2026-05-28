import React, { useState } from "react";
import {
  Palette,
  BookOpen,
  History,
  Layers,
  Sparkles,
  Calendar,
  Globe,
  Award,
  ChevronRight,
  Maximize2,
} from "lucide-react";
import IdentityLogo from "./IdentityLogo";

interface Artwork {
  id: string;
  title: string;
  originalTitle: string;
  year: string;
  medium: string;
  dimensions: string;
  location: string;
  description: string;
  significance: string;
  imageUrl: string;
  tags: string[];
}

export default function ZuloagaHeritage() {
  const [activeSection, setActiveSection] = useState<"biography" | "style" | "notable-works">("biography");
  const [selectedArtwork, setSelectedArtwork] = useState<string>("cousins");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  // List of 4 notable works of Ignacio Zuloaga
  const artworks: Artwork[] = [
    {
      id: "cousins",
      title: "My Cousins of Eibar",
      originalTitle: "Mis primas de Éibar",
      year: "1906",
      medium: "Oil on Canvas",
      dimensions: "201 x 203 cm",
      location: "Museo Reina Sofía, Madrid / Musée d'Orsay, Paris",
      description: "An iconic masterpiece featuring Zuloaga's relatives stands in bold relief against the dark panoramic landscape of his industrial birthplace, Eibar. It pairs elegant contemporary Parisian-influenced shawls and dresses with the rugged, moody hills and smoking chimneys of Basque heritage.",
      significance: "Crucial representation of the dichotomy in Zuloaga's identity: the tension between cosmopolitan modernity and raw Basque regional authenticity.",
      imageUrl: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&q=80&w=800", // Beautiful classical painterly portrait aesthetic placeholder
      tags: ["Modernismo Vasco", "Dualidad Industrial", "Retrato Familiar"]
    },
    {
      id: "daniel",
      title: "Daniel Zuloaga and His Daughters",
      originalTitle: "Daniel Zuloaga y sus hijas",
      year: "1906",
      medium: "Oil on Canvas",
      dimensions: "185 x 221 cm",
      location: "Museo de Bellas Artes de Bilbao",
      description: "A monumental portrait depicting the painter's uncle Daniel Zuloaga—the celebrated master of Spanish ceramics—together with his three daughters, dressed in deep green and dark lace mantillas. The figures are rendered with sharp, severe outlines set against a brooding Segovian backdrop.",
      significance: "Demonstrates Zuloaga's unique ability to weave familial pride, artisan legacy, and Castilian historic gloom into a masterly work of deep psychological realism.",
      imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800", // Moody fineart close-tip portrait placeholder
      tags: ["Segovia Tradicional", "Linaje de Artesanos", "Realismo Psicológico"]
    },
    {
      id: "victims",
      title: "The Victims of the Fiesta",
      originalTitle: "Las víctimas de la fiesta",
      year: "1910",
      medium: "Oil on Canvas",
      dimensions: "150 x 185 cm",
      location: "Hispanic Society of America, New York",
      description: "A somber and deeply critical representation of the bullfight tradition. It portrays an old, exhausted picador on a bloody, weary white horse leaning wearily over a desolate Spanish plain, carrying the heavy psychological weight of violence.",
      significance: "The definitive masterpiece of the 'España Negra' (Black Spain) series, presenting a stark counter-narrative to Joaquín Sorolla's bright, joyful 'White Spain' impressions.",
      imageUrl: "https://images.unsplash.com/photo-1447069387593-a5de0862481e?auto=format&fit=crop&q=80&w=800", // Moody landscape plain horseman look placeholder
      tags: ["España Negra", "Crítica Social", "Melancolía Castellana"]
    },
    {
      id: "cardinal",
      title: "The Cardinal",
      originalTitle: "El cardenal",
      year: "1912",
      medium: "Oil on Canvas",
      dimensions: "190 x 140 cm",
      location: "Musée d'Art Moderne, Paris",
      description: "A vertical, theatrical composition featuring a Segovian high prelate in bright, imposing red robes standing against the severe, rocky hills and stark medieval architecture of Segovia. The stormy charcoal sky is heavily reminiscent of El Greco's tense, spiritual skies.",
      significance: "Shows Zuloaga's obsession with religious iconography, Spain's spiritual ascetic traditions, and direct composition cues taken from Goya and Velázquez.",
      imageUrl: "https://images.unsplash.com/photo-1580136579312-94651dfd596d?auto=format&fit=crop&q=80&w=800", // Dramatic architecture detail/statuesque moody placeholder
      tags: ["Contrarreforma", "Esplendor Austero", "Tensión Espiritual"]
    }
  ];

  const currentArt = artworks.find((a) => a.id === selectedArtwork) || artworks[0];

  return (
    <section id="zuloaga-heritage" className="py-24 bg-slate-950 border-t border-sep relative overflow-hidden">
      {/* Decorative Gold Elements */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-5 right-10 w-64 h-64 bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block with Corporate Palette branding */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-8 bg-amber-500/30" />
            <span className="text-xs font-mono text-amber-500 tracking-[0.35em] uppercase flex items-center gap-2">
              <Palette className="w-4 h-4" /> Legado de Arte • Colección Inversiones Troncoso SpA
            </span>
            <span className="h-[1px] w-8 bg-amber-500/30" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-display font-light text-slate-100 tracking-tight">
            Ignacio Zuloaga <span className="serif-display text-amber-500 font-normal">y la España Negra</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-400 font-sans mt-4 leading-relaxed">
            Exploramos la trayectoria del extraordinario pintor de Éibar, contemporáneo y cómplice artístico de los hermanos Valentín y Ramón de Zubiaurre, cuya visión conectó la materia artesanal vasca con el realismo dramático de Castilla.
          </p>
        </div>

        {/* Master layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Deep Curator Information (6 Cols) */}
          <div className="lg:col-span-6 bg-slate-900/60 rounded-2xl border border-sep p-8 glass-panel relative flex flex-col gap-8">
            
            {/* Embedded Logo Section for Corporate Harmony */}
            <div className="absolute right-6 top-6 opacity-10 pointer-events-none select-none">
              <IdentityLogo className="h-16" showSubtitle={false} />
            </div>

            {/* Interactive Tabs selector */}
            <div className="flex border-b border-sep pb-1 items-center gap-1">
              <button
                onClick={() => setActiveSection("biography")}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeSection === "biography"
                    ? "border-b-2 border-amber-500 text-amber-500 font-bold"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <History className="w-3.5 h-3.5" /> Biografía Clave
              </button>
              <button
                onClick={() => setActiveSection("style")}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeSection === "style"
                    ? "border-b-2 border-amber-500 text-amber-500 font-bold"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <Layers className="w-3.5 h-3.5" /> Estilo & Épocas
              </button>
              <button
                onClick={() => setActiveSection("notable-works")}
                className={`flex items-center gap-2 px-4 py-3 text-xs font-mono uppercase tracking-wider transition-all cursor-pointer ${
                  activeSection === "notable-works"
                    ? "border-b-2 border-amber-500 text-amber-500 font-bold"
                    : "text-slate-500 hover:text-slate-300"
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" /> Obras Maestras
              </button>
            </div>

            {/* Section content display */}
            <div className="min-h-[300px] flex flex-col justify-between">
              
              {activeSection === "biography" && (
                <div className="space-y-6 fade-in-up">
                  <div>
                    <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest block mb-1">Cuna de Artesanos | Éibar (1870–1945)</span>
                    <h3 className="text-xl font-display font-light text-slate-100 italic">Un Linaje Grabado en el Metal</h3>
                    <p className="text-xs text-slate-400 mt-3 font-sans leading-relaxed">
                      Nacido en el municipio armero de <strong>Éibar, Gipuzkoa</strong>, Ignacio creció inmerso en un fervoroso ambiente de rigurosa artesanía. Hijo de Daniel Zuloaga —el genio de la cerámica española— y sobrino de Plácido Zuloaga —el célebre maestro de la damasquinado metalúrgico—. Esta precisión familiar en el dibujo y la disciplina de la línea dejaría un sello indeleble en su firmeza pictórica.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-sep">
                    <div>
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">El Círculo de París (1889)</span>
                      <p className="text-xs text-slate-300 mt-1">Frecuentó Montmartre junto a Toulouse-Lautrec, Gauguin y Degas, desarrollando una refinación que pronto recondujo hacia su verdadero anhelo: el alma mística española.</p>
                    </div>
                    <div>
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block">El Retorno a la Tierra</span>
                      <p className="text-xs text-slate-300 mt-1">Rechazó el impresionismo lumínico de Sorolla. Se retiró a Segovia y Andalucía para pintar a los buscadores de fe, gitanos y paisajes austeros de la meseta castellana.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "style" && (
                <div className="space-y-6 fade-in-up">
                  <div>
                    <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest block mb-1">Sinfonía de Claroscuros y Realismo Monumental</span>
                    <h3 className="text-xl font-display font-light text-slate-100 italic">Definición de Clásicos en la España Negra</h3>
                    <p className="text-xs text-slate-400 mt-3 font-sans leading-relaxed">
                      El estilo de Ignacio Zuloaga destaca por un <strong>claroscuro denso, dramático e imponente</strong> que bebe directamente de Velázquez, El Greco y Goya. Sus contornos son duros, casi escultóricos, herencia directa de la tradición damasquinadora de su familia.
                    </p>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-sep">
                    <div className="flex gap-4 items-start">
                      <div className="bg-amber-500/10 text-amber-500 p-1 rounded font-mono text-xs">A</div>
                      <div>
                        <strong className="text-xs text-slate-200 block">La España Negra vs. España Blanca</strong>
                        <p className="text-[11px] text-slate-400">Mientras Sorolla capturaba la luz alegre de las playas mediterráneas, Zuloaga indagaba en la gravedad psicológica, moral, barroca y profundamente ascética del paisaje peninsular.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="bg-amber-500/10 text-amber-500 p-1 rounded font-mono text-xs">B</div>
                      <div>
                        <strong className="text-xs text-slate-200 block">Período de Consagración (1898–1915)</strong>
                        <p className="text-[11px] text-slate-400">Instalado en Segovia de forma intermitente, es aquí donde pintó sus mejores telas, logrando un éxito crítico abrumador en París, Bruselas y Nueva York.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeSection === "notable-works" && (
                <div className="space-y-4 fade-in-up">
                  <div>
                    <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest block mb-1">Catálogo Histórico Conexo</span>
                    <h3 className="text-xl font-display font-light text-slate-100 italic">Ocurrencia y Detalle de Obras</h3>
                  </div>

                  <div className="space-y-2 mt-2">
                    {artworks.map((piece) => (
                      <button
                        key={piece.id}
                        onClick={() => setSelectedArtwork(piece.id)}
                        className={`w-full text-left p-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                          selectedArtwork === piece.id
                            ? "border-amber-500/60 bg-amber-500/5 text-amber-500 font-medium"
                            : "border-slate-800 hover:border-slate-700 bg-slate-950/40 text-slate-400 hover:text-slate-200"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-mono opacity-55">{piece.year}</span>
                          <span className="text-xs uppercase tracking-wide">{piece.title}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform ${selectedArtwork === piece.id ? "rotate-90 text-amber-500" : "text-slate-600"}`} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Decorative Curatorial Bottom Note */}
              <div className="pt-6 border-t border-sep mt-4 text-[10px] font-mono text-slate-500 flex justify-between items-center">
                <span>COMISARIADO POR INVERSIONES TRONCOSO • 2026</span>
                <span className="flex items-center gap-1"><Globe className="w-3 h-3 text-amber-500/80" /> ARCHIVO HISTÓRICO Y PATRIMONIAL</span>
              </div>
              
            </div>
            
          </div>

          {/* RIGHT COLUMN: Interactive Work Viewer with High-Contrast Canvas (6 Cols) */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            
            {/* Main Picture Canvas Frame */}
            <div className="bg-slate-900 border border-sep rounded-2xl p-6 relative flex flex-col gap-6 group hover:border-amber-500/20 transition-all duration-500 shadow-2xl overflow-hidden">
              
              {/* Image Aspect Box */}
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-slate-800 bg-slate-950">
                <img
                  src={currentArt.imageUrl}
                  alt={currentArt.title}
                  className="w-full h-full object-cover grayscale brightness-90 saturate-50 hover:grayscale-0 hover:brightness-100 hover:scale-103 transition-all duration-700 select-none cursor-zoom-in"
                  referrerPolicy="no-referrer"
                  onClick={() => setIsFullscreen(true)}
                />
                
                {/* Floating Tags Overlay */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-1.5 pointer-events-none">
                  {currentArt.tags.map((tag, i) => (
                    <span key={i} className="text-[8px] font-mono bg-slate-950/90 text-amber-400 border border-amber-500/20 px-2 py-0.5 rounded uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Picture Details Overlay */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-4 flex justify-between items-end">
                  <div className="leading-none">
                    <span className="text-[9px] font-mono text-amber-500 uppercase tracking-widest">OBRA MAESTRA</span>
                    <h4 className="text-sm font-display italic text-slate-100 mt-1">{currentArt.title}</h4>
                  </div>
                  <button 
                    onClick={() => setIsFullscreen(true)}
                    className="p-2 bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 text-slate-300 rounded cursor-pointer leading-none transition-colors"
                    title="Ampliar obra"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Informative description tags */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-wrap justify-between text-[10px] font-mono text-slate-500 border-b border-separate pb-3 gap-2">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-amber-500" />
                    <span>AÑO: <strong className="text-slate-300">{currentArt.year}</strong></span>
                  </div>
                  <div>
                    <span>TÉCNICA: <strong className="text-slate-300">{currentArt.medium}</strong></span>
                  </div>
                  <div>
                    <span>REPOSITORIO: <strong className="text-slate-300">{currentArt.location}</strong></span>
                  </div>
                </div>

                {/* Substantive Art Historical Analysis */}
                <span className="text-[10px] font-mono text-amber-400/80 tracking-widest uppercase mt-1">Análisis e Interpretación</span>
                <p className="text-xs text-slate-400 font-sans leading-relaxed">
                  {currentArt.description}
                </p>

                <div className="p-4 bg-slate-950/60 rounded-xl border border-divider-subtle mt-1 border-dashed">
                  <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-1">Significado & Trascendencia</span>
                  <p className="text-xs italic text-amber-500/90 leading-relaxed font-sans">
                    “{currentArt.significance}”
                  </p>
                </div>
              </div>

            </div>

            {/* Quick-select cards slider below */}
            <div className="grid grid-cols-4 gap-3">
              {artworks.map((piece) => (
                <button
                  key={piece.id}
                  onClick={() => setSelectedArtwork(piece.id)}
                  className={`relative rounded-lg overflow-hidden aspect-video border transition-all cursor-pointer group ${
                    selectedArtwork === piece.id 
                      ? "border-amber-500 ring-1 ring-amber-500/30" 
                      : "border-slate-800 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={piece.imageUrl}
                    alt={piece.title}
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-slate-950/80 py-1 px-2 text-center">
                    <p className="text-[8px] font-mono uppercase tracking-widest text-slate-300 truncate">{piece.title}</p>
                  </div>
                </button>
              ))}
            </div>

          </div>

        </div>

        {/* Corporate Sponsoring connection banner below */}
        <div className="mt-16 bg-slate-900 border border-sep p-6 rounded-2xl flex flex-col md:flex-row justify-between items-center gap-6 glass-panel">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-slate-950 border border-sep flex items-center justify-center relative shadow-inner">
              <span className="text-base font-mono font-bold text-amber-500">T</span>
            </div>
            <div>
              <span className="text-[9px] font-mono text-amber-500 uppercase tracking-widest block">CONEXIÓN ARTÍSTICA E HISTÓRICA</span>
              <h4 className="text-sm font-display font-light text-slate-200 mt-1">
                ¿Por qué inspirarnos en el Legado Zubiaurre?
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xl font-sans leading-relaxed">
                Inversiones Troncoso se inspira en la pulcritud geométrica y el rigor estético de Valentín y Ramón de Zubiaurre, destacados pintores del modernismo vasco. Al igual que sus trazos inmortales consolidados por Ignacio Zuloaga, nuestra vocación es construir viviendas y sistemas duraderos con máxima precisión técnica y valor perdurable en Chile.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="#領導"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("leadership")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-slate-950 hover:bg-slate-850 text-slate-300 border border-sep font-bold px-4 py-2.5 rounded-lg text-[10px] font-mono transition-all uppercase tracking-widest cursor-pointer leading-none"
            >
              Liderazgo de Empresa
            </a>
          </div>
        </div>

      </div>

      {/* Fullscreen Art gallery Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-slate-950/95 flex flex-col justify-between items-center p-6 transition-all fade-in duration-300">
          
          <div className="w-full flex justify-between items-center max-w-6xl">
            <div className="leading-none">
              <span className="text-[10px] font-mono text-amber-500 uppercase tracking-widest">COLECCIÓN HISTÓRICA DE ARTE</span>
              <h3 className="text-xl font-display font-light text-slate-100 italic mt-1">{currentArt.title} ({currentArt.originalTitle})</h3>
            </div>
            <button
              onClick={() => setIsFullscreen(false)}
              className="px-4 py-2 bg-slate-900 hover:bg-slate-850 border border-sep text-amber-505 text-xs font-mono tracking-widest uppercase cursor-pointer text-amber-500 rounded-lg"
            >
              Cerrar [ESC]
            </button>
          </div>

          <div className="max-w-4xl max-h-[70vh] flex items-center justify-center my-6">
            <img
              src={currentArt.imageUrl}
              alt={currentArt.title}
              className="max-w-full max-h-[70vh] object-contain rounded border border-sep shadow-2xl brightness-95"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="w-full max-w-4xl text-center pb-6">
            <p className="text-xs text-slate-400 italic max-w-3xl mx-auto leading-relaxed">
              &ldquo;{currentArt.description}&rdquo; — {currentArt.medium}, {currentArt.dimensions}. {currentArt.location}. 
            </p>
          </div>

        </div>
      )}

    </section>
  );
}
