import { CalendarCheck } from "lucide-react";
export const Logo = () => {
  return (
    <div className="flex items-center cursor-pointer space-x-2 transform hover:scale-105 transition-transform">
      <div className="flex items-center justify-center rounded">
        <CalendarCheck className="text-green-800" size={28} strokeWidth={2.5} />
      </div>
      <h1 className="text-2xl">
        <span className="text-[#651B1B] font-semibold drop-shadow-md">
          Agendando
        </span>
        <span className="text-gray-700">APP</span>
      </h1>
    </div>
  );
};
