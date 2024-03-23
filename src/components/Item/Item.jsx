import {Card} from "react-bootstrap";

export default function Item() {
  const title = 'Карточка чего нибудь';
  const subtitle = 'Заголовок карточки';
  const date = new Date();
  const text = 'React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery. As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.';
  return (
    <div>
      <Card bg={"primary"} style={{ width: '18rem' }} border={"light"} text={"white"}>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle className="mb-2">{subtitle}</Card.Subtitle>
          <Card.Text>
            {text}
          </Card.Text>
          <Card.Footer>
            {date.toDateString()}
          </Card.Footer>
        </Card.Body>
      </Card>
    </div>
  );
}
