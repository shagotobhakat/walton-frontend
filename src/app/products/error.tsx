"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-6 text-center">
      <h2 className="text-xl font-bold text-red-500">Something went wrong!</h2>
      <p className="mt-2 text-gray-700">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-4 px-4 py-2 bg-black text-white rounded">
        Try Again
      </button>
    </div>
  );
}
