"use client";

import Milestone from "@/components/milestone/page";
import Suggestions from "@/components/suggestions/page";
import axios from "axios";
import { useEffect, useState } from "react";
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
import { Card } from "@nextui-org/react";

// Register components for chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Home() {
  const [data, setData] = useState({});
  const [llm, setLlm] = useState(0);
  const [webpages, setWapages] = useState(0);
  const [timestamps, setTimestamps] = useState([]);
  const [llmData, setLlmData] = useState([]);
  const [webpagesData, setWebpagesData] = useState([]);

  useEffect(() => {
    const fetchConsumption = async () => {
      const response = await axios.get("http://10.211.138.1:3001/api/streams");
      const currentTimestamp = new Date().toLocaleTimeString();

      setData(response.data);
      setLlm(response.data.consumptionOfLLMs);
      setWapages(response.data.consumptionOfWebpages);

      // Update graph data
      setTimestamps((prev) => [...prev, currentTimestamp] as any);
      setLlmData((prev) => [...prev, response.data.consumptionOfLLMs] as any);
      setWebpagesData(
        (prev) => [...prev, response.data.consumptionOfWebpages] as any
      );
    };

    fetchConsumption();

    const intervalId = setInterval(fetchConsumption, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const chartData = {
    labels: timestamps,
    datasets: [
      {
        label: "LLM Consumption",
        data: llmData,
        borderColor: "rgb(75, 192, 192)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
      },
      {
        label: "Webpages Consumption",
        data: webpagesData,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: false,
        text: "Real-time Consumption Data",
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Consumption",
        },
      },
    },
  };

  return (
    <div className="">
      <Suggestions />
      <Milestone />
      <div className="w-1192 mx-auto p-4">
        <Card className="p-4">
          <span className="text-center">Real-time Data Consumption</span>
          <Line data={chartData} options={chartOptions as any} />
        </Card>
      </div>
    </div>
  );
}
