export const getTheme = () => {
  let theme = localStorage.getItem("theme");
  if (theme === "light") {
    return "light";
  } else if (theme === "dark") {
    return "dark";
  }
  return editTheme("dark");
};

export const toggleTheme = (value) => {
  if (value === "light") {
    return editTheme("dark");
  }
  return editTheme("light");
};

const editTheme = (value) => {
  localStorage.setItem("theme", value);
  return value;
};
