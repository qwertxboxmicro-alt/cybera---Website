import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import GradientLine from '../components/GradientLine'
import { SkeletonIframe } from '../components/SkeletonLoader'
import { CALENDLY_URL } from '../config'

const checklistItems = [
  "We'll ask about your current payment and email setup (5 min)",
  "We'll share 3 specific AI fraud risks we identified in your company (8 min)",
  "You decide if you want a full audit report. Zero pressure. (2 min)",
]

const reassuranceItems = [
  { title: 'Free Call', text: 'No payment required to book' },
  { title: '15 Minutes', text: 'Respectful of your time' },
  { title: 'No Obligation', text: 'Zero pressure to buy anything' },
]

export default function BookAudit() {
  useEffect(() => {
    document.title = 'Book Your Free AI Security Audit | Cybera'
    const meta = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'), { name: 'description' })
    meta.content = "Schedule a 15-minute discovery call. We'll assess your construction company's AI fraud risk and show you exactly what needs to be fixed."
    if (!meta.parentNode) document.head.appendChild(meta)
  }, [])

  const prefersReducedMotion = useReducedMotion()
  const [searchParams] = useSearchParams()
  const booked = searchParams.get('booked') === 'true'

  const [iframeLoading, setIframeLoading] = useState(true)

  return (
    <>
      {/* ── SECTION 1: PAGE HEADER — dark steel band ── */}
      <motion.section
        className="bg-steel-900 bg-blueprint py-[70px] md:py-[100px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={0}>
            <p className="eyebrow-dark">Book Your Audit</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display font-bold text-white mt-5 leading-tight text-[36px] md:text-[48px]">
              Book Your Free 15-Minute Audit Call
            </h1>
            <div className="flex justify-center">
              <GradientLine className="mt-5" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 leading-relaxed mx-auto text-[17px] md:text-[20px] max-w-[560px] text-white/75">
              Pick a time that works. We&apos;ll spend 15 minutes identifying
              your top AI fraud risks. No pitch. No pressure. Just honest
              advice.
            </p>
          </FadeIn>
        </div>
      </motion.section>

      {/* ── BOOKING CONFIRMATION BANNER ── */}
      {booked && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
          className="bg-verified-600/10 border-b border-verified-600/30 px-6 py-5"
        >
          <p className="max-w-3xl mx-auto text-center text-[15px] md:text-[16px] text-verified-600 font-semibold">
            ✓ You&apos;re booked — check your email for the invite. We&apos;ll
            research your company before the call.
          </p>
        </motion.div>
      )}

      {/* ── SECTION 2: REASSURANCE STRIP (above the ask) ── */}
      <motion.section
        className="bg-paper-50 py-[40px] md:py-[50px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4 md:gap-10 text-center">
          {reassuranceItems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div>
                <p className="font-display font-bold text-ink-900 text-[15px] md:text-[18px]">
                  <span className="text-verified-600 mr-1.5" aria-hidden>✓</span>
                  {item.title}
                </p>
                <p className="text-ink-600 mt-2 text-[12px] md:text-[14px]">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </motion.section>

      {/* ── SECTION 3: TWO COLUMN LAYOUT ── */}
      <motion.section
        className="bg-white py-[70px] md:py-[100px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[38fr_62fr] gap-12 md:gap-20 items-start">

          {/* LEFT — What To Expect */}
          <FadeIn direction="left">
            <div>
              <h2 className="font-display font-bold text-ink-900 text-[20px] md:text-[22px]">
                What To Expect
              </h2>
              <GradientLine className="mt-3 mb-6" />

              <ul className="flex flex-col gap-5">
                {checklistItems.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="text-verified-600 font-bold text-[16px] md:text-[18px] mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-[15px] md:text-[16px] text-ink-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-line-200 mt-10 mb-10" />

              <h3 className="font-display font-bold text-ink-900 text-[17px] md:text-[18px]">
                Prefer Email?
              </h3>
              <p className="text-ink-600 mt-2 text-[15px] md:text-[16px]">
                Reach us at{' '}
                <a
                  href="mailto:cybera.audit@gmail.com"
                  className="text-steel-500 font-medium transition-colors duration-200 hover:underline"
                >
                  cybera.audit@gmail.com
                </a>
              </p>
              <p className="text-ink-400 mt-1 text-[13px] md:text-[14px]">
                We respond within 24 hours.
              </p>

              <div className="border-t border-line-200 mt-10 mb-10" />

              <h3 className="font-display font-bold text-ink-900 text-[17px] md:text-[18px]">
                Confidentiality
              </h3>
              <p className="text-ink-600 mt-2 leading-relaxed text-[15px] md:text-[16px]">
                All conversations are confidential. NDAs available on request.
              </p>
            </div>
          </FadeIn>

          {/* RIGHT — Calendly embed */}
          <FadeIn direction="right" delay={0.1}>
            <div className="relative rounded-xl overflow-hidden" style={{ minHeight: 'clamp(620px, 80vh, 760px)' }}>
              <AnimatePresence>
                {iframeLoading && (
                  <motion.div
                    key="iframe-skeleton"
                    className="absolute inset-0 z-10"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <SkeletonIframe />
                  </motion.div>
                )}
              </AnimatePresence>
              <iframe
                src={CALENDLY_URL}
                width="100%"
                frameBorder="0"
                title="Schedule your free audit"
                onLoad={() => setIframeLoading(false)}
                style={{
                  border: 'none',
                  borderRadius: '12px',
                  height: 'clamp(620px, 80vh, 760px)',
                  width: '100%',
                }}
              />
            </div>
          </FadeIn>

        </div>
      </motion.section>
    </>
  )
}
