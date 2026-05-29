import React from "react";

const Rev_AboutCard = ({ id, img, title, desc, features }) => {
  return (
    <div className="w-full max-w-5xl bg-[#14171c]/40 border border-gray-800/60 backdrop-blur-xl rounded-[2.5rem] p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xl relative my-2 overflow-hidden group">
      
      {/* Cybernetic Indigo Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />

      {/* Futuristic System ID Badge */}
      {id && (
        <div className="absolute top-6 left-8 px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded font-mono text-[10px] tracking-widest text-indigo-400 font-bold uppercase">
          Node // {id < 10 ? `0${id}` : id}
        </div>
      )}

      {/* ================= DATA IMAGE PREVIEW DISPLAY (FLIPPED TO LEFT ON DESKTOP) ================= */}
      {img && (
        <div className="col-span-1 lg:col-span-5 flex justify-center items-center order-1">
          <div className="w-full max-w-sm h-52 sm:h-64 rounded-2xl overflow-hidden bg-gray-900 border border-gray-800/60 shadow-lg group-hover:border-indigo-500/30 transition-colors duration-500 relative">
            
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

      {/* ================= TEXT / INFORMATIVE CONTENT SECTION (FLIPPED TO RIGHT ON DESKTOP) ================= */}
      <div className="col-span-1 lg:col-span-7 flex flex-col justify-center space-y-4 order-2 pt-4 lg:pt-0 lg:pl-4">
        <div>
          <h2 className="fun-font text-2xl sm:text-3xl font-black text-white tracking-wide uppercase drop-shadow-[0_2px_8px_rgba(99,102,241,0.1)]">
            {title}
          </h2>
        </div>

        {/* System Module Overview Description */}
        {desc && (
          <p className="pop-font text-gray-300 text-sm md:text-base font-normal leading-relaxed text-justify">
            {desc}
          </p>
        )}

        {/* High-Tech Functional Array Parameter List */}
        {features && (
          <ul className="space-y-2 pt-2 font-mono text-xs sm:text-sm text-indigo-300/90 tracking-wide list-none pl-0">
            {features.map((f, i) => (
              <li 
                key={i} 
                className="flex items-start gap-2.5 before:content-['//'] before:text-indigo-500 before:font-bold before:tracking-normal shrink-0"
              >
                <span className="font-sans text-gray-400 text-sm">{f}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      
    </div>
  );
};

export default Rev_AboutCard;