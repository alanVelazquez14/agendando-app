import { Particles } from "@/utils/Particles";
import { ArrowRight } from "lucide-react";
import BeneficioPage from "./beneficio/page";
import ComoFuncionaPage from "./como-funciona/page";
import ClientesPage from "./clientes/page";
import CallToActionPage from "./call-to-action/page";

export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between p-8 md:p-24 bg-background transition-colors duration-300">
        <div className="absolute inset-0 -z-10">
          <Particles />
        </div>
        <div className="space-y-10 text-center max-w-4xl">
          <div>
            <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl text-foreground mb-6 text-pretty leading-tight">
              Gestioná tus turnos de forma{" "}
              <span className="text-[#651B1B] dark:text-[#9A2C2C]">
                simple y profesional
              </span>
            </h1>

            <p className="text-lg md:text-xl max-w-2xl text-center mx-auto mb-10 text-gray-600">
              Automatizá tus reservas, organizá tu agenda y mejorá la
              experiencia de tus clientes en segundos.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-20">
            <button className="bg-[#651B1B] dark:bg-[#9A2C2C] text-white px-5 py-2 rounded-xl font-bold shadow-md hover:bg-[#651B1B]/90 dark:hover:bg-[#9A2C2C]/90 transition-all duration-300 transform hover:-translate-y-0.5 focus:ring-4 focus:ring-[#651B1B]/50 dark:focus:ring-[#9A2C2C]/50">
              Comenzar gratis <ArrowRight className="inline-block ml-2" />
            </button>
            <a href="#como-funciona" className="px-8 py-3 rounded-xl border-2 border-[var(--success)] text-[var(--success)] hover:bg-[var(--success)]/30 font-bold bg-transparent shadow-md transition-all duration-300 transform hover:-translate-y-0.5 focus:ring-4 focus:ring-[var(--success)]/50">
              Ver cómo funciona
            </a>
          </div>
          <div className="text-sm text-muted-foreground">
            ✓ Sin tarjeta de crédito • ✓ 14 días gratis • ✓ Cancela cuando
            quieras
          </div>
        </div>
      </main>
      <section id="beneficios">
        <BeneficioPage />
      </section>
      <section id="como-funciona">
        <ComoFuncionaPage />
      </section>
      <section>
        <ClientesPage />
      </section>
      <section>
        <CallToActionPage />
      </section>
    </>
  );
}
