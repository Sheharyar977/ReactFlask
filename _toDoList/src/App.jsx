import { useState, useEffect } from 'react'
import axios from 'axios'
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [array, setArray] =useState([]); 
  // usestate for setting a javascript
  // object for storing and using data

const fetchAPI = async () => {
  const response = await axios.get("http://127.0.0.1:8080/api/users")
  console.log(response.data.users);
  setArray(response.data.users);
}; 

useEffect(() => { 
  fetchAPI();
}, [] );


const [todos, settodos] = useState([]); 

useEffect(() => { 
  settodos(array); 
}, [array]);




const [todoValue, settodoValue] = useState('');




function handleAddTodos(newTodo) { 
  let newTodoList = [...todos, newTodo]; 
  console.log(newTodoList) ;
  settodos(newTodoList); 
}

function handleDeleteTodo(index) { 
  const newTodoList = todos.filter((todo, todoIndex) => { 
    return todoIndex !== index 
  })
  settodos(newTodoList); 
}

function handleEditTodo(index) { 
  const valueToBeEdited = todos[index]; 
  //const newTodoList = todos.slice(0, index)
  //newTodoList.push(newTodo)
  // console.log(newTodoList); 
  settodoValue(valueToBeEdited); 
  handleDeleteTodo(index); 
}

  
return(
  <main> 
    <TodoInput todoValue={todoValue} settodoValue={settodoValue} handleAddTodos = {handleAddTodos} />
    <TodoList  handleEditTodo={handleEditTodo} handleDeleteTodo = {handleDeleteTodo} todos = {todos} /> 
    <p>     { 
          array.map((user,index) => ( 
            <span key={index}> {user} </span>
          )
          )} </p>
  </main>
)
}



export default App



 