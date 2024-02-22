import { useState } from "react"

export default function HeaderBtn() {
    const [title,setTitle] = useState("Header")
  return (
    <>
    <button onClick={()=>{
        setTitle(Math.random())
    }}>Change</button>
    <h1>{title}</h1>
    </>
    
  )
}
