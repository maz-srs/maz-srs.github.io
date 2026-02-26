function TitleBar({ title, onClose, onMinimize, onMaximize }) {
  return (
    <div className="title-bar" style={{ cursor: 'move' }}>
      <div className="title-bar-text" style={{ userSelect: 'none' }}>{title}</div>
      <div
        className="title-bar-controls"
        style={{ cursor: 'default' }}
        onMouseDown={e => e.stopPropagation()}
        onTouchStart={e => e.stopPropagation()}
      >
        <button aria-label="Minimize" onClick={onMinimize}>
          <img src="/icons/minimize.png" width={12} height={12} />
        </button>
        <button aria-label="Maximize" onClick={onMaximize}>
          <img src="/icons/maximize.png" width={12} height={12} />
        </button>
        <button aria-label="Close" onClick={onClose}>
          <img src="/icons/close.png" width={12} height={12} />
        </button>
      </div>
    </div>
  )
}

export default TitleBar