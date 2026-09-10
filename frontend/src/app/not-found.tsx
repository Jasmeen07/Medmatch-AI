
import Link from "next/link";

/* ── inline SVGs ─────────────────────────────────────────────── */
function IconArrowLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <div className="bg-mesh min-h-dvh flex flex-col items-center justify-center px-4 py-16 text-center">
      
      {/* 404 Glitch/Glow effect */}
      <div className="relative mb-8">
        <h1 className="text-8xl md:text-9xl font-bold text-[var(--foreground)] tracking-tighter opacity-10">404</h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl md:text-5xl font-bold gradient-text text-glow">Page not found</span>
        </div>
      </div>

      <p className="text-[var(--muted)] text-lg max-w-md mx-auto mb-10">
        The link you followed may be broken, or the page may have been removed.
      </p>

      <Link href="/" className="btn-brand inline-flex">
        <IconArrowLeft /> Return to homepage
      </Link>
      
    </div>
  );
}
