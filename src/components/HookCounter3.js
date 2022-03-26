import React, { useState } from 'react'

function HookCounter3() {

    const [name , setName] = useState({firstName : '' , lastname : ''})
  return (
    <div>
      <form>
          <input type='text' value={name.firstName} onChange={e => setName({...name ,firstName : e.target.value})}/>
          <input type='text' value={name.lastname} onChange={e => setName({...name ,lastname : e.target.value})}/>
          <h2>Your First Name is {name.firstName}</h2>
          <h2>Your Last name is {name.lastname}</h2>
      </form>
    </div>
  )
}

export default HookCounter3
