import React from "react";
import styles from "./TodoList.module.scss";
import TodoItem from "../TodoItem/TodoItem";
import { useContext, useState } from "react";
import TaskStats from "../../TaskStats/TaskStats";
import FetchContext from "../../../FetchContext";
import Notask from "../noTask/Notask";

const TodoList = () => {
  const { loading, todos, length } = useContext(FetchContext);

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.todo_container}>
          <TaskStats />
          {length == 0 ? (
            <Notask />
          ) : (
            <ul>
              {todos.map((todo) => (
                <TodoItem item={todo} key={todo.id} />
              ))}
            </ul>
          )}
        </div>
      )}
    </>
  );
};

export default TodoList;
