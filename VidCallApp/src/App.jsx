import { useState } from 'react'

import Body from './components/Body'

import videoPlayer from './components/videoPlayer'



function App() {

  return (
    <>

      <Body/>

    <videoPlayer />
      <h1 className="text-3xl font-bold underline"> Hello world! </h1>

    </>
  )
}

export default App
