import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import HeaderBtn from './components/HeaderBtn.jsx'
import Todo from './components/Todo.jsx'


function App() {
const [todos,setTodos] = useState([{
  title: "Eat food",
  description: "Eat food"
},
{
  title: "Go to gym",
  descrition: "Go to gym"
}])

function addTodo(){
  setTodos([...todos,{
    title: "Nice",
    description: "new todo"
  }])
}

  return (
    <>
      <button onClick={addTodo}>Add Todo</button>
      {todos.map((todo) => <Todo title={todo.title} key={todo.title} description={todo.description}></Todo>
      )}
    </>
  )
}

export default App
