import Button from "react-bootstrap/Button";

export default function TestButton () {

  return (
    <>
      <Button variant="warning" onClick={() => {console.log(1);}}>Кнопка</Button>
    </>
    )
}
