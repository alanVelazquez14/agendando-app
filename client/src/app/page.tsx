import { Particles } from "@/utils/Particles";
import { ArrowRight } from "lucide-react";
import BeneficioPage from "./beneficio/page";
import ComoFuncionaPage from "./como-funciona/page";
import ClientesPage from "./clientes/page";
import CallToActionPage from "./call-to-action/page";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between p-8 md:p-24 bg-background transition-colors duration-300 overflow-x-hidden">
        {/* Fondo partículas */}
        <div className="absolute inset-0 -z-10">
          <Particles />
        </div>

        {/* Contenedor principal con padding para mobile */}
        <div className="space-y-10 text-center w-full max-w-4xl px-4 md:px-0">
          <div>
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 mt-24 leading-tight">
              Gestioná tus turnos sin esfuerzo,{" "}
              <span className="text-[#651B1B] dark:text-[#9A2C2C]">
                las 24 horas.
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl max-w-xl text-center mx-auto mb-10 text-gray-600 px-2">
              Un sistema inteligente que automatiza reservas, recordatorios y
              horarios sin que tengas que hacerlo vos.
            </p>
          </div>

          {/* Botones responsivos */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-10 justify-center mt-8 w-full px-4">
            <button className="bg-[#651B1B] dark:bg-[#9A2C2C] text-white px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold sm:font-bold shadow-md hover:bg-[#651B1B]/90 dark:hover:bg-[#9A2C2C]/90 transition-all duration-300 transform hover:-translate-y-0.5 focus:ring-4 focus:ring-[#651B1B]/50 dark:focus:ring-[#9A2C2C]/50 w-full sm:w-auto text-sm sm:text-base">
              Comenzar gratis
              <ArrowRight className="inline-block ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
            </button>

            <a
              href="#como-funciona"
              className="px-4 py-2.5 sm:px-6 sm:py-3 rounded-xl border-2 border-green-700 text-green-700 font-semibold sm:font-bold  hover:bg-green-700 hover:text-white shadow-md transition-all duration-300 transform hover:-translate-y-0.5 focus:ring-4 w-full sm:w-auto text-center text-sm sm:text-bas"
            >
              Ver cómo funciona
            </a>
          </div>

          <div className="text-sm text-muted-foreground mt-4">
            ✓ Sin tarjeta de crédito • ✓ 14 días gratis • ✓ Cancela cuando
            quieras
          </div>
        </div>
      </main>

      {/* Secciones */}
      <section id="beneficios" className="px-4 md:px-0">
        <BeneficioPage />
      </section>

      <section id="como-funciona" className="px-4 md:px-0">
        <ComoFuncionaPage />
      </section>

      <section className="px-4 md:px-0">
        <ClientesPage />
      </section>

      <section className="px-4 md:px-0">
        <CallToActionPage />
      </section>
    </>
  );
}
