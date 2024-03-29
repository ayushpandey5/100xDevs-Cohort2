import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  // const {todos, loading} = useTodos(5);
  const online = useIsOnline();


  return (
    <>
      {online ? <>You are online</> : <>You are offline</>}
      
      {/* {loading ? <>Loading....</> : todos.map(todo => <Todo key={todo._id} todo={todo}/>)} */}
    </>
  )
}

// function useTodos(n){
//   const [todos, setTodos] = useState([])
//   const [loading, setLoading] = useState(true)


//   useEffect(() => {
//     const interval = setInterval(() => {
//       axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//       }).then(() => {
//         setLoading(false)
//       })
//     },n * 100)

//     return () => {
//       clearInterval(interval)
//     }
//   }, [n])

//   return {todos, loading}
// }

// function Todo({todo}){
//   return <>
//     {todo.title}
//     <br />
//     {todo.description}
//     <br />
//     <br />
//   </>
// }

function useIsOnline() {

  const [online, setOnline] = useState(window.navigator.onLine)

  useEffect(()=>{
      window.addEventListener('online', () => {
          setOnline(true)
      })

      window.addEventListener('offline', () => {
          setOnline(true)
  })
  }, [])
 

return online
}


export default App
