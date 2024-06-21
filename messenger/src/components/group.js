import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";
import "./group.css";
import Username from "./Username";

const socket = io("http://localhost:3001");

function Group() {
  let [groupName, setGroupName] = useState("");
  let [groupRoomMessage, setGroupRoomMessage] = useState("");
  let [GpMessages, setGpMessages] = useState([]);
  const [namebox, setNamebox] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connected");
    });

    socket.on("message", (msg) => {
      setGpMessages((prevMessages) => [...prevMessages, msg]);
    });

    return () => {
      socket.off("message");
    };
  }, []);

  const joinGroup = () => {
    socket.emit("join group", groupName);
    console.log(`Joined group: ${groupName}`);
  };

  const sendGroupRoomMessage = () => {
    socket.emit("GPmessage", {
      room: groupName,
      message: groupRoomMessage,
    });
    setGroupRoomMessage("");
    setGroupName("");
  };

  return (
    <div className="group-container">
      <h2>Group Chat</h2>
      {namebox && (
        <Username
          socket={socket}
          setNamebox={setNamebox}
          setName={setName}
          name={name}
        />
      )}
      <div className="input-container">
        <input
          type="text"
          placeholder="Group Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
          className="input-field"
        />
        <button onClick={joinGroup} className="button">
          Join Group
        </button>
      </div>
      <div className="input-container">
        <input
          type="text"
          placeholder="Group Message"
          value={groupRoomMessage}
          onChange={(e) => setGroupRoomMessage(e.target.value)}
          className="input-field"
        />
        <button onClick={sendGroupRoomMessage} className="button">
          Send Group Room Message
        </button>
      </div>
      <div className="messages-container">
        {GpMessages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Group;
