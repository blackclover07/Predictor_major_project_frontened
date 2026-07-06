import React from "react";
import RankingItem from "./RankingItem";
import RankingSkeleton from "./RankingSkeleton";

const RankingCard = ({
  title = "Recommended E-Shops",
  rankings = [],
  loading = false,
}) => {
  return (
    <div className="bg-[#14171c]/90 border border-gray-800/60 rounded-3xl shadow-2xl p-6 backdrop-blur-md">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-gray-800 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center">
            <i className="ri-trophy-line text-yellow-400 text-xl"></i>
          </div>

          <div>
            <h3 className="text-white font-bold tracking-wide">{title}</h3>

            <p className="text-xs text-gray-500">
              Ranked using weighted sentiment score
            </p>
          </div>
        </div>

        {!loading && rankings.length > 0 && (
          <span className="text-xs text-gray-500">
            {rankings.length} Results
          </span>
        )}
      </div>

      {/* Loading */}

      {loading && <RankingSkeleton />}

      {/* Empty */}

      {!loading && rankings.length === 0 && (
        <div className="py-14 text-center">
          <i className="ri-trophy-line text-5xl text-gray-600"></i>

          <p className="mt-4 text-gray-400">Rankings will appear here.</p>
        </div>
      )}

      {/* Rankings */}

      {!loading && rankings.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rankings.map((shop, index) => (
            <RankingItem key={shop.source} rank={index + 1} shop={shop} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RankingCard;
