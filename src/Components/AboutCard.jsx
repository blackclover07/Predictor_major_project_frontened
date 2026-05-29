import React from "react";

const AboutCard = ({ id, img, title, desc, howItWork }) => {
  return (
    <div className="w-full max-w-5xl bg-[#14171c]/40 border border-gray-800/60 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl relative overflow-hidden group">
      
      {/* Cybernetic Subtle Top Glow Accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      {/* Futuristic System ID Badge */}
      {id && (
        <div className="absolute top-6 right-8 px-2.5 py-1 bg-blue-500/10 border border-blue-500/20 rounded font-mono text-[10px] tracking-widest text-blue-400 font-bold uppercase">
          Node // {id < 10 ? `0${id}` : id}
        </div>
      )}

      {/* ================= DATA IMAGE PREVIEW DISPLAY ================= */}
      {img && (
        <div className="col-span-1 lg:col-span-5 flex justify-center items-center">
          <div className="w-full max-w-sm h-56 sm:h-68 rounded-2xl overflow-hidden bg-gray-900 border border-gray-800/60 shadow-lg group-hover:border-blue-500/30 transition-colors duration-500 relative">
            
            {/* Soft inner vignette shading filter */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#090b0e]/40 to-transparent mix-blend-multiply pointer-events-none z-10" />
            
            <img
              src={img}
              alt={title}
              className="w-full h-full object-cover opacity-90 group-hover:scale-102 group-hover:opacity-100 transition-all duration-700"
            />
          </div>
        </div>
      )}

      {/* ================= TEXT & "HOW IT WORKS" WORKFLOW CONTENT ================= */}
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-center space-y-4 pt-2 lg:pt-0">
        <div>
          <h2 className="fun-font text-2xl sm:text-3xl font-black text-white tracking-wide uppercase drop-shadow-[0_2px_8px_rgba(59,130,246,0.1)]">
            {title}
          </h2>
        </div>

        {/* Core System Module Description */}
        {desc && (
          <p className="pop-font text-gray-300 text-sm md:text-base font-normal leading-relaxed text-justify">
            {desc}
          </p>
        )}

        {/* ================= HOW IT WORKS STEP ENGINE ================= */}
        {howItWork && (
          <div className="mt-2 space-y-3 w-full">
            {/* Context Heading Header */}
            <span className="text-[10px] font-mono tracking-[0.2em] text-blue-400 font-bold uppercase block mb-1">
              Execution Protocol
            </span>
            
            <div className="grid grid-cols-1 gap-2.5">
              {howItWork.map((step) => (
                <div 
                  key={step.id || step._id} 
                  className="flex items-start gap-4 p-3.5 bg-[#0d0f12]/40 border border-gray-800/40 rounded-xl hover:border-gray-800 transition-colors duration-200"
                >
                  {/* High-Tech Sequential Numeric Bubble */}
                  <div className="h-6 w-6 rounded-md bg-blue-500/10 border border-blue-500/30 flex items-center justify-center font-mono text-xs text-blue-400 font-bold shrink-0 mt-0.5">
                    {step.id}
                  </div>
                  
                  {/* Step Text Fields */}
                  <div className="space-y-0.5">
                    <h4 className="text-gray-100 font-semibold text-sm tracking-wide">
                      {step.title}
                    </h4>
                    <p className="text-gray-400 text-xs font-normal leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default AboutCard;