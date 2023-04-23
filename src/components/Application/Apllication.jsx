import styles from './Application.module.scss';
import React from "react";

function Application(props) {
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
      </div>
    </div>
    //<div className={styles.app}>{props.date.toLocaleDateString()}</div>
  );

}

export default Application;
