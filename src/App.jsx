import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import OpeningModal from './components/OpeningModal'
import Home from './pages/Home'
import About from './pages/About'
import Activities from './pages/Activities'
import Contact from './pages/Contact'

function App() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const shown = sessionStorage.getItem('opening-modal-shown')
    if (!shown) {
      const timer = setTimeout(() => {
        setShowModal(true)
        sessionStorage.setItem('opening-modal-shown', 'true')
      }, 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <>
      {showModal && <OpeningModal onClose={() => setShowModal(false)} />}
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/actividades" element={<Activities />} />
          <Route path="/contacto" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}

export default App
