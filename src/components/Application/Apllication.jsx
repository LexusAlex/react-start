import styles from './Application.module.scss';
import React, {useCallback, useMemo, useState} from "react";

function Application(props) {
  let [count, setCount] = useState(0);
  let [count2, increment, decrement] = useState(0);
  let one = useCallback(() => {setCount((currentCount))},[]);
  //let raiting  = useMemo(() => { return 10;},0);
  // [stateValue, element]
  console.log(raiting);
  return (
    <div>
      <h1>Заголовок 1</h1>
      <div className="container">
        <div className="row">
          <div className="col-3">
              Первая часть контента
          </div>
          <div className="col-3">
            Вторая часть контента
          </div>
          <div className="col-3">
            Третья часть контента
          </div>
          <div className="col-3">
            Четвертая часть контента
          </div>
        </div>
        <button className="btn btn-primary" onClick={() => {setCount(count + 1)}}> + </button>
        {count}
        <button className="btn btn-primary" onClick={() => {setCount(count - 1)}}> - </button>
      </div>
    </div>
    //<div className={styles.app}>{props.date.toLocaleDateString()}</div>
  );

}

export default Application;
