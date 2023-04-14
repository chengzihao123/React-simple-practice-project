import React from "react";

import Card from "../UI/Card";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal";

function AddUser({ onAddUser }) {
  const [nameInput, setNameInput] = useState("");
  const [age, setAgeInput] = useState("");
  const [errorState, setErrorState] = useState("");
  // let dataArr = [];
  const addUserHandler = (e) => {
    e.preventDefault();
    if (nameInput.trim().length === 0 || age.length === 0) {
      setErrorState({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+age < 1) {
      setErrorState({
        title: "Invalid age",
        message: "Please enter a valid age",
      });
      return;
    }
    const userInput = {
      name: nameInput.trim(),
      age: age,
      id: Math.random().toString(),
    };
    onAddUser(userInput);
    setNameInput("");
    setAgeInput("");
  };

  const usernameChangeHandler = (e) => {
    setNameInput(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAgeInput(e.target.value);
  };

  const cancelErrorHandler = () => {
    setErrorState("");
  };

  return (
    <div>
      {errorState && (
        <ErrorModal
          title={errorState.title}
          message={errorState.message}
          cancelError={cancelErrorHandler}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            onChange={usernameChangeHandler}
            value={nameInput}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            onChange={ageChangeHandler}
            value={age}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
