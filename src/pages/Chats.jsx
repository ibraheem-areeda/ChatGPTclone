import React from 'react';
import styles from "./Chats.module.css";
import Sidebar from '../components/sidebar/Sidebar';
import Chat from '../components/chats/Chat';
import { SidebarContextProvider } from '../store/sidebar-context';
import ChatsList from '../components/chats/ChatsList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const Chats = (props) => {
  const createChat = () => {
    
  }
  
  return (
    <div className={styles.container}>
        <BrowserRouter>
        <SidebarContextProvider>
          <Sidebar>
            <button onClick={createChat} className={styles.newChatButton}>Create Chat</button>
            <ChatsList />
          </Sidebar>
            <Routes>
              <Route path="/" element={<Chat />} />
            </Routes>
        </SidebarContextProvider>
        </BrowserRouter>
    </div>
  )
}

export default Chats