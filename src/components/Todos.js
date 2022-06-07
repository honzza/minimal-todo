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

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5000/store-todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: formInput }),
    }).then((res) => {
      console.log(res.status);
    });
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
