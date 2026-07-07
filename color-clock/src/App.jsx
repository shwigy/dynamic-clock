import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { format } from 'date-fns'

function App() {
  const [count, setCount] = useState(0)
  const now = new Date()
  const formattedTime = format(now, "MMMM do, yyyy — h:mm:ss a")

  return (
    <>
      <p>Current date and time: {formattedTime}</p>
    </>
  )
}

export default App
