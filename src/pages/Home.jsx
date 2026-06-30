import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, useReducedMotion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import GradientLine from '../components/GradientLine'

const problems = [
  {
    title: 'Voice Deepfake Fraud',
    text: 'Someone clones your voice using AI. Calls your accountant posing as you. Requests an emergency wire transfer. A UK contractor lost $243,000 this way in 2023.',
  },
  {
    title: 'Fake Invoice Fraud',
    text: 'AI generates perfect copies of your supplier invoices — same logo, same language, different bank account. Your team pays it without noticing.',
  },
  {
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

/* Anim 6: per-card entrance direction */
const cardVariants = [
  { hidden: { opacity: 0, x: -50, y: 0 }, visible: { opacity: 1, x: 0, y: 0 } },
  { hidden: { opacity: 0, x: 0, y: -50 }, visible: { opacity: 1, x: 0, y: 0 } },
  { hidden: { opacity: 0, x: 50,  y: 0 }, visible: { opacity: 1, x: 0, y: 0 } },
]

export default function Home() {
  useEffect(() => {
    document.title = 'Cybera | AI Fraud Protection for Construction Companies'
  }, [])

  const prefersReducedMotion = useReducedMotion()

  /* Anim 6: cards inView ref */
  const cardsRef = useRef(null)
  const cardsInView = useInView(cardsRef, { once: true, margin: '-60px' })

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

  return (
    <>
      {/* ── SECTION 1: HERO ── */}
      {/* Anim 9: motion.section subtle fade-in on enter */}
      <motion.section
        className="bg-white py-[80px] md:py-[120px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={0}>
            <p
              className="text-[#0A2540] text-[12px] font-semibold uppercase"
              style={{ letterSpacing: '3px' }}
            >
              AI Cybersecurity for Construction
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="font-bold text-[#1A1A1A] mt-6 leading-tight text-[32px] md:text-[52px]">
              One AI Phone Call Could Cost Your Construction Company $500,000
            </h1>
            {/* Anim 4: gradient line — centered */}
            <div className="flex justify-center">
              <GradientLine className="mt-5" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-[#6B7280] mx-auto mt-6 leading-relaxed text-[17px] md:text-[20px] max-w-[600px]">
              Most contractors have zero protection against AI deepfakes, fake
              invoices, and voice fraud. Cybera helps you find and close these
              gaps — before it costs you everything.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Link
              to="/book-audit"
              className="btn-glow inline-block mt-10 bg-[#0A2540] text-white text-[15px] md:text-[16px] font-semibold rounded-lg px-8 py-4"
            >
              Get Your Free 15-Min Fraud Risk Audit
            </Link>
          </FadeIn>
        </div>
      </motion.section>

      {/* ── SECTION 2: PROBLEM ── */}
      <motion.section
        className="bg-[#F5F5F5] py-[70px] md:py-[100px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12 md:mb-14">
              <p
                className="text-[#0A2540] text-[12px] font-semibold uppercase"
                style={{ letterSpacing: '3px' }}
              >
                The Threat
              </p>
              <h2 className="font-bold text-[#1A1A1A] mt-4 leading-tight text-[26px] md:text-[38px]">
                Here&apos;s How AI Is Targeting Construction Companies Right Now
              </h2>
              {/* Anim 4 */}
              <div className="flex justify-center">
                <GradientLine className="mt-4" />
              </div>
            </div>
          </FadeIn>

          {/* Anim 6: staggered card entrance + Anim 2: hover effects */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {problems.map((card, i) => (
              <motion.div
                key={card.title}
                variants={{
                  hidden: cardVariants[i].hidden,
                  visible: {
                    ...cardVariants[i].visible,
                    transition: {
                      duration: prefersReducedMotion ? 0 : 0.7,
                      delay: prefersReducedMotion ? 0 : i * 0.1,
                      ease: 'easeOut',
                    },
                  },
                }}
                initial="hidden"
                animate={cardsInView ? 'visible' : 'hidden'}
                whileHover={
                  prefersReducedMotion
                    ? {}
                    : {
                        y: -6,
                        backgroundColor: '#F5F5F5',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.09)',
                        transition: { duration: 0.3 },
                      }
                }
                className="threat-card bg-white border border-[#E5E5E5] rounded-xl p-8 md:p-10"
              >
                <h3 className="font-bold text-[#1A1A1A] text-[18px] md:text-[20px]">
                  {card.title}
                </h3>
                <p className="text-[#4B5563] mt-4 leading-relaxed text-[15px] md:text-[16px]">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 3: HOW IT WORKS ── */}
      <motion.section
        className="bg-white py-[70px] md:py-[100px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12 md:mb-16">
              <p
                className="text-[#0A2540] text-[12px] font-semibold uppercase"
                style={{ letterSpacing: '3px' }}
              >
                How It Works
              </p>
              <h2 className="font-bold text-[#1A1A1A] mt-4 leading-tight text-[26px] md:text-[38px]">
                3 Steps To Knowing Exactly Where You&apos;re Exposed
              </h2>
              <div className="flex justify-center">
                <GradientLine className="mt-4" />
              </div>
            </div>
          </FadeIn>

          {/* Anim 5: sequential step highlight */}
          <div
            ref={stepsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {steps.map((step, i) => (
              <FadeIn key={step.number} delay={i * 0.12}>
                <div className="flex flex-col">
                  {/* Anim 5: number color transitions navy when step activates */}
                  <motion.span
                    className="font-bold leading-none select-none text-[56px] md:text-[64px]"
                    animate={{
                      color: activeStep >= i ? '#0A2540' : '#E5E5E5',
                    }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
                  >
                    {step.number}
                  </motion.span>
                  <h3 className="font-bold text-[#1A1A1A] mt-3 text-[19px] md:text-[22px]">
                    {step.title}
                  </h3>
                  <p className="text-[#6B7280] mt-4 leading-relaxed text-[15px] md:text-[16px]">
                    {step.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── SECTION 4: CTA BANNER ── */}
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
              Don&apos;t Wait Until It Happens To You
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
              Book your free 15-minute audit. We&apos;ll identify your top AI
              fraud risks at no cost.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <Link
              to="/book-audit"
              className="btn-glow inline-block mt-10 bg-white text-[#0A2540] font-bold rounded-lg px-8 py-4 text-[15px] md:text-[16px]"
            >
              Book Free Audit Now
            </Link>
          </FadeIn>
        </div>
      </motion.section>
    </>
  )
}
