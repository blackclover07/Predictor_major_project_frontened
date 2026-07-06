import React from "react";
import DashboardCharts from "../../Components/DashboardCharts";

const AnalyticsPanel = ({
  predictionData,
  isLoading,
  isUnavailable,
  productName,
}) => {
  return (
    <div className="lg:col-span-8 bg-[#14171c]/90 border border-gray-800/60 rounded-3xl shadow-2xl p-6 relative overflow-hidden backdrop-blur-md min-h-[560px] flex flex-col justify-between">
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <header className="flex items-center justify-between border-b border-gray-800/60 pb-4 mb-6 w-full">
        <div className="flex items-center gap-3">
          <div
            className={`h-2.5 w-2.5 rounded-full ${predictionData ? "bg-emerald-500" : isUnavailable ? "bg-rose-500" : isLoading ? "bg-amber-500 animate-ping" : "bg-gray-600"}`}
          />
          <h4 className="text-sm font-bold tracking-wider uppercase text-gray-400 block-font">
            Analytical Monitor
          </h4>
        </div>
        <span className="text-[10px] bg-gray-800 border border-gray-700/50 text-gray-300 font-mono px-2 py-0.5 rounded-md uppercase tracking-tight">
          {predictionData
            ? "Data Stream Link Active"
            : isUnavailable
              ? "Data Nullified"
              : "Standby Array"}
        </span>
      </header>

      <div className="w-full flex-grow flex items-center justify-center relative z-10 overflow-hidden rounded-xl bg-[#0d0f12]/40 border border-gray-900/50 p-2 md:p-4">
        {/* Loading Display */}
        {isLoading && (
          <div className="flex flex-col items-center justify-center text-center space-y-4 py-20 animate-fade-in">
            <div className="relative flex items-center justify-center h-20 w-20">
              <div className="absolute p-8 bg-blue-500/10 border-2 border-blue-500/40 rounded-full animate-ping opacity-70" />
              <div className="absolute p-5 bg-indigo-500/20 border border-indigo-400/30 rounded-full animate-pulse" />
              <i className="ri-radar-line text-3xl text-blue-400 animate-spin"></i>
            </div>
            <div className="space-y-1">
              <h5 className="text-white font-mono text-sm tracking-widest uppercase font-bold animate-pulse">
                Running Prediction Core
              </h5>
              <p className="text-xs text-gray-500 max-w-xs">
                Querying data frames, validating review arrays, and mapping
                metrics...
              </p>
            </div>
          </div>
        )}

        {/* Zero Review/Missing Data Filter Exception */}
        {!isLoading && isUnavailable && (
          <div className="flex flex-col items-center justify-center text-center space-y-4 py-16 max-w-sm mx-auto">
            <div className="h-20 w-20 bg-amber-500/10 border border-amber-500/30 rounded-full flex items-center justify-center text-amber-400 shadow-lg text-4xl animate-bounce">
              👻
            </div>
            <div className="space-y-2">
              <h5 className="text-amber-400 font-sans font-black text-lg tracking-wide uppercase">
                404: Ghost Town Detected
              </h5>
              <p className="text-xs text-gray-400 leading-relaxed font-mono">
                Our AI engines combed through the deep web, but
                <span className="text-white font-bold block my-1">
                  "{productName}"
                </span>
                has exactly zero reviews. It's either so cutting edge that
                nobody owns it yet, or it is hiding from us!
              </p>
            </div>
          </div>
        )}

        {/* Standby View */}
        {!isLoading && !predictionData && !isUnavailable && (
          <div className="flex flex-col items-center justify-center text-center space-y-5 py-20 opacity-80">
            <div className="h-16 w-16 bg-gray-800/40 border border-gray-700/40 rounded-2xl flex items-center justify-center text-gray-500 shadow-inner">
              <i className="ri-terminal-window-line text-3xl"></i>
            </div>
            <div className="space-y-1.5">
              <h5 className="text-gray-300 font-sans font-bold text-base tracking-wide">
                Awaiting Engine Parameters
              </h5>
              <p className="text-xs text-gray-500 max-w-sm leading-relaxed">
                Select a target category, item type, and target name in the
                configurator panel, then run prediction to generate visual
                charts.
              </p>
            </div>
          </div>
        )}

        {/* Main Active Evaluation Rendering Frame */}
        {!isLoading && predictionData && !isUnavailable && (
          <div className="w-full animate-fade-in">
            <DashboardCharts apiData={predictionData} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AnalyticsPanel;
