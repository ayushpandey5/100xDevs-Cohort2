import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const {todos, loading} = useTodos(5);

  return (
    <>
      {loading ? <>Loading....</> : todos.map(todo => <Todo key={todo._id} todo={todo}/>)}
    </>
  )
}

function useTodos(n){
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setInterval(() => {
      axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
      }).then(() => {
        setLoading(false)
      })
    },n * 100)
  }, [])

  return {todos, loading}
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
