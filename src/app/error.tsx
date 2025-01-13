"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Error boundary caught an error:", error);
  }, [error]);

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Something went wrong!</h1>
      <p className="mt-4">{error.message}</p>
      <button onClick={() => reset()} className="mt-6 text-blue-500 underline">
        Try Again
      </button>
    </div>
  );
}
