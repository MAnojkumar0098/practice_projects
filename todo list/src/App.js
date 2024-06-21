import {useState} from 'react';
import Ff from './components/compo.js'
import './App.css'
import {Sidebar} from './components/sidebar.js'

function App() {
  let [ser,setSer]=useState('');
  let [arr,setArr]=useState(['eat ','sleep ','repeat ','code']);
  let [a,setA]=useState('');
  function fn(e){
    setSer(e.target.value);
    setA(arr.filter((i)=>i.includes(ser)));
    console.log(a);
  }
  function fun(e)
  {
    e.preventDefault();
    setArr([...arr,ser]);
  }
  return (
      <>
      <Sidebar/>
      <div className='frag'>
      <div className='main-div'>
        <form name='hii'><input type='text' id='ser' name='inp' onChange={fn} placeholder="Enter Task"/><div      className='sugg'>{a}</div><br/>
        <button onClick={fun}>click me!</button></form></div>
        <div className='todolist'>
        <Ff todos={arr}/>
        </div>
        </div>
        </>
      
  );
}

export default App;
