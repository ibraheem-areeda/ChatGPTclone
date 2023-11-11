import React, { useState } from "react";
import { getTheme, toggleTheme } from "../common/theme";

const ChatContext = React.createContext({
  chat: [],
  newEntry: (message, id) => {},
});

const baseURL = process.env.REACT_APP_BASE_URL;
export const ChatContextProvider = ({ children }) => {
  const [chat, setChat] = useState([]);
  const [id, setId] = useState(null);

  const newChat = async (value) => {
    try {
      const res = await fetch(`${baseURL}/api/v1/chat/new`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        body: JSON.stringify({
          message: value,
        }),
      });
      let data = await res.json();
      setChat([data]);
      setId(data.conversation_id);
      if (!res) {
        return;
      }
    } catch (error) {
      console.error(error);
    }
  };

  const newMessage = async (value, id) => {
    try {
      const res = await fetch(`${baseURL}/api/v1/chat/`, {
        body: JSON.stringify({
          message: value,
          conversation_id: id,
        }),
        headers: {
          "Content-Type": "application/json",
          accept: "*/*",
        },
        method: "POST",
      });
      let data = await res.json();
      setChat((current) => [...current, data]);
    } catch (error) {
      console.error(error);
    }
  };

  const newEntry = async (value, id = null) => {
    // setChat(current => [...current])
    console.log("newEntry", value);
    if (!chat[0]) {
      await newChat(value);
    } else {
      await newMessage(value, id);
    }
  };

  return (
    <ChatContext.Provider value={{ chat: chat, newEntry: newEntry, id: id }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContext;
