export const businessConfig = {
  gym: {
    title: "Gestión de Turnos para Deportes",
    description:
      "Administrá turnos, clases y alumnos de tu gimnasio, cancha o centro deportivo.",
    icon: "🏋️‍♂️",
    modules: ["turnos", "clases", "clientes"],
  },
  health: {
    title: "Agenda Profesional de Salud",
    description:
      "Gestioná pacientes, historia clínica y turnos con total organización.",
    icon: "🩺",
    modules: ["turnos", "pacientes", "historial"],
  },
  beauty: {
    title: "Turnos para Estética y Barbería",
    description:
      "Organizá servicios, empleados y turnos para tu centro de estética.",
    icon: "💇‍♂️",
    modules: ["turnos", "servicios", "empleados"],
  },
} as const;
