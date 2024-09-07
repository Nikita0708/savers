"use client";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Card, Select, SelectItem } from "@nextui-org/react";
import { periods } from "@/data/preiods";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineGraph: React.FC = () => {
  // State to manage the selected period
  const [selectedPeriod, setSelectedPeriod] = useState("minute");

  // Define datasets for different periods
  const datasets = {
    minute: [10, 20, 35, 50, 65, 80, 70, 85, 90, 95, 100],
    day: [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50],
    month: [5, 10, 20, 30, 45, 60, 80, 90, 85, 75, 65],
    year: [25, 35, 45, 60, 70, 85, 90, 95, 100, 80, 70],
  };

  // Define labels for each period
  const labels = {
    minute: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60],
    day: [
      "1 AM",
      "3 AM",
      "6 AM",
      "9 AM",
      "12 PM",
      "3 PM",
      "6 PM",
      "9 PM",
      "12 AM",
    ],
    month: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],
    year: ["2010", "2012", "2014", "2016", "2018", "2020", "2022", "2023"],
  };

  // Chart data based on the selected period
  const data = {
    labels: labels[selectedPeriod as keyof typeof labels],
    datasets: [
      {
        label: "Energy consumption",
        data: datasets[selectedPeriod as keyof typeof datasets],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top" as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text:
            selectedPeriod === "minute"
              ? "Time (seconds)"
              : selectedPeriod === "day"
              ? "Time (hours)"
              : selectedPeriod === "month"
              ? "Months"
              : "Years",
        },
      },
      y: {
        min: 0,
        max: 100,
        title: {
          display: true,
          text: "Percentage (%)",
        },
      },
    },
  };

  return (
    <Card
      style={{ width: "889px", height: "410px" }}
      className="pt-5 pb-10 pl-3 pr-3"
    >
      <div className="flex gap-3 justify-between items-center">
        <span>Laptop consumption rate</span>
        <Select
          label="Period"
          placeholder="Select a period"
          selectedKeys={new Set([selectedPeriod])} // Bind selected value here
          className="max-w-xs"
          size="sm"
          onSelectionChange={(key) => setSelectedPeriod(key.currentKey as any)} // Update state on change
        >
          {periods.map((period) => (
            <SelectItem key={period.key}>{period.label}</SelectItem>
          ))}
        </Select>
      </div>
      <Line
        data={data as any}
        options={options}
        className="pb-5"
        color="#2438EB"
      />
    </Card>
  );
};

export default LineGraph;
