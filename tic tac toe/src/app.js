// App.js

import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [statuses, setStatuses] = useState(Array(9).fill(''));
  const [stat, setStat] = useState(0);

  const handleClick = (index) => {
    if (statuses[index] === '') {
      const newStatuses = [...statuses];
      newStatuses[index] = stat ? 'O' : 'X';
      setStatuses(newStatuses);
      setStat(!stat);
    }
    if(statuses[0]!=statuses[1])
    {
      console.log('win')
    }
  };

  return (
    <div id='app'>
      {statuses.map((status, index) => (
        <div
          key={index}
          className='divs'
          onClick={() => handleClick(index)}
        >
          {status}
        </div>
      ))}
    </div>
  );
};

export default App;
