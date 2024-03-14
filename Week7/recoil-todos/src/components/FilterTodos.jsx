import { useSetRecoilState} from 'recoil'
import { searchAtom } from '../store/atoms/todos'
import FilteredTodos from './FilteredTodos'
import { useState } from 'react'

export default function FilterTodos() {
    const [searchTerm, setSearchTerm] = useState('')
    const setSearchAtom = useSetRecoilState(searchAtom)

  return (
    <div>
        <input onChange={(e) => {
            setSearchTerm(e.target.value)
        }} type="text" />

        <button onClick={() => {
            setSearchAtom(searchTerm)
        }}>Search</button>
        <FilteredTodos />
    </div>
  )
}
