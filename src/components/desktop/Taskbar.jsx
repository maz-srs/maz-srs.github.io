import { useState, useEffect } from 'react'

function Taskbar() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(interval)
  }, [])

  const formatted = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: 40,
      backgroundColor: '#c0c0c0',
      borderTop: '2px solid white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 4px',
      zIndex: 9999,
    }}>
      <button className="start-button" style={{ 
        display: 'flex', 
        alignItems: 'center',
        }}>
        <img src="/icons/windows-logo.png" width={20} height={20} style={{ marginRight: 4 }} />
        <span style={{ position: 'relative', top: 5
          }}>Start</span>
      </button>
      <div style={{
        border: '2px inset #c0c0c0',
        padding: '1px 8px',
        fontSize: 14,
      }}>
        {formatted}
      </div>
    </div>
  )
}

export default Taskbar