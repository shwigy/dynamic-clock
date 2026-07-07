import { format } from 'date-fns'
import './App.css'

function App() {
  const now = new Date()
  const formattedTime = format(now, "MMMM do, yyyy — h:mm:ss a")

  return (
    // separate components for each class for ease of styling
    <div className="clock-card">
      <p className="clock-label">Current Date & Time</p>
      <p className="clock-time">{formattedTime}</p>
    </div>
  )
}

export default App
