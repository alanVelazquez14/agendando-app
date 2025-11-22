"use client";

import Sidebar from "@/components/navbar/Sidebar";
import { useState } from "react";

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(false);

  return (
    <div className="flex min-h-screen transition-all duration-300">
      <Sidebar />
      <main
        className={`flex-1 transition-all duration-300 px-6 pt-6 bg-gray-100 ${
          isSidebarExpanded ? "ml-70" : "ml-20"
        }`}
      >
        {children}
      </main>
    </div>
  );
}
