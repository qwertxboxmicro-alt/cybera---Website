import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence, useInView, useReducedMotion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import GradientLine from '../components/GradientLine'
import { SkeletonCard } from '../components/SkeletonLoader'

const coreThreats = [
  {
    icon: '🎙️',
    title: 'CEO Voice Deepfake Fraud',
    text: 'Attackers clone your CEO\'s voice from public audio and call your accountant demanding an urgent wire.',
    impact: '$100k–500k per incident',
  },
  {
    icon: '🧾',
    title: 'Fake Invoice Fraud',
    text: 'AI generates pixel-perfect copies of real supplier invoices with one changed bank digit.',
    impact: '$5k–100k+ before detection',
  },
  {
    icon: '📧',
    title: 'Business Email Compromise',
    text: 'Attackers mimic your PM\'s writing style and redirect subcontractor payments.',
    impact: '$50k–250k per incident',
  },
  {
    icon: '📁',
    title: 'Project Data Theft',
    text: 'Phishing steals credentials; your bids, blueprints, and pricing end up with competitors.',
    impact: '$50k–500k per lost contract',
  },
]

const emergingThreats = [
  {
    icon: '🔒',
    title: 'Ransomware on Active Projects',
    text: 'Site laptops and trailer machines locked mid-project, with daily delay penalties stacking.',
    impact: '$50k–1M+ plus downtime',
  },
  {
    icon: '🔗',
    title: 'Subcontractor Compromise',
    text: 'A breached sub becomes the attacker\'s path into your payment systems.',
    impact: '$50k–250k via impersonated subs',
  },
  {
    icon: '🎯',
    title: 'AI Spear Phishing',
    text: 'Flawless, personalized phishing emails built from your public footprint — no typos to catch.',
    impact: 'Entry point for every other attack',
  },
  {
    icon: '🏭',
    title: 'Fake Supplier Fraud',
    text: 'Synthetic vendors get onboarded and paid before anyone checks they exist.',
    impact: '$10k–100k+ before detection',
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
    text: "We walk you through exactly what we found. You'll know your exposure across all 8 AI fraud vectors by the end of the call.",
  },
  {
    number: '03',
    title: 'Full Report + Fix Plan',
    text: 'You receive a detailed audit report with step-by-step instructions to close every gap. Cost: $3,000. Timeline: 2 weeks.',
  },
]

const cardVariant = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }

const cardsContainerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.10 } },
}

