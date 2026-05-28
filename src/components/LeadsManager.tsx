import React, { useState, useEffect } from "react";
import { Send, CheckCircle, Clock, Building2, User, Phone, Mail, FolderOpen, HeartCrack } from "lucide-react";
import { Lead } from "../types";

export default function LeadsManager() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  // Form State
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [projectInterest, setProjectInterest] = useState<string>("Condominio Troncoso (DS49)");
  const [investmentBracket, setInvestmentBracket] = useState<string>("$250M CLP - $500M CLP");
  const [message, setMessage] = useState<string>("");

  const fetchLeads = async () => {
    try {
      const response = await fetch("/api/leads");
      if (response.ok) {
        const data = await response.json();
        setLeads(data);
      }
    } catch (err) {
      console.error("Error fetching leads:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          company,
          projectInterest,
          investmentBracket,
          message,
        }),
      });

      if (response.ok) {
        setFormSubmitted(true);
        // Reset states
        setName("");
        setEmail("");
        setPhone("");
        setCompany("");
        setMessage("");

        // Refresh leads database display
        await fetchLeads();

        setTimeout(() => {
          setFormSubmitted(false);
        }, 5000);
      }
    } catch (error) {
      console.error("Error submitting lead:", error);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Form Column - Left */}
          <div className="lg:col-span-6 bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-2xl">
            <span className="text-xs font-mono text-amber-500 tracking-[0.3em] uppercase block mb-3">
              Área de Negocios & Alianzas
            </span>
            <h3 className="text-2xl font-display font-medium text-slate-100 tracking-tight mb-2">
              Formulario de Contacto & Fideicomiso
            </h3>
            <p className="text-xs text-slate-400 font-sans leading-relaxed mb-8">
              Contáctanos para revisar posibilidades de inversión, digitalización inmobiliaria mediante Gemelos Virtuales, o postulaciones técnicas de desarrollo.
            </p>

            {formSubmitted && (
              <div className="mb-6 p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl flex items-center gap-3 text-xs font-mono">
                <CheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-500" />
                <div>
                  <strong>¡Registro Corporativo Exitoso!</strong> Tu solicitud ha sido ingresada en la base de datos de auditoría de Inversiones Troncoso en tiempo real.
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      required
                      placeholder="Juan Pérez"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/60 rounded-lg py-2.5 pl-10 pr-4 text-xs font-mono text-slate-100 outline-none"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                    Correo corporativo o personal *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                    <input
                      type="email"
                      required
                      placeholder="jperez@empresa.cl"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/60 rounded-lg py-2.5 pl-10 pr-4 text-xs font-mono text-slate-100 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Phone */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                    Fono de contacto
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      placeholder="+56 9 1234 5678"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/60 rounded-lg py-2.5 pl-10 pr-4 text-xs font-mono text-slate-100 outline-none"
                    />
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                    Empresa u Organización
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
                    <input
                      type="text"
                      placeholder="Empresa SpA / Inversionista Privado"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/60 rounded-lg py-2.5 pl-10 pr-4 text-xs font-mono text-slate-100 outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Dropdown 1: Project Interests */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                    Proyecto de Interés
                  </label>
                  <select
                    value={projectInterest}
                    onChange={(e) => setProjectInterest(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/60 rounded-lg py-2.5 px-4 text-xs font-mono text-slate-100 outline-none"
                  >
                    <option>Condominio Troncoso (DS49)</option>
                    <option>Inversiones Troncoso SpA Equity Share</option>
                    <option>Virtualizar Inmersive Lab Systems</option>
                    <option>Jhedai AI Automations</option>
                    <option>Alianza Estratégica General</option>
                  </select>
                </div>

                {/* Dropdown 2: Investment range */}
                <div>
                  <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                    Tramo de Inversión / Presupuesto
                  </label>
                  <select
                    value={investmentBracket}
                    onChange={(e) => setInvestmentBracket(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/60 rounded-lg py-2.5 px-4 text-xs font-mono text-slate-100 outline-none"
                  >
                    <option>$50M CLP - $100M CLP</option>
                    <option>$100M CLP - $250M CLP</option>
                    <option>$250M CLP - $500M CLP</option>
                    <option>$500M CLP - $1000M CLP</option>
                    <option>Más de $1.000M CLP</option>
                    <option>No Aplica (Consulta Técnica/Proveedor)</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[10px] font-mono text-slate-400 uppercase mb-1.5 font-bold">
                  Mensaje explicativo / Propuesta
                </label>
                <textarea
                  rows={4}
                  placeholder="Escribe detalles de tu propuesta de negocio..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500/60 rounded-lg py-2 px-4 text-xs font-mono text-slate-100 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-3 px-6 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-2 uppercase tracking-widest cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Propuesta Formal</span>
              </button>
            </form>
          </div>

          {/* Database Viewer - Right */}
          <div className="lg:col-span-6 bg-slate-900/50 p-8 rounded-2xl border border-slate-800 shadow-xl self-stretch flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-slate-500 tracking-[0.3em] uppercase block mb-3">
                Consola General de Auditoría
              </span>
              <h3 className="text-xl font-display font-medium text-slate-200 tracking-tight mb-4">
                Solicitudes Pendientes de la Sesión
              </h3>

              {loading ? (
                <div className="flex items-center justify-center h-48">
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-widest animate-pulse">
                    Accediendo a base de datos de leads...
                  </span>
                </div>
              ) : leads.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-8 border border-dashed border-slate-800 rounded-xl h-64 text-center">
                  <FolderOpen className="w-8 h-8 text-slate-750 mb-3" />
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider block">
                    Sin Solicitudes Recibidas
                  </span>
                  <p className="text-[10px] text-slate-600 font-sans mt-2 max-w-xs block">
                    Completa el formulario de contacto de la izquierda y mira cómo se registra tu propuesta en tiempo real en esta consola.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 max-h-[380px] overflow-y-auto pr-2">
                  {leads.map((lead) => (
                    <div
                      key={lead.id}
                      className="p-4 bg-slate-950 rounded-xl border border-slate-800 hover:border-amber-500/25 transition-all text-xs text-slate-300 font-mono"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-amber-500">{lead.name}</span>
                        <div className="flex items-center gap-1.5 text-slate-500 text-[10px]">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{new Date(lead.date).toLocaleTimeString()}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 text-[10px] border-t border-slate-900 pt-2 text-slate-400">
                        <div>
                          <span className="text-slate-600">Empresa:</span> {lead.company || "N/A"}
                        </div>
                        <div>
                          <span className="text-slate-600">Tramo:</span> {lead.investmentBracket}
                        </div>
                        <div className="col-span-2">
                          <span className="text-slate-600">Interés:</span> {lead.projectInterest}
                        </div>
                        <div className="col-span-2">
                          <span className="text-slate-600">Correo:</span> {lead.email}
                        </div>
                      </div>

                      {lead.message && (
                        <p className="mt-2.5 p-2 bg-slate-900 text-[10.5px] rounded text-slate-400 font-sans italic border-l-2 border-amber-500">
                          &ldquo;{lead.message}&rdquo;
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Corporate footer info */}
            <div className="text-[10px] text-slate-500 leading-relaxed font-sans mt-6 pt-4 border-t border-slate-800/60">
              Dirección Corporativa: Apoquindo, Las Condes, Santiago, Chile • Email: pablo.troncoso@virtualizar.cl • www.virtualizar.cl • Inversiones Troncoso SpA.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
