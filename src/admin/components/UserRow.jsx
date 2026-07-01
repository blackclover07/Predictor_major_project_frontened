import React, { useState } from "react";
import { useAuth } from "@clerk/react-router";
import axios from "axios";
import { updateUserRole } from "../../services/UserService";

const UserRow = ({
  avatar,
  name,
  email,
  role,
  status,
  joined,
  clerk_id,
  onRoleUpdated,
}) => {
  const [openMenu, setOpenmenu] = useState(false);
  const [selectedRole, setSelectedRole] = useState(role);
  const { getToken } = useAuth();
  const handleDelete = async () => {
    try {
      const token = await getToken();
      const res = await axios.delete(
        `http://127.0.0.1:8000/api/admin/users/${clerk_id}/delete/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRoleUpdate = async () => {
    try {
      const data = await updateUserRole(clerk_id, selectedRole, getToken);
      console.log(data);
      onRoleUpdated(clerk_id, selectedRole);
      setOpenmenu(false);
    } catch (error) {
      console.log(error);
    }
  };
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
            role === "super_admin"
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
        <div className="relative inline-block">
          <button
            className="p-2 rounded-lg hover:bg-[#1b2430] transition-colors duration-200"
            onClick={() => {
              setOpenmenu(!openMenu);
            }}
          >
            <i className="ri-more-2-fill text-lg"></i>
          </button>
          {openMenu && (
            <div className="absolute right-0 top-10 w-48 rounded-xl border border-gray-700 bg-[#15191f] shadow-xl z-50">
              <div className="px-4 py-3 border-b border-gray-700">
                <label className="block text-xs text-gray-400 mb-2">
                  Change Role
                </label>

                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full rounded-lg bg-[#1b2430] border border-gray-600 px-3 py-2 text-sm text-white focus:outline-none focus:border-cyan-500"
                >
                  <option value="customer">Customer</option>
                  <option value="admin">Admin</option>
                  <option value="super_admin">Super Admin</option>
                </select>

                <button
                  className="mt-3 w-full rounded-lg bg-cyan-600 hover:bg-cyan-500 py-2 text-sm font-semibold text-white transition"
                  onClick={handleRoleUpdate}
                >
                  Save
                </button>
              </div>

              <button className="w-full text-left px-4 py-3 hover:bg-[#1b2430] text-yellow-400 transition-colors">
                ⛔ Deactivate User
              </button>

              <button
                className="w-full text-left px-4 py-3 hover:bg-[#d7362d] text-red-400 hover:text-white transition-colors"
                onClick={handleDelete}
              >
                🗑 Delete User
              </button>
            </div>
          )}
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
