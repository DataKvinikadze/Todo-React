import React from "react";
import styles from "./Button.module.scss";
import buttonImg from "/plus.svg";

// klasis saxeli mindoda gadmomeca mainidan styles.add-it magram rom vcade ar imushava
const Button = ({ text, onClick }) => {
  return (
    <button className={styles.add} onClick={onClick}>
      {text}
      <img src={buttonImg} alt="Add icon" />
    </button>
  );
};

export default Button;
