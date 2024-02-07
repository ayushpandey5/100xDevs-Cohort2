import { useState } from 'react'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>Todo App</h1>
      <div>
        <input type="text" placeholder='Title' id='title'/>
        <input type="text" placeholder='Description' id='description'/>
        <button onClick={() => {
          const title = document.getElementById('title').value
          const description = document.getElementById('description').value
          setTodos([...todos, {title, description}])
        }}>
          Add Todo
        </button>
      </div>

        <h2>Todos</h2>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <h3>{todo.title}</h3>
              <p>{todo.description}</p>
              <button onClick={() => {
                setTodos(todos.splice(0,1))
              }}>Delete</button>
            </li>
          ))}
        </ul>

      
    </>
  )
}

export default App
