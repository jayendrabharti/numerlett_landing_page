import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4 dark:bg-gray-900">
      <div className="w-full max-w-lg rounded-2xl bg-white/80 p-8 text-center backdrop-blur-sm dark:bg-gray-900/70">
        <div className="mb-4">
          <h1 className="text-7xl font-extrabold text-rose-500 dark:text-rose-400">404</h1>
        </div>

        <h2 className="mb-2 text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Page not found
        </h2>

        <p className="mb-6 text-sm text-gray-600 dark:text-gray-300">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-md bg-rose-500 px-5 py-2 text-white hover:bg-rose-600 focus-visible:ring-2 focus-visible:ring-rose-300 focus-visible:outline-none"
        >
          <svg
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Go back home
        </Link>

        <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">
          Or check the URL and try again.
        </p>
      </div>
    </div>
  );
}
