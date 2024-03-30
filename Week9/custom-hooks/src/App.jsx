import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  // const {todos, loading} = useTodos(5);
  // const online = useIsOnline();
  //const pointer = useMousePointer();
  const dimension = useDimensions();


  return (
    <>

      {/* <p>Your mouse position in X: {pointer.x}, and Y: {pointer.y}</p> */}
      <p>Your height and width is H: {dimension.width}, and W: {dimension.height}</p>

      {/* {online ? <>You are online</> : <>You are offline</>} */}
  
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

function useMousePointer() {
  const [pointer, setPointer] = useState({x: 0, y: 0})

  useEffect(() => {
      window.addEventListener("mousemove", (e) => {
        setPointer({x: e.clientX, y: e.clientY})
      })

      return () => {
        window.addEventListener("mousemove", (e) => {
          setPointer({x: e.clientX, y: e.clientY})
        })
      }
  }, [pointer])
  return pointer
}


const useDimensions = () => {
  const [dimension, setDimensions] = useState({width:0, height:0})
  
  useEffect(() => {
      window.addEventListener("resize", () => {
        setDimensions({ width: window.innerWidth, height: window.innerHeight });
      })

      return () => {
        window.removeEventListener("resize", () => {
          setDimensions({ width: window.innerWidth, height: window.innerHeight });
        })
      }
  }, [])

  return dimension
}



export default App
