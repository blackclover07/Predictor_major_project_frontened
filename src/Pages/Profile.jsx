import React from "react";
import { useUser } from "@clerk/react-router";
import Loader from "../Components/Loader";

const Profile = () => {
  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return (
      <main className="flex-grow p-8 bg-[#090b0e] overflow-y-auto animate-pulse">
        {/* Heading */}
        <div className="mb-8 space-y-4">
          <div className="w-28 h-3 rounded bg-gray-800"></div>

          <div className="w-72 h-10 rounded bg-gray-700"></div>

          <div className="w-96 h-4 rounded bg-gray-800"></div>
        </div>

        {/* Hero Card */}
        <section className="relative overflow-hidden rounded-3xl border border-cyan-500/10 bg-[#0f1216]">
          <div className="flex flex-col items-center text-center px-10 py-14">
            {/* Avatar */}
            <div className="w-36 h-36 rounded-full bg-gray-700"></div>

            {/* Email */}
            <div className="mt-8 w-72 h-6 rounded bg-gray-700"></div>

            {/* Badges */}
            <div className="flex gap-3 mt-6">
              <div className="w-28 h-10 rounded-full bg-gray-700"></div>

              <div className="w-36 h-10 rounded-full bg-gray-700"></div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-10">
              <div className="w-40 h-12 rounded-xl bg-gray-700"></div>

              <div className="w-44 h-12 rounded-xl bg-gray-700"></div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="flex-grow p-8 bg-[#090b0e] overflow-y-auto">
      {/* Page Heading */}
      <div className="mb-8">
        <p className="uppercase tracking-[0.35em] text-xs font-bold text-cyan-400">
          Welcome Back
        </p>

        <h1 className="mt-3 text-4xl font-black text-white">
          {user?.fullName}
        </h1>

        <p className="mt-2 text-gray-400">
          Manage your account, monitor your activity, and personalize your
          experience.
        </p>
      </div>

      {/* Hero Card */}
      <section className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-[#0f1216] shadow-[0_0_40px_rgba(34,211,238,0.08)]">
        {/* Glow */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"></div>

        <div className="relative flex flex-col items-center text-center px-10 py-14">
          {/* Avatar */}
          <div className="relative">
            <div className="p-[3px] rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 shadow-[0_0_35px_rgba(34,211,238,.45)]">
              <img
                src={user?.imageUrl}
                alt="avatar"
                className="w-36 h-36 rounded-full object-cover bg-[#090b0e]"
              />
            </div>

            <span className="absolute bottom-2 right-2 w-5 h-5 rounded-full bg-emerald-400 border-4 border-[#0f1216] shadow-[0_0_12px_rgba(74,222,128,.8)]"></span>
          </div>

          {/* Email */}
          <p className="mt-8 text-xl font-semibold text-white">
            {user?.primaryEmailAddress?.emailAddress}
          </p>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <span className="px-4 py-2 rounded-full uppercase bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-semibold">
              {user?.publicMetadata.role}
            </span>

            <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm">
              Joined June 2026
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <button className="px-7 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 text-white font-semibold shadow-[0_0_20px_rgba(34,211,238,.35)]">
              Edit Profile
            </button>

            <button className="px-7 py-3 rounded-xl border border-gray-700 hover:border-cyan-500 hover:text-cyan-300 hover:scale-105 transition-all duration-300 text-gray-300">
              Account Settings
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Profile;
