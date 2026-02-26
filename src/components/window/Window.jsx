import { useState } from 'react'
import { Rnd } from 'react-rnd'
import TitleBar from './TitleBar'

const TASKBAR_HEIGHT = 40
const TITLEBAR_HEIGHT = 28

function Window({ title, onClose, onFocus, zIndex, children, x, y }) {
  const [size, setSize] = useState({ width: 400, height: 300 })
  const [position, setPosition] = useState({ x, y })
  const [mode, setMode] = useState('normal') // 'normal' | 'minimized' | 'maximized'
  const [savedNormal, setSavedNormal] = useState(null)

  function handleMinimize() {
    if (mode === 'minimized') {
      setSize(savedNormal.size)
      setPosition(savedNormal.position)
      setSavedNormal(null)
      setMode('normal')
    } else {
      setSavedNormal({ size, position })
      setSize(prev => ({ ...prev, height: TITLEBAR_HEIGHT }))
      setMode('minimized')
    }
  }

  function handleMaximize() {
    if (mode === 'maximized') {
      setSize(savedNormal.size)
      setPosition(savedNormal.position)
      setSavedNormal(null)
      setMode('normal')
    } else {
      setSavedNormal({ size: mode === 'minimized' ? savedNormal.size : size, position: mode === 'minimized' ? savedNormal.position : position })
      setSize({ width: window.innerWidth, height: window.innerHeight - TASKBAR_HEIGHT })
      setPosition({ x: 0, y: 0 })
      setMode('maximized')
    }
  }

  return (
    <Rnd
      size={size}
      position={position}
      minWidth={200}
      minHeight={mode === 'minimized' ? TITLEBAR_HEIGHT : 150}
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
          onMinimize={handleMinimize}
          onMaximize={handleMaximize}
        />
        {mode !== 'minimized' && (
          <div
            className="window-body"
            style={{ flex: 1, overflow: 'auto' }}
          >
            {children}
          </div>
        )}
      </div>
    </Rnd>
  )
}

export default Window
