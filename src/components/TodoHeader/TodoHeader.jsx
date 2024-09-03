import React from "react";
import Input from "../input/Input";
import Button from "../Button/Button";
import styles from "./TodoHeader.module.scss";

const TodoHeader = ({ buttonImg }) => {
  return (
    <>
      <div className={styles.header_container}>
        <div className={styles.todo_title}>
          <div className={styles.tasks_created}>
            <div className={styles.text}>Tasks created</div>
            <div className={styles.number}></div>
          </div>
          <div className={styles.tasks_completed}>
            <div className={styles.text}>Completed</div>
            <div className={styles.number}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoHeader;