export default function Home() {
  useEffect(() => {
    document.title = 'Cybera | AI Fraud Protection for Construction Companies'
    const meta = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'), { name: 'description' })
    meta.content = 'Protect your construction company from all 8 AI fraud vectors — voice deepfakes, fake invoices, ransomware, and more. $3,000 audit.'
    if (!meta.parentNode) document.head.appendChild(meta)
  }, [])

  const prefersReducedMotion = useReducedMotion()

  /* Skeleton loading */
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600)
    return () => clearTimeout(timer)
  }, [])

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
  const cardTransition = { duration: prefersReducedMotion ? 0 : 0.6, ease: 'easeOut' }

  return (
    <>
      {/* ── SECTION 1: HERO ── */}
      <motion.section
        className="bg-white py-[80px] md:py-[120px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={sectionTransition}
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

      {/* ── SECTION 2: WHAT YOUR AUDIT COVERS ── */}
      <motion.section
        className="bg-[#F5F5F5] py-[70px] md:py-[100px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={sectionTransition}
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-12 md:mb-14">
              <p
                className="text-[#0A2540] text-[12px] font-semibold uppercase"
                style={{ letterSpacing: '3px' }}
              >
                What Your Audit Covers
              </p>
              <h2 className="font-bold text-[#1A1A1A] mt-4 leading-tight text-[26px] md:text-[38px]">
                One Audit. All 8 AI Fraud Vectors.
              </h2>
              <div className="flex justify-center">
                <GradientLine className="mt-4" />
              </div>
              <p className="text-[#6B7280] mx-auto mt-5 leading-relaxed text-[16px] md:text-[18px] max-w-[620px]">
                Every audit scores your exposure across all 8 threat categories, with a step-by-step fix list for each gap we find.
              </p>
            </div>
          </FadeIn>

          {/* Skeleton → staggered cards */}
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="skeleton"
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {Array.from({ length: 8 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </motion.div>
            ) : (
              <>
                {/* Core Threats */}
                <FadeIn>
                  <p className="text-[#0A2540] text-[11px] font-semibold uppercase mb-5" style={{ letterSpacing: '2.5px' }}>
                    Core Threats
                  </p>
                </FadeIn>
                <motion.div
                  key="core-cards"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10"
                  variants={cardsContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                >
                  {coreThreats.map((card) => (
                    <motion.div
                      key={card.title}
                      variants={cardVariant}
                      transition={cardTransition}
                      whileHover={
                        prefersReducedMotion
                          ? {}
                          : {
                              y: -6,
                              backgroundColor: '#FAFAFA',
                              boxShadow: '0 8px 24px rgba(0,0,0,0.09)',
                              transition: { duration: 0.3 },
                            }
                      }
                      className="threat-card bg-white border border-[#E5E5E5] rounded-xl p-7 md:p-8"
                    >
                      <span className="text-[24px] leading-none" role="img" aria-hidden="true">{card.icon}</span>
                      <h3 className="font-bold text-[#1A1A1A] mt-3 text-[17px] md:text-[19px]">
                        {card.title}
                      </h3>
                      <p className="text-[#4B5563] mt-3 leading-relaxed text-[14px] md:text-[15px]">
                        {card.text}
                      </p>
                      <span className="inline-block mt-4 bg-[#0A2540] text-white text-[11px] font-semibold rounded-md px-3 py-1" style={{ letterSpacing: '0.3px' }}>
                        Impact: {card.impact}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Emerging Threats */}
                <FadeIn>
                  <p className="text-[#0A2540] text-[11px] font-semibold uppercase mb-5" style={{ letterSpacing: '2.5px' }}>
                    Emerging Threats
                  </p>
                </FadeIn>
                <motion.div
                  key="emerging-cards"
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                  variants={cardsContainerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-60px' }}
                >
                  {emergingThreats.map((card) => (
                    <motion.div
                      key={card.title}
                      variants={cardVariant}
                      transition={cardTransition}
                      whileHover={
                        prefersReducedMotion
                          ? {}
                          : {
                              y: -6,
                              backgroundColor: '#FAFAFA',
                              boxShadow: '0 8px 24px rgba(0,0,0,0.09)',
                              transition: { duration: 0.3 },
                            }
                      }
                      className="threat-card bg-white border border-[#E5E5E5] rounded-xl p-7 md:p-8"
                    >
                      <span className="text-[24px] leading-none" role="img" aria-hidden="true">{card.icon}</span>
                      <h3 className="font-bold text-[#1A1A1A] mt-3 text-[17px] md:text-[19px]">
                        {card.title}
                      </h3>
                      <p className="text-[#4B5563] mt-3 leading-relaxed text-[14px] md:text-[15px]">
                        {card.text}
                      </p>
                      <span className="inline-block mt-4 bg-[#0A2540] text-white text-[11px] font-semibold rounded-md px-3 py-1" style={{ letterSpacing: '0.3px' }}>
                        Impact: {card.impact}
                      </span>
                    </motion.div>
                  ))}
                </motion.div>

                <FadeIn delay={0.1}>
                  <p className="text-center text-[#9CA3AF] mt-10 text-[14px]">
                    Each threat scored 0–100 with a clear risk level and remediation timeline.
                  </p>
                </FadeIn>
              </>
            )}
          </AnimatePresence>
        </div>
      </motion.section>

      {/* ── SECTION 3: HOW IT WORKS ── */}
      <motion.section
        className="bg-white py-[70px] md:py-[100px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={sectionTransition}
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
        transition={sectionTransition}
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
