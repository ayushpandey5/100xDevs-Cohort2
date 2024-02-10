import './App.css'

function App() {
  


  return (
    <>
      <h1>Todo App</h1>
      <div>
        <input type="text" placeholder='Title' id='title'/>
        <input type="text" placeholder='Description' id='description'/>
        <button onClick={() => {}}>
          Add Todo
        </button>
      </div>

        <h2>Todos</h2>
        <div className="todos"></div>
        
    </>
  )
}

export default App
