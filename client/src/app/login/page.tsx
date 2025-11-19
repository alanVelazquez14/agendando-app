"use client";

import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const inputs = [
  {
    label: "Correo electrónico",
    type: "email",
    name: "email",
    action: null,
    placeholder: "Ingresa tu correo electrónico",
  },
  {
    label: "Contraseña",
    type: "password",
    name: "password",
    action: "¿La olvidaste?",
    placeholder: "Ingresa tu contraseña",
  },
];

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      return toast.error("Completa todos los campos");
    }

    try {
      setLoading(true);

      const res = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setLoading(false);
        return toast.error(data.message || "Credenciales incorrectas");
      }

      localStorage.setItem("token", data.token);

      setTimeout(() => {
        router.push("/dashboard");
        toast.success("Inicio de sesión exitoso");
      }, 1000);
    } catch (error) {
      toast.error("Error al iniciar sesión");
      console.log(error);
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-24 bg-gray-200 w-full transition-colors duration-300">
      <div className="border border-gray-300 rounded-xl shadow-md p-8 w-xl bg-white">
        <h1 className="text-4xl font-bold text-center mt-4">Iniciar sesión</h1>
        <p className="text-sm mt-2 text-gray-600 text-center">
          Accede a tu cuenta para gestionar tus turnos.
        </p>

        <form className="mt-10 space-y-4" onSubmit={handleSubmit}>
          {inputs.map((input) => (
            <div key={input.name}>
              <div className="flex justify-between items-center mt-5">
                <label className="text-sm text-gray-700 font-semibold">
                  {input.label}
                </label>

                {input.action && (
                  <a href="#" className="text-sm text-[#651B1B]">
                    {input.action}
                  </a>
                )}
              </div>

              <input
                type={input.type}
                name={input.name}
                placeholder={input.placeholder}
                className="w-full mt-2 mb-1 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#651B1B]"
                onChange={handleChange}
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full mt-6 bg-[#651B1B] font-semibold text-white py-2 px-4 rounded hover:bg-[#651B1B]/90 transition duration-200 cursor-pointer flex items-center justify-center"
          >
            {loading ? (
              <span className="animate-spin border-2 border-white rounded-full w-5 h-5 border-t-transparent"></span>
            ) : (
              "Iniciar sesión"
            )}
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-600 mb-10">
          ¿No tenes cuenta?{" "}
          <a href="/register" className="text-[#651B1B] font-bold">
            Regístrate gratis aquí
          </a>
        </p>
      </div>
    </div>
  );
}
