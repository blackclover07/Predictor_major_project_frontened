import React from "react";

const Pagination = () => {
  return (
    <section className="mt-6 flex flex-col items-center gap-4">
      {/* Info */}
      <div className="text-sm text-gray-400">
        Showing
        <span className="mx-1 font-semibold text-white">1–10</span>
        of
        <span className="mx-1 font-semibold text-white">128</span>
        users
      </div>

      {/* Pagination */}
      <div className="flex items-center gap-2">
        <button className="px-4 py-2 rounded-xl border border-gray-800 bg-[#0f1216] text-gray-400 hover:text-white hover:border-gray-700 transition">
          Previous
        </button>

        <button className="w-10 h-10 rounded-xl bg-blue-600 text-white font-semibold">
          1
        </button>

        <button className="w-10 h-10 rounded-xl border border-gray-800 bg-[#0f1216] text-gray-300 hover:text-white hover:border-gray-700 transition">
          2
        </button>

        <button className="w-10 h-10 rounded-xl border border-gray-800 bg-[#0f1216] text-gray-300 hover:text-white hover:border-gray-700 transition">
          3
        </button>

        <button className="px-4 py-2 rounded-xl border border-gray-800 bg-[#0f1216] text-gray-400 hover:text-white hover:border-gray-700 transition">
          Next
        </button>
      </div>
    </section>
  );
};

export default Pagination;
