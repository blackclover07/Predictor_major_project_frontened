import React from "react";
import { Bar } from "react-chartjs-2";
import ChartCard from "./ChartCard";

const ReviewChart = ({ data: apiData }) => {
  const reviewsList = apiData?.reviews || [];

  const positiveReviews = reviewsList.filter((r) => r.sentiment_label === "POSITIVE");
  const neutralReviews = reviewsList.filter((r) => r.sentiment_label === "NEUTRAL");
  const negativeReviews = reviewsList.filter((r) => r.sentiment_label === "NEGATIVE");

  // Helper calculation to pull true mathematical means
  const calculateAverageRating = (subset) => {
    if (subset.length === 0) return 0;
    const sum = subset.reduce((acc, current) => acc + current.rating, 0);
    return parseFloat((sum / subset.length).toFixed(1)); 
  };

  const posAvg = calculateAverageRating(positiveReviews);
  const neuAvg = calculateAverageRating(neutralReviews);
  const negAvg = calculateAverageRating(negativeReviews);

  const globalAvg = calculateAverageRating(reviewsList);

  const data = {
    labels: ["Positive Sentiments", "Neutral Feedback", "Negative Feedback", "Global Benchmark"],
    datasets: [
      {
        label: "Average Rating Score",
        data: [posAvg, neuAvg, negAvg, globalAvg],
        backgroundColor: [
          "#22c55e", // Emerald
          "#2563eb", // Blue
          "#ef4444", // Red
          "#a855f7", // Purple
        ],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 5, 
        ticks: { 
          stepSize: 1,
          color: "#9ca3af",
          callback: (value) => value + " ⭐"
        },
        grid: {
          color: "rgba(75, 85, 99, 0.15)",
          borderDash: [4, 4]
        }
      },
      x: {
        ticks: { color: "#9ca3af" },
        grid: { display: false },
      },
    },
  };

  return (
    <ChartCard title="Sentiment Rating Distribution" icon={<span>⭐</span>}>
      <div className="h-56">
        <Bar data={data} options={options} />
      </div>

      {/* Numerical Quick Readout Badge */}
      <div className="mt-4 p-2.5 bg-[#0d0f12]/50 border border-gray-800/60 rounded-xl text-center text-xs text-gray-800 font-mono">
        Aggregated Aggregate Score: <span className="text-amber-400 font-bold">{globalAvg || "0.0"} / 5.0 ⭐</span>
      </div>
    </ChartCard>
  );
};

export default ReviewChart;