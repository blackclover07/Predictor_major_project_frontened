import React from "react";

const UserFilters = ({
  search,
  setSearch,
  roleFilter,
  setRoleFilter,
  statusFilter,
  setStatusFilter,
}) => {
  return (
    <section className="bg-[#0f1216] border border-gray-800/60 rounded-2xl p-4">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        {/* Search */}
        <div className="relative w-full lg:max-w-md">
          <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"></i>

          <input
            type="text"
            placeholder="Search users..."
            className="w-full bg-[#090b0e] border border-gray-800 rounded-xl py-2.5 pl-10 pr-4 text-sm text-gray-200 placeholder:text-gray-600 outline-none focus:border-blue-500 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="flex items-center gap-3">
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="bg-[#090b0e] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-300 outline-none focus:border-blue-500"
          >
            <option value="All Roles">All Roles</option>
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
            <option value="super_admin">Super Admin</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-[#090b0e] border border-gray-800 rounded-xl px-4 py-2.5 text-sm text-gray-300 outline-none focus:border-blue-500"
          >
            <option value="All Status">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="suspended">Suspended</option>
          </select>
        </div>
      </div>
    </section>
  );
};

export default UserFilters;
