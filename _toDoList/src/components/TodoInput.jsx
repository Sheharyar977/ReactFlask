import React from 'react'
import { useState } from 'react'

export default function TodoInput(props) {
    const {handleAddTodos, settodoValue, todoValue} = props
    
  return (
    <header>
        <input value={todoValue} onChange={(e) => {
            settodoValue(e.target.value);
            console.log(todoValue);
        }} placeholder='Enter Todo...' /> 
        <button onClick={() => { handleAddTodos(todoValue)
            console.log(todoValue) 
            settodoValue('')
        }}>Add</button>

        <div> </div>
    </header> 

    

  )
}
