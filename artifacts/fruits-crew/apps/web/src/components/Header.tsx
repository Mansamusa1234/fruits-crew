import Link from "next/link";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-crew-green-100/80 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl" aria-hidden>
            🌱
          </span>
          <span className="text-lg font-bold tracking-tight text-crew-green-800 sm:text-xl">
            Fruits Crew
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 text-sm font-medium text-crew-soil-700 md:flex"
          aria-label="Main"
        >
          <Link href="/characters" className="hover:text-crew-green-600">
            Meet the Crew
          </Link>
          <Link href="/plants" className="hover:text-crew-green-600">
            Plants
          </Link>
          <Link href="/explore" className="hover:text-crew-green-600">
            Explore
          </Link>
          <Link href="/#parents" className="hover:text-crew-green-600">
            Parents
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/explore"
            className="rounded-full bg-crew-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-crew-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-crew-green-500"
          >
            Start Exploring
          </Link>
        </div>
      </div>
    </header>
  );
}
