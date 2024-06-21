import "./App.css";
import { useEffect, useState } from "react";

function App({ socket }) {
  return (
    <>
      <Sidebar socket={socket} />
    </>
  );
}
export default App;
function Sidebar({ socket }) {
  const [users, setUsers] = useState([]);
  const [msgWindow, setMsgWindow] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [currentRecipient, setCurrentRecipient] = useState("");
  const [messages, setMessages] = useState([]);

  const handleUserClick = (event) => {
    setMsgWindow(true);
    setCurrentRecipient(event.target.value);
  };

  const sendMessage = (event) => {
    event.preventDefault();
    socket.emit("chat", currentMessage, currentRecipient);
    setCurrentMessage("");
  };

  useEffect(() => {
    const handleDisplay = (socketId) => {
      setUsers((prevUsers) => [
        ...prevUsers,
        <button key={socketId} value={socketId} onClick={handleUserClick}>
          {socketId}
        </button>,
      ]);
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
  }, []);

  return (
    <div className="App">
      <div className="sidebar">
        <h2>Users</h2>
        <ul>{users}</ul>
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
    </div>
  );
}
