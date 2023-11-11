import React, { useContext, useState } from 'react';
import styles from "./ChatInput.module.css";
import { Send } from '../icons/Icons';
import ChatContext from '../../store/chat-context';

const ChatInput = () => {
  const chatCtx = useContext(ChatContext);
  const [message, setMessage] = useState("");
  const changeHandler = (event) => {
    setMessage (event.target.value);
  }
  
  const sendHandler = () => {
    let m = message;
    chatCtx.newEntry(m, chatCtx.id);
    setMessage("");
  }
  
  return (
    <footer className={styles["input-container"]} >
      <textarea id='input-textarea' value={message} onChange={changeHandler} placeholder='Enter a message' />
      <button onClick={sendHandler} aria-label='send message' >
        <Send />
      </button>
      <p><small>ChatGPT can make mistakes. Consider checking important information.</small></p>
    </footer>
  )
}

export default ChatInput