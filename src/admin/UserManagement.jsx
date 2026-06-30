import React from "react";
import { Link } from "react-router-dom";
import UserFilters from "./components/UserFilters";
import UserTable from "./components/UserTable";
import Pagination from "./components/Pagination";
const UserManagement = () => {
  return (
    <main className="flex-grow min-w-0 p-4 md:p-6 lg:p-8 space-y-6 md:space-y-8">
      {/* Header goes here */}
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-900 pb-5 w-full">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-white tracking-wide">
            User Management
          </h1>

          <p className="text-xs text-gray-400 font-medium mt-0.5">
            Manage platform users, permissions and access control.
          </p>
        </div>

        <Link
          to="/admin-dashboard/addAdmin"
          className="px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-[0_4px_15px_rgba(37,99,235,0.2)] text-white active:scale-95 transition-all rounded-xl text-xs font-bold tracking-wide flex items-center gap-2 w-fit"
        >
          <i className="ri-user-add-line text-sm"></i>
          Register Admin
        </Link>
      </header>
      {/* Content goes here */}
      <UserFilters />
      <UserTable />
      <Pagination />
    </main>
  );
};

export default UserManagement;
