import {useState} from "react";
import Button from "react-bootstrap/Button";

export default function UseState()
{
  // index переменная состояния
  // setIndex функция которая будет обновлять index
  const [index, setIndex] = useState(1);
  return (
    <>
        <Button variant={"success"} onClick={() => {setIndex(index + 1); console.log(index)}}>useState</Button>
    </>
  );
}
