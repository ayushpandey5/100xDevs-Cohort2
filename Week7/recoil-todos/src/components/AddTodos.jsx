import {useSetRecoilState} from 'recoil'
import { todosAtom } from '../store/atoms/todos'
import { useState } from 'react'

export default function AddTodos() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const setTodos = useSetRecoilState(todosAtom)

    return (
    <div>
        <input onChange={(e) => {
            setTitle(e.target.value)
        }} type="text" name="title" placeholder='Title' id="title" />

        <input onChange={(e) => {
            setDescription(e.target.value)
        }} type="text" name='title' placeholder='Description' id='description'/>


        <button onClick={() => {
            console.log("added")
            setTodos((todos) => {
                return [...todos, {title, description}]
            })
        }}>Add</button>
    </div>
  )
}
