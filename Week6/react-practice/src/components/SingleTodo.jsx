import { useEffect, useState } from "react"
import axios from "axios"

export default function SingleTodo({id}) {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [isLoading, setIsLoading] = useState(true);

    // useEffect(() => {
    //   fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
    //   .then(async (res) => {
    //     const json = await res.json();
    //     setTitle(json.todo.title);
    //     setDescription(json.todo.description);
    //     setIsLoading(false);
    //   })
    // }, [id]);


    useEffect(() => {
      const fetch = async () => {
        try {
          const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
          setTitle(res.data.todo.title)
          setDescription(res.data.todo.description)
          setIsLoading(false)
        } catch (error) {
          console.error(error)
        }    
      }

      fetch();
      
    },[id]);



 
    return(
      <>
        {isLoading ? <p>Loading...</p> : <div><h1>{title}</h1> <h2>{description}</h2></div> }
      </> 

  )
}
