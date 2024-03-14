import {useRecoilValue} from 'recoil'
import { todosAtom } from '../store/atoms/todos'

export default function Todos() {
    const todos = useRecoilValue(todosAtom)

    return (
        <div>
        {todos.map((todo, index) => {
            return (
                    <div key={index}>
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>
                    </div>
            );
        })}
</div>

      )
    }