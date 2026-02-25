import { useState } from 'react'
import AboutMe from '../components/apps/AboutMe/AboutMe'
import Projects from '../components/apps/Projects/Projects'
import Contact from '../components/apps/Contact/Contact'

const WINDOWS_CONFIG = [
  { id: 'about-me', title: 'About Me', component: AboutMe },
  { id: 'projects', title: 'Projects', component: Projects },
  { id: 'contact', title: 'Contact', component: Contact },
]

function useWindowManager() {
  const [windows, setWindows] = useState([])
  const [topZIndex, setTopZIndex] = useState(1)

  function openWindow(id) {
    const alreadyOpen = windows.find(w => w.id === id)
    if (alreadyOpen) {
      focusWindow(id)
      return
    }
    const config = WINDOWS_CONFIG.find(w => w.id === id)
    setTopZIndex(prev => prev + 1)
    setWindows(prev => [...prev, {
      ...config,
      zIndex: topZIndex + 1,
      x: 50 + Math.random() * 200,
      y: 50 + Math.random() * 150,
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