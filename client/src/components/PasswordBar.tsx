"use client";

export function PasswordBar({ password }: { password: string }) {
  const getStrength = () => {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;

    return score;
  };

  const strength = getStrength();

  const levels = ["Muy débil, agrega mayúsculas y números", "Débil, incluye caracteres especiales", "Media", "Aceptable, pero puede mejorar", "Excelente, segura"];
  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-yellow-500",
    "bg-green-500",
    "bg-emerald-600",
  ];

  return (
    <div className="mt-2">
      <div className="w-full h-2 bg-gray-200 rounded">
        <div
          className={`h-2 rounded transition-all duration-300 ${
            colors[strength]
          }`}
          style={{ width: `${(strength + 1) * 20}%` }}
        />
      </div>

      <p className="text-xs mt-1 text-gray-600 font-semibold">
        {levels[strength]}
      </p>
    </div>
  );
}
