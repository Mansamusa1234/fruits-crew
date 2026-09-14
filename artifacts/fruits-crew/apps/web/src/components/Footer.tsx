export function Footer() {
  return (
    <footer className="border-t border-crew-green-100 bg-crew-soil-900 px-4 py-10 text-crew-green-100 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <span aria-hidden>🌱</span>
          <span className="font-semibold text-white">Fruits Crew</span>
        </div>
        <p className="text-center text-sm text-crew-green-200/80">
          Back to Nature · Everything Is Connected · Created by Darren-neil
        </p>
        <p className="text-xs text-crew-green-300/60">
          © {new Date().getFullYear()} Fruits Crew
        </p>
      </div>
    </footer>
  );
}
