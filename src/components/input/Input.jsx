import React from "react";
import styles from "./Input.module.scss";

const Input = ({ placeholder, type }) => {
  return (
    <>
      <input
        className={styles.main_input}
        type={type}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
