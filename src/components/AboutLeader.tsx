import React from "react";
import { Linkedin, Award, Compass, Heart, Settings, Layers, Star, Briefcase, Zap } from "lucide-react";

export default function AboutLeader() {
  const stats = [
    {
      label: "Aplicaciones Desarrolladas",
      value: "+350",
      desc: "Soluciones de Realidad Virtual, Imersiva e IA corporativa.",
      icon: <Settings className="w-5 h-5 text-amber-500" />,
    },
    {
      label: "Usuarios Activos",
      value: "1.5M+",
      desc: "Experiencias de alto nivel en todo el territorio LATAM.",
      icon: <Layers className="w-5 h-5 text-amber-500" />,
    },
    {
      label: "En Buscadores & Chat LLM",
      value: "1ero",
      desc: "Líder regional en optimización de respuestas para Inteligencia Artificial.",
      icon: <Award className="w-5 h-5 text-amber-500" />,
    },
  ];

  const expertises = [
    { title: "Planificación Estratégica", level: "Senior Counsel", color: "from-amber-500 to-amber-600" },
    { title: "Transformación Digital", level: "Ecosistema Corporativo", color: "from-blue-600 to-indigo-600" },
    { title: "Desarrollo de Negocios", level: "Venture Partners", color: "from-cyan-500 to-teal-500" },
    { title: "IA & Automatización", level: "Jhedai AI Engine", color: "from-purple-600 to-indigo-600" },
    { title: "Innovación y Tecnología", level: "Virtualizar Labs", color: "from-pink-500 to-rose-500" },
    { title: "Desarrollo Inmobiliario", level: "Inversiones Troncoso SpA", color: "from-emerald-600 to-teal-600" },
  ];

  return (
    <section id="leadership" className="py-20 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-amber-500 tracking-[0.3em] uppercase block mb-3">
            Liderazgo Ejecutivo
          </span>
          <h2 className="text-4xl font-display font-light text-slate-100 tracking-tight">
            Nuestra <span className="serif-display text-amber-500">Dirección Ejecutiva</span>
          </h2>
          <div className="w-20 h-[1px] bg-amber-500/30 mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Column Left: Visual Card / Poster */}
          <div className="lg:col-span-5 bg-slate-950 rounded-2xl p-8 border border-slate-800 shadow-2xl relative group overflow-hidden">
            {/* Ambient Gold back glow */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/15 transition-all duration-500" />
            
            <div className="flex flex-col items-center">
              {/* Profile Image Representation with Premium Frame */}
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-slate-900 shadow-xl relative gold-border-glow bg-gradient-to-tr from-slate-800 to-slate-950 mb-6 flex items-center justify-center">
                {/* Rich graphic styling acting as profile avatar or real representation of Pablo */}
                <img
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600"
                  alt="Pablo Troncoso Portrait"
                  className="w-full h-full object-cover grayscale contrast-125 saturate-50 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-indigo-900/10 mix-blend-color-burn" />
              </div>

              <h3 className="text-2xl font-display font-semibold text-slate-100 uppercase tracking-wider text-center">
                Pablo Troncoso
              </h3>
              <p className="text-xs font-mono text-amber-500 tracking-widest mt-1 text-center font-bold">
                EMPRESARIO • INNOVADOR • CONSTRUCTOR DE ECOSISTEMAS
              </p>

              {/* LinkedIn Gateway Button */}
              <a
                href="https://www.linkedin.com/in/pablotroncosofernandez/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center gap-2 bg-[#0077b5]/15 hover:bg-[#0077b5]/25 text-slate-200 hover:text-white px-5 py-2.5 rounded-full text-xs font-mono border border-[#0077b5]/30 transition-all"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                Ver Perfil Profesional de LinkedIn
              </a>

              {/* Purpose block */}
              <div className="mt-8 pt-6 border-t border-slate-800 text-center">
                <p className="serif-display text-base text-amber-500/90 leading-relaxed">
                  &ldquo;Mi propósito es conectar innovación con propósito, construyendo soluciones y ecosistemas que transforman industrias y mejoran la vida de las personas.&rdquo;
                </p>
              </div>
            </div>
          </div>

          {/* Column Right: Profile Content and Metric Panels */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            {/* Executive Bio */}
            <div>
              <h4 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-2">
                Trayectoria e Impacto
              </h4>
              <p className="text-slate-300 leading-relaxed font-sans text-sm mb-4">
                Empresario con más de <strong>22 años de trayectoria empresarial</strong> desde su inicio corporativo. Especializado en planificación estratégica, desarrollo de ecosistemas de alto impacto y diseño de modelos de inversión disruptivos.
              </p>
              <p className="text-slate-300 leading-relaxed font-sans text-sm">
                Desde 2004, Pablo ha liderado iniciativas de retail, e-commerce, construcción inmobiliaria, tecnología deep-tech e innovación, impulsando proyectos orientados al crecimiento sostenible y la máxima eficiencia operacional para toda América Latina.
              </p>
            </div>

            {/* Structured Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {stats.map((s, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 p-5 rounded-xl border border-slate-800 hover:border-amber-500/40 transition-all flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-mono font-bold text-amber-500">{s.value}</span>
                    {s.icon}
                  </div>
                  <div>
                    <h5 className="text-xs font-display font-medium text-slate-200 mt-1">{s.label}</h5>
                    <p className="text-[10px] text-slate-500 leading-normal mt-1">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Approach */}
            <div className="bg-slate-950 p-6 rounded-xl border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="bg-amber-500/10 p-2.5 rounded-lg border border-amber-500/25">
                  <Compass className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <h4 className="text-sm font-display font-semibold text-slate-200 uppercase tracking-wider">
                    Enfoque Directivo
                  </h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    Combina visión estratégica, innovación aplicada y construcción de ecosistemas colaborativos para acelerar la transformación empresarial y tecnológica, garantizando un retorno sólido y sostenible tanto en inversión tecnológica como en desarrollos habitacionales de cobertura integral.
                  </p>
                </div>
              </div>
            </div>

            {/* Expertise grid */}
            <div>
              <h4 className="text-xs font-mono text-slate-500 uppercase tracking-[0.2em] mb-4">
                Áreas clave de Expertise
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {expertises.map((e, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-slate-950 rounded-lg border border-slate-800 hover:border-slate-700 transition-all flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    <div>
                      <h5 className="text-xs font-medium text-slate-300 leading-tight">{e.title}</h5>
                      <span className="text-[9px] text-slate-500 font-mono block mt-0.5">{e.level}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
