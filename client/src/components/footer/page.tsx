import { CalendarCheck, Link, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white p-8 mt-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
        <div className="flex flex-col space-y-2 ">
          <h1 className="text-2xl transform hover:scale-105 transition-transform cursor-pointer">
            <span className="text-[#651B1B] font-semibold drop-shadow-md">
              Agendando
            </span>
            <span className="text-gray-700">APP</span>
          </h1>
          <p className="text-sm leading-relaxed text-gray-600">
            La plataforma de gestión de turnos más confiable para profesionales
            argentinos.
          </p>
        </div>
        <div>
          <h4 className="font-poppins font-bold mb-4">Producto</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-[#651B1B] transition-colors"
              >
                Características
              </a>
            </li>
            <li>
              <a
                href="#precios"
                className="text-gray-600 hover:text-[#651B1B] transition-colors"
              >
                Precios
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-[#651B1B] transition-colors"
              >
                Seguridad
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-poppins font-bold mb-4">Empresa</h4>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-[#651B1B] transition-colors"
              >
                Acerca de
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="text-gray-600 hover:text-[#651B1B] transition-colors"
              >
                Contacto
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-600 hover:text-[#651B1B] transition-colors"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-poppins font-bold mb-4">Contacto</h4>
          <ul className="space-y-3 text-muted-foreground text-sm">
            <li className="flex items-center gap-2 text-gray-600">
              <Mail size={16} />
              velazquez.alan14@gmail.com
            </li>
            <li className="flex items-center gap-2 text-gray-600">
              <Phone size={16} />
              +54 9 266- 4 774564
            </li>
            <li className="flex items-start gap-2 text-gray-600">
              <MapPin size={16} className="mt-0.5" />
              San Luis, Argentina
            </li>
          </ul>
        </div>
      </div>
      <div className="flex max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 justify-between items-center text-gray-600 text-sm border-t border-gray-300 pt-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} AgendandoAPP. Todos los derechos
          reservados.
        </p>
        <div className="space-x-4">
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
          <a href="#">Cookies</a>
        </div>
      </div>
    </footer>
  );
}
