import React from "react";
import "./UsersList.css";
import UserItem from "./UserItem";
import Card from "../../shared/components/UIElements/Card";

const UsersList = ({ users }) => {
  if (!users || users.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No Users Found</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {users?.map((user) => (
        <UserItem key={user.id} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
