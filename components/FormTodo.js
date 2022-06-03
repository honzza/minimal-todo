import { Button, Form } from "react-bootstrap";
const FormTodo = ({ handleSubmit, handleChange, formInput }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <input type="text" value={formInput} onChange={handleChange} />
      <Button variant="primary" type="submit">
        add todo
      </Button>
    </Form>
  );
};

export default FormTodo;
