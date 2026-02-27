import { useState, useEffect } from 'react'

function Taskbar({ windows, onMinimize }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formatted = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  return (
    <div className="taskbar">
      <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
        <button className="start-button" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/icons/windows-logo.png" width={20} height={20} style={{ marginRight: 4 }} />
          <span >Start</span>
        </button>
        <div style={{ width: 2, height: 30, borderLeft: '1px solid #404040', borderRight: '1px solid #ffffff', margin: '0 2px' }} />
        {windows.map(w => (
          <button
            key={w.id}
            className={`taskbar-window-button ${w.isMinimized ? 'taskbar-window-button-minimized' : ''}`}
            onClick={() => onMinimize(w.id)}
          >
            <img src={`/icons/${w.id}.png`} width={16} height={16} style={{ marginRight: 4 }} />
            {w.title}
          </button>
        ))}
      </div>
      <div className="taskbar-clock">
        {formatted}
      </div>
    </div>
  )
}

export default Taskbar