import React from "react";
import UserRow from "./UserRow";

const UserTable = ({ users, onRoleUpdated }) => {
  return (
    <section className="bg-[#0f1216] border border-gray-800/60 rounded-2xl overflow-hidden shadow-xl">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead className="bg-[#12161c] border-b border-gray-800">
            <tr className="text-left">
              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                User
              </th>

              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                Email
              </th>

              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                Role
              </th>

              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                Status
              </th>

              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500">
                Joined
              </th>

              <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-gray-500 text-center">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {/* UserRow components will go here */}
            {users.map((user) => {
              return (
                <UserRow
                  key={user.clerk_id}
                  avatar={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                    user.full_name,
                  )}&background=0f172a&color=ffffff`}
                  name={user.full_name}
                  email={user.email}
                  role={user.role}
                  status={user.is_active ? "Active" : "Inactive"}
                  joined={new Date(user.date_joined).toLocaleDateString()}
                  clerk_id={user.clerk_id}
                  onRoleUpdated={onRoleUpdated}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserTable;
