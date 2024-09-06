import React, { useState } from "react";
import styles from "./UserInput.module.scss";

import Button from "../UI/Button/Button";
import { useContext } from "react";
import FetchContext from "../../FetchContext";
import ApiRequest from "../../ApiRequest";

const UserInput = () => {
  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const { setTodos } = useContext(FetchContext);

  const addTasks = async (value) => {
    if (value.trim()) {
      const url = "http://localhost:3551/tasks";
      const newTask = {
        title: value,
        description: "",
        completed: false,
      };
      const option = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(newTask),
      };
      const data = await ApiRequest(url, option);
      if (data.error) {
        setError(data.errors);
      } else {
        setTodos((prevTask) => [...prevTask, data]);
      }
    }
  };

  return (
    <>
      <div className={styles.Header_container}>
        <div className={styles.flex_wrapper}>
          <input
            placeholder="Add new Task"
            onChange={(event) => {
              handleChange(event);
            }}
            type="text"
          />
          <Button
            onClick={() => {
              addTasks(value);
            }}
            className={styles.add}
            text={"Add"}
          />
        </div>
      </div>
    </>
  );
};

export default UserInput;
