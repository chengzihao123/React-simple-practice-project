import React from "react";
import AddUser from "./Users/AddUser";
import UserList from "./Users/UserList";
import { useState } from "react";

function App() {
  const [userData, setUserData] = useState("");
  const onAddUserHandler = (data) => {
    setUserData((prevState) => {
      return [...prevState, data];
    });
  };

  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList userData={userData} />
    </div>
  );
}

export default App;
