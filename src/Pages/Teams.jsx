import React from "react";
import { motion } from "framer-motion";
import TeamCard from "../Components/TeamCard";

const Teams = () => {
  // Staggered layout orchestration variants for cards group
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const textHeaderVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  const mentorVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 30 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 50, damping: 15 } 
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#090b0e] text-gray-100 font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200 p-4 md:p-8 relative overflow-x-hidden">
      
      {/* Decorative High-Tech Glow Backdrops */}
      <div className="absolute top-0 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none" />

      {/* ================= TOP HEADING ================= */}
      <header className="w-full flex flex-col justify-center items-center mt-8 mb-16 text-center space-y-3">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={textHeaderVariants}
          className="fun-font font-black tracking-wider text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-white drop-shadow-[0_4px_15px_rgba(59,130,246,0.15)] uppercase"
        >
          Minds Behind Predictor
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md"
        >
          <span className="text-[10px] font-mono tracking-widest text-blue-300 uppercase font-semibold">
            Core Engineering & Architecture Registry
          </span>
        </motion.div>
      </header>

      {/* ================= MENTOR PANEL SECTION ================= */}
      <section className="w-full flex justify-center items-center mb-20 px-2">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={mentorVariants}
          className="w-full max-w-4xl bg-[#14171c]/40 border border-gray-800/60 backdrop-blur-xl rounded-[2rem] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-center shadow-2xl relative overflow-hidden group"
        >
          {/* Top Graphic Laser Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent" />

          {/* Mentor Profile Image Container Wrapper */}
          <div className="col-span-1 lg:col-span-4 flex justify-center">
            <div className="h-56 w-56 sm:h-60 sm:w-60 rounded-2xl overflow-hidden bg-gray-900 border border-gray-800/60 shadow-lg group-hover:border-amber-500/30 transition-colors duration-300">
              <img
                src="https://storage.googleapis.com/pictographic/thumbnails/lined/SXZGFGDYWdXmjPSvoC0y.png"
                alt="Prof. Inadyuti Dutt"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Mentor Descriptions Data Block */}
          <div className="col-span-1 lg:col-span-8 flex flex-col justify-center text-center lg:text-left space-y-3">
            <div>
              <span className="text-[10px] font-mono tracking-[0.2em] font-bold text-amber-500/80 uppercase block mb-1">
                Project Guidance Hub
              </span>
              <h2 className="fun-font text-3xl sm:text-4xl font-black tracking-wide text-white">
                Prof. Inadyuti Dutt
              </h2>
            </div>
            
            <div className="space-y-1 text-gray-300 text-sm md:text-base font-normal leading-relaxed pl-0 lg:pl-1">
              <p className="font-semibold text-gray-200">
                H.O.D — Department of Computer Application
              </p>
              <p className="text-gray-400 text-xs md:text-sm tracking-wide font-medium">
                B.P. Poddar Institute of Management and Technology
              </p>
            </div>
            
            <div className="pt-2 border-t border-gray-800/40 w-full lg:max-w-md">
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block">
                Role // Academic General Overseer
              </span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= TEAM CARDS GRID SYSTEM ================= */}
      <section className="w-full max-w-7xl mx-auto px-2">
        <div className="flex items-center gap-2 mb-8 justify-center lg:justify-start border-b border-gray-900 pb-4">
          <div className="h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
          <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-gray-400">
            Active System Development Array ({5} Nodes)
          </h3>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center w-full"
        >
          <TeamCard
            m_img="https://storage.googleapis.com/pictographic/thumbnails/flat-modern/2vFGAAfCuatQhKHWN94y.png"
            m_name="Sagar Dey"
            m_role="Backend - Selecting Model, Sentiment Analysis, and Server building"
            m_mail="" m_facebook="" m_linkdin="" m_git=""
          />
          <TeamCard 
            m_img="https://storage.googleapis.com/pictographic/thumbnails/flat-modern/6nrnFehNwrEMOmHKrIYn.png"
            m_name="Subhankar Pal"
            m_role="Collecting Datasets, Data Pre-processing, and Project coordinating"
            m_mail="" m_facebook="" m_linkdin="" m_git=""
          />
          <TeamCard 
            m_img="https://storage.googleapis.com/pictographic/thumbnails/purple/Rz7Fvlcn41WMS58QCSA5.png"
            m_name="Rohan Hazra"
            m_role="Frontend - Building UI and Connecting Backend to Frontend Architecture"
            m_mail="" m_facebook="" m_linkdin="" m_git=""
          />
          <TeamCard 
            m_img="https://storage.googleapis.com/pictographic/thumbnails/flat-modern/mT1G4HZD0PiFB8R8TD1C.png"
            m_name="Suraj Yadav"
            m_role="Dataset Scraping, Data Pre-processing, UI assembly, and API hook binding"
            m_mail="" m_facebook="" m_linkdin="" m_git=""
          />
          <TeamCard 
            m_img="https://storage.googleapis.com/pictographic/thumbnails/purple/T3MPJbTxD4Qc9GJomNVO.png"
            m_name="Sukumar Mondal"
            m_role="UI Refinement, Full-stack integration links, Amazon content scraping pipelines"
            m_mail="" m_facebook="" m_linkdin="" m_git=""
          />
        </motion.div>
      </section>

    </div>
  );
};

export default Teams;