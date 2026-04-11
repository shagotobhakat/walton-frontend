export default function Loading() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="h-80 bg-gray-200 animate-pulse rounded-xl" />
        <div>
          <div className="h-6 bg-gray-200 animate-pulse mb-3 rounded" />
          <div className="h-4 bg-gray-200 animate-pulse mb-2 rounded" />
          <div className="h-4 bg-gray-200 animate-pulse mb-2 rounded" />
        </div>
      </div>
    </div>
  );
}
