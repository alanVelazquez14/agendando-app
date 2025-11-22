"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { Dumbbell, HeartPulse, Utensils, Hospital } from "lucide-react";

interface BusinessTypeSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export function BusinessTypeSelect({
  value,
  onChange,
}: BusinessTypeSelectProps) {
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger className="w-full mt-2 mb-1 p-3 text-[16px] bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#651B1B]">
        <SelectValue placeholder="Selecciona tu rubro" />
      </SelectTrigger>

      <SelectContent>
        <SelectItem value="deportes">
            <div className="flex items-center gap-2 hover:bg-gray-300 p-2 rounded-md cursor-pointer transition">
            <Dumbbell size={18} /> Deportes
          </div>
        </SelectItem>

        <SelectItem value="estetica">
          <div className="flex items-center gap-2 hover:bg-gray-300 p-2 rounded-md cursor-pointer transition">
            <HeartPulse size={18} /> Estética
          </div>
        </SelectItem>

        <SelectItem value="gastronomia">
          <div className="flex items-center gap-2 hover:bg-gray-300 p-2 rounded-md cursor-pointer transition">
            <Utensils size={18} /> Gastronomía
          </div>
        </SelectItem>

        <SelectItem value="salud">
          <div className="flex w-full items-center gap-2 hover:bg-gray-300 p-2 rounded-md cursor-pointer transition">
            <Hospital size={18} /> Salud
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
