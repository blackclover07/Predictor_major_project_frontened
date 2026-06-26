import { useUser } from "@clerk/react-router";
import React from "react";

export default function ProfileCard() {
  const { user } = useUser();

  return (
    <div className="w-full max-w-md bg-[#14171c] border border-gray-800 rounded-3xl p-6 shadow-xl">
      <div className="flex flex-col items-center">
        <img
          src={user?.imageUrl}
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-500/30 object-cover"
        />

        <h2 className="mt-4 text-xl font-bold text-white">
          {user?.fullName || "ADMIN"}
        </h2>

        <p className="text-sm text-gray-400">
          {user?.primaryEmailAddress?.emailAddress}
        </p>

        <div className="mt-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
          <span className="text-xs text-blue-400 font-semibold uppercase tracking-wider">
            Super Admin
          </span>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        <div className="bg-[#0f1216] border border-gray-800 rounded-xl p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Username
          </p>
          <p className="text-white font-medium">
            {user?.username || "Not Set"}
          </p>
        </div>

        <div className="bg-[#0f1216] border border-gray-800 rounded-xl p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            User ID
          </p>
          <p className="text-gray-300 text-sm break-all">{user?.id}</p>
        </div>

        <div className="bg-[#0f1216] border border-gray-800 rounded-xl p-4">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Last Sign In
          </p>
          <p className="text-white">
            {user?.lastSignInAt
              ? new Date(user.lastSignInAt).toLocaleString()
              : "N/A"}
          </p>
        </div>
      </div>

      <button className="mt-6 w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold py-3 rounded-xl transition">
        Edit Profile
      </button>
    </div>
  );
}
