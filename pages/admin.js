import React, { useContext, useState } from "react";

import { SocketContext } from "./_app";

const Admin = () => {
  const [count, setCount] = useState(0);
  const socket = useContext(SocketContext);

  const onChange = (event) => {
    setCount(event.target.value);
  };

  const onSubmit = () => {
    socket.emit("SET_COUNT", count);
  };

  return (
    <div>
      <div className="App">
        <h1>Admin</h1>
        <input type="number" onChange={onChange} />
        <button onClick={onSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default Admin;
