🗓️ Agendando — Sistema de Turnos Full Stack

Agendando es una aplicación web para la gestión de turnos online, adaptado a distintos rubros (salud, leyes, cuidado personal, deportes, etc.).
Permite a profesionales o negocios administrar sus reservas de manera simple, con registro de usuarios, control de horarios y panel de administración.

🚀 Tecnologías principales

Frontend
React / Next.js
Tailwind CSS
Axios
React Router o Next Router

Backend
Node.js
Express / NestJS
MongoDB o PostgreSQL
JWT (autenticación)
bcrypt (encriptación de contraseñas)

⚙️ Funcionalidades principales (plan inicial)
Registro y login de usuarios
Panel de administración (crear, editar y eliminar turnos)
Sistema de notificaciones o confirmaciones
Vista pública para agendar turnos
Validaciones y manejo de errores
API REST con endpoints protegidos

🧩 Estructura del proyecto
agendando-fullstack/
│
├── client/              → Frontend
│   ├── src/
│   ├── public/
│   └── package.json
│
├── server/              → Backend
│   ├── src/
│   ├── package.json
│   └── .env.example
│
└── README.md

🧰 Scripts útiles
En la raíz del proyecto:
npm run dev          # Ejecuta frontend y backend juntos (usando concurrently)
npm run start:client # Inicia solo el frontend
npm run start:server # Inicia solo el backend

🌍 Deploy (planificado)
Frontend: Vercel
Backend: Render
Base de datos: MongoDB Atlas o NeonDB

📌 Estado del proyecto
🚧 En desarrollo — versión inicial

👨‍💻 Desarrollado por Alan Velazquez
