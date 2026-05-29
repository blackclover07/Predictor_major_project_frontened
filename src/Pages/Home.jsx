import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

// Component layout child asset imports
import Home_banner1 from "./Home_banner1";
import Home_banner2 from "./Home_banner2";
import Home_banner3 from "./Home_banner3";
import Home_banner4 from "./Home_banner4";
import '../index.css';

// 1. HIGH-TECH MOCKUP LAYOUT CONTAINER FOR THE SCREEN LOADING PHASE
const HomeSkeleton = () => {
  return (
    // Base and highlight colors tuned to sync with your cyber dark workspace palette
    <SkeletonTheme baseColor="#111419" highlightColor="#1d222a">
      <div className="w-full flex flex-col gap-16 md:gap-24 pb-24">
        
        {/* Banner 1 Mirror: Hero Text & Canvas area */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 pt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <Skeleton height={50} width="70%" borderRadius="0.75rem" />
            <Skeleton height={20} width="90%" count={2} borderRadius="0.5rem" />
            <Skeleton height={45} width="160px" borderRadius="2rem" className="mt-4" />
          </div>
          <div className="w-full">
            <Skeleton height={380} borderRadius="2rem" />
          </div>
        </div>

        {/* Banner 2 Mirror: Features Metric Block */}
        <div className="max-w-7xl mx-auto w-full px-4 md:px-8">
          <div className="bg-[#14171c]/40 border border-gray-800/40 rounded-[2.5rem] p-8 space-y-6">
            <div className="flex justify-center"><Skeleton height={24} width="30%" /></div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {[1, 2, 3].map((card) => (
                <div key={card} className="p-4 bg-[#0d0f12]/40 rounded-2xl border border-gray-800/20">
                  <Skeleton circle width={44} height={44} className="mb-3" />
                  <Skeleton height={18} width="60%" className="mb-2" />
                  <Skeleton height={12} width="90%" count={2} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Banner 3 Mirror: Split Information Panel */}
        <div className="w-full max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Skeleton height={320} borderRadius="2rem" />
          </div>
          <div className="space-y-4 order-1 md:order-2">
            <Skeleton height={36} width="50%" borderRadius="0.5rem" />
            <Skeleton height={14} width="95%" count={3} />
          </div>
        </div>

      </div>
    </SkeletonTheme>
  );
};

// ================= THE MAIN EXPORT DOM CONFIGURATION =================
const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating system resource/image buffering cycle
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Structural entrance motion adjustments
  const sectionFadeVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 20 } 
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#090b0e] text-gray-100 font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200 relative overflow-x-hidden">
      
      {/* Ambient Cyber Light Blobs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute top-[40vh] right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* Dynamic Render Switch track */}
      <div className="relative z-10 p-4 md:p-6 lg:p-8">
        {isLoading ? (
          <HomeSkeleton />
        ) : (
          <div className="flex flex-col gap-16 md:gap-24 lg:gap-32 pb-24">
            
            <motion.section initial="hidden" animate="visible" variants={sectionFadeVariants} className="w-full">
              <Home_banner1 />
            </motion.section>

            <motion.section 
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={sectionFadeVariants}
              className="max-w-7xl mx-auto w-full"
            >
              <div className="bg-[#14171c]/40 border border-gray-800/40 rounded-[2.5rem] p-4 sm:p-8 backdrop-blur-xl shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />
                <Home_banner2 />
              </div>
            </motion.section>

            <motion.section initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={sectionFadeVariants} className="w-full">
              <Home_banner3 />
            </motion.section>

            <motion.section 
              initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={sectionFadeVariants}
              className="max-w-7xl mx-auto w-full"
            >
              <div className="bg-gradient-to-br from-[#14171c]/80 to-[#0d0f12]/90 border border-gray-800/60 rounded-[2.5rem] p-6 sm:p-12 shadow-2xl relative overflow-hidden">
                <Home_banner4 />
              </div>
            </motion.section>

          </div>
        )}
      </div>
    </div>
  );
};

export default Home;