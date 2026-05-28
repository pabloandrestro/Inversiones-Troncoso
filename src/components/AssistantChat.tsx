import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Trash2, HelpCircle, ArrowUpRight } from "lucide-react";
import { Message } from "../types";

export default function AssistantChat() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      role: "model",
      content: "¡Hola! Bienvenido a Grupo Zubiaurre. Soy el **Asesor Virtual Jhedai AI**.\n\nPuedo responder tus dudas corporativas respecto a nuestro portafolio de inversión inmobiliario en Chile, los proyectos habitacionales de integración social (como nuestro plan de 16 edificios y 288 viviendas bajo DS49/DS19), o las tecnologías inmersivas de nuestro holding (como la virtualización fotorrealista). ¿En qué área deseas enfocar tu interés hoy?",
    },
  ]);
  const [inputMessage, setInputMessage] = useState<string>("");
  const [sending, setSending] = useState<boolean>(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (customText?: string) => {
    const textToSend = customText || inputMessage;
    if (!textToSend.trim() || sending) return;

    const userMsg: Message = {
      id: `user_${Date.now()}`,
      role: "user",
      content: textToSend,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage("");
    setSending(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMsg].map((m) => ({
            role: m.role,
            content: m.content,
          })),
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const modelMsg: Message = {
          id: `model_${Date.now()}`,
          role: "model",
          content: data.text,
        };
        setMessages((prev) => [...prev, modelMsg]);
      } else {
        const errorMsg: Message = {
          id: `err_${Date.now()}`,
          role: "model",
          content: "Disculpa, el servicio Jhedai AI está procesando requerimientos y no pudo responder en este instante. Por favor, reintenta en unos momentos o contáctanos directamente.",
        };
        setMessages((prev) => [...prev, errorMsg]);
      }
    } catch (error) {
      console.error("Chat API Error:", error);
      const errorMsg: Message = {
        id: `err_${Date.now()}`,
        role: "model",
        content: "Ha ocurrido un error de conexión institucional. Por favor, revisa tus configuraciones y vuelve a consultar.",
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setSending(false);
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: "initial",
        role: "model",
        content: "Sesión reiniciada. ¿Cómo puedo asesorarte hoy en tu plan de expansión con Grupo Zubiaurre?",
      },
    ]);
  };

  // Predefined prompt pills
  const promptPills = [
    { text: "¿Qué proyectos DS49 lideran?", label: "Proyectos DS49" },
    { text: "¿Cuál es el rol de Inversiones Troncoso?", label: "Inversión SpA" },
    { text: "Háblame de la tecnología de Virtualizar", label: "Tecnología Virtualizar" },
    { text: "¿Cómo contacto a Pablo Troncoso?", label: "Contacto Directo" },
  ];

  return (
    <>
      {/* Floating trigger button on bottom right corner */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-tr from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-slate-950 font-bold p-4 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-2 group cursor-pointer border border-amber-300/30"
      >
        <MessageSquare className="w-6 h-6 animate-pulse group-hover:animate-none" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out text-xs font-mono uppercase tracking-widest leading-none">
          Asesor Jhedai AI
        </span>
      </button>

      {/* Floating Chat Drawer Drawer */}
      {isOpen && (
        <div className="fixed inset-y-0 right-0 w-full sm:w-[450px] bg-slate-950/95 border-l border-slate-800 shadow-2xl z-55 flex flex-col justify-between backdrop-blur-xl">
          {/* Header */}
          <div className="p-5 border-b border-slate-800 bg-slate-900 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500/10 p-2 rounded-lg border border-amber-500/20 text-amber-500">
                <Bot className="w-5 h-5 animate-bounce" />
              </div>
              <div>
                <h3 className="text-sm font-display font-bold text-slate-100 uppercase tracking-widest leading-none">
                  Jhedai AI® Advisor
                </h3>
                <span className="text-[9px] font-mono text-emerald-400 tracking-wider flex items-center gap-1 mt-1.5 uppercase font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Holding Consultivo Activo
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={clearChat}
                title="Reiniciar chat"
                className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-rose-400 transition-all cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-slate-100 transition-all cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Console Box */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((m) => {
              const isAi = m.role === "model";
              return (
                <div key={m.id} className={`flex gap-3 max-w-[85%] ${isAi ? "mr-auto" : "ml-auto flex-row-reverse"}`}>
                  <div
                    className={`h-7 w-7 rounded-lg border flex-shrink-0 flex items-center justify-center ${
                      isAi
                        ? "bg-slate-900 border-slate-800 text-amber-500"
                        : "bg-amber-500 border-amber-400 text-slate-950"
                    }`}
                  >
                    {isAi ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
                  </div>

                  <div
                    className={`p-4 rounded-xl text-xs leading-relaxed font-sans ${
                      isAi
                        ? "bg-slate-900/60 border border-slate-800 text-slate-300"
                        : "bg-slate-850 border border-slate-700 text-slate-100"
                    }`}
                  >
                    {/* Render markdown text simply using paragraph blocks, parsing basic highlights */}
                    {m.content.split("\n\n").map((para, pIdx) => (
                      <p key={pIdx} className="mb-2 last:mb-0">
                        {para.split("**").map((subText, sIdx) => {
                          if (sIdx % 2 === 1) {
                            return <strong key={sIdx} className="text-amber-500 font-bold">{subText}</strong>;
                          }
                          return subText;
                        })}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
            {sending && (
              <div className="flex gap-3 max-w-[80%] mr-auto">
                <div className="h-7 w-7 rounded-lg border bg-slate-900 border-slate-800 text-amber-500 flex items-center justify-center">
                  <Bot className="w-4 h-4 animate-spin" />
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800 text-[10px] font-mono text-slate-500 uppercase tracking-widest animate-pulse">
                  Jhedai consultando núcleo cognitivo...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions pills */}
          <div className="p-3 bg-slate-900/40 border-t border-slate-900">
            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest block mb-2 px-1">
              Consultas recomendadas:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {promptPills.map((pill, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(pill.text)}
                  className="bg-slate-950 hover:bg-slate-900 text-[9.5px] font-medium font-sans text-slate-400 hover:text-amber-400 rounded-full px-3 py-1 border border-slate-800 transition-all flex items-center gap-1 cursor-pointer"
                >
                  {pill.label}
                  <ArrowUpRight className="w-3 h-3 text-slate-600" />
                </button>
              ))}
            </div>
          </div>

          {/* Input Panel */}
          <div className="p-4 border-t border-slate-800 bg-slate-900 flex items-center gap-2">
            <input
              type="text"
              placeholder="Escribe tu consulta sobre inversión o tecnología..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              className="flex-1 bg-slate-950 border border-slate-800 focus:border-amber-500/60 rounded-xl py-3 px-4 text-xs font-mono text-slate-100 outline-none"
            />
            <button
              onClick={() => handleSendMessage()}
              className="bg-amber-500 hover:bg-amber-600 text-slate-950 p-3 rounded-xl transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
