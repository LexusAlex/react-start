import {Card} from "react-bootstrap";

export default function Item(props) {
  return (
    <div>
      <Card bg={"success"} style={{ width: '18rem' }} border={"light"} text={"white"}>
        <Card.Body>
          <Card.Title>{props.data.title}</Card.Title>
          <Card.Subtitle className="mb-2">{props.data.subtitle}</Card.Subtitle>
          <Card.Text>
            {props.data.text}
          </Card.Text>
          <Card.Footer>
            {props.data.date}
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}
