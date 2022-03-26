import React, { useEffect, useState } from 'react'

function EffectHookCounter1() {

    const [count , setCount] = useState(0)
    const [name , setName] = useState('')

    useEffect(() => {
        console.log('Use Effect Called')
        document.title = `You Clicked ${count} times`
    } ,[count])
  return (
    <div>
        <input type='text' onChange={e => setName(e.target.value)}></input>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default EffectHookCounter1
