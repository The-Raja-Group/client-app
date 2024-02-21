import { useState } from 'react'
import Homepage from './components/Homepage'
import Body from './components/Body'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className="text-3xl font-bold underline"> Hello world! </h1> */}
      <Homepage/>
      <Body/>
    </>
  )
}

export default App
