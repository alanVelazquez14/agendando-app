import { ArrowRight} from "lucide-react";
export default function CallToActionPage() {
  return (
    <section className="py-20 bg-[#a02424] rounded-xl shadow-xl">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
          Empezá hoy a organizar tus turnos sin complicaciones
        </h2>
        <p className="text-lg text-white mb-8">
          Únete a miles de profesionales que ya están mejorando su gestión de
          turnos con AgendandoAPP.
        </p>
        <button className="bg-white text-[#651B1B] px-6 py-3 rounded-xl font-bold shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:-translate-y-0.5 focus:ring-4 focus:ring-[#651B1B]/50">
          Probar gratis ahora <ArrowRight className="inline-block ml-2" />
        </button>
        <div className="text-sm text-gray-300 mt-10">
          ✓ Sin tarjeta de crédito • ✓ 14 días gratis • ✓ Cancela cuando quieras
        </div>
      </div>
    </section>
  );
}
