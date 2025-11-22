import type { Metadata } from "next";
import "../globals.css";
import Sidebar from "@/components/navbar/Sidebar";

export const metadata: Metadata = {
  title: "Agendando APP",
  icons: {
    icon: "/icon.svg",
  },
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 p-6 bg-gray-50">{children}</main>
    </div>
  );
}
