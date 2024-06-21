import React, { useState } from 'react'
import './App.css'

function App() {
  let [color1, setColor] = useState("black");
  let arr = [];
  function fn(e)
  {
    setColor('lightgreen');
  }
  for (var i = 0; i < 8; i++)
  {
    for (var j = 0; j < 8; j++)
    {
      if(i%2==0)
        arr.push(<div className='box' onClick={fn} style={{ backgroundColor: j % 2 == 0 ? 'white' : color1 }}></div>);
      else
           arr.push(
             <div
               className="box"
               onClick={fn}
               style={{ backgroundColor: j % 2 != 0 ? "white" : "black" }}
             ></div>
           );
    }
    }
  return (
    <div className='board'>
      {arr}
    </div>
  );
}

export default App