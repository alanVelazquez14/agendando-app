const inputs = [
  {
    label: "Nombre Completo",
    type: "text",
    name: "name",
    placeholder: "Ingresa tu nombre completo",
  },
  {
    label: "Correo electrónico",
    type: "email",
    name: "email",
    placeholder: "Ingresa tu correo electrónico",
  },
  {
    label: "Asunto",
    type: "text",
    name: "subject",
    placeholder: "Asunto del mensaje",
  },
  {
    label: "Mensaje",
    type: "textarea",
    name: "message",
    placeholder: "Escribe tu mensaje aquí",
  },
];

export default function ContactoPage() {
  return (
    <div className="flex flex-col items-center justify-center p-10 bg-gray-200 w-full transition-colors duration-300">
      <div className="border border-gray-300 rounded-xl shadow-md p-8 w-xl bg-white">
        <h1 className="text-4xl font-bold text-center mt-4">Contactanos</h1>
        <p className="text-sm mt-2 text-gray-600 text-center">
          Estamos aquí para ayudarte. Envianos un mensaje y te responderemos a
          la brevedad.
        </p>
        <form className="mt-10 space-y-4">
          {inputs.map((input) => (
            <div key={input.name}>
              <label className="text-sm text-gray-700 font-semibold">
                {input.label}
              </label>
              {input.type === "textarea" ? (
                <textarea
                  name={input.name}
                  placeholder={input.placeholder}
                  className="w-full mt-2 mb-1 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#651B1B] h-32 resize-none"
                />
              ) : (
                <input
                  type={input.type}
                  name={input.name}
                  placeholder={input.placeholder}
                  className="w-full mt-2 mb-1 p-3 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#651B1B]"
                />
              )}
            </div>
          ))}
        </form>
        <button className="w-full mt-6 bg-[#651B1B] font-semibold text-white py-2 px-4 rounded hover:bg-[#651B1B]/90 transition duration-200 cursor-pointer">
          Enviar mensaje
        </button>
        <p className="text-center text-sm mt-4 text-gray-600 mb-10">
          Te responderemos lo antes posible.
        </p>
      </div>
    </div>
  );
}
