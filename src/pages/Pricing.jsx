import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion'
import CountUp from 'react-countup'
import FadeIn from '../components/FadeIn'
import GradientLine from '../components/GradientLine'
import { SkeletonPricingTable } from '../components/SkeletonLoader'

const auditFeatures = [
  '2 hours of company research',
  '15-min discovery call',
  'Full audit report (3–5 findings)',
  'Step-by-step fix plan',
  '30-min follow-up call',
  'Delivered in 2 weeks',
]

const trainingFeatures = [
  '1-hour virtual training session',
  'Train staff to spot AI fraud',
  'Real construction fraud examples',
  'Daily fraud prevention checklist',
]

const monthlyFeatures = [
  'Monthly security review',
  'New AI threat updates',
  'Tool recommendations',
  '1 team training/month',
  'Implementation guidance',
]

const faqs = [
  {
    question: 'Can I pay in installments?',
    answer: 'Yes. We offer 50% upfront, 50% on delivery. Ask us when you book.',
  },
  {
    question: 'Is there a money-back guarantee?',
    answer: "We stand behind our work. If you're not satisfied with the audit report quality, we'll revise it until you are.",
  },
  {
    question: 'What if I only want training?',
    answer: "Training works best after an audit so we can tailor it to your specific vulnerabilities. Reach out to discuss options.",
  },
]

function FeatureList({ features }) {
  return (
    <ul className="mt-8">
      {features.map((f) => (
        <li
          key={f}
          className="text-[15px] md:text-[16px] text-ink-600 py-2 border-b border-paper-50"
        >
          {f}
        </li>
      ))}
    </ul>
  )
}

