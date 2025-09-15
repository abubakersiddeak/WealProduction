export default function ProductSkeleton() {
  return (
    <div className="relative w-43 md:w-55 2xl:w-70 bg-white border-b border-gray-300 shrink-0 flex flex-col justify-between animate-pulse cursor-pointer">
      {/* Image Placeholder */}
      <div className="relative z-10 h-60 md:h-70 2xl:h-100 bg-gray-200 border border-gray-300"></div>

      {/* Text Placeholders */}
      <div className="relative z-10 py-3 text-left">
        <div className="h-4 md:h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-3 md:h-4 bg-gray-200 rounded w-1/2"></div>
      </div>

      {/* NEW Badge Placeholder */}
      <span className="absolute top-0 left-0 z-10 h-4 md:h-5 bg-gray-200 rounded px-2 py-[2px] md:px-3 md:py-1"></span>
    </div>
  );
}
