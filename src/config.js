/**
 * Central site config.
 * VITE_CALENDLY_URL can override per environment (set it in Vercel → Settings →
 * Environment Variables); the fallback guarantees the booking page never breaks.
 */
const CALENDLY_BASE =
  import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/qwertxboxmicro/30min'

export const CALENDLY_URL =
  CALENDLY_BASE +
  '?hide_gdpr_banner=1&primary_color=F05A0E&text_color=0F172A' +
  '&utm_source=site&utm_medium=cta&utm_campaign=book_audit'
