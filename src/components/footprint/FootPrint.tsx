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

const FootPrint: React.FC<HorizontalBarChartProps> = ({ data }) => {
  const [selectedPeriod, setSelectedPeriod] = useState<string>("week"); // Default to "week"

  // Safely retrieve the data for the selected period
  const periodData = data[selectedPeriod as keyof typeof data];

  // If periodData is undefined or not available, return an error message
  if (!periodData) {
    return <div>Error: Data for the selected period is unavailable.</div>;
  }

  const chartData = {
    labels: ["Energy", "Transportation", "Food Waste"],
    datasets: [
      {
        label: "Impact",
        data: periodData, // Use the selected period's data
        backgroundColor: ["#f2c94c", "#eb5757", "#27ae60"], // Yellow, Red, Green
        borderRadius: 10, // Rounded corners for the bars
        barThickness: 20, // Adjust bar height
      },
    ],
  };

  // Safely calculate max value, with a fallback in case the data is empty
  const maxDataValue = periodData.length ? Math.max(...periodData) + 10 : 10;

  const options = {
    indexAxis: "y" as const, // Make the chart horizontal
    scales: {
      x: {
        beginAtZero: true,
        max: maxDataValue, // Add space at the end
        ticks: {
          padding: 5, // Add padding around ticks
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
            <span>Overall CO2 Footprint</span>
            <Select
              label="Period"
              placeholder="Select a period"
              selectedKeys={new Set([selectedPeriod])}
              className="max-w-xs"
              size="sm"
              onSelectionChange={(key) => {
                const newPeriod = key.currentKey as keyof typeof data;
                if (newPeriod in data) {
                  setSelectedPeriod(newPeriod);
                } else {
                  console.error(`Invalid period selected: ${newPeriod}`);
                }
              }}
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

export default FootPrint;
