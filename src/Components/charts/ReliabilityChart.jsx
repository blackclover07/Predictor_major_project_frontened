import React from "react";
import { Bar } from "react-chartjs-2";
import ChartCard from "./ChartCard";

const ReliabilityChart = ({ data: apiData }) => {
  const reviewsList = apiData?.reviews || [];

  // Group real-time telemetry by ecommerce platform channels
  const amazonReviews = reviewsList.filter((r) => r.source === "amazon");
  const flipkartReviews = reviewsList.filter((r) => r.source === "flipkart");

  // Isolate legitimate vectors (where is_fake is explicitly false or score is clean)
  const cleanAmazon = amazonReviews.filter(
    (r) => !r.is_fake && r.fake_score <= 0.9,
  ).length;
  const cleanFlipkart = flipkartReviews.filter(
    (r) => !r.is_fake && r.fake_score <= 0.9,
  ).length;

  // Calculate percentages dynamically (default to 100% if platform has no reviews yet)
  const amazonScore =
    amazonReviews.length > 0
      ? Math.round((cleanAmazon / amazonReviews.length) * 100)
      : 100;

  const flipkartScore =
    flipkartReviews.length > 0
      ? Math.round((cleanFlipkart / flipkartReviews.length) * 100)
      : 100;

  // Render the horizontal bar chart values
  const data = {
    labels: ["Amazon India", "Flipkart Market"],
    datasets: [
      {
        label: "Data Integrity Index (%)",
        data: [amazonScore, flipkartScore],
        backgroundColor: [
          amazonScore > 75
            ? "#22c55e"
            : amazonScore > 40
              ? "#f59e0b"
              : "#ef4444", // Dynamic colors based on safety thresholds
          flipkartScore > 75
            ? "#2563eb"
            : flipkartScore > 40
              ? "#a855f7"
              : "#ef4444",
        ],
        borderRadius: 6,
        barThickness: 24,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    layout: {
      // Adds breathing room on the left side for long labels
      padding: {
        left: 20,
        right: 10,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: "#9ca3af",
          callback: (value) => value + "%",
        },
        grid: {
          color: "rgba(75, 85, 99, 0.15)",
          borderDash: [4, 4],
        },
      },
      y: {
        ticks: {
          color: "#e5e7eb",
          font: { weight: "bold" },
        },
        grid: { display: false },
      },
    },
  };

  return (
    <ChartCard title="E-Shop Reliability " icon={<span>🛡️</span>}>
      <div className="h-56">
        <Bar data={data} options={options} />
      </div>

      <div className="mt-4 p-3 bg-[#0d0f12]/50 border border-gray-800/60 rounded-xl flex items-center justify-between text-xs text-gray-800 font-mono">
        <span>Verified Vectors:</span>
        <span className="text-gray-800">
          Amzn ({cleanAmazon}/{amazonReviews.length}) • Fk ({cleanFlipkart}/
          {flipkartReviews.length})
        </span>
      </div>
    </ChartCard>
  );
};

export default ReliabilityChart;
