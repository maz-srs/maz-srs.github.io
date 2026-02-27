import { useState } from 'react'
import { Rnd } from 'react-rnd'
import TitleBar from './TitleBar'

const TASKBAR_HEIGHT = 40

function Window({ title, onClose, onFocus, onMinimize, zIndex, children, x, y, isMinimized }) {
  const [size, setSize] = useState({ width: 400, height: 300 })
  const [position, setPosition] = useState({ x, y })
  const [mode, setMode] = useState('normal')
  const [savedNormal, setSavedNormal] = useState(null)

  function handleMaximize() {
    if (mode === 'maximized') {
      setSize(savedNormal.size)
      setPosition(savedNormal.position)
      setSavedNormal(null)
      setMode('normal')
    } else {
      setSavedNormal({ size, position })
      setSize({ width: window.innerWidth, height: window.innerHeight - TASKBAR_HEIGHT })
      setPosition({ x: 0, y: 0 })
      setMode('maximized')
    }
  }

  if (isMinimized) return null

  return (
    <Rnd
      size={size}
      position={position}
      minWidth={200}
      minHeight={150}
      style={{ zIndex }}
      onMouseDown={onFocus}
      dragHandleClassName="title-bar"
      disableDragging={mode === 'maximized'}
      enableResizing={mode === 'normal'}
      onDragStop={(e, d) => setPosition({ x: d.x, y: d.y })}
      onResizeStop={(e, dir, ref, delta, pos) => {
        setSize({ width: ref.offsetWidth, height: ref.offsetHeight })
        setPosition(pos)
      }}
    >
      <div
        className="window"
        style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <TitleBar
          title={title}
          onClose={onClose}
          onMinimize={onMinimize}
          onMaximize={handleMaximize}
        />
        <div
          className="window-body"
          style={{ flex: 1, overflow: 'auto' }}
        >
          {children}
        </div>
      </div>
    </Rnd>
  )
}

export default Window