import React from "react";

const Tags = ({tagsTitle}) => {
  return (
    <>
      <div className="w-auto h-auto flex gap-3 justify-center items-center p-5 mr-2.5 bg-white bg-opacity-70 rounded-3xl cursor-pointer text-sm">
        <i class="ri-bar-chart-grouped-fill"></i>
        <p className="text-black capitalize text-lg">{tagsTitle}</p>
      </div>
    </>
  );
};

export default Tags;
