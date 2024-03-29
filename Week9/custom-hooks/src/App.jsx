import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const todos = useTodos();

  return (
    <>
      {todos.map(todo => <Todo key={todo._id} todo={todo}/>)}
    </>
  )
}

function useTodos(){
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
      })
  }, [])

  return todos
}

function Todo({todo}){
  return <>
    {todo.title}
    <br />
    {todo.description}
    <br />
    <br />
  </>
}

export default App
