import { useState, useEffect } from 'react'

function Taskbar() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formatted = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="taskbar">
      <button className="start-button" style={{ display: 'flex', alignItems: 'center' }}>
        <img src="/icons/windows-logo.png" width={20} height={20} style={{ marginRight: 4 }} />
        <span>Start</span>
      </button>
      <div className="taskbar-clock">
        {formatted}
      </div>
    </div>
  )
}

export default Taskbar