
import { useState } from 'react'
import './App.css'


 
function App() {

  const [todos, setTodos] = useState([{title : "Ayush1", description: "New"},
  {title : "Todo1", description: "New"},{title : "Todo2", description: "New"}]);

  return (
    <> 
    {todos.map((todo, index) => {
      return <Todos key={index} id={index} title={todo.title} description={todo.description}></Todos>
    })}
     
     <AddTodos todos={todos} setTodos={setTodos}></AddTodos>
    </>
  )
}



function Todos(props){
  function isComplete(){
    
  }
  return <>
  <div id = {props.id}>
  <h1>{props.title}</h1>
  <h3>{props.description}</h3>
  <button onClick={isComplete}>Done</button>
  </div>
  </>
}

function AddTodos(props){
  function addTodo(){
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    props.setTodos([...props.todos, {title: title, description: description}])
  }

  return <>
  <input type="text" id='title' />
  <input type="text" id='description' />
  <button onClick={addTodo}>Add</button>
  </>
}


export default App
