import { useState, useEffect } from 'react'
import axios from 'axios'
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
  const [array, setArray] =useState([]); 
  // usestate for setting a javascript
  // object for storing and using data

const fetchAPI = async () => {
  const response = await fetch("http://127.0.0.1:8080/api/test")
  const data = await response.json()
  setArray(data.tasks)
  console.log(data.tasks)
  
  //console.log(response.data.tasks.task);
  //setArray(response.data.users);
}; 

useEffect(() => { 
  fetchAPI();
}, [] );



const [todos, settodos] = useState([]); 

useEffect(() => { 
  const taskArray = array.map((item) => item.task);
  settodos(taskArray); 
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
  //delete in database 
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
  </main>
)


}



export default App





