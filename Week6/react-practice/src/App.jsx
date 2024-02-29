import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import HeaderBtn from "./components/HeaderBtn.jsx";
import Todo from "./components/Todo.jsx";
import CardWrapper from "./components/CardWrapper.jsx";
import TextComponent from "./components/TextComponent.jsx";
import SingleTodo from "./components/SingleTodo.jsx";


function App() {
  const [id, setId] = useState(0);
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

  return (
    <>

    <button onClick={() => {
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

    <SingleTodo id={id} />
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
