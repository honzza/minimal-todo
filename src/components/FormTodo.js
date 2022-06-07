import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const FormTodo = ({ handleSubmit, handleChange, formInput }) => {
  return (
    <Form onSubmit={handleSubmit} className="d-flex p-3">
      <Form.Group className="p-1">
        <Form.Control
          type="text"
          value={formInput}
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="p-1">
        <Button variant="primary" type="submit">
          Přidej úkol
        </Button>
      </Form.Group>
    </Form>
  );
};

export default FormTodo;
