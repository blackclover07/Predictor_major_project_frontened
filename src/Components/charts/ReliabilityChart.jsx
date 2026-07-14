import React from "react";
import { Bar } from "react-chartjs-2";
import ChartCard from "./ChartCard";

const ReliabilityChart = ({ data: apiData }) => {
  const reviewsList = apiData?.reviews || [];

  // Group real-time telemetry by ecommerce platform channels
  const grouPed = reviewsList.reduce((acc, review) => {
    if (!acc[review.source]) {
      acc[review.source] = {
        total: 0,
        fake: 0,
        genuine: 0,
      };
    }

    acc[review.source].total++;

    if (review.is_fake) {
      acc[review.source].fake++;
    } else {
      acc[review.source].genuine++;
    }
    return acc;
  }, {});

  const chartData = Object.entries(grouPed).map(([shop, stats]) => ({
    shop,
    fake: stats.fake,
    genuine: stats.genuine,
    total: stats.total,
    authenticity: Math.round((stats.genuine / stats.total) * 100),
  }));

  chartData.sort((a, b) => b.total - a.total);
  const labels = chartData.map((item) => item.shop.toUpperCase());

  const data = {
    labels,
    datasets: [
      {
        label: "Genuine",
        data: chartData.map((item) => item.genuine),
        backgroundColor: "#22c55e",
        borderRadius: 5,
      },
      {
        label: "Fake",
        data: chartData.map((item) => item.fake),
        backgroundColor: "#ef4444",
        borderRadius: 5,
      },
    ],
  };
  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#94a3b8",
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
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
        stacked: true,
        beginAtZero: true,
        ticks: {
          color: "#9ca3af",
          callback: (value) => value,
        },
        grid: {
          color: "rgba(75, 85, 99, 0.15)",
          borderDash: [4, 4],
        },
      },
      y: {
        stacked: true,
        ticks: {
          color: "#94a3b8",
          font: { weight: "bold" },
        },
        grid: { display: false },
      },
    },
  };

  return (
    <ChartCard title="Review Authenticity Analysis" icon={<span>🛡️</span>}>
      <div
        className="overflow-y-auto"
        style={{
          maxHeight: "650px",
        }}
      >
        <div
          style={{
            height: `${chartData.length * 38}px`,
            minHeight: "300px",
          }}
        >
          <Bar data={data} options={options} />
        </div>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
          {chartData.map((item) => (
            <div
              key={item.shop}
              className="rounded-xl border border-gray-800 bg-[#0d0f12] p-4"
            >
              <p className="text-xs uppercase tracking-wider text-gray-500">
                {item.shop}
              </p>

              <h2 className="mt-2 text-3xl font-bold text-white">
                {item.total}
              </h2>

              <p className="text-sm text-gray-400">Reviews</p>
            </div>
          ))}
        </div>
      </div>
    </ChartCard>
  );
};

export default ReliabilityChart;
