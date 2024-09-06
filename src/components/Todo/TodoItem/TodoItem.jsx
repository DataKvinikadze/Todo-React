import React, { useContext } from "react";
import trash from "/trash.svg";
import styles from "./TodoItem.module.scss";
import check from "/Vector.svg";
import ApiRequest from "../../../ApiRequest";
import FetchContext from "../../../FetchContext";

const TodoItem = ({ item }) => {
  const { setTodos } = useContext(FetchContext);

  const removePizza = async (id) => {
    const url = `http://localhost:3551/tasks/${id}`;

    const option = {
      method: "DELETE",
      header: {
        "Content-type": "application/json",
      },
    };

    const data = await ApiRequest(url, option);

    if (data.error) {
      setError(data.errors);
    } else {
      setTodos((prevTask) => prevTask.filter((pizza) => pizza.id != id));
    }
  };

  const todoCompleted = async (id, newCompleted) => {
    const url = `http://localhost:3551/tasks/${id}`;

    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ ...item, completed: newCompleted }),
    };

    const data = await ApiRequest(url, options);

    if (data.error) {
      setError(data.error);
    } else {
      setTodos((prevTodos) => {
        return prevTodos.map((item) => {
          return item.id === id ? { ...item, completed: newCompleted } : item;
        });
      });
    }
  };

  return (
    <li className={styles.item}>
      <div
        onClick={() => {
          todoCompleted(item.id, !item.completed);
        }}
        className={styles.radio}
      >
        <div className={item.completed ? styles.check_done : styles.check}>
          {item.completed ? <img src={check} /> : null}
        </div>
      </div>
      <div className={item.completed ? styles.title_done : styles.title}>
        <p>{item.title}</p>
      </div>
      <div
        onClick={() => {
          removePizza(item.id);
        }}
      >
        <img src={trash} alt="trash bin" />
      </div>
    </li>
  );
};

export default TodoItem;
