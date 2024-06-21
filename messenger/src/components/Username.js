import { useState } from "react";

function Username({ socket ,setNamebox,setName,name}) {
  const handleClick = (event) => {
    event.preventDefault();
    setNamebox(false);
    socket.emit("new-user", name);
  };

  return (
    <div className="blur-background">
      <form>
        User Name:
        <input
          id="inp"
          name="name"
          value={name}
          placeholder="enter name"
          onChange={(e) => setName(e.target.value)}
          autoFocus
        />
        <button onClick={handleClick}>Enter chat</button>
      </form>
    </div>
  );
}
export default Username;