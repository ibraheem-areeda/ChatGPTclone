import React from 'react'
import styles from "./Chat.module.css";
import ChatInput from './ChatInput';
import ChatContent from './ChatContent';
import ChatHeader from './ChatHeader';
import { ChatContextProvider } from '../../store/chat-context';

const Chat = () => {
  return (
    <ChatContextProvider>
      <main className={styles["chat-container"]}>
        <ChatHeader />
        <div className={styles["main-chat"]}>
          <ChatContent />
          <ChatInput />
        </div>
      </main>
    </ChatContextProvider>
  )
}

export default Chat