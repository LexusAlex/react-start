import styles from './Application.module.scss';

function Application(props) {
  return (
    <div className={styles.app}>{props.date.toLocaleDateString()}</div>
  );
}

export default Application;
