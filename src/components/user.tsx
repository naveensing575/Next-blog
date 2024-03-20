import React from 'react';

export default function User({ users }: any) {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">ACTIVE USERS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {users.map((user: any) => (
          <div key={user.id} className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-semibold mb-2">
              {user.firstname} {user.lastname}
            </h2>
            <p className="text-gray-600 mb-1">{user.email}</p>
            <p className="text-gray-600">{user.birthDate}</p>
          </div>
        ))}
      </div>
    </>
  );
}
