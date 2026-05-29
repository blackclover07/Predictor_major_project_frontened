import React from "react";
const PriceSlider = ({
  min = 500,
  max = 150000,
  step = 1000,
  value,
  onChange,
}) => {
  return (
    <div className="" >
      <div className="flex justify-between items-center mt-10">
        <label className="pop-font text-sm font-medium text-white-700">
          Max Price
        </label>
        <span className="text-blue-600 font-semibold text-lg">
        <i class="ri-money-rupee-circle-line"></i>{value}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer
                   bg-gray-200 accent-blue-600"
      />

      <div className="flex justify-between text-sm text-gray-500 mt-2">
        <span><i class="ri-money-rupee-circle-line"></i>{min}</span>
        <span><i class="ri-money-rupee-circle-line"></i>{max.toLocaleString()}</span>
      </div>
    </div>
  );
};

export default PriceSlider;
