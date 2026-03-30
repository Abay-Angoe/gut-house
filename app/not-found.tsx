import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <p className="font-serif text-8xl font-bold text-earth-300">404</p>
      <h1 className="mt-4 font-serif text-2xl font-bold text-earth-900">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-earth-500 max-w-sm">
        The page you&rsquo;re looking for doesn&rsquo;t exist. Maybe it was moved, or perhaps the fermentation got to it.
      </p>
      <div className="mt-8 flex gap-4">
        <Link
          href="/"
          className="rounded-full bg-moss-400 px-6 py-2.5 text-sm font-medium text-white hover:bg-moss-600 transition-colors"
        >
          Go Home
        </Link>
        <Link
          href="/shop"
          className="rounded-full border border-earth-700 px-6 py-2.5 text-sm font-medium text-earth-700 hover:bg-earth-700 hover:text-cream-50 transition-colors"
        >
          Shop
        </Link>
      </div>
    </div>
  );
}
