const express = require("express");
const http = require("http");
const next = require("next");
const socketio = require("socket.io");

const port = 3000;
const dev = process.env.NODE_ENV === "dev";
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const app = express();
const server = http.createServer(app);
const io = socketio(server);

nextApp.prepare().then(async () => {
  app.all("*", (req, res) => nextHandler(req, res));

  server.listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`);
  });
});

io.on("connection", (socket) => {
  console.log("connected : ", socket.id);

  socket.on("disconnect", () => {
    console.log("client disconnected");
  });

  socket.on("SET_COUNT", (count) => {
    socket.broadcast.emit("SET_COUNT", count);
  });
});
