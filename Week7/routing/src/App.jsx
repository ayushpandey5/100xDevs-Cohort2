import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom'
import Navbar from './components/Navbar'

const Landing = React.lazy(() => import('./components/Landing'))

const Dashboard = React.lazy(() => import('./components/Dashboard'))

function App() {

  return (
    <>
        <BrowserRouter>
          <Navbar />
          <Link to="/">Go to Landing Page</Link>
          <Routes>
            
            
            <Route path='/dashboard' element={<Suspense fallback={"Loading...."}><Dashboard/></Suspense>}/>
            <Route path='/' element={<Suspense fallback={"Loading...."}><Landing/></Suspense>}/>
          </Routes>
        </BrowserRouter>
    </>
  )
}

export default App
