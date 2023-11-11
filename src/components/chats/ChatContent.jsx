import React, { useContext } from 'react'
import ChatMessage from './ChatMessage';
import styles from "./ChatContent.module.css";
import ChatContext from '../../store/chat-context';

const ChatContent = () => {
  const chatCtx = useContext(ChatContext);

  return (
    <section className={styles["content-container"]}>
      {chatCtx.chat&& chatCtx.chat[0] ?
        chatCtx.chat.map((message) => {
          return <ChatMessage message={message.question} answer={message.answer} key={message.id} />
        })
        :
        <div>
          <p>
            Mock GPT 3.5
          </p>
        </div>
      }
    </section>
  )
}

export default ChatContent