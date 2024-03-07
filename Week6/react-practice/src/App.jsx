import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import HeaderBtn from "./components/HeaderBtn.jsx";
import Todo from "./components/Todo.jsx";
import CardWrapper from "./components/CardWrapper.jsx";
import TextComponent from "./components/TextComponent.jsx";
import SingleTodo from "./components/SingleTodo.jsx";


function App() {
  const [id, setId] = useState(0);
  const [count,setCount] = useState(0)
  const [input, setInput] = useState(1)
  // const [todos, setTodos] = useState([]); // Initialize todos to an empty array
  // useEffect(() => {
  //   fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
  //     const json = await res.json();
  //     setTodos(json.todos);
  //   });
  //   //dependency, runs the useEffect if it changes
  // }, [todos]);
  // function addTodo(){
  //   setTodos([...todos,{
  //     title: "Nice",
  //     description: "new todo"
  //   }])
  // }


    let sumFunc = useMemo(() => {
      console.log("memo called")
      let sum = 0
      for(let i = 0; i <= input; i++){
        sum = sum + i
      }
      return sum
    }, [input])

    // console.log("sum count start")
    //   let sum = 0
    //   for(let i = 0; i <= input; i++){
    //     sum = sum + i
    //   }
   
 
  return (
    <>

    {/* if the page re-renders the loop has to run again. So use useMemo to not re-call the function */}
    <input type="number" onChange={(e) => {
      setInput(e.target.value)
    }}/>
    <p>Sum from 1 to {input} is {sumFunc}</p>
    <button onClick={() => {
      setCount(count + 1)
    }}>Count {count}</button>

    {/* <button onClick={() => {
      setId(1)
    }}>1</button>
    <button onClick={() => {
      setId(2)
    }}>2</button>
    <button onClick={() => {
      setId(3)
    }}>3</button>
    <button onClick={() => {
      setId(4)
    }}>4</button>
    <button onClick={() => {
      setId(5)
    }}>5</button>
    <button onClick={() => {
      setId(6)
    }}>6</button>

    <SingleTodo id={id} /> */}
      {/* <button onClick={addTodo}>Add Todo</button> */}
      {/* {todos.map((todo) => (
        <Todo
          title={todo.title}
          key={todo.title}
          description={todo.description}
        ></Todo>
      ))} */}

      {/* <CardWrapper>
        <TextComponent />
        <TextComponent />
      </CardWrapper>

      <CardWrapper>
        <TextComponent />
        <TextComponent />
      </CardWrapper> */}
    </>
  );
}

export default App;
