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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CarLineGraph: React.FC = () => {
  // State to manage the selected period
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  // Define datasets for different periods
  const datasets = {
    week: [20, 25, 30, 15, 40, 35, 45], // Daily usage for 1 week
    month: [250, 300, 280, 320, 310, 290, 330, 340, 350, 360, 370, 380], // Daily usage for 1 month
    year: [
      3000, 3200, 3100, 3400, 3500, 3600, 3700, 3800, 3900, 4000, 4100, 4200,
    ], // Monthly usage for 1 year
  };

  // Define labels for each period
  const labels = {
    week: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    month: [
      "Week 1",
      "Week 2",
      "Week 3",
      "Week 4",
      "Week 5",
      "Week 6",
      "Week 7",
      "Week 8",
      "Week 9",
      "Week 10",
      "Week 11",
      "Week 12",
    ],
    year: [
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
      "Dec",
    ],
  };

  // Chart data based on the selected period
  const data = {
    labels: labels[selectedPeriod as keyof typeof labels],
    datasets: [
      {
        label: "Car usage",
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
            selectedPeriod === "week"
              ? "Days of the Week"
              : selectedPeriod === "month"
              ? "Weeks of the Month"
              : "Months",
        },
      },
      y: {
        min: 0,
        title: {
          display: true,
          text: "Usage (km)", // Assuming usage is in some unit
        },
      },
    },
  };

  return (
    <Card
      style={{ width: "889px", height: "410px" }}
      className="pt-5 pb-5 pl-3 pr-3"
    >
      <div className="flex gap-3 justify-between items-center">
        <span>Car Usage</span>
        <Select
          label="Period"
          placeholder="Select a period"
          selectedKeys={new Set([selectedPeriod])} // Bind selected value here
          className="max-w-xs"
          size="sm"
          onSelectionChange={(key) => setSelectedPeriod(key.currentKey as any)} // Update state on change
        >
          <SelectItem key="week">1 Week</SelectItem>
          <SelectItem key="month">1 Month</SelectItem>
          <SelectItem key="year">1 Year</SelectItem>
        </Select>
      </div>
      <Line
        data={data as any}
        options={options}
        className="pb-10"
        color="#2438EB"
      />
    </Card>
  );
};

export default CarLineGraph;
