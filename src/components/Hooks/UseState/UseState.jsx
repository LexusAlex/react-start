import {useEffect, useState} from "react";
import Button from "react-bootstrap/Button";

export default function UseState()
{
  // index переменная состояния
  // setIndex функция которая будет обновлять index
  const [index, setIndex] = useState(1);
  const [text, setText] = useState('Сохранить');
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({
    x: 0,
    y: 0
  });



  const clicked = () => {
    setText('Закрыть');
  }

  function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
      const id = setInterval(() => {
        setTime(new Date());
      }, 1000);
      return () => clearInterval(id);
    }, []);
    return time;
  }
  const time = useTime();

  return (
    <>
      <Button variant={"success"} onClick={() => {
        setIndex(index + 1);
        setIndex((n) => n + 1);
        setIndex(456);
        console.log(index)
      }}>useState</Button>

      <Button onClick={clicked}>{text}</Button>

      <Button onClick={() => {
        setShow(!show)
      }}>
        {show ? 'Hide' : 'Show'}
      </Button>
      {show && <p>Скрытый текст</p>}
      <h1>{time.toLocaleString()}</h1>

      <Button onClick={() => {setPosition({x:34, y: 67}); console.log(position)}}>Object</Button>
    </>
  );
}
