import DesktopIcon from './DesktopIcon'
import Taskbar from './Taskbar'

const icons = [
  { id: 'about-me', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Desktop({ onOpenWindow }) {
  return (
    <>
      <div style={{
        width: '100vw',
        height: 'calc(100vh - 40px)',
        backgroundColor: '#008080',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {icons.map(icon => (
          <DesktopIcon key={icon.id} id={icon.id} label={icon.label} onOpen={onOpenWindow} />
        ))}
      </div>
      <Taskbar />
    </>
  )
}

export default Desktop