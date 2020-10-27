import React, { FunctionComponent } from "react";
import styles from "./chat.module.css"

interface Message {
  from: String;
  message: String;
}

interface Props {
  messages: Array<Message>;
}

const ChatBox: FunctionComponent<Props> = ({ messages }) => {
  return (
      <div className={styles.chatBox}>
      {messages.map((message) => (
        <>
          <p key={Math.random()}>
            <strong>{`${message.from}: `}</strong>
            {message.message}
          </p>
          <br />
        </>
      ))}
    </div>
  );
};

export default ChatBox;
