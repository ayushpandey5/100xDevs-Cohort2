import { useContext, useState } from 'react'
import './App.css'
//import {CountContext} from './Context'
import { countAtom, countSelector } from './store/atoms/count'
import { useSetRecoilState, useRecoilValue, RecoilRoot } from 'recoil'



/// Prop-drilling in nested tree components is bad, better to use any State management library or context API for simple shit
function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      {/* <CountContext.Provider value={{count,setCount}}>
      <Count/>
      </CountContext.Provider> */}
      <RecoilRoot>
      <Count />
      </RecoilRoot>
    </>
  )
}
function Count(){
  return <>
    <RenderCount />
    <Buttons/>
    <OddEven />
  </>
}

function RenderCount(){
  //const {count}= useContext(CountContext)
  const count = useRecoilValue(countAtom)
  return <>
  <p>Count is {count}</p>
  </>
}

function Buttons(){
  //const {count,setCount} = useContext(CountContext)
  // setCount to callback fn to increase count.
  // to optimize rerendering...
  const setCount = useSetRecoilState(countAtom)
  return <>
    <button onClick={() => {
        setCount(count => count+1)
    }}>Increase</button>

    <button onClick={() => {
        setCount(count => count-1)
    }}>Decrease</button>
  </>
}

function OddEven(){
  const isEven = useRecoilValue(countSelector)
  const OddEven = (isEven) ? "Even" : "Odd"
  return <>
    <p>Count is {OddEven}</p>
  </>
}

export default App
