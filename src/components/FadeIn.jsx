import { motion, useInView, useReducedMotion } from 'framer-motion'
import { useRef } from 'react'

/**
 * Wraps children in a fade-in + slide animation triggered by scroll.
 * direction: 'up' | 'down' | 'left' | 'right'
 */
export default function FadeIn({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  as = 'div',
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const prefersReducedMotion = useReducedMotion()

  const offsets = {
    up:    { y: 28 },
    down:  { y: -28 },
    left:  { x: -50 },
    right: { x: 50 },
  }

  const hidden = { opacity: 0, x: 0, y: 0, ...offsets[direction] }
  const visible = { opacity: 1, x: 0, y: 0 }

  const MotionTag = motion[as] || motion.div

  return (
    <MotionTag
      ref={ref}
      initial={hidden}
      animate={isInView ? visible : hidden}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        delay: prefersReducedMotion ? 0 : delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
