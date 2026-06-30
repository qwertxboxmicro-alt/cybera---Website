import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import CountUp from 'react-countup'
import FadeIn from '../components/FadeIn'
import GradientLine from '../components/GradientLine'

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
          className="text-[15px] md:text-[16px] text-[#6B7280] py-2 border-b border-[#F5F5F5]"
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
    <div className="border-b border-[#E5E5E5]">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between text-left py-6 gap-4"
      >
        <span className="text-[16px] md:text-[18px] font-semibold text-[#1A1A1A]">
          {question}
        </span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.3, ease: 'easeInOut' }}
          className="text-[#0A2540] font-bold flex-shrink-0 text-[18px] leading-none"
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
            <p className="text-[15px] md:text-[16px] text-[#6B7280] leading-relaxed pb-6">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Pricing() {
  useEffect(() => {
    document.title = 'Pricing | Cybera'
  }, [])

  const prefersReducedMotion = useReducedMotion()

  return (
    <>
      {/* ── SECTION 1: PAGE HEADER ── */}
      <motion.section
        className="bg-[#F5F5F5] py-[70px] md:py-[100px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p
              className="text-[#0A2540] text-[12px] font-semibold uppercase"
              style={{ letterSpacing: '3px' }}
            >
              Pricing
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-bold text-[#1A1A1A] mt-5 leading-tight text-[32px] md:text-[48px]">
              Simple, Transparent Pricing
            </h1>
            <div className="flex justify-center">
              <GradientLine className="mt-5" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[#6B7280] mt-6 leading-relaxed text-[17px] md:text-[20px]">
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
        transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

          {/* Card 1 — Team Training */}
          <FadeIn direction="left" delay={0}>
            <div className="border border-[#E5E5E5] rounded-2xl flex flex-col px-8 py-10 md:px-10 md:py-12">
              <p
                className="text-[#0A2540] text-[12px] font-semibold uppercase"
                style={{ letterSpacing: '2px' }}
              >
                Add-On
              </p>
              <h2 className="font-bold text-[#1A1A1A] mt-4 text-[24px] md:text-[28px]">
                Team Training
              </h2>
              {/* Anim 3: count-up */}
              <div className="mt-6">
                <span className="font-bold text-[#1A1A1A] text-[40px] md:text-[48px]">
                  {prefersReducedMotion ? (
                    '$500'
                  ) : (
                    <CountUp
                      end={500}
                      prefix="$"
                      separator=","
                      duration={1.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  )}
                </span>
              </div>
              <p className="text-[14px] text-[#6B7280]">one-time</p>
              <p className="text-[15px] md:text-[16px] text-[#6B7280] mt-2">
                Protect your people
              </p>
              <div className="border-t border-[#E5E5E5] mt-8" />
              <FeatureList features={trainingFeatures} />
              <button className="btn-glow mt-10 w-full border-2 border-[#0A2540] text-[#0A2540] bg-white font-semibold rounded-lg py-3.5 text-[15px] md:text-[16px]">
                Add To My Audit
              </button>
            </div>
          </FadeIn>

          {/* Card 2 — AI Fraud Audit (Most Popular) */}
          <FadeIn direction="up" delay={0.1}>
            <div className="border-2 border-[#0A2540] rounded-2xl flex flex-col px-8 py-10 md:px-10 md:py-12">
              <div className="flex justify-center">
                <span className="bg-[#0A2540] text-white text-[12px] font-semibold uppercase px-4 py-1.5 rounded-full">
                  Most Popular
                </span>
              </div>
              <p
                className="text-[#0A2540] text-[12px] font-semibold uppercase mt-4"
                style={{ letterSpacing: '2px' }}
              >
                Core Service
              </p>
              <h2 className="font-bold text-[#1A1A1A] mt-4 text-[24px] md:text-[28px]">
                AI Fraud Audit
              </h2>
              {/* Anim 3: count-up in navy */}
              <div className="mt-6">
                <span className="font-bold text-[#0A2540] text-[40px] md:text-[48px]">
                  {prefersReducedMotion ? (
                    '$3,000'
                  ) : (
                    <CountUp
                      end={3000}
                      prefix="$"
                      separator=","
                      duration={1.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  )}
                </span>
              </div>
              <p className="text-[14px] text-[#6B7280]">one-time</p>
              <p className="text-[15px] md:text-[16px] text-[#6B7280] mt-2">
                Start here
              </p>
              <div className="border-t border-[#E5E5E5] mt-8" />
              <FeatureList features={auditFeatures} />
              <Link
                to="/book-audit"
                className="btn-glow mt-10 w-full bg-[#0A2540] text-white font-bold rounded-lg text-center block py-4 text-[15px] md:text-[16px]"
              >
                Book This Audit
              </Link>
            </div>
          </FadeIn>

          {/* Card 3 — Monthly Protection */}
          <FadeIn direction="right" delay={0.2}>
            <div className="border border-[#E5E5E5] rounded-2xl flex flex-col px-8 py-10 md:px-10 md:py-12">
              <p
                className="text-[#0A2540] text-[12px] font-semibold uppercase"
                style={{ letterSpacing: '2px' }}
              >
                Optional
              </p>
              <h2 className="font-bold text-[#1A1A1A] mt-4 text-[24px] md:text-[28px]">
                Monthly Protection
              </h2>
              {/* Anim 3: count-up */}
              <div className="mt-6">
                <span className="font-bold text-[#1A1A1A] text-[40px] md:text-[48px]">
                  {prefersReducedMotion ? (
                    '$1,000'
                  ) : (
                    <CountUp
                      end={1000}
                      prefix="$"
                      separator=","
                      duration={1.5}
                      enableScrollSpy
                      scrollSpyOnce
                    />
                  )}
                </span>
              </div>
              <p className="text-[14px] text-[#6B7280]">per month</p>
              <p className="text-[15px] md:text-[16px] text-[#6B7280] mt-2">
                Stay protected long-term
              </p>
              <div className="border-t border-[#E5E5E5] mt-8" />
              <FeatureList features={monthlyFeatures} />
              <button className="btn-glow mt-10 w-full border-2 border-[#0A2540] text-[#0A2540] bg-white font-semibold rounded-lg py-3.5 text-[15px] md:text-[16px]">
                Add To My Audit
              </button>
            </div>
          </FadeIn>

        </div>
      </motion.section>

      {/* ── SECTION 3: PRICING JUSTIFICATION ── */}
      <motion.section
        className="bg-[#F5F5F5] py-[60px] md:py-[80px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
      >
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="font-bold text-[#1A1A1A] text-center mb-10 md:mb-12 text-[22px] md:text-[30px]">
              Why $3,000?
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            <FadeIn direction="left" delay={0.05}>
              <p className="text-[15px] md:text-[16px] text-[#6B7280] leading-relaxed">
                A UK construction firm lost $243,000 from a single AI phone
                call. Our audit costs $3,000. That&apos;s 1.2% of what one
                fraud incident could cost you.
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.1}>
              <p className="text-[15px] md:text-[16px] text-[#6B7280] leading-relaxed">
                Hiring a cybersecurity consultant costs $150–300/hour. Our full
                audit — research, call, report, and follow-up — would cost
                $900–1,800 at those rates. You&apos;re getting it for $3,000
                with a guaranteed deliverable.
              </p>
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
        transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
      >
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <p
              className="text-[#0A2540] text-[12px] font-semibold uppercase"
              style={{ letterSpacing: '3px' }}
            >
              Pricing FAQ
            </p>
            <h2 className="font-bold text-[#1A1A1A] mt-4 mb-2 text-[22px] md:text-[30px]">
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
        className="bg-[#0A2540] py-[70px] md:py-[100px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-bold text-white leading-tight text-[26px] md:text-[38px]">
              Start With A Free 15-Minute Audit Call
            </h2>
            <div className="flex justify-center">
              <div
                className="mt-4 h-[3px] w-[80px] rounded-full"
                style={{ background: 'linear-gradient(to right, rgba(255,255,255,0.8), transparent)' }}
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p
              className="mt-5 leading-relaxed text-[16px] md:text-[18px]"
              style={{ color: 'rgba(255,255,255,0.8)' }}
            >
              No payment required to book. We&apos;ll tell you what we find.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <Link
              to="/book-audit"
              className="btn-glow inline-block mt-10 bg-white text-[#0A2540] font-bold rounded-lg px-8 py-4 text-[15px] md:text-[16px]"
            >
              Book Free Call
            </Link>
          </FadeIn>
        </div>
      </motion.section>
    </>
  )
}
