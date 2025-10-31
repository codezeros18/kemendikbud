import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import GamePage from './pages/GamePage'
import KatalogPage from './pages/KatalogPage'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Sangkuriang from './layouts/Sangkuriang'

function App() {
  return (
    // Kita pakai tema Sunda: misal background gelap dengan aksen hijau/coklat
    <div className="min-h-screen bg-zinc-900 text-gray-100"> 

      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
        <Route path="/katalog" element={<KatalogPage />} />
      </Routes>
      <Sangkuriang />
      <Footer />
    </div>
  )
}

export default App