import React, { useState, useEffect } from "react";

const NotFound = () => {
  const [countdown, setCountdown] = useState(10);

  // Automatically sends the user home if they go AFK reading the error logs
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => (prev > 1 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (countdown === 0) {
      window.location.href = "/"; // Fallback native redirect path
    }
  }, [countdown]);

  return (
    <div className="min-h-screen w-full bg-[#0d0f12] text-gray-100 font-sans antialiased p-4 flex items-center justify-center selection:bg-rose-500/30 selection:text-rose-200">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-rose-500 via-amber-500 to-orange-500 opacity-80 animate-pulse" />
      
      {/* Background Ambient Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Terminal Shell Container */}
      <div className="max-w-xl w-full bg-[#14171c]/90 border border-gray-800/60 rounded-3xl p-6 md:p-8 shadow-2xl backdrop-blur-md relative overflow-hidden group">
        
        {/* Mock Window Controls Header */}
        <header className="flex items-center justify-between border-b border-gray-800/60 pb-4 mb-6">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-rose-500/70" />
            <span className="w-3 h-3 rounded-full bg-amber-500/70" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/70" />
          </div>
          <span className="text-xs bg-gray-800 border border-gray-700/50 text-rose-400 font-mono px-2 py-0.5 rounded-md uppercase tracking-tight font-bold animate-pulse">
            CRITICAL EXCEPTION
          </span>
        </header>

        {/* Visual Graphic Unit */}
        <div className="flex flex-col items-center justify-center text-center space-y-6 my-4">
          <div className="relative flex items-center justify-center h-28 w-28">
            <div className="absolute p-12 bg-rose-500/10 border-2 border-rose-500/30 rounded-full animate-ping opacity-60" />
            <div className="absolute p-8 bg-amber-500/10 border border-amber-500/20 rounded-full animate-pulse" />
            <span className="text-5xl animate-bounce transform duration-1000 select-none">🛸</span>
          </div>

          {/* Content Block */}
          <div className="space-y-3">
            <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-400 to-amber-400 tracking-tighter drop-shadow-md">
              404
            </h1>
            <h2 className="text-xl font-bold text-white tracking-wide uppercase">
              Route Vector Vaporized
            </h2>
            
            {/* The Funny Code Log Diagnostics */}
            <div className="bg-[#0d0f12]/60 border border-gray-900 rounded-2xl p-4 text-left font-mono text-xs text-gray-400 space-y-1.5 shadow-inner">
              <p className="text-rose-500 font-bold">&gt; EXECUTION_ERROR_UNKNOWN_SECTOR</p>
              <p>&gt; Combing coordinates... <span className="text-gray-600">[FAILED]</span></p>
              <p>&gt; Sending search probes... <span className="text-amber-400">Probes ghosted us.</span></p>
              <p>&gt; Conclusion: The page you are looking for was either pulled into a black hole or never existed in this timeline.</p>
            </div>
          </div>
        </div>

        {/* Action Button Segment */}
        <div className="mt-8 pt-4 border-t border-gray-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 w-full">
          <div className="text-xs text-gray-500 font-mono text-center sm:text-left">
            Initiating automatic hyper-jump in <span className="text-amber-400 font-bold">{countdown}s</span>...
          </div>

          <a
            href="/"
            className="w-full sm:w-auto font-semibold text-sm py-3 px-6 rounded-2xl text-white bg-gradient-to-r from-rose-600 to-orange-600 hover:from-rose-500 hover:to-orange-500 shadow-[0_4px_20px_rgba(225,29,72,0.2)] hover:shadow-[0_4px_25px_rgba(225,29,72,0.35)] transition-all duration-300 active:scale-[0.97] flex items-center justify-center gap-2 tracking-wide cursor-pointer"
          >
            <i className="ri-home-4-line text-base"></i>
            <span>Abort Mission & Go Home</span>
          </a>
        </div>
        
      </div>
    </div>
  );
};

export default NotFound;