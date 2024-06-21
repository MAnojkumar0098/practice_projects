import React, { useState, useEffect } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Messenger({ socket }) {
  const [val, setVal] = useState("");
  const [Arr, setArr] = useState([]);
  const [soc, setSoc] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleConnect = () => {
      console.log("connected");
    };

    const handleGroup = (m, s) => {
      let msg = (
        <p className="text-message">
          {s}:{m}
        </p>
      );
      setSoc(s);
      setArr((arr) => [...arr, msg]);
    };

    socket.on("connect", handleConnect);
    socket.on("group", handleGroup);

    return () => {
      socket.off("connect", handleConnect);
      socket.off("group", handleGroup);
    };
  }, []);

  function handleChange(e) {
    setVal(e.target.value);
  }

  function sendMessage(e) {
    e.preventDefault();
    socket.emit("group", val);
    const newMessage = <p className="text-message">:{val}</p>;
    setVal("");
    setArr((prevArr) => [...prevArr, newMessage]);
  }

  function privateMsg(e) {
    socket.emit("back", soc, val);
  }

  return (
    <div id="main-messenger">
      <div className="pubmessages" onClick={privateMsg}>
        {Arr}
      </div>
      <div id="message">
        <form onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Type something!"
            name="message"
            id="message-box"
            value={val}
            onChange={handleChange}
          />
          <button type="submit">
            <img src="paper-plane.png" alt="send" />
          </button>
        </form>
      </div>
    </div>
  );
}
