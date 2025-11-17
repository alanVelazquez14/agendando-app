import { Star } from "lucide-react";

const clientes = [
  {
    name: "Dr. Martín García",
    empresa: "Clínica Dental",
    comentario:
      "Con AgendandoAPP reduje las ausencias en un 40% y ahorro 5 horas semanales en organización. La mejor inversión.",
    rating: 5,
  },
  {
    name: "Paula López",
    empresa: "Consultora de Marketing",
    comentario:
      "Mis clientes adoran poder reservar online. Aumenté mis reservas en un 60% en los primeros 3 meses.",
    rating: 5,
  },
  {
    name: "Carlos Ruiz",
    empresa: "Gimnasio PowerFit",
    comentario:
      "Gestiono 3 sucursales desde un mismo lugar. Los recordatorios automáticos son increíbles.",
    rating: 5,
  },
];

export default function ClientesPage() {
  return (
    <div className="flex flex-col items-center justify-between p-8 md:p-24 bg-background transition-colors duration-300 bg-gray-50">
      <h1 className="text-5xl font-bold mb-6">Clientes Satisfechos</h1>
      <p className="text-lg max-w-3xl text-center text-gray-600">
        Profesionales que confían en{" "}
        <span className="font-semibold text-[#651B1B]/80">AgendandoAPP</span>{" "}
        para gestionar sus turnos de manera eficiente.
      </p>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {clientes.map((cliente, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-200"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: cliente.rating }).map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <h2 className="text-xl font-semibold mb-2">{cliente.name}</h2>
            <h3 className="text-md font-medium mb-4 text-gray-700">
              {cliente.empresa}
            </h3>
            <p className="text-gray-600">"{cliente.comentario}"</p>
          </div>
        ))}
      </div>
    </div>
  );
}
