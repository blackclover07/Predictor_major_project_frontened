import React from "react";
import { Bar } from "react-chartjs-2";
import ChartCard from "./ChartCard";

const PriceChart = ({ data: apiData }) => {
  const priceList = apiData?.price_listing || [];

  const amazonData = priceList.find(
    (item) => item.source?.toLowerCase() === "amazon",
  );
  const flipkartData = priceList.find(
    (item) => item.source?.toLowerCase() === "flipkart",
  );
  const amazonPrice = amazonData ? parseFloat(amazonData.price) : 0;
  const flipkartPrice = flipkartData ? parseFloat(flipkartData.price) : 0;
  const chartLabels = ["Amazon Quote", "Flipkart Quote"];
  const chartValues = [amazonPrice, flipkartPrice];

  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Price Value (₹)",
        data: chartValues,
        backgroundColor: [
          "#22c55e", // Green (Amazon)
          "#f59e0b", // Amber (Flipkart)
        ],
        borderRadius: 8,
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
        ticks: {
          color: "#9ca3af",
          callback: (value) => "₹" + value.toLocaleString(),
        },
        grid: {
          color: "rgba(75, 85, 99, 0.2)",
          borderDash: [4, 4],
        },
      },
      x: {
        ticks: { color: "#9ca3af" },
        grid: { display: false },
      },
    },
  };
  if (priceList.length === 0) {
    return (
      <ChartCard title="E-Shop Price Comparison" icon={<span>₹</span>}>
        <div className="h-64 flex items-center justify-center text-gray-500 font-mono text-xs">
          // No Live Pricing Vectors Streamed From Django
        </div>
      </ChartCard>
    );
  }

  return (
    <ChartCard title="E-Shop Price Comparison" icon={<span>₹</span>}>
      <div className="h-64">
        <Bar data={data} options={options} />
      </div>

      {/* Dynamic Price Comparison Labels (Side-by-Side) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
        <div className="bg-[#0d0f12]/60 border border-gray-800/40 rounded-lg text-center p-2 text-sm font-semibold text-emerald-400">
          Amazon: ₹{amazonPrice.toLocaleString()}
        </div>
        <div className="bg-[#0d0f12]/60 border border-gray-800/40 rounded-lg text-center p-2 text-sm font-semibold text-amber-400">
          Flipkart: ₹{flipkartPrice.toLocaleString()}
        </div>
      </div>
    </ChartCard>
  );
};

export default PriceChart;
 