import React from "react";
import styles from "./Button.module.scss";

// klasis saxeli mindoda gadmomeca mainidan styles.add-it magram rom vcade ar imushava
const Button = ({ text, onClick, image }) => {
  return (
    <button className={styles.add} onClick={onClick}>
      {text}
      {image}
    </button>
  );
};

export default Button;
