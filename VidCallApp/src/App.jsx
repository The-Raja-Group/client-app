import { useState } from 'react'
import videoPlayer from './components/videoPlayer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <videoPlayer />
      <h1 className="text-3xl font-bold underline"> Hello world! </h1>
    </>
  )
}

export default App
