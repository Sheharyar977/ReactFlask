import React from 'react'

export default function TodoCard(props) {
  const {children, handleDeleteTodo, index, handleEditTodo, todoValue} = props 

   const onDelete = async (id) => { 
    const options = { 
      method: "DELETE"
    }

    const response = await fetch(`http://127.0.0.1:8080/delete/${id}`, options)
    if (response.status === 200) { 
      //success
    } else { 
      console.error ("failed to delete")
    }





   }

  return (
    <li className='todoItem'> 
      {children}
      <div className='actionsContainer'> 
        <button onClick={() => {
          handleEditTodo(index)
          onDelete(index);
          }}> 
       
          <i className='fa-solid fa-pen-to-square'> </i>
        </button>
        <button onClick={()=> {
          onDelete(index); 
          handleDeleteTodo(index);
      }}> 
          <i className='fa-regular fa-trash-can'></i> 
        </button>
      </div> 
    </li> 
  )
}
