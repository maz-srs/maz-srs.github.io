import { useState } from 'react'
import AboutMe from '../components/apps/AboutMe/AboutMe'
import Projects from '../components/apps/Projects/Projects'
import Contact from '../components/apps/Contact/Contact'

const WINDOWS_CONFIG = [
  { id: 'about-me', title: 'About Me', component: AboutMe },
  { id: 'projects', title: 'Projects', component: Projects },
  { id: 'contact', title: 'Contact', component: Contact },
]

const CASCADE_START = { x: 120, y: 20 }
const CASCADE_STEP = 24
const WIN_W = 400
const WIN_H = 300
const TASKBAR_H = 40

function useWindowManager() {
  const [windows, setWindows] = useState([])
  const [topZIndex, setTopZIndex] = useState(1)

  function openWindow(id) {
    const alreadyOpen = windows.find(w => w.id === id)
    if (alreadyOpen) {
      focusWindow(id)
      return
    }

    const maxSteps = Math.min(
      Math.floor((window.innerWidth - WIN_W - CASCADE_START.x) / CASCADE_STEP),
      Math.floor((window.innerHeight - TASKBAR_H - WIN_H - CASCADE_START.y) / CASCADE_STEP),
    )
    const lastStep = windows.length > 0 ? windows[windows.length - 1].cascadeStep : -1
    const step = (lastStep + 1) % (maxSteps + 1)
    const x = CASCADE_START.x + step * CASCADE_STEP
    const y = CASCADE_START.y + step * CASCADE_STEP

    const config = WINDOWS_CONFIG.find(w => w.id === id)
    setTopZIndex(prev => prev + 1)
    setWindows(prev => [...prev, {
      ...config,
      zIndex: topZIndex + 1,
      x,
      y,
      cascadeStep: step,
    }])
  }

  function closeWindow(id) {
    setWindows(prev => prev.filter(w => w.id !== id))
  }

  function focusWindow(id) {
    setTopZIndex(prev => prev + 1)
    setWindows(prev =>
      prev.map(w => w.id === id ? { ...w, zIndex: topZIndex + 1 } : w)
    )
  }

  return { windows, openWindow, closeWindow, focusWindow }
}

export default useWindowManager