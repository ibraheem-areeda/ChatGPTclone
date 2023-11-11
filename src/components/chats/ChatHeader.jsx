import React, { useContext } from 'react';
import styles from "./ChatHeader.module.css";
import ButtonClear from '../UI/ButtonClear';
import { Bars, Moon, Sun } from '../icons/Icons';
import ThemeContext from '../../store/theme-context';
import SidebarContext from '../../store/sidebar-context';

const ChatHeader = () => {
  const themeCtx = useContext(ThemeContext);
  const sideCtx = useContext(SidebarContext);

  const themeClickHandler = () => {
    themeCtx.changeTheme();
  }
  const sidebarClickHandler = () => {
    sideCtx.toggleBar(true);
  }
  
  return (
    <header className={styles.header}>
      <span>
        <span className={styles.toggler}>
          <ButtonClear onClick={sidebarClickHandler} ariaLable="Open Sidebar"><Bars /></ButtonClear>
        </span>
      </span>
      <p>Default (MockGPT-3.5)</p>
      <span>
        <ButtonClear onClick={themeClickHandler} ariaLable="Toggle Theme">{themeCtx.theme === "dark" ?<Sun />: <Moon />}</ButtonClear>
      </span>
    </header>
  )
}

export default ChatHeader