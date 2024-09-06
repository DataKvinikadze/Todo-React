import React, { useEffect, useState, useContext } from "react";
import ApiRequest from "./ApiRequest";
import Header from "./components/Layout/Header/Header";
import UserInput from "./components/UserInput/UserInput";
import TodoList from "./components/Todo/TodoList/TodoList";
import { FetchProvider } from "./FetchContext";

const App = () => {
  return (
    <>
      <Header />
      <FetchProvider>
        <UserInput />
        <TodoList />
      </FetchProvider>
    </>
  );
};

export default App;
