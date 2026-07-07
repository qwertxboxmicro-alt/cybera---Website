import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import GradientLine from '../components/GradientLine'

const steps = [
  {
    number: 'STEP 01',
    title: 'We Analyse Your Company',
    text: "Before we speak, we spend 2 hours researching your tech stack, payment processes, email setup, and online presence to identify where you're most vulnerable to AI fraud.",
  },
  {
    number: 'STEP 02',
    title: '15-Minute Discovery Call',
    text: 'We walk you through exactly what we found. No jargon. No scare tactics. Just clear, specific vulnerabilities and what they could cost you if exploited.',
  },
  {
    number: 'STEP 03',
    title: 'Full Audit Report Delivered',
    text: 'Within 2 weeks, you receive a detailed written report: every vulnerability found, the financial impact of each, and step-by-step instructions to fix them.',
  },
  {
    number: 'STEP 04',
    title: 'Ongoing Protection (Optional)',
    text: 'If you want ongoing support, we offer monthly monitoring, team training, and implementation guidance. Completely optional — the audit stands alone.',
  },
]

const faqs = [
  {
    question: 'How long does the audit take?',
    answer: 'Your time commitment: 15 minutes on a call. We handle everything else. The full written report is delivered within 2 weeks.',
  },
  {
    question: 'Do you sign NDAs?',
    answer: 'Yes, absolutely. Everything you share is completely confidential. NDAs are available on request before any information is exchanged.',
  },
  {
    question: 'We already have IT support. Do we need this?',
    answer: "General IT support doesn't cover AI-specific fraud. Voice deepfakes, prompt injection, and AI-powered invoice fraud require specialised knowledge your IT team likely doesn't have.",
  },
  {
    question: "What if you don't find any vulnerabilities?",
    answer: 'Rare, but possible. You receive a clean audit report and a checklist to stay protected as threats evolve.',
  },
  {
    question: 'Can you train our staff too?',
    answer: 'Yes. Staff training is available as a $500 add-on — a 1-hour virtual session covering real construction fraud examples and daily prevention habits.',
  },
]

/* Anim 8: Accordion with AnimatePresence + rotating chevron */
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
        {/* Anim 8: chevron rotates 180° */}
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeInOut' }}
          className="text-signal-600 font-bold flex-shrink-0 text-[18px] leading-none"
        >
          ▾
        </motion.span>
      </button>

      {/* Anim 8: height + opacity expand */}
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

export default function About() {
  useEffect(() => {
    document.title = 'About Cybera | AI Security for Construction'
    const meta = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'), { name: 'description' })
    meta.content = 'Learn how Cybera helps construction companies defend against AI fraud threats targeting the industry right now.'
    if (!meta.parentNode) document.head.appendChild(meta)
  }, [])

  const prefersReducedMotion = useReducedMotion()

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
            <p className="eyebrow-dark">About Cybera</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display font-bold text-white mt-5 leading-tight text-[36px] md:text-[48px]">
              We Help Construction Companies Eliminate AI Fraud Risk
            </h1>
            <div className="flex justify-center">
              <GradientLine className="mt-5" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-6 leading-relaxed text-[17px] md:text-[20px] text-white/75">
              Specialised in AI-specific threats that general IT support
              doesn&apos;t cover.
            </p>
          </FadeIn>
        </div>
      </motion.section>

      {/* ── SECTION 2: WHY WE EXIST ── */}
      <motion.section
        className="bg-white py-[70px] md:py-[100px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-16 items-start">
          <FadeIn direction="left">
            <div>
              <p className="eyebrow">Why We Exist</p>
              <h2 className="font-display font-bold text-ink-900 mt-4 leading-tight text-[26px] md:text-[34px]">
                Construction Companies Are The #1 Target For AI Fraud Right Now
              </h2>
              <GradientLine className="mt-4" />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.1}>
            <div>
              <p className="text-ink-600 leading-relaxed mb-6 text-[15px] md:text-[16px]">
                Fraudsters know that construction companies handle massive
                payments, have thin finance teams, and most have zero security
                in place. AI has made it easier than ever to clone a voice,
                generate a fake invoice, or compromise a business email — and
                most contractors don&apos;t even know it&apos;s possible.
              </p>
              <p className="text-ink-600 leading-relaxed text-[15px] md:text-[16px]">
                Cybera was built to fix that. We audit construction companies
                for AI-specific fraud vulnerabilities and help them close the
                gaps before it costs them hundreds of thousands. No generic IT
                advice. No unnecessary complexity. Just a clear picture of your
                risks and exactly how to fix them.
              </p>
            </div>
          </FadeIn>
        </div>
      </motion.section>

      {/* ── SECTION 3: THE PROCESS — vertical timeline rail ── */}
      <motion.section
        className="bg-paper-50 py-[70px] md:py-[100px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <div className="mb-12 md:mb-14">
              <p className="eyebrow">The Process</p>
              <h2 className="font-display font-bold text-ink-900 mt-4 leading-tight text-[26px] md:text-[34px]">
                What Happens When You Work With Cybera
              </h2>
              <GradientLine className="mt-4" />
            </div>
          </FadeIn>

          <div className="flex flex-col border-l-2 border-line-200 pl-6 md:pl-10">
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.08}>
                <div className="relative py-8 md:py-10">
                  {/* Timeline dot */}
                  <span
                    className="absolute -left-[31px] md:-left-[47px] top-[38px] md:top-[46px] w-3 h-3 rounded-full bg-signal-500 ring-4 ring-signal-50"
                    aria-hidden
                  />
                  <p className="font-mono text-signal-600 text-[12px] font-semibold uppercase tracking-[2px]">
                    {step.number}
                  </p>
                  <h3 className="font-display font-bold text-ink-900 mt-2 text-[19px] md:text-[22px]">
                    {step.title}
                  </h3>
                  <p className="text-ink-600 mt-3 leading-relaxed max-w-2xl text-[15px] md:text-[16px]">
                    {step.text}
                  </p>
                  {i < steps.length - 1 && (
                    <div className="absolute bottom-0 left-0 right-0 border-b border-line-200" />
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 4: FAQ ── */}
      <motion.section
        className="bg-white py-[70px] md:py-[100px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p className="eyebrow">FAQ</p>
            <h2 className="font-display font-bold text-ink-900 mt-4 mb-10 leading-tight text-[26px] md:text-[34px]">
              Common Questions
            </h2>
            <GradientLine className="mb-10 -mt-6" />
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
            <h2 className="font-display font-bold text-white leading-tight text-[28px] md:text-[38px]">
              Ready To Know Where You Stand?
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
              Book your free 15-minute audit call. No commitment required.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link to="/book-audit" className="btn-primary mt-10 min-h-[52px]">
              Book Free Audit
              <span className="cta-arrow" aria-hidden>→</span>
            </Link>
          </FadeIn>
        </div>
      </motion.section>
    </>
  )
}
