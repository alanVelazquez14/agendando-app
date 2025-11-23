"use client";
import { PasswordBar } from "@/components/PasswordBar";
import { PasswordInput } from "@/components/PasswordInput";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";
import { BusinessTypeSelect } from "@/components/BussinessTypeSelect";

const input = [
  {
    type: "text",
    label: "Nombre completo",
    placeholder: "Nombre completo",
    name: "fullName",
  },
  {
    type: "email",
    label: "Correo electrónico",
    placeholder: "Correo electrónico",
    name: "email",
  },
  {
    type: "password",
    label: "Contraseña",
    placeholder: "Mínimo 8 caracteres",
    name: "password",
  },
  {
    type: "password",
    label: "Confirmar contraseña",
    placeholder: "Repite tu contraseña",
    name: "confirmPassword",
  },
];

type FormData = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  businesstype: string;
};

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    businesstype: "",
  });

  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBusinessChange = (value: string) => {
    setFormData((prev) => ({ ...prev, businesstype: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Error al registrar. Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);

    console.log("ENVIANDO:", formData);

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          password: formData.password,
          businesstype: formData.businesstype,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.message || "Hubo un problema, intenta nuevamente.");
        setLoading(false);
        return;
      }

      setTimeout(() => {
        router.push("/login");
        setLoading(false);
        toast.success("Registro exitoso");
      }, 1800);
    } catch (error) {
      toast.error("No se pudo conectar con el servidor.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gray-200 w-full transition-colors duration-300">
      <div className="border border-gray-300 rounded-xl shadow-md p-8 w-xl bg-white">
        <h1 className="text-4xl font-bold text-center mt-4">Crear cuenta</h1>
        <p className="text-sm mt-2 text-gray-600 text-center">
          Comienza tu prueba gratuita de 14 días hoy mismo.
        </p>

        <form className="space-y-4 mt-10" onSubmit={handleSubmit}>
          {input.map((field) => (
            <div key={field.name}>
              {field.type === "password" ? (
                <>
                  <PasswordInput
                    label={field.label}
                    name={field.name}
                    value={formData[field.name as keyof FormData]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                  />

                  {field.name === "password" &&
                    formData.password.length > 0 && (
                      <PasswordBar password={formData.password} />
                    )}

                  {field.name === "confirmPassword" &&
                    formData.confirmPassword.length > 0 &&
                    formData.password !== formData.confirmPassword && (
                      <p className="text-sm text-red-600 mt-1">
                        Las contraseñas no coinciden
                      </p>
                    )}
                </>
              ) : (
                <>
                  <label className="text-sm block text-gray-700 font-semibold mt-3">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name as keyof FormData]}
                    onChange={handleChange}
                    className="w-full mt-2 mb-1 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#651B1B]"
                  />
                </>
              )}
            </div>
          ))}

          <div className="mt-4">
            <label className="text-sm block text-gray-700 font-semibold mt-3">
              Tipo de rubro
            </label>

            <BusinessTypeSelect
              value={formData.businesstype}
              onChange={handleBusinessChange}
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full mt-6 font-semibold text-white py-2 px-4 rounded transition duration-200 ${
              loading
                ? "bg-[#651B1B]/50 cursor-not-allowed"
                : "bg-[#651B1B] hover:bg-[#651B1B]/90"
            }`}
          >
            {loading ? "Creando cuenta..." : "Crear cuenta"}
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-600 mb-10">
          ¿Ya tienes una cuenta?{" "}
          <a href="/login" className="text-[#651B1B] font-bold">
            Inicia sesión aquí
          </a>
        </p>

        <p className="text-center text-sm text-gray-600 border-t border-gray-300 pt-4">
          Al registrarte aceptás nuestros{" "}
          <a href="#" className="text-[#651B1B]">
            Términos de servicio
          </a>{" "}
          y{" "}
          <a href="#" className="text-[#651B1B]">
            Política de privacidad
          </a>
          .
        </p>
      </div>
    </div>
  );
}
