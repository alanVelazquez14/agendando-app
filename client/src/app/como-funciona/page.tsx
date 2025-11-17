import React from "react";

interface Proceso {
  step: number;
  title: string;
  description: string;
}

const proceso: Proceso[] = [
  {
    step: 1,
    title: "Creá tu cuenta",
    description:
      "Regístrate en segundos con tu email. Sin complicaciones, sin pasos innecesarios.",
  },
  {
    step: 2,
    title: "Configurá tu negocio",
    description:
      "Define tus horarios, servicios y disponibilidad en unos minutos.",
  },
  {
    step: 3,
    title: "Compartí tu enlace",
    description:
      "Comparte el enlace de reservas con tus clientes vía WhatsApp, email o redes sociales.",
  },
  {
    step: 4,
    title: "Gestioná tus reservas",
    description:
      "Recibe reservas automáticas, recordatorios y gestiona todo desde un único lugar.",
  },
];

export default function ComoFuncionaPage() {
  return (
    <section className="py-20 bg-white shadow-xl rounded-xl">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
            Cómo funciona
          </h2>
          <p className="text-xl text-gray-600">
            4 pasos simples para comenzar a gestionar tus turnos.
          </p>
        </div>

        <div className="relative pt-14">
          <div className="hidden md:block absolute top-[79px] left-0 right-0 h-[3px] bg-[#651B1B]/30 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-12">
            {proceso.map((step, index) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center relative"
              >
                {/* Círculo */}
                <div className="relative mb-6 flex justify-center">
                  <div className="w-12 h-12 bg-[#651B1B] rounded-full flex items-center justify-center text-white text-lg font-bold ring-4 ring-white z-10">
                    {step.step}
                  </div>

                  {/* Línea entre círculos */}
                  {/* {index < proceso.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 left-full w-full h-[3px] bg-[#9c5c70] transform -translate-y-1/2" />
                  )} */}
                </div>

                {/* Título */}
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {step.title}
                </h3>

                {/* Descripción */}
                <p className="text-sm text-gray-600 leading-relaxed max-w-[250px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
