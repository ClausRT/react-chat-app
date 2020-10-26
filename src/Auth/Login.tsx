import React, { ChangeEvent, FunctionComponent, useState } from "react";

const storage = localStorage;

const Login: FunctionComponent<{}> = () => {
  const [username, setUsername] = useState("");

  function changeHandler(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setUsername(value);
  }

  function submitUsername() {
    const shouldSubmit = window.confirm(`Deseja ser chamado de ${username}?`);
    if (shouldSubmit) {
      storage.setItem("@react-chat-app/username", username);
      window.location.reload();
    }
  }

  return (
    <>
      <h1>Sing In</h1>
      <input
        name="username"
        placeholder="Insert a Username."
        onChange={(event) => changeHandler(event)}
        value={username}
      />
      <button onClick={() => submitUsername()}>Entrar</button>
    </>
  );
};

export default Login;
