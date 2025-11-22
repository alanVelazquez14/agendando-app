"use client";

import { useEffect, useState } from "react";
import { Home, Calendar, Settings } from "lucide-react";

export default function Sidebar() {
  const [businessType, setBusinessType] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const parsed = JSON.parse(data);
      setBusinessType(parsed.businesstype);
    }
  }, []);

  return (
    <aside className="w-64 bg-white shadow-md p-6 flex flex-col gap-4">
      <h2 className="text-xl font-bold">Mi negocio</h2>

      <p className="text-sm text-gray-600">
        Rubro: <span className="font-semibold">{businessType}</span>
      </p>

      <nav className="flex flex-col gap-3 mt-4">
        <a className="flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer">
          <Home size={18} /> Inicio
        </a>

        <a className="flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer">
          <Calendar size={18} /> Turnos
        </a>

        <a className="flex items-center gap-2 text-gray-700 hover:text-black cursor-pointer">
          <Settings size={18} /> Configuración
        </a>
      </nav>
    </aside>
  );
}