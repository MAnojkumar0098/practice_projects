const express = require("express");
const app = express();

const { Server } = require("socket.io");
const { createServer } = require("http");

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    Credentials: "true",
    methods: ["GET,POST"],
  },
});

io.on("connect", (s) => {
  //io.emit('display', s.id);
  //personal chat
  s.broadcast.emit("display", s.id);
  s.on("chat", (m, to) => {
    io.to(to).emit("newmsg", m);
  });

  //group chat
  s.on("group", (m) => {
    console.log(s.id, m);
    s.broadcast.emit("group", m, s.id);
  });

  s.on("back", (s, m) => {
    console.log(s, m);
    io.to(s).emit("back", m);
  });
});
server.listen(8000);
