import React from "react";
import socketio from "socket.io-client";

import "../styles/globals.css";

export const socket = socketio.connect();
export const SocketContext = React.createContext();

function MyApp({ Component, pageProps }) {
  return (
    <SocketContext.Provider value={socket}>
      <Component {...pageProps} />
    </SocketContext.Provider>
  );
}

export default MyApp;
