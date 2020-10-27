import React, { useState } from "react";
import ChatBox from "./ChatBox";
import MessageBox from "./MessageBox"
import styles from "./chat.module.css"

const storage = localStorage;

interface Message {
  from: String,
  message: String
}

export default function Chat() {
  const username = storage.getItem("@react-chat-app/username");
  const [chatbox, setChatbox] = useState(Array<Message>());

  function messageHandler(message: string) {
    const newMessage: Message = {
      from: username || 'undefined',
      message: message
    }
    setChatbox([...chatbox, newMessage]);
  }

  return (
    <div className={styles.container}>
      <ChatBox messages={chatbox} />
      <MessageBox sendMessage={messageHandler} />
    </div>
  );
}
