export default function Loading() {
  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-5">
      {Array.from({ length: 8 }).map((_, i) => (
        <div key={i} className="h-60 bg-gray-200 animate-pulse rounded-xl" />
      ))}
    </div>
  );
}
