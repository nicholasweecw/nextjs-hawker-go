"use client";

import { useEffect, useState } from "react";

const FavouritesPage = () => {
  const [users, setUsers] = useState<
    { id: number; name: string; email: string }[]
  >([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      FavouritesPage
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}, {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavouritesPage;
