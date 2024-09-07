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

const FoodGraph: React.FC = () => {
  // State to manage the selected period
  const [selectedPeriod, setSelectedPeriod] = useState("week");

  // Define datasets for different periods
  const datasets = {
    week: [5, 10, 15, 20, 25, 30, 35],
    month: [150, 140, 130, 120, 110, 100, 90, 80, 70, 60, 50, 40],
    year: [1200, 1150, 1100, 1050, 1000, 950, 900],
  };

  // Define labels for each period
  const labels = {
    week: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
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
      "Dec",
    ],
    year: ["2018", "2019", "2020", "2021", "2022", "2023", "2024"],
  };

  // Chart data based on the selected period
  const data = {
    labels: labels[selectedPeriod as keyof typeof labels],
    datasets: [
      {
        label: "Food Waste (grams)",
        data: datasets[selectedPeriod as keyof typeof datasets],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
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
              ? "Days"
              : selectedPeriod === "month"
              ? "Months"
              : "Years",
        },
      },
      y: {
        min: 0,
        max: selectedPeriod === "year" ? 1300 : 150,
        title: {
          display: true,
          text: "Food Waste (kg)",
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
        <span>Food Waste over Time</span>
        <Select
          label="Period"
          placeholder="Select a period"
          selectedKeys={new Set([selectedPeriod])} // Bind selected value here
          className="max-w-xs"
          size="sm"
          onSelectionChange={(key) => setSelectedPeriod(key.currentKey as any)} // Update state on change
        >
          <SelectItem key="week">Week</SelectItem>
          <SelectItem key="month">Month</SelectItem>
          <SelectItem key="year">Year</SelectItem>
        </Select>
      </div>
      <Line
        data={data as any}
        options={options}
        className="pb-5"
        color="#FF6384"
      />
    </Card>
  );
};

export default FoodGraph;
