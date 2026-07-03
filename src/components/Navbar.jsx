import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'VAPT', to: '/vapt' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors duration-200 relative ${
      isActive
        ? 'text-[#0A2540] after:absolute after:bottom-[-3px] after:left-0 after:w-full after:h-[2px] after:bg-[#0A2540]'
        : 'text-[#1A1A1A] hover:text-[#0A2540]'
    }`

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-[#E5E5E5]">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="font-bold text-[#0A2540]"
          style={{ fontSize: '22px' }}
        >
          Cybera
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/book-audit"
            className="bg-[#0A2540] text-white text-sm font-semibold rounded-lg transition-colors duration-200 hover:bg-[#0D3560]"
            style={{ padding: '10px 20px' }}
          >
            Book Audit
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-[2px] w-6 bg-[#1A1A1A] transition-all duration-300 origin-center ${
              menuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-[#1A1A1A] transition-opacity duration-300 ${
              menuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-[2px] w-6 bg-[#1A1A1A] transition-all duration-300 origin-center ${
              menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-[#E5E5E5] px-6 py-5 flex flex-col gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/book-audit"
            onClick={() => setMenuOpen(false)}
            className="bg-[#0A2540] text-white text-sm font-semibold rounded-lg text-center transition-colors duration-200 hover:bg-[#0D3560] w-full"
            style={{ padding: '10px 20px' }}
          >
            Book Audit
          </Link>
        </div>
      </div>
    </header>
  )
}
