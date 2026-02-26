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
        <button aria-label="Minimize" onClick={onMinimize} />
        <button aria-label="Maximize" onClick={onMaximize} />
        <button aria-label="Close" onClick={onClose} />
      </div>
    </div>
  )
}

export default TitleBar