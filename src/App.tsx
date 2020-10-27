import React, { Component } from "react";
import { ReactComponent as Logo } from "./logo.svg";
import styles from "./App.module.css";

import Chat from "./Chat";
import Auth from "./Auth";

class App extends Component {
  render() {
    return (
      <div className="container">
        <header>
          <Logo title="logo" className={styles.logo} />
          <h1>React Chat</h1>
        </header>
        <main>
          <Auth>
            <Chat />
          </Auth>
        </main>
        <footer>
          <p>Um webapp feio feito da maneira que deu por Claus Rodrigues Tessmann.</p>
        </footer>
      </div>
    );
  }
}

export default App;
