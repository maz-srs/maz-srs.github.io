function TitleBar({ title, onClose }) {
  return (
    <div className="title-bar">
      <div className="title-bar-text">{title}</div>
      <div className="title-bar-controls">
        <button aria-label="Minimize" />
        <button aria-label="Maximize" />
        <button aria-label="Close" onClick={onClose} />
      </div>
    </div>
  )
}

export default TitleBar