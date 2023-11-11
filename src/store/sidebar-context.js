import React, { useState } from "react";

const SidebarContext = React.createContext({
  isOpen: false,
  toggleBar: (value) => {},
});

export const SidebarContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = (value) => {
    setIsOpen(value);
  };

  return (
    <SidebarContext.Provider value={{ isOpen: isOpen, toggleBar: onToggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export default SidebarContext;
