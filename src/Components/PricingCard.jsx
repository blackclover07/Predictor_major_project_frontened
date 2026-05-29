import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PricingCard = () => {
  const cards = [
    {
      title: "Regular Plan",
      price: "0 /month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      link: "/checkout/basic",
    },
    {
      title: "Ultra Plan",
      price: "50 /month",
      features: ["Feature A", "Feature B", "Feature C"],
      link: "/checkout/pro",
    },
  ];

  // Container variant to handle staggered orchestration of children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Delay between each card's entry
      },
    },
  };

  // Card entry and hover variants
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.92, 
      y: 20 
    },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 70, 
        damping: 15 
      }
    },
    hover: {
      y: -10, // Moves up slightly on hover
      scale: 1.03, // Slight enlargement
      boxShadow: "0px 20px 30px rgba(0, 0, 0, 0.35)", // Deep shadow for a 3D float effect
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    // Parent container wraps the grid to trigger staggered entrances
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex justify-center items-center flex-wrap gap-10 p-5"
    >
      {cards.map((card, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          whileHover="hover"
          className="price-card pop-font h-120 w-90 flex justify-center items-center flex-col flex-wrap text-white bg-[#303952] rounded-2xl p-6 relative cursor-pointer"
        >
          <h1 className="text-4xl bg-orange-400 p-3 rounded font-bold mb-5">{card.title}</h1>

          <p className="text-2xl mb-5">
            <i className="ri-money-rupee-circle-line"></i> {card.price}
          </p>

          <ul className="text-lg mb-5 text-center">
            {card.features.map((feature, i) => (
              <li key={i} className="mb-2">
                {feature}
              </li>
            ))}
          </ul>

          <Link to={card.link}>
            <button className="bg-blue-500 text-white px-6 py-2 rounded font-medium hover:bg-blue-600 transition-colors duration-300">
              Choose Plan
            </button>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default PricingCard;