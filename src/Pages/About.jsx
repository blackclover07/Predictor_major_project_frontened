import React from "react";
import { motion } from "framer-motion";
import AboutCard from "../Components/AboutCard";
import Rev_AboutCard from "../Components/Rev_AboutCard";
import aboutData from "../Components/AboutData";

const About = () => {
  // Cinematic top tracking fade animation
  const headerVariants = {
    hidden: { opacity: 0, y: -25 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 60, damping: 15 } 
    }
  };

  // High-fidelity dynamic sliding variant generation based on card index
  const getSlideVariants = (isEven) => ({
    hidden: { 
      opacity: 0, 
      x: isEven ? -60 : 60, // Smooth lateral entries based on layout orientation
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        stiffness: 45,
        damping: 14,
        duration: 0.6
      } 
    }
  });

  return (
    <div className="min-h-screen w-full bg-[#090b0e] text-gray-100 font-sans antialiased selection:bg-blue-500/30 selection:text-blue-200 py-8 relative overflow-x-hidden">
      
      {/* High-Tech Background Decorative Blur Fields */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none z-0" />

      {/* ================= TITLE AREA ================= */}
      <header className="w-full flex flex-col justify-center items-center mt-6 mb-16 text-center space-y-3 relative z-10">
        <motion.h1 
          initial="hidden"
          animate="visible"
          variants={headerVariants}
          className="fun-font font-black tracking-wider text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-white drop-shadow-[0_4px_15px_rgba(59,130,246,0.15)] uppercase"
        >
          About The Predictor
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md"
        >
          <span className="text-[10px] font-mono tracking-widest text-blue-300 uppercase font-semibold">
            System Specifications & Core Paradigm
          </span>
        </motion.div>
      </header>

      {/* ================= DATA GRID LIST TRACK ================= */}
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-12 lg:gap-16 p-4 md:p-6 relative z-10 w-full">
        {aboutData.map((item, index) => {
          const isEven = index % 2 === 0;
          const cardAnimation = getSlideVariants(isEven);
          
          return (
            <motion.div
              key={item.id}
              className="w-full flex justify-center"
              variants={cardAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }} // Triggers when 12% of the row block breaches the screen view
            >
              {isEven ? (
                <AboutCard
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  features={item.features}
                  howItWork={item.howItWork}
                  goal={item.goal}
                />
              ) : (
                <Rev_AboutCard
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  features={item.features}
                  howItWork={item.howItWork}
                  goal={item.goal}
                />
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default About;