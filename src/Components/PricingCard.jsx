import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PricingCard = () => {
  const cards = [
    {
      title: "Regular Plan",
      price: "0",
      period: "/month",
      description: "Essential analytics tools for small scale operations.",
      features: [
        "Up to 50 active inquiries",
        "Standard sentiment analysis",
        "Single e-shop target pairing",
        "24-hour response stream latency"
      ],
      link: "/checkout/basic",
      isPopular: false,
    },
    {
      title: "Ultra Plan",
      price: "49",
      period: "/month",
      description: "Advanced intelligence arrays for pro scaling teams.",
      features: [
        "Infinite historical queries",
        "Real-time fraud verification (Fake Score)",
        "Deep multi-store price comparisons",
        "Instant web scraper"
      ],
      link: "/checkout/pro",
      isPopular: true,
    },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.95, 
      y: 30 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 80, 
        damping: 18 
      }
    },
    hover: {
      y: -12,
      scale: 1.02,
      boxShadow: "0px 25px 50px rgba(0, 0, 0, 0.5)",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0d0f12] text-gray-100 flex flex-col justify-center items-center p-6 md:p-12 selection:bg-blue-500/30">
      <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
        <h2 className="text-xs font-bold font-mono tracking-widest text-blue-500 uppercase">
          Pricing Framework
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
          Flexible Plans for Every Scale
        </h3>
        <p className="text-sm text-gray-400">
          Unlock high-fidelity market indicators, competitor price maps, and fraud classification models instantly.
        </p>
      </div>
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-5xl flex justify-center items-stretch flex-wrap lg:flex-nowrap gap-8"
      >
        {cards.map((card, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className={`w-full max-w-sm flex flex-col justify-between text-white bg-[#14171c]/90 border rounded-3xl p-8 relative backdrop-blur-md transition-all duration-300
              ${card.isPopular 
                ? "border-blue-500/50 shadow-[0_4px_30px_rgba(59,130,246,0.15)]" 
                : "border-gray-800/80 hover:border-gray-700/80"}`}
          >
            <div className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-3xl opacity-80
              ${card.isPopular ? "bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" : "bg-gray-700"}`} 
            />
            {card.isPopular && (
              <span className="absolute top-4 right-6 text-[10px] font-bold tracking-wider uppercase font-mono bg-blue-500/10 border border-blue-500/30 text-blue-400 px-2.5 py-1 rounded-full shadow-sm">
                Most Popular
              </span>
            )}

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase font-mono tracking-wider mb-1">
                  {card.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed font-sans font-medium">
                  {card.description}
                </p>
              </div>

              <div className="flex items-baseline text-white border-b border-gray-800/60 pb-6">
                <span className="text-2xl font-semibold mr-1 text-gray-300">₹</span>
                <span className="text-5xl font-black tracking-tight font-sans text-white">
                  {card.price}
                </span>
                <span className="text-sm font-semibold font-mono text-gray-500 ml-2">
                  {card.period}
                </span>
              </div>

              <ul className="space-y-4 py-2">
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <div className={`mt-0.5 flex items-center justify-center h-4 w-4 rounded-full shrink-0 text-[10px]
                      ${card.isPopular ? "bg-blue-500/10 text-blue-400 border border-blue-500/20" : "bg-gray-800 text-gray-400"}`}>
                      <i className="ri-check-line font-bold"></i>
                    </div>
                    <span className="leading-tight font-medium tracking-tight">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 pt-4 w-full">
              <Link to={card.link} className="block w-full">
                <button 
                  className={`w-full font-semibold text-sm py-3.5 px-4 rounded-2xl transition-all duration-300 active:scale-[0.98] tracking-wide flex items-center justify-center gap-2 cursor-pointer
                    ${card.isPopular 
                      ? "text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_4px_20px_rgba(37,99,235,0.2)]" 
                      : "text-gray-300 bg-gray-800/80 hover:bg-gray-800 border border-gray-700/40 hover:text-white"}`}
                >
                  <span>Choose Package</span>
                  <i className="ri-arrow-right-line text-sm opacity-80 group-hover:translate-x-1 transition-transform"></i>
                </button>
              </Link>
            </div>

          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default PricingCard;
