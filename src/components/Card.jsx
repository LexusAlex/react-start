import {Alert} from "react-bootstrap";

export default function Card({children})
{
  return (
    <Alert variant="success">
      {children}
    </Alert>
  )
}
