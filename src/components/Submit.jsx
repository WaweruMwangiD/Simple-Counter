import React, { useState } from 'react'



const Submit = () => {
const [name, setName] = useState("Dave")
const [count, setCount] = useState(0)

const handleNameChange = () => {
  let names = ["Dave", "Linet", "Brian", "Lucy"]
  let name = Math.floor(Math.random() * 4)
  setName(names[name])
}

const addButton = () =>{
  setCount(count + 1)
}

  return (
    <div>
        <h2>My name is {name}</h2>
        <button onClick={handleNameChange}>Submit </button>

        <button onClick={addButton}>Submit </button>
        <h2>{count}</h2>
    
    </div>
  )
}

export default Submit