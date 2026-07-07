import { Link } from 'react-router-dom'

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Book Audit', to: '/book-audit' },
]

export default function Footer() {
  return (
    <footer className="bg-steel-900 text-white pb-20 sm:pb-0">
      {/* Main columns */}
      <div className="max-w-7xl mx-auto px-6 py-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

          {/* Left — Brand */}
          <div className="flex flex-col gap-3">
            <p className="font-display text-xl font-bold tracking-tight">Cybera</p>
            <p className="text-sm text-ink-400 leading-relaxed max-w-xs">
              AI Fraud Protection for Construction Companies
            </p>
          </div>

          {/* Center — Links */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-white hover:text-signal-500 transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right — Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-ink-400">
              Contact Us
            </p>
            <a
              href="mailto:cybera.audit@gmail.com"
              className="text-sm text-white hover:text-signal-500 transition-colors duration-200 w-fit"
            >
              cybera.audit@gmail.com
            </a>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5">
          <p className="text-xs text-ink-400 text-center md:text-left">
            &copy; 2026 Cybera. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
