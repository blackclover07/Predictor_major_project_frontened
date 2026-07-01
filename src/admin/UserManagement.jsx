import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserFilters from "./components/UserFilters";
import UserTable from "./components/UserTable";
import Pagination from "./components/Pagination";
import { getUsers } from "../services/UserService";
import Loader from "../Components/Loader";

const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // wfwfwefwefwe
  const handleRoleUpdated = (clerkId, newRole) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.clerk_id === clerkId ? { ...user, role: newRole } : user,
      ),
    );
  };
  // fwefwiufiuwef
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();

        console.log(data);

        setUsers(data);
      } catch (err) {
        console.error(err);
        setError(
          err.response?.data?.detail ||
            err.response?.data?.message ||
            err.message ||
            "Failed to fetch users.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <main className="flex-grow flex items-center justify-center bg-[#090b0e]">
        <div className="text-center">
          <i className="ri-error-warning-line text-5xl text-red-500"></i>

          <h2 className="mt-4 text-2xl font-bold text-white">
            Something went wrong
          </h2>

          <p className="mt-2 text-gray-400">{error}</p>

          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-5 py-2 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold transition-all"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

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
      <UserTable users={users} onRoleUpdated={handleRoleUpdated} />
      <Pagination />
    </main>
  );
};

export default UserManagement;
