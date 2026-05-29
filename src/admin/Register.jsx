import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Register = () => {
  // Local state tracking for admin provisioning data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    adminToken: "",
    password: "",
    confirmPassword: ""
  });
  
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    setErrorMessage("");

    // Front-end structural clearance validations
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Cryptographic mismatch: Passwords do not match.");
      return;
    }

    console.log("Provisioning requests initiated for structural node admin:", formData.email);
    // Add your backend administrative authentication submission logic here
  };

  // Stagger configurations for clean UI element entry
  const formContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.15 }
    }
  };

  const techFadeVariants = {
    hidden: { opacity: 0, scale: 0.96, y: 12 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 90, damping: 14 } 
    }
  };

  return (
    <div className='min-h-screen w-full bg-[#090b0e] grid grid-cols-1 lg:grid-cols-12 text-gray-100 antialiased selection:bg-blue-500/30 selection:text-blue-200 overflow-hidden'>
      
      {/* ================= LEFT SIDE: HIGH-TECH CYBER SPLASH PANEL ================= */}
      <div className='hidden lg:block lg:col-span-5 relative h-full bg-[#0d1117] border-r border-gray-800/40 overflow-hidden group'>
        <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e] via-[#0d1117]/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-indigo-500/5 mix-blend-color z-10 pointer-events-none" />
        
        <img 
          src='https://images.unsplash.com/photo-1760931969401-9bd6ee902798?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
          alt="System Initialization Protocol" 
          className='h-full w-full object-cover opacity-65 scale-100 group-hover:scale-105 transition-transform duration-[4000ms] ease-out'
        />

        {/* Ambient Floating Tech Spec Graphics */}
        <div className="absolute bottom-12 left-12 z-20 space-y-2 pointer-events-none">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-[10px] font-mono tracking-[0.2em] text-indigo-400 font-bold uppercase">Node Registration Active</span>
          </div>
          <h2 className="fun-font text-3xl text-white font-black tracking-wide">ADMIN_PROVISION_v4.2</h2>
          <p className="text-xs text-gray-400 max-w-xs font-medium leading-relaxed tracking-wide">
            Provision structural system keys and allocate root operational certificates for security telemetry clearance.
          </p>
        </div>
      </div>

      {/* ================= RIGHT SIDE: PROVISION MATRIX / INTERACTIVE FORM ================= */}
      <div className='col-span-1 lg:col-span-7 min-h-screen flex flex-col justify-center items-center p-4 md:p-8 lg:p-12 relative overflow-y-auto'>
        {/* Radar background glow nodes */}
        <div className="absolute top-1/4 right-1/3 w-80 h-80 bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-[130px] pointer-events-none" />

        <motion.div 
          variants={formContainerVariants}
          initial="hidden"
          animate="visible"
          className="w-full max-w-lg bg-[#14171c]/40 border border-gray-800/60 backdrop-blur-xl p-6 sm:p-8 rounded-3xl shadow-2xl relative my-8 overflow-hidden"
        >
          {/* Cyber Top Accent Indicator Line */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

          {/* Identity Branding Block */}
          <div className="text-center space-y-2 mb-6">
            <motion.h1 
              variants={techFadeVariants}
              className='text-3xl sm:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-200 to-white fun-font font-black tracking-wider uppercase drop-shadow-[0_4px_12px_rgba(99,102,241,0.15)]'
            >
              Register Node
            </motion.h1>
            
            <motion.div variants={techFadeVariants} className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-md">
              <span className="text-[10px] font-mono tracking-widest text-indigo-300 uppercase font-semibold">
                Generate Supervisor Passkey
              </span>
            </motion.div>
          </div>

          {/* Error Feedout Message Node */}
          {errorMessage && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }} 
              animate={{ opacity: 1, y: 0 }}
              className="mb-5 p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono font-medium flex items-center gap-2"
            >
              <i className="ri-error-warning-line text-sm"></i>
              <span>{errorMessage}</span>
            </motion.div>
          )}

          {/* Form Processing Core */}
          <form onSubmit={handleRegisterSubmit} className='w-full flex flex-col gap-4'>
            
            {/* Two-Column Core Layout Fields for Full Name and Email on Desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div variants={techFadeVariants} className="w-full">
                <label className="text-[10px] font-mono tracking-wider font-bold text-gray-400 uppercase block mb-1.5 px-1">
                  Operator Title
                </label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Full Name"
                  className="w-full text-sm font-sans bg-[#0d0f12]/80 border border-gray-800 text-gray-100 placeholder-gray-600 rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:border-indigo-500/60 focus:bg-[#0d0f12] focus:ring-1 focus:ring-indigo-500/20 shadow-inner"
                />
              </motion.div>

              <motion.div variants={techFadeVariants} className="w-full">
                <label className="text-[10px] font-mono tracking-wider font-bold text-gray-400 uppercase block mb-1.5 px-1">
                  Communication Route
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="name@company.com"
                  className="w-full text-sm font-sans bg-[#0d0f12]/80 border border-gray-800 text-gray-100 placeholder-gray-600 rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:border-indigo-500/60 focus:bg-[#0d0f12] focus:ring-1 focus:ring-indigo-500/20 shadow-inner"
                />
              </motion.div>
            </div>

           

            {/* Two-Column Core Layout Fields for Passwords */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.div variants={techFadeVariants} className="w-full">
                <label className="text-[10px] font-mono tracking-wider font-bold text-gray-400 uppercase block mb-1.5 px-1">
                  Access Code
                </label>
                <input
                  required
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create Password"
                  className="w-full text-sm font-sans bg-[#0d0f12]/80 border border-gray-800 text-gray-100 placeholder-gray-600 rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:border-indigo-500/60 focus:bg-[#0d0f12] focus:ring-1 focus:ring-indigo-500/20 shadow-inner"
                />
              </motion.div>

              <motion.div variants={techFadeVariants} className="w-full">
                <label className="text-[10px] font-mono tracking-wider font-bold text-gray-400 uppercase block mb-1.5 px-1">
                  Re-Verify Access Code
                </label>
                <input
                  required
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  placeholder="Confirm Password"
                  className="w-full text-sm font-sans bg-[#0d0f12]/80 border border-gray-800 text-gray-100 placeholder-gray-600 rounded-xl px-4 py-3 outline-none transition-all duration-200 focus:border-indigo-500/60 focus:bg-[#0d0f12] focus:ring-1 focus:ring-indigo-500/20 shadow-inner"
                />
              </motion.div>
            </div>

            {/* Premium Interactive Action Trigger Button */}
            <motion.button 
              variants={techFadeVariants}
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className='w-full pop-font font-semibold text-sm py-3.5 px-4 rounded-xl text-white bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-500 hover:to-blue-500 shadow-[0_4px_20px_rgba(99,102,241,0.25)] hover:shadow-[0_4px_25px_rgba(99,102,241,0.4)] transition-all duration-300 cursor-pointer mt-3 flex items-center justify-center gap-2 tracking-wide'
            >
              <span>Compile & Authorization Account</span>
              <i className="ri-donut-chart-line text-base opacity-90 animate-spin-slow"></i>
            </motion.button>

            {/* Back to Login Anchor link redirect */}
            

          </form>
        </motion.div>

        {/* Minimalized Tech System Footer Anchor */}
        <span className="font-mono text-[10px] text-gray-600 uppercase tracking-widest pointer-events-none mt-auto lg:mt-4">
          Secured Tunnel Gateway // ECC SECP256K1
        </span>
      </div>
    </div>
  );
};

export default Register;