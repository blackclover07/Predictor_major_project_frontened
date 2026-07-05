import React from "react";

export default function Pagination({
  currentPage,
  totalPages,
  previous,
  next,
  onPageChange,
}) {
  const getPages = () => {
    const pages = [];

    if (totalPages <= 7) {
      // Show all pages if there are 7 or fewer
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(
          1,
          "...",
          totalPages - 4,
          totalPages - 3,
          totalPages - 2,
          totalPages - 1,
          totalPages
        );
      } else {
        pages.push(
          1,
          "...",
          currentPage - 1,
          currentPage,
          currentPage + 1,
          "...",
          totalPages
        );
      }
    }

    return pages;
  };

  return (
    <nav
      aria-label="Pagination"
      className="flex justify-center items-center gap-2 mt-8 flex-wrap"
    >
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={!previous}
        className={`flex items-center justify-center w-9 h-9 rounded-full border transition
          ${
            previous
              ? "bg-neutral-800 border-neutral-700 hover:bg-neutral-700"
              : "bg-neutral-800 border-neutral-700 opacity-40 cursor-not-allowed"
          }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-slate-300 size-3 rotate-180"
          viewBox="0 0 451.846 451.847"
        >
          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" />
        </svg>
      </button>

      {/* Page Numbers */}
      {getPages().map((item, index) =>
        item === "..." ? (
          <span
            key={index}
            className="w-9 h-9 flex items-center justify-center text-gray-500"
          >
            ...
          </span>
        ) : (
          <button
            key={item}
            onClick={() => onPageChange(item)}
            className={`w-9 h-9 rounded-full border text-sm font-semibold transition
              ${
                currentPage === item
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-neutral-800 border-neutral-700 text-gray-300 hover:bg-neutral-700"
              }`}
          >
            {item}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!next}
        className={`flex items-center justify-center w-9 h-9 rounded-full border transition
          ${
            next
              ? "bg-neutral-800 border-neutral-700 hover:bg-neutral-700"
              : "bg-neutral-800 border-neutral-700 opacity-40 cursor-not-allowed"
          }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-slate-300 size-3"
          viewBox="0 0 451.846 451.847"
        >
          <path d="M345.441 248.292 151.154 442.573c-12.359 12.365-32.397 12.365-44.75 0-12.354-12.354-12.354-32.391 0-44.744L278.318 225.92 106.409 54.017c-12.354-12.359-12.354-32.394 0-44.748 12.354-12.359 32.391-12.359 44.75 0l194.287 194.284c6.177 6.18 9.262 14.271 9.262 22.366 0 8.099-3.091 16.196-9.267 22.373" />
        </svg>
      </button>
    </nav>
  );
}