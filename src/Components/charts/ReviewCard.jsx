import React from "react";

const ReviewCard = ({ apiData }) => {
  const reviewsList = apiData?.reviews || [];

  // checking.........
  if (reviewsList.length === 0) {
    return (
      <div className="w-full bg-[#14171c]/90 border border-gray-800/60 rounded-3xl p-6 text-center text-gray-500 font-mono text-sm">
        <i className="ri-folder-shield-2-line text-2xl mb-2 block text-gray-600"></i>
        Awaiting analysis execution to stream text logs...
      </div>
    );
  }

  return (
    <div className="w-full bg-[#14171c]/90 border border-gray-800/60 rounded-3xl p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 opacity-40" />
      
      {/* Header telemetry info */}
      <header className="flex items-center justify-between border-b border-gray-800/60 pb-4 mb-5">
        <div className="flex items-center gap-2">
          <i className="ri-discuss-line text-blue-400 text-lg"></i>
          <h4 className="text-sm font-bold tracking-wider uppercase text-gray-300 font-sans">
            Processed Common Reviews (Showing Max 6)
          </h4>
        </div>
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-tight">
          NLP Tokenizer V2.1
        </span>
      </header>

      {/* ================= REVIEWS STREAM GRID ================= */}
    
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviewsList.slice(0, 6).map((review, idx) => {
          
          const isPositive = review.sentiment_label === "POSITIVE";
          const isNegative = review.sentiment_label === "NEGATIVE";
          
          const sentimentBadgeColor = isPositive 
            ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
            : isNegative
            ? "bg-rose-500/10 border-rose-500/30 text-rose-400"
            : "bg-amber-500/10 border-amber-500/30 text-amber-400";

          return (
            <div 
              key={idx} 
              className="bg-[#0d0f12]/60 border border-gray-800/40 rounded-2xl p-4 flex flex-col justify-between hover:border-gray-700/60 transition-all duration-300 group"
            >
              {/* Card Meta Top Row */}
              <div className="flex justify-between items-start gap-2 mb-3">
                <div>
                  <h5 className="text-sm font-bold text-gray-200 capitalize flex items-center gap-1.5">
                    <i className="ri-user-3-line text-gray-500 text-xs"></i>
                    {review.reviewer_name || "Anonymous"}
                  </h5>
                  <span className="text-[10px] text-gray-500 font-mono block mt-0.5">
                    {review.review_date} • via <span className="text-blue-400 uppercase font-bold">{review.source}</span>
                  </span>
                </div>
                
                {/* Sentiment Rating Score */}
                <div className="text-right">
                  <div className="flex items-center justify-end text-amber-400 text-xs gap-0.5">
                    {Array.from({ length: review.rating || 5 }).map((_, i) => (
                      <i key={i} className="ri-star-fill"></i>
                    ))}
                  </div>
                  <span className={`inline-block mt-1 text-[9px] font-mono font-black px-2 py-0.5 rounded border uppercase tracking-wider ${sentimentBadgeColor}`}>
                    {review.sentiment_label}
                  </span>
                </div>
              </div>

              {/* Central Review Core Body text */}
              <p className="text-xs text-gray-400 leading-relaxed italic font-sans my-2 bg-[#14171c]/30 p-2.5 rounded-xl border border-gray-900/40">
                "{review.review_text}"
              </p>

              {/* Bot / Real verification baseline footers */}
              <div className="mt-3 pt-2.5 border-t border-gray-800/40 flex justify-between items-center text-[10px] font-mono">
                <div className="flex items-center gap-1">
                  <span className="text-gray-500">Anomaly Indicator:</span>
                  <span className={`font-bold ${review.fake_score > 0.9 ? "text-red-400" : "text-emerald-400"}`}>
                    {(review.fake_score * 100).toFixed(1)}%
                  </span>
                </div>
                
                {review.fake_score > 0.5 ? (
                  <span className="text-red-400 font-bold bg-red-500/10 border border-red-500/20 px-1.5 py-0.2 rounded text-[9px]">
                    ⚠️ Untrusted Profile
                  </span>
                ) : (
                  <span className="text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.2 rounded text-[9px]">
                    ✓ Verified Organic
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ReviewCard;