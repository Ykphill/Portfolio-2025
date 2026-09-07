import { useEffect, useState } from 'react'

import './App.css'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Projects from './components/Projects/Projects.jsx'
import Resume from './components/Resume/Resume.jsx'
import Contact from './components/Contact/Contact.jsx'
import NotFound from './components/NotFound/NotFound.jsx'

import Nabar from './components/Navbar/Navbar.jsx'


function App() {
  const [currentPage, setCurrentPage] = useState(window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setCurrentPage(window.location.hash)
    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  return (
    <>
    <Nabar></Nabar>
    {currentPage === '' || currentPage === '#home' ? <Home /> : currentPage === '#about' ? <About /> : currentPage === '#projects' ? <Projects /> : currentPage === '#resume' ? <Resume /> : currentPage === '#contact' ? <Contact /> : <NotFound />}
    
    </>
  )
}

export default App
