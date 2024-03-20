import { useRecoilValue } from "recoil"
import { todosSelectorFamily } from "../store/atoms/atoms"
import { useRecoilValueLoadable } from "recoil"

export default function Todo({id}) {
    const todo = useRecoilValueLoadable(todosSelectorFamily(id))
    console.log(todo)

    if(todo.state === "loading"){
        return <>Loading....</>
    }
    return (
        <>
        {todo.contents.title}
        {todo.contents.description}
        <br />
        </>
    )

}
