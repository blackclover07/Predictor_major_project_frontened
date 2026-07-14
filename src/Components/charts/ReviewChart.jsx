import React from "react";
import { Bar } from "react-chartjs-2";
import ChartCard from "./ChartCard";

const ReviewChart = ({ data: apiData }) => {
  const reviewsList = apiData?.reviews || [];

  const grouped = reviewsList.reduce((acc, review) => {
    if (!acc[review.source]) {
      acc[review.source] = {
        positive: 0,
        neutral: 0,
        negative: 0,
        total: 0,
      };
    }

    acc[review.source].total++;

    if (review.sentiment_label === "POSITIVE") acc[review.source].positive++;

    if (review.sentiment_label === "NEUTRAL") acc[review.source].neutral++;

    if (review.sentiment_label === "NEGATIVE") acc[review.source].negative++;

    return acc;
  }, {});

  const chartData = Object.entries(grouped).map(([shop, stats]) => ({
    shop,
    total: stats.total,

    positiveCount: stats.positive,
    neutralCount: stats.neutral,
    negativeCount: stats.negative,

    positive: +((stats.positive / stats.total) * 100).toFixed(1),
    neutral: +((stats.neutral / stats.total) * 100).toFixed(1),
    negative: +((stats.negative / stats.total) * 100).toFixed(1),
  }));
  chartData.sort((a, b) => b.total - a.total);
  const labels = chartData.map(
    (item) => `${item.shop.toUpperCase()} (${item.total})`,
  );

  const positiveRadius = chartData.map((item) => {
    if (item.neutral === 0 && item.negative === 0) {
      return {
        topRight: 8,
        bottomRight: 8,
        topLeft: 0,
        bottomLeft: 0,
      };
    }
    return 0;
  });

  const neutralRadius = chartData.map((item) => {
    if (item.neutral > 0 && item.negative === 0) {
      return {
        topRight: 8,
        bottomRight: 8,
        topLeft: 0,
        bottomLeft: 0,
      };
    }
    return 0;
  });

  const negativeRadius = chartData.map((item) => {
    if (item.negative > 0) {
      return {
        topRight: 8,
        bottomRight: 8,
        topLeft: 0,
        bottomLeft: 0,
      };
    }
    return 0;
  });

  // Helper calculation to pull true mathematical means

  const data = {
    labels,
    datasets: [
      {
        label: "Positive",
        data: chartData.map((item) => item.positive),
        backgroundColor: "#22c55e",
        barThickness: 24,
        borderRadius:positiveRadius,
      },
      {
        label: "Neutral",
        data: chartData.map((item) => item.neutral),
        backgroundColor: "#facc15",
        barThickness: 24,
        borderRadius:neutralRadius,
      },
      {
        label: "Negative",
        data: chartData.map((item) => item.negative),
        backgroundColor: "#ef4444",
        barThickness: 24,
        borderRadius:negativeRadius,
      },
    ],
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: "#cbd5e1",
          usePointStyle: true,
          pointStyle: "circle",
          boxWidth: 12,
          boxHeight: 12,
          padding: 25,
          font: {
            size: 13,
            weight: "600",
          },
        },
      },

      tooltip: {
        callbacks: {
          label: (context) => {
            const item = chartData[context.dataIndex];

            let count = 0;

            if (context.dataset.label === "Positive")
              count = item.positiveCount;

            if (context.dataset.label === "Neutral") count = item.neutralCount;

            if (context.dataset.label === "Negative")
              count = item.negativeCount;

            return `${context.dataset.label}: ${context.raw}% (${count} reviews)`;
          },

          afterBody: (context) => {
            const item = chartData[context[0].dataIndex];

            return [`Total Reviews: ${item.total}`];
          },
        },
      },
    },

    scales: {
      x: {
        stacked: true,
        beginAtZero: true,
        max: 100,
        ticks: {
          color: "#9ca3af",
          callback: (value) => `${value}%`,
        },
        grid: {
          color: "rgba(75,85,99,.15)",
        },
      },

      y: {
        stacked: true,
        ticks: {
          color: "#94a3b8",
          font: {
            weight: "bold",
          },
        },
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <ChartCard title="Sentiment Distribution by E-Shop">
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
      </div>
    </ChartCard>
  );
};

export default ReviewChart;
