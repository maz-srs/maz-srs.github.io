import DesktopIcon from './DesktopIcon'
import Taskbar from './Taskbar'

const icons = [
  { id: 'about-me', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function Desktop({ onOpenWindow, windows, onMinimize }) {
  return (
    <>
      <div className="desktop">
        {icons.map(icon => (
          <DesktopIcon key={icon.id} id={icon.id} label={icon.label} onOpen={onOpenWindow} />
        ))}
      </div>
      <Taskbar windows={windows} onMinimize={onMinimize} />
    </>
  )
}
export default Desktop