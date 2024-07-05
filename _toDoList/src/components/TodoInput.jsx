import React from 'react'
import { useState } from 'react'

export default function TodoInput(props) {
    const {handleAddTodos, settodoValue, todoValue} = props
    const OnClick = async (e) =>  {
      e.preventDefault()

      const data = { 
        todoValue,
      }

      const url = "http://127.0.0.1:8080/add"
      const options = { 
        method: "POST", 
        headers: { 
          "Content-Type": "application/json"  
        }, 
        body: JSON.stringify(data)
      }
      const response = await fetch(url,options)
      if (response.status !== 201 && response.status !== 200) {
        const data = await response.json()
        alert(data.message)
      } else { 
          //succful 
      

      
      }
      handleAddTodos(todoValue)
      console.log(todoValue)
      settodoValue('')

    }
    
  return (
    <header>
        <input value={todoValue} onChange={(e) => {
            settodoValue(e.target.value);
            console.log(todoValue);
        }} placeholder='Enter Todo...' /> 
        <button onClick={(e) => { 
          OnClick(e); 
          handleAddTodos(todoValue);
          settodoValue('');
        }}> 
        
        Add</button>

        <div> </div>
    </header> 

    

  )
}
