import React from 'react'
import styles from "./ChatMessage.module.css";

const ChatMessage = ({message, answer}) => {
  return (
    <article>
      <section className={styles.message}>
        <img src="/user_image.png" alt='user' />
        {message}
      </section>
      <section className={styles.answer}>
        <img src="/ChatGPT_logo.svg.png" alt='chat-gpt logo' />
        {answer}
      </section>
    </article>
  )
}

export default ChatMessage