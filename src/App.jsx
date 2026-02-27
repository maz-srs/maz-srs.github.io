import Desktop from './components/desktop/Desktop'
import Window from './components/window/Window'
import useWindowManager from './hooks/useWindowManager'

function App() {
  const { windows, openWindow, closeWindow, focusWindow, minimizeWindow } = useWindowManager()

  return (
    <>
      <Desktop onOpenWindow={openWindow} windows={windows} onMinimize={minimizeWindow} />
      {windows.map(w => (
        <Window
          key={w.id}
          title={w.title}
          zIndex={w.zIndex}
          x={w.x}
          y={w.y}
          isMinimized={w.isMinimized}
          onClose={() => closeWindow(w.id)}
          onFocus={() => focusWindow(w.id)}
          onMinimize={() => minimizeWindow(w.id)}
        >
          <w.component />
        </Window>
      ))}
    </>
  )
}

export default App