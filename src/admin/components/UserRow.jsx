import React from "react";

const UserRow = ({ avatar, name, email, role, status, joined }) => {
  return (
    <tr className="border-b border-gray-800 hover:bg-[#12161c] transition-colors">
      {/* User */}
      <td className="px-6 py-4">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={name}
            className="w-10 h-10 rounded-full border border-gray-700 object-cover"
          />

          <span className="font-medium text-white">{name}</span>
        </div>
      </td>

      {/* Email */}
      <td className="px-6 py-4 text-gray-400">{email}</td>

      {/* Role */}
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            role === "super-admin"
              ? "bg-purple-500/10 text-purple-400"
              : role === "admin"
                ? "bg-blue-500/10 text-blue-400"
                : "bg-emerald-500/10 text-emerald-400"
          }`}
        >
          {role}
        </span>
      </td>

      {/* Status */}
      <td className="px-6 py-4">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            status === "Active"
              ? "bg-emerald-500/10 text-emerald-400"
              : "bg-red-500/10 text-red-400"
          }`}
        >
          {status}
        </span>
      </td>

      {/* Joined */}
      <td className="px-6 py-4 text-gray-400">{joined}</td>

      {/* Actions */}
      <td className="px-6 py-4 text-center">
        <button className="text-gray-400 hover:text-white transition">
          <i className="ri-more-2-fill text-lg"></i>
        </button>
      </td>
    </tr>
  );
};

export default UserRow;
