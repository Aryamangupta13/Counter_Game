import { useState } from 'react'
import Counter from './Counter'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen">
      <div className='h-1/4 bg-black py-8 flex justify-center'>
        <h1 className="text-4xl font-bold  text-white">Heyy Lets start the game</h1>
      </div>
      <div className='h-3/4'>
        <Counter/>
      </div>
    </div>
  )
}

export default App
