import React from "react";
import styles from "./Main.module.scss";
import Input from "../input/Input";
import Button from "../Button/Button";
import Notask from "../noTask/Notask";
import TodoHeader from "../TodoHeader/TodoHeader";
import UserInput from "../UserInput/UserInput";

const Main = ({ buttonImg }) => {
  return (
    <>
      <main>
        <section>
          <UserInput buttonImg={buttonImg} />
        </section>
        <section>
          <TodoHeader />
        </section>
      </main>
    </>
  );
};

export default Main;
