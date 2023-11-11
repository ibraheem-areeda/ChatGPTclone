import React from 'react';
import styles from "./ChatsList.module.css";
import {useNavigate} from "react-router-dom"

const ChatsList = () => {
  const navigate = useNavigate();
  const clickHandler = (id) => {
    navigate(`chat/${id}`);
  }
  
  const items = []
  return (
    <ul className={styles.list}>
      {items && items[0] ?
        items.map((item) => {
          return <li key={item.id}>
            <button onClick={() => clickHandler(item.id)}>
              {item.name}
            </button>
          </li>
        })
      :
      <li><button>
      item.name
    </button></li>
      }
    </ul>
  )
}

export default ChatsList