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
  return (
    <div className="flex flex-col items-center justify-center p-24 bg-gray-200 w-full transition-colors duration-300">
      <div className="border border-gray-300 rounded-xl shadow-md p-8 w-xl bg-white">
        <h1 className="text-4xl font-bold text-center mt-4">Iniciar sesión</h1>
        <p className="text-sm mt-2 text-gray-600 text-center">
          Accede a tu cuenta para gestionar tus turnos.
        </p>
        <form className="mt-10 space-y-4">
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
              />
            </div>
          ))}
        </form>
        <button className="w-full mt-6 bg-[#651B1B] font-semibold text-white py-2 px-4 rounded hover:bg-[#651B1B]/90 transition duration-200 cursor-pointer">
          Iniciar sesión
        </button>
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
