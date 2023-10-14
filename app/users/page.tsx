import React from "react";

interface User {
  id: number;
  name: string;
}
const UsersPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users"
  , {
    // next: {
    //   revalidate: 10,
    // },
    cache:"no-store"
  }
  );
  const users: User[] = await res.json();
  return (
    <div className="text-black">
      <h1>Users</h1>
      <h1>Timestamp : {new Date().toLocaleString()}</h1>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </div>
  );
};

export default UsersPage;
