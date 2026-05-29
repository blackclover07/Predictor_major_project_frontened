import React from "react";

const SelectBox = ({
  label,
  options = [],
  value,
  onChange,
  width = "w-90",
}) => {
  return (
    <div className="flex flex-col p-2 capitalize w-full">
      <label className="text-white text-sm m-3">{label}</label>

      <select
        value={value}
        onChange={onChange}
        className={`p-2 ${width} rounded-md text-sm h-10 bg-white text-black outline-none shadow-xl`}
      >
        <option value="">Select {label}</option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectBox;
