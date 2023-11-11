import React, { useContext } from 'react';
import styles from "./Sidebar.module.css";
import ButtonClear from '../UI/ButtonClear';
import { Xmark } from '../icons/Icons';
import SidebarContext from '../../store/sidebar-context';

const Sidebar = (props) => {
  const sideCtx = useContext(SidebarContext);
  const closeHandler = () => {
    sideCtx.toggleBar(false)
  }
  
  return (
    <aside className={`${styles.aside}${sideCtx.isOpen ? "": " not-active"}`}>
      <div className={styles.closeButton}>
        <ButtonClear onClick={closeHandler} ariaLabel="Close sidebar" >
          <Xmark />
        </ButtonClear>
      </div>
      <div className={styles["elements-container"]}>
        {props.children}
      </div>
    </aside>
  )
}

export default Sidebar