import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className="w-full h-20 bg-[#0d0f12]/80 border-b border-gray-800/60 backdrop-blur-md flex justify-between items-center px-6 md:px-10 sticky top-0 z-50 transition-all duration-300">
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/images/logo.png"
            alt="Predictor Logo"
            className="h-8 w-auto max-w-[120px] rounded object-contain"
          />
        </Link>

        <ul className="hidden md:flex items-center gap-1 text-lg md:text-5xl font-medium">
          {[
            { path: "/", label: "Home", icon: "ri-home-9-line" },
            { path: "/about", label: "About", icon: "ri-feedback-fill" },
            { path: "/teams", label: "Teams", icon: "ri-team-line" },
            {
              path: "/services",
              label: "Services",
              icon: "ri-line-chart-line",
            },
            {
              path: "/pricing",
              label: "Pricing",
              icon: "ri-money-dollar-box-line",
            },
          ].map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 uppercase tracking-wider text-[11px] font-semibold font-mono
                  ${
                    location.pathname === link.path
                      ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/40"
                  }`}
              >
                <i className={`${link.icon} text-sm`}></i> {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center">
          <Link to="/login">
            <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-mono text-xs font-bold tracking-widest uppercase rounded-xl shadow-[0_4px_20px_rgba(59,130,246,0.2)] hover:shadow-[0_4px_25px_rgba(59,130,246,0.35)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 cursor-pointer">
              Login
            </button>
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-400 hover:text-white text-3xl focus:outline-none transition-colors duration-200 cursor-pointer"
          aria-label="Toggle navigation system"
        >
          <i className={isOpen ? "ri-close-line" : "ri-menu-5-line"}></i>
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="fixed top-0 left-0 bottom-0 w-[80%] max-w-[320px] bg-[#0d0f12] border-r border-gray-800/80 p-6 flex flex-col z-50 md:hidden shadow-2xl"
            >
              <div className="flex items-center justify-between pb-6 border-b border-gray-800/60 mb-8">
                <img src="/images/logo.png" alt="Logo" className="h-6 w-auto" />
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-red-400 text-2xl transition-colors duration-200 cursor-pointer"
                >
                  <i className="ri-close-circle-line"></i>
                </button>
              </div>

              <ul className="flex flex-col gap-3 flex-grow">
                {[
                  { path: "/", label: "Home", icon: "ri-home-9-line" },
                  { path: "/about", label: "About", icon: "ri-feedback-fill" },
                  { path: "/teams", label: "Teams", icon: "ri-team-line" },
                  {
                    path: "/services",
                    label: "Services",
                    icon: "ri-line-chart-line",
                  },
                  {
                    path: "/pricing",
                    label: "Pricing",
                    icon: "ri-money-dollar-box-line",
                  },
                ].map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`flex items-center gap-4 px-4 py-3.5 rounded-xl font-mono tracking-wide text-sm font-semibold transition-all duration-200
                        ${
                          location.pathname === link.path
                            ? "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                            : "text-gray-400 hover:text-white hover:bg-gray-800/40"
                        }`}
                    >
                      <i className={`${link.icon} text-lg`}></i> {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="pt-6 border-t border-gray-800/60 mt-auto">
                <Link to="/login" className="block w-full">
                  <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono font-bold tracking-widest text-center text-xs uppercase rounded-xl shadow-lg cursor-pointer">
                    Login Portal
                  </button>
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
