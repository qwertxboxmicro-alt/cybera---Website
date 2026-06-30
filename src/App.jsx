import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StickyAuditButton from './components/StickyAuditButton'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import BookAudit from './pages/BookAudit'

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/book-audit" element={<BookAudit />} />
          </Routes>
        </main>
        <Footer />
        <StickyAuditButton />
      </div>
    </Router>
  )
}
