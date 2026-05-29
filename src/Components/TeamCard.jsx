import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const TeamCard = ({ m_img, m_name, m_role, m_mail, m_facebook, m_linkdin, m_git }) => {
  
  // Custom premium physics variants 
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 35, // Moved down slightly instead of harsh horizontal sliding
      scale: 0.98 
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", 
        stiffness: 70, 
        damping: 16,
        duration: 0.5
      } 
    },
    hover: {
      y: -8,
      borderColor: "rgba(59, 130, 246, 0.4)", // Cyber blue highlight border
      backgroundColor: "rgba(20, 23, 28, 0.8)",
      boxShadow: "0px 15px 35px rgba(0, 0, 0, 0.5)",
      transition: { duration: 0.25, ease: "easeOut" }
    }
  };

  const imageVariants = {
    hover: { 
      scale: 1.03,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      variants={cardVariants}
      viewport={{ once: true, amount: 0.2 }} // Trigger animation when 20% of card enters the frame
      className='pop-font p-5 w-full max-w-[20rem] bg-[#0d0f12]/60 border border-gray-800/60 rounded-3xl flex flex-col justify-center items-center backdrop-blur-md relative overflow-hidden group/card cursor-pointer shadow-xl'
    >
      {/* Laser accent element visible on card hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300" />

      {/* Image container with overflow control */}
      <div className="h-60 w-60 rounded-2xl overflow-hidden bg-gray-900 border border-gray-800/40">
        <motion.img 
          variants={imageVariants}
          src={m_img} 
          alt={m_name}
          className='h-full w-full object-cover grayscale-[30%] group-hover/card:grayscale-0 transition-all duration-300'
        />
      </div>
      
      <div className="w-full text-center">
        <h2 className='text-white text-xl font-bold tracking-wide mt-5 group-hover/card:text-blue-400 transition-colors duration-200'> 
          {m_name} 
        </h2>
        
        <p className='text-gray-400 text-xs font-mono uppercase tracking-widest mt-1 mb-4'>
          {m_role}
        </p>
        
        {/* Social Grid Section */}
        <div className='flex gap-4 justify-center items-center text-xl text-gray-400 border-t border-gray-800/40 pt-3 w-full' > 
          {m_mail && (
            <Link to={m_mail} className="hover:text-blue-400 hover:scale-110 transition-all duration-200"> 
              <i className="ri-mail-fill"></i> 
            </Link>
          )}
          {m_facebook && (
            <Link to={m_facebook} className="hover:text-blue-500 hover:scale-110 transition-all duration-200">
              <i className="ri-facebook-box-fill"></i>
            </Link>
          )}
          {m_linkdin && (
            <Link to={m_linkdin} className="hover:text-blue-400 hover:scale-110 transition-all duration-200"> 
              <i className="ri-linkedin-box-fill"></i> 
            </Link>
          )}
          {m_git && (
            <Link to={m_git} className="hover:text-white hover:scale-110 transition-all duration-200">
              <i className="ri-github-fill"></i>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;