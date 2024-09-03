import React, { useEffect, useState } from "react";
import ApiRequest from "./ApiRequest";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import buttonImg from "/plus.svg";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(null);

  const fetchTodos = async () => {
    const url = "http://localhost:3551/tasks";
    setLoading(true);
    const data = ApiRequest(url);
    setLoading(false);

    if (data.error) {
      setError(data.errors);
    } else {
      setTodos(data);
    }
  };

  const addTasks = async () => {
    const url = "http://localhost:3551/tasks";
    const newTask = {
      title: "",
      description: "",
      completed: false,
    };
    const option = {
      method: "POST",
      header: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newTask),
    };
    const data = await ApiRequest(url, option);
    if (data.error) {
      setError(data.errors);
    } else {
      setTodos((prevTask) => [...prevTask, data]);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);
  console.log(todos);

  if (loading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  } else {
    return (
      <>
        <Header />
        <Main buttonImg={buttonImg} />
      </>
    );
  }
};

export default App;
