export function ModulesRenderer({ modules }: { modules: readonly string[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      {modules.includes("turnos") && (
        <Card title="Turnos" icon="📅" description="Gestioná tus turnos." />
      )}

      {modules.includes("clases") && (
        <Card title="Clases" icon="🏋️‍♂️" description="Administrá tus clases." />
      )}

      {modules.includes("clientes") && (
        <Card title="Clientes" icon="👥" description="Listado de clientes." />
      )}

      {modules.includes("pacientes") && (
        <Card title="Pacientes" icon="🧑‍⚕️" description="Gestión de pacientes." />
      )}

      {modules.includes("historial") && (
        <Card title="Historial" icon="📁" description="Historias clínicas." />
      )}

      {modules.includes("servicios") && (
        <Card title="Servicios" icon="💄" description="Personalizá tus servicios." />
      )}

      {modules.includes("empleados") && (
        <Card title="Empleados" icon="💇‍♂️" description="Organizá tu equipo." />
      )}
    </div>
  );
}

function Card({ title, icon, description }: any) {
  return (
    <div className="rounded-xl border p-4 shadow hover:shadow-lg transition">
      <div className="text-4xl">{icon}</div>
      <h2 className="mt-2 font-bold text-xl">{title}</h2>
      <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
        {description}
      </p>
    </div>
  );
}
