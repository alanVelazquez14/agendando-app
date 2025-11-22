export default function DashboardContent({ businessType }: { businessType: string }) {
  
  const titles: Record<string, string> = {
    deportes: "Panel de gestión de turnos deportivos",
    salud: "Agenda para profesionales de la salud",
    estetica: "Turnos para estética y belleza",
    gastronomia: "Reservas y organización gastronómica",
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">
        {titles[businessType] || "Mi Panel"}
      </h1>

      <p className="text-gray-700">
        Bienvenido a tu panel personalizado. Acá vas a gestionar tus turnos, horarios y clientes.
      </p>
    </div>
  );
}