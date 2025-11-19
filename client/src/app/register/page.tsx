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

export default function RegisterPage() {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gray-50 w-full transition-colors duration-300">
      <div className="border border-gray-200 rounded-xl shadow-md p-8 w-xl bg-white">
        <h1 className="text-4xl font-bold text-center mt-4">Crear cuenta</h1>
        <p className="text-sm mt-2 text-gray-600 text-center">
          Comienza tu prueba gratuita de 14 días hoy mismo.
        </p>
        <form className="space-y-4 mt-10">
          {input.map((field) => (
            <div key={field.name}>
              <label className="text-sm block text-gray-700 font-semibold mt-3">{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                className="w-full mt-2 mb-1 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#651B1B]"
              />
            </div>
          ))}
        </form>
        <button className="w-full mt-6 bg-[#651B1B] font-semibold text-white py-2 px-4 rounded hover:bg-[#651B1B]/90 transition duration-200 cursor-pointer">
          Crear cuenta
        </button>
        <p className="text-center text-sm mt-4 text-gray-600 mb-10">
          ¿Ya tienes una cuenta? <a href="/login" className="text-[#651B1B] font-bold">Inicia sesión aquí</a>
        </p>
        <p className="text-center text-sm text-gray-600 border-t border-gray-200 pt-4">Al registrarte aceptás nuestros <a href="#" className="text-[#651B1B]">Términos de servicio</a> y <a href="#" className="text-[#651B1B]">Política de privacidad</a>.</p>
      </div>
    </div>
  );
}
