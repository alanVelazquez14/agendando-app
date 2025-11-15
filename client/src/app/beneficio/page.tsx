import React from "react";
import { CalendarIcon, UsersIcon, ClockIcon, Smartphone } from "lucide-react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const IconMap: { [key: string]: React.ElementType } = {
  CalendarIcon: CalendarIcon,
  UsersIcon: UsersIcon,
  ClockIcon: ClockIcon,
  Smartphone: Smartphone,
};

interface IconWrapperProps {
  iconName: string;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ iconName }) => {
  const IconComponent = IconMap[iconName];

  if (!IconComponent) {
    return (
      <div className="w-10 h-10 bg-red-100 rounded-md flex items-center justify-center mb-4 text-red-600">
        !
      </div>
    );
  }
  return (
    <div className="w-10 h-10 bg-pink-50 rounded-md flex items-center justify-center mb-4">
      <IconComponent className="w-6 h-6 text-[#9c5c70]" />
    </div>
  );
};

const featuresData: Feature[] = [
  {
    icon: "CalendarIcon",
    title: "Agenda inteligente",
    description:
      "Gestiona múltiples calendarios y evita conflictos de horario automáticamente.",
  },
  {
    icon: "UsersIcon",
    title: "Múltiples rubros",
    description:
      "Compatible con médicos, gimnasios, peluquerías, consultorios y más.",
  },
  {
    icon: "ClockIcon",
    title: "Recordatorios automáticos",
    description:
      "Reduce las ausencias con notificaciones automáticas a tus clientes.",
  },
  {
    icon: "Smartphone",
    title: "Todo online y accesible",
    description:
      "Accede desde cualquier dispositivo, en cualquier momento, desde cualquier lugar.",
  },
];

export default function BeneficioPage() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-between p-8 md:p-24 bg-background transition-colors duration-300">
      <div className="space-y-10 max-w-7xl mt-10">
        <h1 className="text-5xl font-bold text-center">Beneficios Principales</h1>
        <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto">
          Todo lo que necesitás para gestionar tus turnos de manera eficiente y
          profesional.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuresData.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-white border border-gray-200 rounded-lg shadow-sm 
            hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 hover:border-[#651B1B]"
            >
              <IconWrapper iconName={feature.icon} />

              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {feature.title}
              </h3>

              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
