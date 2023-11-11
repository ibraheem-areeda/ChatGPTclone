import React, { useState } from "react";
import { getTheme, toggleTheme } from "../common/theme";

const ThemeContext = React.createContext({
  theme: "",
  changeTheme: () => {},
});

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(getTheme());

  const changeTheme = () => {
    setTheme((theme) => toggleTheme(theme));
  };

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
