export const LoadingSkeleton = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="h-[600px]">
        <div className="h-full w-full animate-pulse bg-gray-200"></div>
      </div>
    </div>
  )
}
