import React from "react";
import UserList from "../components/UserList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Monsur",
      image:
        "https://st2.depositphotos.com/8511412/11363/v/950/depositphotos_113638082-stock-illustration-water-drop-icon-vector-drop.jpg",
      places: 3,
    },
  ];

  return (
    <p>
      {" "}
      <UserList items={USERS} />{" "}
    </p>
  );
};

export default Users;
