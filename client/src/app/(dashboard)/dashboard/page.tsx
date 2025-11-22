"use client";

import DashboardContent from "@/components/DashboardContent";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const [businessType, setBusinessType] = useState("");

  useEffect(() => {
    const data = localStorage.getItem("user");
    if (data) {
      const parsed = JSON.parse(data);
      setBusinessType(parsed.businesstype);
    }
  }, []);

  return <DashboardContent businessType={businessType} />;
}
