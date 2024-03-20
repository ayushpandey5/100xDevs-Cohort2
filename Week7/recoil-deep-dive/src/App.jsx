import {RecoilRoot} from 'recoil'
import Navbar from './components/Navbar'
import Todo from './components/Todo'



function App() {

  return (
    <>
      <RecoilRoot>
          <Navbar/>
          <Todo id={1}/>
          <Todo id={2}/>
          <Todo id={3}/>
      </RecoilRoot>
    </>
  )
}

export default App
