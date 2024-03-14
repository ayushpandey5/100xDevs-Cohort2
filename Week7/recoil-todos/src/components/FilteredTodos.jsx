import { useRecoilValue} from 'recoil'
import { todosSelector,  } from '../store/atoms/todos'

export default function FilteredTodos() {
    const filteredTodo = useRecoilValue(todosSelector)

  return (
    <div>{filteredTodo.map((todo, index) => {
        return <div key={index}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
        </div>
    })}</div>
  )
}