/* Anim 8: reused accordion */
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  return (
    <div className="border-b border-line-200">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between text-left py-6 gap-4"
      >
        <span className="text-[16px] md:text-[18px] font-semibold text-ink-900">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeInOut' }}
          className="text-signal-600 font-bold flex-shrink-0 text-[18px] leading-none"
        >
          ▾
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <p className="text-[15px] md:text-[16px] text-ink-600 leading-relaxed pb-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const pricingContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const pricingItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

function Price({ value, className }) {
  const prefersReducedMotion = useReducedMotion()
  return (
    <span className={`font-mono font-semibold text-[40px] md:text-[48px] ${className}`}>
      {prefersReducedMotion ? (
        `$${value.toLocaleString()}`
      ) : (
        <CountUp end={value} prefix="$" separator="," duration={1.5} enableScrollSpy scrollSpyOnce />
      )}
    </span>
  )
}

export default function Pricing() {
  useEffect(() => {
    document.title = 'Cybera Pricing | Audit & Monitoring Plans'
    const meta = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'), { name: 'description' })
    meta.content = '$3,000 AI fraud audit, $1,000/month monitoring, $500 staff training. Affordable security for construction.'
    if (!meta.parentNode) document.head.appendChild(meta)
  }, [])

  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      {/* ── SECTION 1: PAGE HEADER ── */}
      <motion.section
        className="bg-paper-50 py-[70px] md:py-[100px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="eyebrow">Pricing</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display font-bold text-ink-900 mt-5 leading-tight text-[36px] md:text-[48px]">
              Simple, Transparent Pricing
            </h1>
            <div className="flex justify-center">
              <GradientLine className="mt-5" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-ink-600 mt-6 leading-relaxed text-[17px] md:text-[20px]">
              No retainers. No surprises. Pay for exactly what you need.
            </p>
          </FadeIn>
        </div>
      </motion.section>

      {/* ── SECTION 2: PRICING CARDS ── */}
      <motion.section
        className="bg-white py-[70px] md:py-[100px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {pricingLoading ? (
              <motion.div key="skeleton" exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
                <SkeletonPricingTable />
              </motion.div>
            ) : (
              <motion.div
                ref={pricingRef}
                key="cards"
                className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start"
                variants={pricingContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
              >

            {/* Card 1 — Team Training */}
            <motion.div variants={pricingItemVariants}>
              <div className="border border-line-200 rounded-2xl flex flex-col px-8 py-10 md:px-10 md:py-12">
                <p className="eyebrow !tracking-[2px]">Add-On</p>
                <h2 className="font-display font-bold text-ink-900 mt-4 text-[24px] md:text-[28px]">
                  Team Training
                </h2>
                <div className="mt-6">
                  <Price value={500} className="text-ink-900" />
                </div>
                <p className="text-[14px] text-ink-600">one-time</p>
                <p className="text-[15px] md:text-[16px] text-ink-600 mt-2">
                  Protect your people
                </p>
                <div className="border-t border-line-200 mt-8" />
                <FeatureList features={trainingFeatures} />
                <Link
                  to="/book-audit?addon=training"
                  className="btn-outline mt-10 w-full min-h-[48px] text-center"
                >
                  Add To My Audit
                </Link>
              </div>
            </motion.div>

            {/* Card 2 — AI Fraud Audit (Most Popular) — first on mobile */}
            <motion.div variants={pricingItemVariants} className="order-first md:order-none">
              <div className="border-2 border-signal-500 rounded-2xl flex flex-col px-8 py-10 md:px-10 md:py-12 shadow-xl shadow-signal-500/10 md:-translate-y-4 md:scale-[1.02]">
                <div className="flex justify-center">
                  <span className="bg-signal-500 text-white text-[12px] font-semibold uppercase px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
                <p className="eyebrow !tracking-[2px] mt-4">Core Service</p>
                <h2 className="font-display font-bold text-ink-900 mt-4 text-[24px] md:text-[28px]">
                  AI Fraud Audit
                </h2>
                <div className="mt-6">
                  <Price value={3000} className="text-steel-500" />
                </div>
                <p className="text-[14px] text-ink-600">one-time</p>
                <p className="text-[15px] md:text-[16px] text-ink-600 mt-2">
                  Start here
                </p>
                <div className="border-t border-line-200 mt-8" />
                <FeatureList features={auditFeatures} />
                <Link
                  to="/book-audit"
                  className="btn-primary mt-10 w-full min-h-[52px] text-center"
                >
                  Book This Audit
                  <span className="cta-arrow" aria-hidden>→</span>
                </Link>
              </div>
            </motion.div>

            {/* Card 3 — Monthly Protection */}
            <motion.div variants={pricingItemVariants}>
              <div className="border border-line-200 rounded-2xl flex flex-col px-8 py-10 md:px-10 md:py-12">
                <p className="eyebrow !tracking-[2px]">Optional</p>
                <h2 className="font-display font-bold text-ink-900 mt-4 text-[24px] md:text-[28px]">
                  Monthly Protection
                </h2>
                <div className="mt-6">
                  <Price value={1000} className="text-ink-900" />
                </div>
                <p className="text-[14px] text-ink-600">per month</p>
                <p className="text-[15px] md:text-[16px] text-ink-600 mt-2">
                  Stay protected long-term
                </p>
                <div className="border-t border-line-200 mt-8" />
                <FeatureList features={monthlyFeatures} />
                <Link
                  to="/book-audit?addon=monthly"
                  className="btn-outline mt-10 w-full min-h-[48px] text-center"
                >
                  Add To My Audit
                </Link>
              </div>
            </motion.div>

              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* ── SECTION 3: PRICING JUSTIFICATION ── */}
      <motion.section
        className="bg-paper-50 py-[60px] md:py-[80px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-display font-bold text-ink-900 text-center mb-10 md:mb-12 text-[24px] md:text-[32px]">
              Why $3,000?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <FadeIn direction="left" delay={0.05}>
              <div>
                <p className="font-mono font-semibold text-alarm-600 text-[32px] md:text-[40px]">
                  −$243,000
                </p>
                <p className="text-[15px] md:text-[16px] text-ink-600 leading-relaxed mt-3">
                  A UK construction firm lost $243,000 from a single AI phone
                  call. Our audit costs $3,000. That&apos;s 1.2% of what one
                  fraud incident could cost you.
                </p>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <div>
                <p className="font-mono font-semibold text-steel-500 text-[32px] md:text-[40px]">
                  1.2%
                </p>
                <p className="text-[15px] md:text-[16px] text-ink-600 leading-relaxed mt-3">
                  Hiring a cybersecurity consultant costs $150–300/hour. Our full
                  audit — research, call, report, and follow-up — is a fixed
                  price with a guaranteed deliverable. No hourly surprises.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 4: FAQ ── */}
      <motion.section
        className="bg-white py-[60px] md:py-[80px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="eyebrow">Pricing FAQ</p>
            <h2 className="font-display font-bold text-ink-900 mt-4 mb-2 text-[24px] md:text-[32px]">
              Frequently Asked Questions
            </h2>
            <GradientLine className="mb-8" />
          </FadeIn>
          <div>
            {faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
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
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display font-bold text-white leading-tight text-[28px] md:text-[40px]">
              Start With A Free 15-Minute Audit Call
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
              No payment required to book. We&apos;ll tell you what we find.
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
