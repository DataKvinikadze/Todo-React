import React from "react";
import styles from "./UserInput.module.scss";
import Input from "../input/Input";
import Button from "../Button/Button";

const UserInput = ({ buttonImg }) => {
  return (
    <>
      <div className={styles.Header_container}>
        <div className={styles.flex_wrapper}>
          <Input type={"text"} placeholder={"Add new task"} />
          <Button
            className={styles.add}
            text={"Add"}
            image={<img src={buttonImg} alt="Logo" />}
          />
        </div>
      </div>
    </>
  );
};

export default UserInput;
