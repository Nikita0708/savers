"use client";

import { Card, Select, SelectItem } from "@nextui-org/react";
import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { overallPeriods } from "@/data/preiods";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface HorizontalBarChartProps {
  data: {
    week: number[];
    month: number[];
    year: number[];
  };
}

const CanteenUsage: React.FC<HorizontalBarChartProps> = ({ data }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>("week"); // Default to "week"

  // Data corresponding to the selected time period
  const chartData = {
    labels: ["Food Type A", "Food Type B", "Food Type C", "Food Type D"],
    datasets: [
      {
        label: "Kilograms",
        data: data[selectedPeriod as keyof typeof data], // Use the selected period's data
        backgroundColor: [" #27ae60", "#f2c94c", " #FFA500", "#eb5757"], // Yellow, Red, Green, Blue
        borderRadius: 10, // Rounded corners for the bars
        barThickness: 20, // Adjust bar height
      },
    ],
  };

  const options = {
    indexAxis: "y" as const, // Make the chart horizontal
    scales: {
      x: {
        beginAtZero: true,
        max: Math.max(...data[selectedPeriod as keyof typeof data]) + 10, // Add space at the end
        ticks: {
          padding: 5, // Add padding around ticks
        },
        title: {
          display: true,
          text: "Kilograms",
        },
      },
    },
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    layout: {
      padding: {
        right: 10, // Add space to the right
      },
    },
  };

  return (
    <div className="w-1192 mx-auto p-4">
      <Card style={{ height: "450px" }} className="pt-5 pb-5">
        <div className="w-[800px] m-auto ">
          <div className="flex gap-3 justify-between items-center mb-5">
            <span>Overall Canteen Food Usage</span>
            <Select
              label="Period"
              placeholder="Select a period"
              selectedKeys={new Set([selectedPeriod])}
              className="max-w-xs"
              size="sm"
              onSelectionChange={(key) =>
                setSelectedPeriod(key.currentKey as any)
              }
            >
              {overallPeriods.map((period) => (
                <SelectItem key={period.key} value={period.key}>
                  {period.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <Bar data={chartData} options={options} className="pb-10 h-[400px]" />
        </div>
      </Card>
    </div>
  );
};

export default CanteenUsage;
