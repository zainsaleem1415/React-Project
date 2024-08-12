import logo from './logo.svg';
import './App.css';
import Navbar from './component5/Navbar';
import { useEffect, useRef, useState } from 'react';

function App() {


  const [count, setcount] = useState(0)
  const [first, setfirst] = useState(0)
  const [color, setcolor] = useState(0)

  const a = useRef(0)
  useEffect(() => {
    a.current = a.current + 1
    console.log("Rerendering and the value of a is ${a.current} ")
  })


  useEffect(() => {
    alert("Count was Changed")
    setcolor(color + 1)
  }, [count])

  return (
    <>
      {<div className='counter'>

        <button onClick={() => { setcount(count + 1) }} >Count is {count}</button>

      </div>}
      <Navbar color={"blue " + " navy  " + "   " + color} />
    </>

  );
}

export default App;
