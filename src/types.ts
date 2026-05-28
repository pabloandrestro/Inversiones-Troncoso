export interface Message {
  id: string;
  role: "user" | "model";
  content: string;
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  projectInterest: string;
  investmentBracket: string;
  message: string;
  source: string;
  date: string;
}

export interface ProjectUnit {
  buildingId: string;
  name: string;
  apartmentsCount: number;
  floorsCount: number;
  progress: number;
  featuredTech: string[];
  status: "Planificación" | "En Construcción" | "Entregado";
  sustainabilityRating: "Clase A" | "Clase B" | "Premium";
}

export interface InvestmentBracket {
  label: string;
  minAmount: number; // in CLP (Millions) or USD
  unitsSupported: number;
  socialImpactScore: number; // Familias beneficiadas
  co2SavingsTons: number;
  estimatedIrr: string;
}
