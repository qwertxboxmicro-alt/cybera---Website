import { useEffect, useState } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import GradientLine from '../components/GradientLine'
import { SkeletonIframe } from '../components/SkeletonLoader'

const checklistItems = [
  "We'll ask about your current payment and email setup (5 min)",
  "We'll share your exposure score across all 8 AI fraud vectors we identified in your company (8 min)",
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

  const [iframeLoading, setIframeLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setIframeLoading(false), 800)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {/* ── SECTION 1: PAGE HEADER ── */}
      <motion.section
        className="bg-[#F5F5F5] py-[70px] md:py-[100px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={0}>
            <p
              className="text-[#0A2540] text-[12px] font-semibold uppercase"
              style={{ letterSpacing: '3px' }}
            >
              Book Your Audit
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-bold text-[#1A1A1A] mt-5 leading-tight text-[32px] md:text-[48px]">
              Book Your Free 15-Minute Audit Call
            </h1>
            <div className="flex justify-center">
              <GradientLine className="mt-5" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[#6B7280] mt-6 leading-relaxed mx-auto text-[17px] md:text-[20px] max-w-[560px]">
              Pick a time that works. We&apos;ll spend 15 minutes identifying
              your top AI fraud risks. No pitch. No pressure. Just honest
              advice.
            </p>
          </FadeIn>
        </div>
      </motion.section>

      {/* ── SECTION 2: TWO COLUMN LAYOUT ── */}
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
              <h2 className="font-bold text-[#1A1A1A] text-[20px] md:text-[22px]">
                What To Expect
              </h2>
              <GradientLine className="mt-3 mb-6" />

              <ul className="flex flex-col gap-5">
                {checklistItems.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="text-[#0A2540] font-bold text-[16px] md:text-[18px] mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-[15px] md:text-[16px] text-[#6B7280] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-[#E5E5E5] mt-10 mb-10" />

              <h3 className="font-bold text-[#1A1A1A] text-[17px] md:text-[18px]">
                Prefer Email?
              </h3>
              <p className="text-[#6B7280] mt-2 text-[15px] md:text-[16px]">
                Reach us at{' '}
                <a
                  href="mailto:cybera.audit@gmail.com"
                  className="text-[#0A2540] font-medium transition-colors duration-200 hover:underline"
                >
                  cybera.audit@gmail.com
                </a>
              </p>
              <p className="text-[#9CA3AF] mt-1 text-[13px] md:text-[14px]">
                We respond within 24 hours.
              </p>

              <div className="border-t border-[#E5E5E5] mt-10 mb-10" />

              <h3 className="font-bold text-[#1A1A1A] text-[17px] md:text-[18px]">
                Confidentiality
              </h3>
              <p className="text-[#6B7280] mt-2 leading-relaxed text-[15px] md:text-[16px]">
                All conversations are confidential. NDAs available on request.
              </p>
            </div>
          </FadeIn>

          {/* RIGHT — Calendly embed */}
          <FadeIn direction="right" delay={0.1}>
            <AnimatePresence mode="wait">
              {iframeLoading ? (
                <motion.div key="iframe-skeleton" exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                  <SkeletonIframe />
                </motion.div>
              ) : (
                <motion.div
                  key="iframe"
                  className="rounded-xl overflow-hidden"
                  style={{ minHeight: '600px' }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <iframe
                    src={import.meta.env.VITE_CALENDLY_URL}
                    width="100%"
                    height="600"
                    frameBorder="0"
                    title="Schedule your free audit"
                    style={{ border: 'none', borderRadius: '12px' }}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </FadeIn>

        </div>
      </motion.section>

      {/* ── SECTION 3: REASSURANCE STRIP ── */}
      <motion.section
        className="bg-[#F5F5F5] py-[50px] md:py-[60px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center">
          {reassuranceItems.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.1}>
              <div>
                <p className="font-bold text-[#1A1A1A] text-[17px] md:text-[18px]">
                  {item.title}
                </p>
                <p className="text-[#6B7280] mt-2 text-[13px] md:text-[14px]">
                  {item.text}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </motion.section>
    </>
  )
}
