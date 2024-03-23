import Item from "../Item/Item";
import {Col, Row} from "react-bootstrap";

export default function Items() {
  const currentDate = (new Intl.DateTimeFormat('ru-RU',{
    weekday: 'short',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'Europe/Moscow'
  }).format(Date.now()));
  const data = [
    {
      title: 'Карточка чего нибудь',
      subtitle: 'Заголовок карточки',
      date: currentDate,
      text: 'React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies like jQuery. As one of the oldest React libraries, React-Bootstrap has evolved and grown alongside React, making it an excellent choice as your UI foundation.'
    },
    {
      title: 'Еще карточка',
      subtitle: 'Заголовок карточки 2',
      date: currentDate,
      text: 'Какой-то другой текст'
    }
  ];
  return (
    <Row>
      <Col>
        <Item data={data[0]}></Item>
      </Col>
      <Col>
        <Item data={data[0]}>></Item>
      </Col>
      <Col>
        <Item data={data[1]}>></Item>
      </Col>
      <Col>
        <Item data={data[1]}>></Item>
      </Col>
    </Row>
  )
}
