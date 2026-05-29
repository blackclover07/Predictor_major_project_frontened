import React from "react";
import PriceChart from "./charts/PriceChart";
import ReliabilityChart from "./charts/ReliabilityChart";
import ReviewChart from "./charts/ReviewChart";

const DashboardCharts = ({ apiData }) => {
  const product = apiData?.product || {
    name: "System Target",
    brand: "Unknown",
  };

  return (
    <div className="w-full space-y-6">
      {/* ================= PRODUCT HEADER STATUS ================= */}
      <div className="w-full bg-[#1c232e]/50 border border-gray-800/40 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 font-bold block mb-0.5">
            Analyzing Target Array
          </span>
          <h3 className="text-white text-lg font-black tracking-wide">
            {product.name}{" "}
            <span className="text-gray-500 font-normal text-sm">
              ({product.brand})
            </span>
          </h3>
        </div>
        <div className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-lg font-mono text-[10px] text-emerald-400 font-bold uppercase tracking-wide">
          Status // Live
        </div>
      </div>

      {/* ================= UPDATED GRID LAYOUT MATRIX ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xl:gap-8 w-full items-stretch">
        {/* 1. Price Chart takes full width top row (Spans all 3 grid tracks) */}
        <div className="grid-cols-1 lg:col-span-3 bg-[#14171c]/40 border border-gray-800/60 rounded-2xl p-5 shadow-xl backdrop-blur-sm">
          <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
            // Market Price Mapping Matrix
          </p>
          <PriceChart data={apiData} />
        </div>

        {/* 2. Reliability Chart: Removed min-w-[400px] to allow standard grid tracking layout */}
        <div className="grid-cols-1 lg:col-span-1 bg-[#14171c]/40 border border-gray-800/60 rounded-2xl p-5 shadow-xl backdrop-blur-sm flex flex-col justify-between">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
              // Platform Trust Index
            </p>
            <ReliabilityChart data={apiData} />
          </div>
        </div>

        {/* 3. Review Chart takes remaining 2 columns cleanly with no overlap */}
        <div className="grid-cols-1 lg:col-span-2 bg-[#14171c]/40 border border-gray-800/60 rounded-2xl p-5 shadow-xl backdrop-blur-sm flex flex-col justify-between">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-gray-400 mb-3">
              // Consumer Feedback Frequency
            </p>
            <ReviewChart data={apiData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCharts;
