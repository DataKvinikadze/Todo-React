import React, { createContext, useState, useEffect } from "react";
import ApiRequest from "./ApiRequest";
import buttonImg from "/plus.svg";

const FetchContext = createContext();

export const FetchProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState();
  let length = todos.length;

  const fetchTodos = async () => {
    const url = "http://localhost:3551/tasks";
    setLoading(true);
    const data = await ApiRequest(url);

    setLoading(false);

    if (data.error) {
      setError(data.errors);
    } else {
      setTodos(data);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const value = { todos, setTodos, loading, setLoading, length };

  return (
    <FetchContext.Provider value={value}>{children}</FetchContext.Provider>
  );
};
export default FetchContext;
