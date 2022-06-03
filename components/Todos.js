import React, { useState } from "react";
import FormTodo from "../components/FormTodo";
import TodoList from "./TodoList";

const Todos = () => {
  const [formInput, setFormInput] = useState("");
  const [todos, setTodos] = useState([]);

  const handleChange = (e) => {
    setFormInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos((prevState) => [...prevState, formInput]);
    setFormInput("");
  };

  return (
    <>
      <TodoList todos={todos} />
      <FormTodo
        formInput={formInput}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </>
  );
};
export default Todos;
