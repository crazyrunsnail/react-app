import { useState } from 'react';


export default function Counter() {

  let [count, setCount] = useState(0)
  let handleClick = () => {
    setCount(count + 1)
  }
  let resetHandle = () => {
    setCount(0)
  }
  return (
    <><h1>{count}</h1>
      <button className="px-2 py-1 mx-1 font-bold text-white rounded-sm bg-pink-950 font" onClick={handleClick}>Click Me</button>
      <button onClick={resetHandle}> Reset </button>
    </>
  )
}