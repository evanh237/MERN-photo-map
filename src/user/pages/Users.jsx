import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "ul",
      name: "Evan Hiltunen",
      image:
        "https://cdn.pixabay.com/photo/2021/11/15/18/47/nature-6799071_1280.jpg",
      places: 1,
    },
  ];
  console.log(USERS);

  return <UsersList users={USERS} />;
};

export default Users;
