import React from "react";
import { Routes, Route } from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UsersList from "./user/components/UsersList";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/places/new" element={<NewPlace />} />
        <Route path="/users" element={<UsersList />} />
      </Routes>
    </div>
  );
};

export default App;
