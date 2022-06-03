import { ListGroup } from "react-bootstrap";

const TodoList = ({ todos }) => {
  return (
    <ListGroup>
      {todos.map((todo, index) => (
        <ListGroup.Item key={index}>
          <span>{todo}</span>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
};

export default TodoList;
