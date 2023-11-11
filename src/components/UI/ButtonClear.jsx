import React from 'react';
import styles from './ButtonClear.module.css';

const ButtonClear = (props) => {
  return (
    <button className={styles["button-clear"]} onClick={props.onClick} aria-label={props.ariaLabel}>
      {props.children}
    </button>
  )
}

export default ButtonClear