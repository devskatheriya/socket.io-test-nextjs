import React, { useContext, useEffect, useState } from "react";

import { SocketContext } from "./_app";

const App = () => {
  const [count, setCount] = useState(0);
  const socket = useContext(SocketContext);

  useEffect(() => {
    socket.on("SET_COUNT", (data) => {
      setCount(data);
    });

    return () => {
      socket.off("SET_COUNT", (data) => {
        setCount(data);
      });
    };
  }, [socket]);

  return (
    <div>
      Webapp
      <div>{count}</div>
    </div>
  );
};

export default App;
