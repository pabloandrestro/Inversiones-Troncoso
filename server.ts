import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

// Standard ESM resolution helper
const isProd = process.env.NODE_ENV === "production";
const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  // Cached/Lazy AI Client initialization
  let aiClient: GoogleGenAI | null = null;
  function getAiInstance() {
    if (!aiClient) {
      const apiKey = process.env.GEMINI_API_KEY;
      if (!apiKey) {
        return null;
      }
      aiClient = new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
    return aiClient;
  }

  // System prompt content describing Inversiones Troncoso and Pablo Troncoso
  const systemInstruction = `
Eres la Inteligencia Artificial oficial - "Asesor Jhedai AI" de Inversiones Troncoso SpA. 
Tu propósito es atender de manera profesional, sofisticada y cordial a inversionistas, socios estratégicos, compradores de inmuebles y profesionales de la tecnología.

Información Corporativa Clave:
1. Inversiones Troncoso SpA: Holding de vanguardia e inmobiliaria chilena enfocada en dos grandes pilares:
   - Desarrollo Urbano Habitacional Sostenible (Ej. Proyectos habitacionales y condominios bajo el subsidio DS49 / DS19, como el mega proyecto habitacional sustentable de 16 edificios y 288 viviendas, con alta integración urbana como Condominio Troncoso SpA).
   - Tecnología e Innovación de alto impacto y Venture Capital. Su sello distintivo es: Inversión, Desarrollo y Futuro.
2. Pablo Troncoso (pablo.troncoso@virtualizar.cl): Líder, arquitecto de ecosistemas y socio capitalista de Inversiones Troncoso SpA. Tiene más de 22 años de trayectoria empresarial desde 2004. Es un pionero en tecnología y consultoría inmersiva en la región.
3. Empresas del ecosistema tecnológico lideradas por Pablo Troncoso que interactúan con Inversiones Troncoso SpA:
   - VIRTUALIZAR: Empresa líder con más de 14 años desarrollando soluciones en realidad virtual (RV), realidad augmented (RA) y tecnologías inmersivas. Cuenta con +350 aplicaciones desarrolladas, 1.5M+ de usuarios activos, y es nro. 1 en optimización para motores de búsqueda y chat con Modelos de Lenguaje Grande (LLM).
   - JHEDAI AI: Pionera en inteligencia artificial aplicada, automatización inteligente y aceleración de adopción tecnológica empresarial.
   - INTILAB: Centro de investigación e innovación aplicada que transforma desafíos industriales en prototipos técnicos, vinculando el capital joven con las grandes industrias.
   - HUBLAB: Consultora de innovación dedicada a la co-creación y transferencia tecnológica entre la academia, la industria y proyectos urbanísticos.
   - CCHIA (Cámara Chilena de Inteligencia Artificial): Pablo Troncoso ejerce como Director Comercial, promoviendo estándares de IA y articulación ecosistémica nacional.

Tono de comunicación:
- Elegante, constructivo, empresarial y directo.
- Responde en español por defecto con un vocabulario refinado de Real Estate y Capital Ventures.
- Enfócate en la sustentabilidad, el impacto social (viviendas de calidad accesibles) y la automatización inteligente.
- Evita promesas falsas de rentabilidad absoluta, siempre invita a agendar una reunión o enviar una solicitud formal de contacto a través del formulario de la plataforma.
- Ofrece respuestas estructuradas en viñetas si respondes sobre datos numéricos o proyectos.
`;

  // API endpoint for chatbot assistant
  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body;
      if (!messages || !Array.isArray(messages)) {
        res.status(400).json({ error: "Messages array is required." });
        return;
      }

      const client = getAiInstance();
      const lastUserMessage = messages[messages.length - 1]?.content || "";

      if (!client) {
        // Safe mock fallback response when key is missing to fulfill the optional integration guide securely
        setTimeout(() => {
          let responseText = "Hola. Soy el Asesor Virtual Jhedai de Inversiones Troncoso. Actualmente el sistema de IA está funcionando en modo informativo de demostración. ";
          if (lastUserMessage.toLowerCase().includes("invers") || lastUserMessage.toLowerCase().includes("proyect")) {
            responseText += "Inversiones Troncoso SpA participa activamente en proyectos inmobiliarios sostenibles, incluyendo viviendas estructuradas bajo marcos normativos como DS49/DS19 (16 edificios y 288 viviendas), además de integraciones tecnológicas de punta. ¿Te gustaría conocer más sobre nuestro portafolio de inversión o agendar una consulta directa con Pablo Troncoso?";
          } else if (lastUserMessage.toLowerCase().includes("tecno") || lastUserMessage.toLowerCase().includes("virtualizar") || lastUserMessage.toLowerCase().includes("ia")) {
            responseText += "Nuestro ecosistema tecnológico comprende marcas como Virtualizar (+350 aplicaciones desarrolladas en Realidad Virtual y Aumentada), Jhedai AI (Automatización empresarial) y el Centro de Innovación Intilab. ¿En cuál de estos aspectos de digitalización estás interesado para tu negocio?";
          } else {
            responseText += "Estamos listos para guiar tus ideas de Inversión, Desarrollo y Futuro. ¿Cómo podemos colaborar contigo hoy?";
          }
          res.json({ text: responseText, fallback: true });
        }, 500);
        return;
      }

      // Reconstruct historical context for chat or send direct generated response with system instructions
      // Using gemini-3.5-flash since this is a helpful text assistant (basic to medium text task, very fast & accurate)
      const gpts = messages.map((m: any) => `${m.role === "user" ? "User" : "Model"}: ${m.content}`).join("\n\n");
      const fullPrompt = `Historial de conversión previa:\n${gpts}\n\nNueva consulta:\nUser: ${lastUserMessage}\n\nPor favor, responde coherentemente como el Asesor Jhedai de Inversiones Troncoso SpA:`;

      const response = await client.models.generateContent({
        model: "gemini-3.5-flash",
        contents: fullPrompt,
        config: {
          systemInstruction,
          temperature: 0.75,
        },
      });

      res.json({ text: response.text });
    } catch (error: any) {
      console.error("Gemini API Error:", error);
      res.status(500).json({ error: "Failed to communicate with AI Assistant. Please try again." });
    }
  });

  // API endpoint for submitting investment/contact leads
  // Since we require zero simulated infrastructure, let's build a real memory database of leads so the user can see incoming requests
  const leads: any[] = [];
  app.post("/api/leads", (req, res) => {
    const { name, email, phone, company, projectInterest, message, investmentBracket, source } = req.body;
    if (!name || !email) {
      res.status(400).json({ error: "Nombre y Correo electrónico son obligatorios." });
      return;
    }
    const newLead = {
      id: `lead_${Date.now()}`,
      name,
      email,
      phone: phone || "",
      company: company || "",
      projectInterest: projectInterest || "Desarrollo General",
      investmentBracket: investmentBracket || "N/A",
      message: message || "",
      source: source || "Formulario de Contacto",
      date: new Date().toISOString(),
    };
    leads.push(newLead);
    res.status(201).json({ success: true, lead: newLead });
  });

  app.get("/api/leads", (req, res) => {
    res.json(leads);
  });

  // Handle SPA and assets routing
  if (!isProd) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production Assets serving
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server successfully started. Listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
