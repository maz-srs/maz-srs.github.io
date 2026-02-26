function DesktopIcon({ id, label, onOpen }) {
  return (
    <div
      className="desktop-icon"
      onClick={() => onOpen(id)}
    >
      <img src={`/icons/${id}.png`} />
      <span>{label}</span>
    </div>
  )
}

export default DesktopIcon