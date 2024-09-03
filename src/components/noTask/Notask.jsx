import React from "react";
import clipboard from "/Clipboard.svg";
import styles from "./Notask.module.scss";

const Notask = () => {
  return (
    <>
      <img src={clipboard} alt="Clipboard" />
      <p>
        You don't have any tasks registered yet Create tasks and organize your
        to-do items
      </p>
    </>
  );
};

export default Notask;
