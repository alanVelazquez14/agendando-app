"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "/" },
  { name: "Beneficios", href: "#beneficios" },
  { name: "Como funciona", href: "#como-funciona" },
  { name: "Contacto", href: "#contacto" },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="px-3 py-2 rounded-lg bg-foreground/[0.1] text-foreground transition duration-300 hover:bg-foreground/[0.2] dark:hover:bg-foreground/[0.05] cursor-pointer"
    >
      {theme === "dark" ? <Sun /> : <Moon />}
    </button>
  );
}

export const Navbar = () => {
  return (
    <nav className="bg-background text-foreground shadow-md transition-colors duration-300 sticky top-0 z-10 border-b border-gray-200 p-2">
      <div className="flex items-center justify-around mx-auto px-4 py-3">
        <Logo />

        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:underline hover:underline-offset-4 hover:text-[#651B1B] text-lg text-foreground hover:text-primary transition duration-200"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <a
            href="/login"
            className="hover:bg-green-700 hover:text-white py-2 px-5 rounded"
          >
            Iniciar Sesión
          </a>
          <a
            href="/register"
            className="py-2 px-5 bg-[#651B1B] text-white rounded hover:bg-[#651B1B]/90 transition duration-200"
          >
            Registrarse
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
