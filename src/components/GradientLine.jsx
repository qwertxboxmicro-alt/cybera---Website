/** Animation 4: Gradient accent line under headings */
export default function GradientLine({ className = '' }) {
  return (
    <div
      className={`mt-3 h-[3px] w-[80px] rounded-full ${className}`}
      style={{ background: 'linear-gradient(to right, #F05A0E, transparent)' }}
    />
  )
}
