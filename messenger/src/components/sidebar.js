import "./sidebar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Username from "./Username";

function Sidebar({ socket }) {
  const [users, setUsers] = useState([]);
  const [msgWindow, setMsgWindow] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentRecipient, setCurrentRecipient] = useState("");
  const [messages, setMessages] = useState([]);
  const [namebox, setNamebox] = useState(true);
  const [name, setName] = useState("");

  const handleUserClick = (event) => {
    setMsgWindow(true);
    setCurrentRecipient(event.target.value);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit("chat", currentMessage, currentRecipient, name);
    setCurrentMessage("");
  };

  useEffect(() => {
    const handleDisplay = (userList) => {
      setUsers(userList);
    };

    const handleNewMessage = (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socket.on("display", handleDisplay);
    socket.on("newmsg", handleNewMessage);

    return () => {
      socket.off("display", handleDisplay);
      socket.off("newmsg", handleNewMessage);
    };
  }, [socket]);

  return (
    <div className="App">
      <div className="sidebar">
        {namebox && (
          <Username socket={socket} setNamebox={setNamebox} setName={setName} name={name} />
        )}
        <h2>Users</h2>
        {users.map((user) => (
          <ul key={user.id}>
            <button value={user.id} onClick={handleUserClick}>
              {user.name}
            </button>
          </ul>
        ))}
      </div>
      <div className="chat-window">
        <div className="messages">
          {messages.map((message, index) => (
            <div className="message" key={index}>
              {message}
            </div>
          ))}
        </div>
        {msgWindow && (
          <form className="message-form" onSubmit={sendMessage}>
            <input
              type="text"
              name="chat"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              placeholder="Type your message"
            />
            <button type="submit">Send</button>
          </form>
        )}
      </div>
      <Link
        style={{
          border: "1px solid black",
          textDecoration: "none",
          color: "white",
          backgroundColor: "grey",
          padding: "10px",
        }}
        to="/"
      >
        Back to Home
      </Link>
    </div>
  );
}

export default Sidebar;
