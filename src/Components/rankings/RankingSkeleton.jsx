import React from "react";

const RankingSkeleton = () => {
  return (
    <div className="space-y-3 animate-pulse">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="flex items-center justify-between rounded-2xl border border-gray-800 bg-[#171b21] p-4"
        >
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-gray-700" />

            <div className="space-y-2">
              <div className="h-3 w-28 rounded bg-gray-700" />
              <div className="h-2 w-20 rounded bg-gray-800" />
            </div>
          </div>

          <div className="space-y-2 text-right">
            <div className="h-3 w-16 rounded bg-gray-700" />
            <div className="h-2 w-10 rounded bg-gray-800" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RankingSkeleton;
