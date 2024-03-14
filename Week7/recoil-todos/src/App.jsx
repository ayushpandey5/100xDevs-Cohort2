import AddTodos from './components/AddTodos'
import Todos from './components/Todos'
import FilterTodos from './components/FilterTodos'
import {RecoilRoot} from 'recoil'
import './App.css'

function App() {


  return (
    <>
      <RecoilRoot>
        <h3>Add Todos</h3>
      <AddTodos />

      <br />

        <h3>View All Todos</h3>
        <Todos />

      <br />

        <h3>Filter Todos</h3>
        <FilterTodos />
      </RecoilRoot>
     
    </>
  )
}

export default App
