import React, { useState } from 'react'
import HookMouseEffect2 from './HookMouseEffect2'

function MouseContainerUseEffect() {

        const [display , setDisplay] = useState(false)

  return (
    <div>
      <button onClick={ () =>setDisplay(!display)}>Toggle Button</button>
      {display && <HookMouseEffect2/>}
    </div>
  )
}

export default MouseContainerUseEffect
