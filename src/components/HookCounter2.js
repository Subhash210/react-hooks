import React, { useState } from 'react'

function HookCounter2() {
const initialCount =0
const [count ,setCount] = useState(initialCount)
  return (
    <div>
      Count : {count}<hr/>
      <button onClick={() => setCount(initialCount)}>Reset</button><br/>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increament</button><br/>
      <button onClick={() => setCount(prevCount => prevCount-1)}>Decreament</button>
    </div>
  )
}

export default HookCounter2

