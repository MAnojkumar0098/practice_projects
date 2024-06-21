const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

let users = [];

io.on("connect", (socket) => {
  socket.emit("display", users);

  socket.on("new-user", (name) => {
    const user = { id: socket.id, name };
    users.push(user);
    io.emit("display", users);
  });

  socket.on("chat", (message, to, name) => {
    io.to(to).emit("newmsg", `${name}: ${message}`);
  });

  //public chat
  socket.on("group", (m) => {
    console.log(socket.id, m);
    socket.broadcast.emit("group", m, socket.id);
  });

  socket.on("back", (s, m) => {
    console.log(s, m);
    io.to(s).emit("back", m);
  });
  //group chat
  socket.on("join group", (group) => {
    socket.join(group);
    console.log(`User joined room: ${group}`);
    const user = users.find((user) => user.id === socket.id);
    if (user) {
      socket
        .to(group)
        .emit("message", `${user.name} has joined the room: ${group}`);
    }
  });

  socket.on("GPmessage", (data) => {
    let object = users.find((obj) => obj.id === socket.id);
    let message = `${object.name}:${data.message}`;
    io.to(data.room).emit("message", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });

  socket.on("disconnect", () => {
    users = users.filter((user) => user.id !== socket.id);
    io.emit("display", users);
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
