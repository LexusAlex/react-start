import Item from "../Item/Item";
import {Col, Row} from "react-bootstrap";

export default function Items() {
  return (
    <Row>
      <Col>
        <Item></Item>
      </Col>
      <Col>
        <Item></Item>
      </Col>
      <Col>
        <Item></Item>
      </Col>
      <Col>
        <Item></Item>
      </Col>
    </Row>
  )
}
