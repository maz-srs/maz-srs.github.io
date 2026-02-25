import Desktop from './components/desktop/Desktop'
import Window from './components/window/Window'
import useWindowManager from './hooks/useWindowManager'

function App() {
  const { windows, openWindow, closeWindow, focusWindow } = useWindowManager()

  return (
    <>
      <Desktop onOpenWindow={openWindow} />
      {windows.map(w => (
        <Window
          key={w.id}
          title={w.title}
          zIndex={w.zIndex}
          x={w.x}
          y={w.y}
          onClose={() => closeWindow(w.id)}
          onFocus={() => focusWindow(w.id)}
        >
          <w.component />
        </Window>
      ))}
    </>
  )
}

export default App