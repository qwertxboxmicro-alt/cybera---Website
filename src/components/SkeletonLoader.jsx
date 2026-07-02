export const SkeletonLoader = ({ width = 'w-full', height = 'h-4', className = '' }) => (
  <div
    className={`${width} ${height} ${className} bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 rounded animate-pulse`}
  />
)

export const SkeletonCard = () => (
  <div className="p-6 bg-white rounded-lg border border-gray-200 space-y-4 animate-pulse">
    <SkeletonLoader height="h-12" className="w-3/4" />
    <SkeletonLoader height="h-3" className="w-full" />
    <SkeletonLoader height="h-3" className="w-5/6" />
    <SkeletonLoader height="h-8" width="w-1/3" className="mt-4" />
  </div>
)

export const SkeletonPricingTable = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    {[1, 2, 3].map((i) => (
      <div key={i} className="p-8 bg-white rounded-2xl border border-gray-200 space-y-4 animate-pulse">
        <SkeletonLoader height="h-4" width="w-1/3" />
        <SkeletonLoader height="h-8" width="w-1/2" />
        <SkeletonLoader height="h-10" width="w-2/5" />
        <div className="pt-4 space-y-3">
          <SkeletonLoader height="h-3" className="w-full" />
          <SkeletonLoader height="h-3" className="w-full" />
          <SkeletonLoader height="h-3" className="w-4/5" />
          <SkeletonLoader height="h-3" className="w-full" />
        </div>
        <SkeletonLoader height="h-12" className="w-full mt-4" />
      </div>
    ))}
  </div>
)

export const SkeletonIframe = () => (
  <div className="rounded-xl overflow-hidden bg-gray-100 animate-pulse" style={{ minHeight: '600px' }}>
    <div className="h-full flex flex-col p-8 space-y-4">
      <SkeletonLoader height="h-6" width="w-1/2" />
      <SkeletonLoader height="h-4" className="w-full" />
      <SkeletonLoader height="h-4" className="w-3/4" />
      <div className="flex-1" />
      <SkeletonLoader height="h-10" className="w-full" />
    </div>
  </div>
)
