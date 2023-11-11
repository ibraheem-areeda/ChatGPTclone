import React, { useContext } from 'react';
import styles from "./PageContainer.module.css";
import ThemeContext from '../../store/theme-context';

const PageContainer = (props) => {
  const themeCtx = useContext(ThemeContext);

  return (
    <div className={`${styles.container}${themeCtx.theme === "dark" ? "" : " light-theme"}`}>{props.children}</div>
  )
}

export default PageContainer