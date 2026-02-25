import { Rnd } from 'react-rnd'
import TitleBar from './TitleBar'

function Window({ title, onClose, onFocus, zIndex, children, x, y}) {
  return (
    <Rnd
      default={{ x, y, width: 400, height: 300 }}
      minWidth={200}
      minHeight={150}
      style={{ zIndex }}
      onMouseDown={onFocus}
    >
      <div
        className="window"
        style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <TitleBar title={title} onClose={onClose} />
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