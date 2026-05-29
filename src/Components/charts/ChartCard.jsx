import React from "react";
const ChartCard = ({ title, icon, children }) => (
    <div className="bg-white rounded-xl shadow-md p-5 w-full">
      <div className="flex items-center gap-2 mb-4">
        {icon}
        <h3 className="font-semibold text-gray-800">{title}</h3>
      </div>
      {children}
    </div>
  );
  
  export default ChartCard;
  
  