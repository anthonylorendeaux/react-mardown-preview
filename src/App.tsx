import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-slate-200 w-screen h-screen">
      <div className="">
        {/* Make component */}
        <header>
          <h1 className="text-center text-xl "> Markdown preview editor </h1>
        </header>
        {/* Two part one text editor other text review */}
      </div>
    </div>
  )
}

export default App
