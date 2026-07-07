import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion'
import CountUp from 'react-countup'
import FadeIn from '../components/FadeIn'
import GradientLine from '../components/GradientLine'
import { SkeletonCard } from '../components/SkeletonLoader'

/* Inline stroke icons (no extra dependency) */
const PhoneIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    <path d="M15 5c1.5 1 2.5 2.5 3 4" opacity="0.6" />
  </svg>
)

const InvoiceIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="12" y1="12" x2="12" y2="16" />
    <circle cx="12" cy="18.5" r="0.5" fill="#DC2626" />
  </svg>
)

const MailIcon = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    <line x1="17" y1="13" x2="21" y2="17" />
    <line x1="21" y1="13" x2="17" y2="17" />
  </svg>
)

const problems = [
  {
    icon: PhoneIcon,
    stat: '−$243,000',
    title: 'Voice Deepfake Fraud',
    text: 'Someone clones your voice using AI. Calls your accountant posing as you. Requests an emergency wire transfer. A UK contractor lost exactly this amount in 2023.',
  },
  {
    icon: InvoiceIcon,
    stat: null,
    title: 'Fake Invoice Fraud',
    text: 'AI generates perfect copies of your supplier invoices — same logo, same language, different bank account. Your team pays it without noticing.',
  },
  {
    icon: MailIcon,
    stat: null,
    title: 'Business Email Compromise',
    text: "AI learns how your team writes emails. Sends fake messages to suppliers changing payment details. You don't find out until money is already gone.",
  },
]

const steps = [
  {
    number: '01',
    title: 'We Research Your Company',
    text: "We spend 2 hours analyzing your tools, payment processes, and email setup to find where you're most vulnerable.",
  },
  {
    number: '02',
    title: '15-Minute Audit Call',
    text: "We walk you through exactly what we found. You'll know your top 3 AI fraud risks by the end of the call.",
  },
  {
    number: '03',
    title: 'Full Report + Fix Plan',
    text: 'You receive a detailed audit report with step-by-step instructions to close every gap. Cost: $3,000. Timeline: 2 weeks.',
  },
]

const credibilityFacts = [
  { title: 'NDA Available', text: 'Everything you share stays confidential — signed before we start, on request.' },
  { title: 'Report Guarantee', text: "Not satisfied with the audit report? We revise it until you are." },
  { title: '24-Hour Response', text: 'Email us any time. A real person replies within one business day.' },
]

/* Anim 6: per-card directional entrance — gentle offsets keep the motion fluid */
const cardVariants = [
  { hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0 } },
  { hidden: { opacity: 0, y: -20 }, visible: { opacity: 1, y: 0 } },
  { hidden: { opacity: 0, x: 24 },  visible: { opacity: 1, x: 0 } },
]

const cardsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export default function Home() {
  useEffect(() => {
    document.title = 'Cybera | AI Fraud Protection for Construction Companies'
    const meta = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'), { name: 'description' })
    meta.content = 'Protect your construction company from AI-powered fraud. Voice deepfakes, fake invoices, email compromise. $3,000 audit.'
    if (!meta.parentNode) document.head.appendChild(meta)
  }, [])

  const prefersReducedMotion = useReducedMotion()

  /* Skeleton loaders — show initially, hide once section enters viewport */
  const threatsRef = useRef(null)
  const threatsInView = useInView(threatsRef, { once: true, margin: '-60px' })
  const [threatsLoading, setThreatsLoading] = useState(true)

  useEffect(() => {
    if (threatsInView) {
      setThreatsLoading(false)
    }
  }, [threatsInView])

  /* Anim 5: steps sequential highlight */
  const stepsRef = useRef(null)
  const stepsInView = useInView(stepsRef, { once: true, margin: '-80px' })
  const [activeStep, setActiveStep] = useState(-1)

  useEffect(() => {
    if (!stepsInView) return
    const t0 = setTimeout(() => setActiveStep(0), prefersReducedMotion ? 0 : 0)
    const t1 = setTimeout(() => setActiveStep(1), prefersReducedMotion ? 0 : 300)
    const t2 = setTimeout(() => setActiveStep(2), prefersReducedMotion ? 0 : 600)
    return () => [t0, t1, t2].forEach(clearTimeout)
  }, [stepsInView, prefersReducedMotion])

  const sectionTransition = { duration: prefersReducedMotion ? 0 : 0.6 }
  const cardTransition = { duration: prefersReducedMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }

  return (
    <>
      {/* ── SECTION 1: HERO — dark steel + blueprint grid ── */}
      <motion.section
        className="bg-steel-900 bg-blueprint py-[80px] md:py-[120px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={sectionTransition}
      >
        <div className="max-w-3xl mx-auto text-left md:text-center">
          <FadeIn delay={0}>
            <p className="eyebrow-dark">AI Fraud Protection for Construction</p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-display font-bold text-white mt-6 leading-[1.1] text-[36px] md:text-[56px] md:tracking-[-0.02em]">
              One AI Phone Call Could Cost Your Construction Company{' '}
              <span className="text-signal-500">$500,000</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="mx-0 md:mx-auto mt-6 leading-relaxed text-[17px] md:text-[20px] max-w-[600px] text-white/75">
              Most contractors have zero protection against AI deepfakes, fake
              invoices, and voice fraud. Cybera helps you find and close these
              gaps — before it costs you everything.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 md:justify-center">
              <Link to="/book-audit" className="btn-primary w-full sm:w-auto min-h-[52px]">
                Book My Free 15-Min Audit
                <span className="cta-arrow" aria-hidden>→</span>
              </Link>
              <a
                href="#how-it-works"
                className="text-white/60 hover:text-white hover:underline text-[15px] font-medium text-center transition-colors duration-200 py-3"
              >
                See how it works ↓
              </a>
            </div>
          </FadeIn>

          {/* Trust stat strip */}
          <FadeIn delay={0.4}>
            <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 text-left md:text-center">
              <div>
                <p className="font-mono font-semibold text-signal-500 text-[20px] md:text-[28px]">
                  {prefersReducedMotion ? '$500K+' : (
                    <CountUp end={500} prefix="$" suffix="K+" duration={1.5} enableScrollSpy scrollSpyOnce />
                  )}
                </p>
                <p className="text-white/50 text-[12px] md:text-[14px] mt-1">avg. deepfake loss</p>
              </div>
              <div>
                <p className="font-mono font-semibold text-signal-500 text-[20px] md:text-[28px]">3</p>
                <p className="text-white/50 text-[12px] md:text-[14px] mt-1">fraud vectors audited</p>
              </div>
              <div>
                <p className="font-mono font-semibold text-signal-500 text-[20px] md:text-[28px]">2 wks</p>
                <p className="text-white/50 text-[12px] md:text-[14px] mt-1">report turnaround</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </motion.section>

      {/* ── SECTION 2: PROBLEM ── */}
      <motion.section
        className="bg-paper-50 py-[70px] md:py-[100px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={sectionTransition}
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12 md:mb-14">
              <p className="eyebrow">The Threat</p>
              <h2 className="font-display font-bold text-ink-900 mt-4 leading-tight text-[28px] md:text-[40px]">
                Here&apos;s How AI Is Targeting Construction Companies Right Now
              </h2>
              <div className="flex justify-center">
                <GradientLine className="mt-4" />
              </div>
            </div>
          </FadeIn>

          <AnimatePresence mode="wait">
            {threatsLoading ? (
              <motion.div
                key="skeleton"
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
              </motion.div>
            ) : (
              <motion.div
                ref={threatsRef}
                key="cards"
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
                variants={cardsContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                {problems.map((card, i) => (
                  <motion.div
                    key={card.title}
                    variants={cardVariants[i]}
                    transition={cardTransition}
                    className="h-full"
                  >
                    {/* Hover lift runs on CSS (compositor) — inner div avoids fighting Framer's inline transform */}
                    <div className="threat-card hover-lift bg-white border border-line-200 rounded-xl p-8 md:p-10 h-full">
                      <div className="w-fit">{card.icon}</div>
                      {card.stat && (
                        <p className="font-mono font-semibold text-alarm-600 mt-5 text-[24px] md:text-[28px]">
                          {card.stat}
                        </p>
                      )}
                      <h3 className={`font-display font-bold text-ink-900 text-[19px] md:text-[22px] ${card.stat ? 'mt-2' : 'mt-5'}`}>
                        {card.title}
                      </h3>
                      <p className="text-ink-600 mt-4 leading-relaxed text-[15px] md:text-[16px]">
                        {card.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* ── SECTION 3: HOW IT WORKS ── */}
      <motion.section
        id="how-it-works"
        className="bg-white py-[70px] md:py-[100px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={sectionTransition}
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <p className="eyebrow">How It Works</p>
              <h2 className="font-display font-bold text-ink-900 mt-4 leading-tight text-[28px] md:text-[40px]">
                3 Steps To Knowing Exactly Where You&apos;re Exposed
              </h2>
              <div className="flex justify-center">
                <GradientLine className="mt-4" />
              </div>
            </div>
          </FadeIn>

          {/* Anim 5: sequential step highlight + connector line */}
          <div
            ref={stepsRef}
            className="relative grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            <motion.div
              className="hidden md:block absolute top-[32px] left-[8%] right-[8%] h-[2px] bg-line-200 origin-left"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: activeStep >= 0 ? (activeStep + 1) / 3 : 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.5, ease: 'easeInOut' }}
              aria-hidden
            />
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.12}>
                <div className="flex flex-col relative bg-white md:pr-6">
                  <motion.span
                    className="font-mono font-semibold leading-none select-none text-[56px] md:text-[64px] w-fit bg-white"
                    animate={{
                      color: activeStep >= i ? '#F05A0E' : '#E2E8F0',
                    }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
                  >
                    {step.number}
                  </motion.span>
                  <h3 className="font-display font-bold text-ink-900 mt-3 text-[19px] md:text-[22px]">
                    {step.title}
                  </h3>
                  <p className="text-ink-600 mt-4 leading-relaxed text-[15px] md:text-[16px]">
                    {step.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 4: CREDIBILITY BAND ── */}
      <motion.section
        className="bg-paper-50 py-[60px] md:py-[80px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={sectionTransition}
      >
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="text-center mb-10 md:mb-12">
              <p className="eyebrow">Why Cybera</p>
              <h2 className="font-display font-bold text-ink-900 mt-4 leading-tight text-[24px] md:text-[32px]">
                Built For Contractors, Not IT Departments
              </h2>
              <div className="flex justify-center">
                <GradientLine className="mt-4" />
              </div>
            </div>
          </FadeIn>

          <div className="flex md:grid md:grid-cols-3 gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-2 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0">
            {credibilityFacts.map((fact, i) => (
              <FadeIn key={fact.title} delay={i * 0.1} className="min-w-[80%] sm:min-w-[45%] md:min-w-0 snap-center">
                <div className="bg-white border border-line-200 rounded-xl p-7 md:p-8 h-full">
                  <span className="text-verified-600 font-bold text-[18px]" aria-hidden>✓</span>
                  <h3 className="font-display font-bold text-ink-900 mt-3 text-[17px] md:text-[18px]">
                    {fact.title}
                  </h3>
                  <p className="text-ink-600 mt-2 leading-relaxed text-[14px] md:text-[15px]">
                    {fact.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 5: CTA BANNER ── */}
      <motion.section
        className="bg-blueprint py-[70px] md:py-[100px] px-6"
        style={{ background: 'linear-gradient(145deg, #0B1D33 0%, #14304F 100%)' }}
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={sectionTransition}
      >
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display font-bold text-white leading-tight text-[28px] md:text-[40px]">
              Don&apos;t Wait Until It Happens To You
            </h2>
            <div className="flex justify-center">
              <div
                className="mt-4 h-[3px] w-[80px] rounded-full"
                style={{ background: 'linear-gradient(to right, #F05A0E, transparent)' }}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <p className="mt-5 leading-relaxed text-[16px] md:text-[18px] text-white/80">
              Book your free 15-minute audit. We&apos;ll identify your top AI
              fraud risks at no cost.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Link to="/book-audit" className="btn-primary mt-10 min-h-[52px]">
              Book Free Audit Now
              <span className="cta-arrow" aria-hidden>→</span>
            </Link>
          </FadeIn>
        </div>
      </motion.section>
    </>
  )
}
