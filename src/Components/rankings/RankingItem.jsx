import React from "react";

const RankingItem = ({ rank, shop }) => {
  const getStyles = () => {
    switch (rank) {
      case 1:
        return {
          glow: "shadow-[0_0_25px_rgba(234,179,8,0.25)]",
          ring: "border-yellow-400/40",
          badge: "bg-yellow-500/20 text-yellow-300",
          icon: "👑",
        };

      case 2:
        return {
          glow: "shadow-[0_0_20px_rgba(156,163,175,0.15)]",
          ring: "border-gray-300/30",
          badge: "bg-gray-400/20 text-gray-200",
          icon: "🥈",
        };

      case 3:
        return {
          glow: "shadow-[0_0_20px_rgba(249,115,22,0.15)]",
          ring: "border-orange-400/30",
          badge: "bg-orange-500/20 text-orange-300",
          icon: "🥉",
        };

      default:
        return {
          glow: "",
          ring: "border-gray-800",
          badge: "bg-gray-700/20 text-gray-300",
          icon: `#${rank}`,
        };
    }
  };

  const style = getStyles();

  return (
    <div
      className={`
        relative rounded-2xl p-5 bg-[#0d0f12] 
        border ${style.ring} 
        hover:border-blue-500/40 
        transition-all duration-300 
        ${style.glow}
      `}
    >
      {/* TOP ROW */}
      <div className="flex justify-between items-start mb-4">

        {/* Rank */}
        <div className="flex items-center gap-2">
          <span className="text-lg">{style.icon}</span>
          <span className="text-xs text-gray-400">Rank #{rank}</span>
        </div>

        {/* Score badge */}
        <span
          className={`text-xs px-3 py-1 rounded-full font-semibold ${style.badge}`}
        >
          {shop.avg_score.toFixed(2)}
        </span>
      </div>

      {/* SHOP NAME */}
      <h3 className="text-white font-semibold text-base capitalize mb-3">
        {shop.source}
      </h3>

      {/* METRICS */}
      <div className="space-y-2 text-xs text-gray-400">
        <div className="flex justify-between">
          <span>Reviews</span>
          <span className="text-white">{shop.review_count}</span>
        </div>

        <div className="flex justify-between">
          <span>Positive</span>
          <span className="text-green-400">
            {shop.positive_total.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Negative</span>
          <span className="text-red-400">
            {shop.negative_total.toFixed(2)}
          </span>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="mt-4 h-1 w-full bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500"
          style={{ width: `${shop.avg_score * 100}%` }}
        />
      </div>
    </div>
  );
};

export default RankingItem;