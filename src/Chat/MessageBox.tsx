import React, { ChangeEvent, FunctionComponent, useState, KeyboardEvent } from "react"
import styles from "./chat.module.css"

interface Props {
  sendMessage: Function
}

const MessageBox: FunctionComponent<Props> = ({sendMessage}) => {
  const [message, setMessage] = useState("");

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setMessage(value);
  }

  function keyPressHandler(event: KeyboardEvent<HTMLInputElement>) {
    const { key } = event;
    if (key === "Enter") {
      sendMessage(message);
    }
  }

  return (
    <div className={styles.messageBox}>
    <input placeholder="Escreva sua mensagem aqui..." value={message} onKeyPress={keyPressHandler} onChange={changeHandler} />
    <button onClick={() => sendMessage(message)}>Enviar</button>
    </div>
  )
}

export default MessageBox;
