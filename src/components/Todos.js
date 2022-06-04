import React, { useState } from "react";
import FormTodo from "./FormTodo";
import TodoList from "./TodoList";
import Container from "react-bootstrap/Container";

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
    <Container className="d-flex align-items-center flex-column mt-4">
      <h5>Jednoduché úkoly</h5>
      <TodoList todos={todos} />
      <FormTodo
        formInput={formInput}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
      />
    </Container>
  );
};
export default Todos;
