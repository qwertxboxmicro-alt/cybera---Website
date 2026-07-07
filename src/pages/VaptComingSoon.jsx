import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import FadeIn from '../components/FadeIn'
import GradientLine from '../components/GradientLine'

const NOTIFY_EMAIL = 'cybera.audit@gmail.com'

const features = [
  {
    title: 'Full Security Scan',
    description: 'Deep vulnerability assessment across your entire web application.',
  },
  {
    title: 'Exploit Verification',
    description: 'AI-powered confirmation that each finding is actually exploitable.',
  },
  {
    title: 'Risk Scoring',
    description: 'CVSS scores + remediation steps for every vulnerability.',
  },
  {
    title: 'Actionable Report',
    description: '2-week turnaround. Step-by-step fixes you can implement immediately.',
  },
]

const pricingIncludes = [
  'Full vulnerability scan',
  '2-week turnaround',
  'Detailed PDF report',
  'Step-by-step remediation',
]

const faqs = [
  {
    q: 'What is a VAPT audit?',
    a: 'A vulnerability assessment & penetration test that finds security weaknesses in your application and proves which ones can actually be exploited.',
  },
  {
    q: 'How long does it take?',
    a: 'Typically 2 weeks from booking to report delivery.',
  },
  {
    q: 'What do I get?',
    a: 'A detailed PDF report with all findings, CVSS scores, and step-by-step remediation instructions.',
  },
  {
    q: 'Is this different from your AI fraud audit?',
    a: 'Yes. AI fraud audits protect against voice deepfakes, fake invoices, and email compromise. VAPT is a full technical security scan.',
  },
  {
    q: 'Can I do both?',
    a: 'Yes. Many clients do both for complete protection.',
  },
]

