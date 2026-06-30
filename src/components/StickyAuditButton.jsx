import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useReducedMotion } from 'framer-motion'

/** Animation 10: Mobile-only sticky Book Audit button */
export default function StickyAuditButton() {
  const { pathname } = useLocation()
  const prefersReducedMotion = useReducedMotion()

  if (pathname === '/book-audit') return null

  return (
    <motion.div
      className="fixed bottom-5 right-5 z-50 sm:hidden"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay: prefersReducedMotion ? 0 : 0.6,
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: 'easeOut',
      }}
    >
      <Link
        to="/book-audit"
        className="btn-glow flex items-center justify-center w-14 h-14 rounded-full bg-[#0A2540] text-white font-bold text-center leading-tight"
        style={{ boxShadow: '0 4px 20px rgba(10,37,64,0.4)', fontSize: '9px' }}
      >
        Book<br />Audit
      </Link>
    </motion.div>
  )
}
