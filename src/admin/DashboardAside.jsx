import React, { useState } from "react";
import { useUser, useClerk } from "@clerk/react-router";
import { Link } from "react-router-dom";

const DashboardAside = () => {
  const { user } = useUser();
  const { openUserProfile, signOut } = useClerk();
  const [open, setIsOpen] = useState(false);

  return (
    <aside className="hidden xl:flex flex-col justify-between w-64 h-screen sticky top-0 bg-[#0f1216] border-r border-gray-800/60 p-6 z-20">
      <div className="space-y-8">
        {/* Logo */}
        <div className="flex items-center gap-3 px-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg">
            <i className="ri-shield-user-line text-lg"></i>
          </div>

          <div>
            <h2 className="font-bold tracking-wide text-sm text-white uppercase">
              Predictor
            </h2>

            <p className="text-[10px] font-mono text-blue-400 tracking-wider font-semibold uppercase">
              Super Admin
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="space-y-1.5">
          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 px-3 mb-2">
            Systems
          </p>

          <Link
            to="/admin-dashboard"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#15191f] border border-transparent text-sm font-medium transition-all group"
          >
            <i className="ri-dashboard-3-line text-lg group-hover:text-blue-400"></i>
            Dashboard
          </Link>

          <Link
            to="/admin-dashboard/users"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#15191f] border border-transparent text-sm font-medium transition-all group"
          >
            <i className="ri-team-line text-lg group-hover:text-blue-400"></i>
            User Management
          </Link>
          <Link
            to="products"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#15191f] border border-transparent text-sm font-medium transition-all group"
          >
            <i className="ri-box-3-line text-lg group-hover:text-blue-400"></i>
            Products
          </Link>
          <Link
            to="reviews"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#15191f] border border-transparent text-sm font-medium transition-all group"
          >
            <i className="ri-feedback-line text-lg group-hover:text-blue-400"></i>
            Reviews
          </Link>

          <Link
            to="/admin-dashboard/addAdmin"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-gray-400 hover:text-white hover:bg-[#15191f] border border-transparent text-sm font-medium transition-all group"
          >
            <i className="ri-user-add-line text-lg group-hover:text-blue-400"></i>
            Register Admin
          </Link>
        </nav>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-3 border-t border-gray-800/60 pt-4 px-2">
        <div className="relative flex-shrink-0">
          <img
            onClick={() => setIsOpen(!open)}
            className="w-10 h-10 rounded-full cursor-pointer border border-gray-700 object-cover flex-shrink-0"
            src={user?.imageUrl}
            alt="User avatar"
          />

          {open && (
            <div className="absolute bottom-14 left-0 z-50 w-56 bg-[#15191f] border border-gray-700 rounded-xl shadow-xl overflow-hidden">
              <div className="px-4 py-3 border-b border-gray-700">
                <div className="font-medium text-white text-sm">
                  {user?.fullName || "ADMIN"}
                </div>

                <div className="text-xs text-gray-400 truncate">
                  {user?.primaryEmailAddress?.emailAddress}
                </div>
              </div>

              <ul className="p-2 text-sm">
                <li>
                  <button
                    onClick={() => {
                      openUserProfile();
                      setIsOpen(false);
                    }}
                    className="w-full text-left p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition"
                  >
                    <i className="fa-solid fa-user mr-2"></i>
                    Profile
                  </button>
                </li>

                <li>
                  <button className="w-full text-left p-2 rounded-md text-gray-300 hover:bg-gray-800 hover:text-white transition">
                    <i className="fa-solid fa-gear mr-2"></i>
                    Settings
                  </button>
                </li>

                <li>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      signOut();
                    }}
                    className="w-full text-left p-2 rounded-md text-red-400 hover:bg-gray-800 transition"
                  >
                    <i className="fa-solid fa-right-from-bracket mr-2"></i>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="truncate">
          <h4 className="text-xs font-bold text-white tracking-wide truncate">
            {user?.fullName || "ADMIN"}
          </h4>

          <p className="text-[10px] text-gray-500 font-medium truncate">
            {user?.primaryEmailAddress?.emailAddress}
          </p>
        </div>
      </div>
    </aside>
  );
};

export default DashboardAside;
