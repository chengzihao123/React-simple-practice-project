import React from "react";
import Card from "../UI/Card";

import styles from "./UserList.module.css";
function UserList({ userData }) {
  return (
    <Card className={styles.users}>
      {userData && (
        <ul>
          {userData.map((data) => {
            return (
              <li key={data.id}>
                {data.name} ({data.age} years old)
              </li>
            );
          })}
        </ul>
      )}
    </Card>
  );
}

export default UserList;
