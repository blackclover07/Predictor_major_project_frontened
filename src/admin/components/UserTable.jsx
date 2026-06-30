import React from "react";
import UserRow from "./UserRow";
const users = [
  {
    id: 1,
    avatar: "https://i.pravatar.cc/100?img=1",
    name: "Tony Stark",
    email: "tony@starkindustries.com",
    role: "super-admin",
    status: "Active",
    joined: "26 Jun 2026",
  },
  {
    id: 2,
    avatar: "https://i.pravatar.cc/100?img=2",
    name: "Steve Rogers",
    email: "steve@avengers.com",
    role: "admin",
    status: "Active",
    joined: "22 Jun 2026",
  },
  {
    id: 3,
    avatar: "https://i.pravatar.cc/100?img=3",
    name: "Bruce Banner",
    email: "bruce@gamma.com",
    role: "customer",
    status: "Inactive",
    joined: "18 Jun 2026",
  },
];
const UserTable = () => {
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
                  key={user.id}
                  avatar={user.avatar}
                  name={user.name}
                  email={user.email}
                  role={user.role}
                  status={user.status}
                  joined={user.joined}
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
