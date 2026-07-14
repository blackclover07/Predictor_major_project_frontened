import React from "react";
import { Bar } from "react-chartjs-2";
import ChartCard from "./ChartCard";

const PriceChart = ({ data: apiData }) => {
  const priceList = apiData?.price_listing || [];
  const chartLabels = priceList.map((item) => item.source);
  const chartValues = priceList.map((item) => parseFloat(item.price));
  const colors = [
    "#3B82F6", // Blue
    "#10B981", // Emerald
    "#F59E0B", // Amber
    "#8B5CF6", // Violet
    "#EC4899", // Pink
    "#06B6D4", // Cyan
    "#EF4444", // Red
    "#84CC16", // Lime
    "#F97316", // Orange
    "#14B8A6", // Teal
    "#6366F1", // Indigo
    "#A855F7", // Purple
    "#EAB308", // Yellow
  ];
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "Price Value (₹)",
        data: chartValues,
        backgroundColor: chartLabels.map((_, i) => colors[i % colors.length]),
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

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-5">
        {priceList.map((shop, index) => (
          <div
            key={shop.source}
            className="bg-[#0d0f12]/70 border border-gray-800 rounded-xl p-3"
          >
            <div className="flex justify-between items-center">
              <span
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor: colors[index % colors.length],
                }}
              />

              <span className="text-xs uppercase text-gray-500">
                {shop.source}
              </span>
            </div>

            <h3 className="mt-3 text-lg font-bold text-white">
              ₹{Number(shop.price).toLocaleString()}
            </h3>
          </div>
        ))}
      </div>
    </ChartCard>
  );
};

export default PriceChart;
