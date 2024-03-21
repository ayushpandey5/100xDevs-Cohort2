import './App.css'

function App() {

  return (
    <>
      {/* <div style={{display: "flex"}}>
      <div style={{backgroundColor: "red", width: "100px", height: "100px"}}></div>
      <div style={{backgroundColor: "yellow",  width: "100px", height: "100px"}}></div>
      <div style={{backgroundColor: "green",  width: "100px", height: "100px"}}></div>
      </div> */}

      {/* Flex */}
      <div className='flex justify-between'>
        <div>hi</div>
        <div>hi</div>
        <div>hi</div>
      </div>


      {/* Grids */}
      <div className='grid grid-cols-10'>
        <div className='col-span-4 bg-black'>hi</div>
        <div className='col-span-4 bg-red-300'>hi</div>
        <div className='col-span-2 bg-yellow-200'>hi</div>
      </div>

      {/* Responsive */}
      <div className='bg-red-100 md:bg-blue-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <div className=''>Div1</div>
        <div className=''>Div2</div>
        <div className=''>Div3</div>
      </div>
    </>
  )
}

export default App
