export default function handler(req, res) {
  if (req.method === 'POST') {
    console.log('CSP Violation Report:', JSON.stringify(req.body, null, 2));
    res.status(204).end();
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