export default function VaptComingSoon() {
  const prefersReducedMotion = useReducedMotion()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    document.title = 'VAPT Audits — Coming Soon | Cybera'
    const meta =
      document.querySelector('meta[name="description"]') ||
      Object.assign(document.createElement('meta'), { name: 'description' })
    meta.content =
      'Complete vulnerability assessment + penetration testing for your business. Coming soon — sign up for early access.'
    if (!meta.parentNode) document.head.appendChild(meta)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    const subject = encodeURIComponent('VAPT Audit — Early Access Request')
    const body = encodeURIComponent(
      `Please notify me when VAPT audits launch.\n\nMy email: ${email}`,
    )
    window.location.href = `mailto:${NOTIFY_EMAIL}?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <>
      {/* ── SECTION 1: HEADER ── */}
      <motion.section
        className="bg-paper-50 py-[70px] md:py-[100px] px-6"
        initial={{ opacity: 0.85 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn delay={0}>
            <span className="inline-block rounded-full bg-signal-50 text-signal-600 text-[12px] font-semibold uppercase px-4 py-2" style={{ letterSpacing: '2px' }}>
              Coming Soon · Launching in the next 30 days
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="font-display font-bold text-ink-900 mt-6 leading-tight text-[32px] md:text-[52px]">
              VAPT Audits
            </h1>
            <div className="flex justify-center">
              <GradientLine className="mt-5" />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-ink-600 mt-6 leading-relaxed mx-auto text-[17px] md:text-[20px] max-w-[560px]">
              Complete vulnerability assessment + penetration testing for your
              business. Find the weaknesses before attackers do.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <a
              href="#early-access"
              className="inline-block mt-8 bg-signal-500 text-white text-sm font-semibold rounded-lg transition-colors duration-200 hover:bg-signal-600"
              style={{ padding: '12px 24px' }}
            >
              Get Early Access
            </a>
          </FadeIn>
        </div>
      </motion.section>

      {/* ── SECTION 2: FEATURES ── */}
      <section className="bg-white py-[70px] md:py-[100px] px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 0.1}>
              <div className="h-full border border-line-200 rounded-xl p-6 transition-colors duration-200 hover:border-steel-500">
                <h3 className="font-display font-bold text-ink-900 text-[17px] md:text-[18px]">
                  {feature.title}
                </h3>
                <GradientLine className="mt-3 mb-4" />
                <p className="text-ink-600 leading-relaxed text-[15px] md:text-[16px]">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: PRICING ── */}
      <section className="bg-paper-50 py-[70px] md:py-[100px] px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display font-bold text-ink-900 text-[26px] md:text-[36px]">
              Pricing
            </h2>
            <div className="flex justify-center">
              <GradientLine className="mt-5 mb-10" />
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="bg-white border border-line-200 rounded-2xl p-8 md:p-10 text-left">
              <p className="text-ink-600 text-[15px] md:text-[16px]">
                Complete VAPT Audit
              </p>
              <p className="font-display font-bold text-ink-900 text-[40px] md:text-[48px] mt-1">
                $4,500
              </p>
              <ul className="flex flex-col gap-4 mt-6">
                {pricingIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-verified-600 font-bold text-[16px] mt-0.5 flex-shrink-0">
                      ✓
                    </span>
                    <span className="text-[15px] md:text-[16px] text-ink-600">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-line-200 mt-8 pt-6">
                <p className="text-ink-400 text-[13px] md:text-[14px]">
                  Optional: $1,000/month ongoing monitoring &amp; support
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 4: EARLY ACCESS SIGNUP ── */}
      <section id="early-access" className="bg-white py-[70px] md:py-[100px] px-6 scroll-mt-20">
        <div className="max-w-xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display font-bold text-ink-900 text-[26px] md:text-[36px]">
              Get Early Access
            </h2>
            <div className="flex justify-center">
              <GradientLine className="mt-5 mb-6" />
            </div>
            <p className="text-ink-600 leading-relaxed text-[16px] md:text-[18px]">
              Be the first to know when VAPT audits launch. We&apos;ll email you
              as soon as booking opens.
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            {submitted ? (
              <p className="mt-8 text-verified-600 font-medium text-[16px]">
                ✓ Thanks! Your email app should have opened — send the message
                and we&apos;ll be in touch soon.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-white border border-line-200 text-ink-900 placeholder-ink-400 transition-colors duration-200 focus:outline-none focus:border-steel-500"
                />
                <button
                  type="submit"
                  className="bg-signal-500 text-white text-sm font-semibold rounded-lg transition-colors duration-200 hover:bg-signal-600 whitespace-nowrap"
                  style={{ padding: '12px 24px' }}
                >
                  Notify Me
                </button>
              </form>
            )}
          </FadeIn>
        </div>
      </section>

      {/* ── SECTION 5: FAQ ── */}
      <section className="bg-paper-50 py-[70px] md:py-[100px] px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="font-display font-bold text-ink-900 text-center text-[26px] md:text-[36px]">
              FAQ
            </h2>
            <div className="flex justify-center">
              <GradientLine className="mt-5 mb-10" />
            </div>
          </FadeIn>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.q} delay={i * 0.05}>
                <div className="bg-white border border-line-200 rounded-xl p-6">
                  <h3 className="font-display font-bold text-ink-900 text-[16px] md:text-[18px]">
                    {faq.q}
                  </h3>
                  <p className="text-ink-600 mt-2 leading-relaxed text-[15px] md:text-[16px]">
                    {faq.a}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 6: CTA ── */}
      <section className="bg-white py-[70px] md:py-[100px] px-6">
        <div className="max-w-2xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-display font-bold text-ink-900 text-[26px] md:text-[36px]">
              Ready to Secure Your Application?
            </h2>
            <p className="text-ink-600 mt-5 leading-relaxed text-[16px] md:text-[18px]">
              Sign up for early access and we&apos;ll email you the moment VAPT
              audits go live.
            </p>
            <a
              href="#early-access"
              className="inline-block mt-8 bg-signal-500 text-white text-sm font-semibold rounded-lg transition-colors duration-200 hover:bg-signal-600"
              style={{ padding: '12px 28px' }}
            >
              Get Early Access
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
