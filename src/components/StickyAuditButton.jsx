import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

/** Mobile-only sticky bottom CTA bar — slides in after the user scrolls past the hero */
export default function StickyAuditButton() {
  const { pathname } = useLocation()
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, 'change', (y) => {
    setVisible(y > 480)
  })

  if (pathname === '/book-audit') return null

  return (
    <motion.div
      className="fixed bottom-0 inset-x-0 z-50 sm:hidden p-3 pb-[calc(12px+env(safe-area-inset-bottom))] bg-white/90 backdrop-blur border-t border-line-200"
      initial={{ y: 90 }}
      animate={{ y: visible ? 0 : 90 }}
      transition={{ duration: 0.35, ease: 'easeOut' }}
    >
      <Link
        to="/book-audit"
        className="flex items-center justify-center gap-2 w-full min-h-[52px] rounded-[10px] bg-signal-500 text-white font-bold text-[16px] shadow-cta active:scale-[0.98]"
      >
        Book Free Audit <span aria-hidden>→</span>
      </Link>
    </motion.div>
  )
}
