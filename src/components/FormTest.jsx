import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FormTest() {
  return (
    <Form onSubmit={(e) => {e.preventDefault(); console.log('submit');}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default FormTest;
