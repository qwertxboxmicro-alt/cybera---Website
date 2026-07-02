export default function handler(req, res) {
  const url = process.env.VITE_CALENDLY_URL
  if (!url) {
    res.status(500).json({ error: 'Calendly URL not configured' })
    return
  }
  res.redirect(301, url)
}
