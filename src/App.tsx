import React, { Component } from "react";
import { ReactComponent as Logo } from "./logo.svg";
import "./App.css";

import Chat from "./Chat";
import Auth from "./Auth";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Logo title="logo" width="128" height="128" />
          <span>React Chat</span>
        </header>
        <main>
          <Auth>
            <Chat />
          </Auth>
        </main>
        <footer>
          <span>Todos os direitos reservados a Claus Rodrigues Tessmann</span>
        </footer>
      </div>
    );
  }
}

export default App;
