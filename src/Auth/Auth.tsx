import React, { FunctionComponent } from "react";
import LoginPage from "./Login"

const storage = localStorage;

const Auth: FunctionComponent<unknown> = ({ children }) => {
  const username = storage.getItem("@react-chat-app/username");

  if (username) {
    return <>{children}</>;
  } else {
    return <LoginPage />
  }
};

export default Auth;
