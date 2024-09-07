"use client";

import { usePathname } from "next/navigation";
import LineGraph from "@/components/LineGraph";
import CarLineGraph from "@/components/car/CarLineGraph";
import FoodGraph from "./food/FoodGraph";

export default function ClientSideGraph() {
  const pathname = usePathname();

  if (pathname === "/transportation") {
    return <CarLineGraph />;
  } else if (pathname === "/food") {
    return <FoodGraph />;
  }

  return <LineGraph />;
}
