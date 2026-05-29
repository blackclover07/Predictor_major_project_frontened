import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Login = () => {
  // Local state tracking to capture operator inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("Initializing Auth Protocol for:", username);
    // Add your backend authentication connection logic here
  };

  // Stagger arrangement for sequential, high-tech field entry
  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const techFadeVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 15 } 
    }
  };

  return (
    <div className='min-h-screen w-full bg-[#090b0e] grid grid-cols-1 lg:grid-cols-12 text-gray-100 antialiased selection:bg-blue-500/30 selection:text-blue-200 overflow-hidden'>
      
      {/* ================= LEFT SIDE: HIGH-TECH CYBER SPLASH PANEL ================= */}
      <div className='hidden lg:block lg:col-span-5 relative h-full bg-[#0d1117] border-r border-gray-800/40 overflow-hidden group'>
        {/* Animated matrix/cyber background gradient overlay over the image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-[#0d1117]/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-blue-500/5 mix-blend-color z-10 pointer-events-none" />
        
        <img 
          src='https://images.unsplash.com/photo-1760931969401-9bd6ee902798?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
          alt="System Terminal Data" 
          className='h-full w-full object-cover opacity-65 scale-100 group-hover:scale-105 transition-transform duration-[4000ms] ease-out'
        />

        {/* Ambient Floating Tech Spec Graphics */}
        <div className="absolute bottom-12 left-12 z-20 space-y-2 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-blue-400 font-bold uppercase">System Status: Online</span>
          </div>
          <h2 className="fun-font text-3xl text-white font-black tracking-wide">CORE_ENGINE_v4.2</h2>
          <p className="text-xs text-gray-400 max-w-xs font-medium leading-relaxed tracking-wide">
            lore ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>

      {/* ================= RIGHT SIDE: AUTH MATRIX / INTERACTIVE FORM ================= */}
      <div className='col-span-1 lg:col-span-7 h-full flex flex-col justify-center items-center p-4 md:p-12 relative'>
        {/* Subtle geometric radar glow elements */}
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

        <motion.div 
          variants={formContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-md bg-[#14171c]/40 border border-gray-800/60 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl relative overflow-hidden"
        >
          {/* Cyber Top Accent Indicator Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/60 to-transparent" />

          {/* Identity Branding Block */}
          <div className="text-center space-y-2 mb-8">
            <motion.h1 
              variants={techFadeVariants}
              className='text-4xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-white fun-font font-black tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(59,130,246,0.15)]'
            >
              Predictor
            </motion.h1>
            
            <motion.div variants={techFadeVariants} className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-md">
              <span className="text-[10px] font-mono tracking-widest text-blue-300 uppercase font-semibold">
                Welcome to Predictor Node
              </span>
            </motion.div>
          </div>

          {/* Form Processing Core */}
          <form onSubmit={handleFormSubmit} className='w-full flex flex-col gap-5'>
            
            {/* Operator Username Input Block */}
            <motion.div variants={techFadeVariants} className="w-full">
              <label className="text-[10px] font-mono tracking-wider font-bold text-gray-400 uppercase block mb-1.5 px-1">
                Operator Identity
              </label>
              <div className="relative w-full">
                <input
                  required
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter Username"
                  className="w-full text-sm font-sans bg-[#0d0f12]/80 border border-gray-800 text-gray-100 placeholder-gray-600 rounded-xl px-4 py-3.5 outline-none transition-all duration-200 focus:border-blue-500/60 focus:bg-[#0d0f12] focus:ring-1 focus:ring-blue-500/20 shadow-inner"
                />
              </div>
            </motion.div>

            {/* Operator Password Input Block */}
            <motion.div variants={techFadeVariants} className="w-full">
              <label className="text-[10px] font-mono tracking-wider font-bold text-gray-400 uppercase block mb-1.5 px-1">
                Access Code
              </label>
              <div className="relative w-full">
                <input
                  required
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  className="w-full text-sm font-sans bg-[#0d0f12]/80 border border-gray-800 text-gray-100 placeholder-gray-600 rounded-xl px-4 py-3.5 outline-none transition-all duration-200 focus:border-blue-500/60 focus:bg-[#0d0f12] focus:ring-1 focus:ring-blue-500/20 shadow-inner"
                />
              </div>
            </motion.div>

            {/* Support Metric Hook */}
            <motion.div variants={techFadeVariants} className="flex justify-end px-1">
              <span className="text-[11px] font-medium text-gray-500 hover:text-blue-400 transition-colors cursor-pointer tracking-tight">
                Authorize via fallback token?
              </span>
            </motion.div>

            {/* Premium Interactive Action Trigger Button */}
            <motion.button 
              variants={techFadeVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className='w-full pop-font font-semibold text-sm py-3.5 px-4 rounded-xl text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_25px_rgba(37,99,235,0.4)] transition-all duration-300 cursor-pointer mt-2 flex items-center justify-center gap-2 tracking-wide'
            >
              <span>Initialize Sign In</span>
              <i className="ri-shield-keyhole-line text-base opacity-80"></i>
            </motion.button>

          </form>
        </motion.div>

        {/* Minimalized Tech System Footer Anchor */}
        <span className="absolute bottom-6 font-mono text-[10px] text-gray-600 uppercase tracking-widest pointer-events-none">
          Secured Link // SHA-256 v4
        </span>
      </div>
    </div>
  );
};

export default Login;