function DesktopIcon({ id, label, onOpen }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 80,
        margin: 20,
        cursor: 'pointer',
        color: 'white',
        touchAction: 'manipulation',
      }}
      onDoubleClick={() => onOpen(id)}
    >
      <img src={`/icons/${id}.png`} width={48} height={48} />
      <span style={{
        marginTop: 4,
        fontSize: 12,
        textAlign: 'center',
        textShadow: '1px 1px 2px black',
        userSelect: 'none',
        }}>
        {label}
      </span>
    </div>
  )
}

export default DesktopIcon