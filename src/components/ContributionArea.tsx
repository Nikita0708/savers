"use client";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { Apple, CircleGauge, Recycle, Zap } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContributionArea() {
  const [selectedArea, setSelectedArea] = useState("energy");
  const router = useRouter();

  return (
    <Card className="w-[283px]">
      <CardHeader className="flex gap-3">
        <h3>Contribution Areas</h3>
      </CardHeader>
      <CardBody className="flex flex-col gap-3">
        <Button
          className="flex items-center justify-start"
          color={selectedArea === "energy" ? "primary" : "default"}
          onClick={() => {
            setSelectedArea("energy");
            router.push("/");
          }}
        >
          <Zap />
          <span>Energy Consumption</span>
        </Button>
        <Button
          className="flex items-center justify-start"
          color={selectedArea === "transportation" ? "primary" : "default"}
          onClick={() => {
            setSelectedArea("transportation");
            router.push("/transportation");
          }}
        >
          <CircleGauge />
          <span>Transportation</span>
        </Button>
        <Button
          className="flex items-center justify-start"
          color={selectedArea === "food" ? "primary" : "default"}
          onClick={() => {
            setSelectedArea("food");
            router.push("/food");
          }}
        >
          <Apple />
          <span>Food Waste</span>
        </Button>
        <Divider />
        <Popover placement="right">
          <PopoverTrigger>
            <Button
              className="flex items-center justify-start"
              color={selectedArea === "together" ? "primary" : "default"}
              onClick={() => setSelectedArea("together")}
            >
              <Recycle />
              <span>Together we are one</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">In development mode...</div>
            </div>
          </PopoverContent>
        </Popover>
      </CardBody>
    </Card>
  );
}
