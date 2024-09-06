import React, { useContext } from "react";
import Button from "../UI/Button/Button";
import styles from "../TaskStats/TaskStats.module.scss";
import FetchContext from "../../FetchContext";

const TaskStats = () => {
  const { todos } = useContext(FetchContext);
  let completed = 0;
  let length = todos.length;

  todos.map((item) => {
    if (item.completed) {
      completed++;
    }
  });

  return (
    <>
      <div className={styles.todo_title}>
        <div className={styles.tasks_created}>
          <div className={styles.text}>Tasks created</div>
          <div className={styles.number}>{length}</div>
        </div>
        <div className={styles.tasks_completed}>
          <div className={styles.text}>Completed</div>
          <div className={styles.number}>{`${completed} of ${length}`}</div>
        </div>
      </div>
    </>
  );
};

export default TaskStats;
