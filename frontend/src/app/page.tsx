import type { Metadata } from "next";
import { ThemeToggle } from "@/components/theme-toggle";

export const metadata: Metadata = {
  title: "MedMatch AI — Your Intelligent Medical Records Companion",
  description:
    "Upload, organise, and understand your medical documents with AI-powered extraction, smart prescriptions, and secure doctor collaboration.",
};

/* ─── Inline SVG icons (no extra package needed) ─────────────────────── */
function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
function IconBrain() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  );
}
function IconFileText() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
function IconPill() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
      <line x1="8.5" y1="8.5" x2="15.5" y2="15.5" />
    </svg>
  );
}
function IconActivity() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
}
function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
function IconArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
function IconHeart() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}

/* ─── Feature data ────────────────────────────────────────────────────── */
const features = [
  {
    icon: <IconBrain />,
    title: "AI-Powered Extraction",
    desc: "OCR + medical NLP automatically pulls structured data — diagnoses, lab values, prescriptions — from any document you upload.",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: <IconFileText />,
    title: "Complete Health Timeline",
    desc: "Every report, prescription, and observation is organised chronologically with full provenance — original file, page, and source region always preserved.",
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: <IconUsers />,
    title: "Secure Doctor Access",
    desc: "Grant time-limited, revocable access to any doctor. Access expires automatically. Full audit trail of every view and action.",
    color: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: <IconPill />,
    title: "Smart Prescriptions",
    desc: "Handwritten prescriptions decoded with TrOCR and doctor-specific models. Verify extracted medicines, dosages and instructions before they enter your timeline.",
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-400",
  },
  {
    icon: <IconActivity />,
    title: "RAG Medical Chatbot",
    desc: "Ask questions about your health history in plain language. Answers cite the exact page and document they came from — no hallucinations.",
    color: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400",
  },
  {
    icon: <IconShield />,
    title: "Privacy by Design",
    desc: "End-to-end encrypted storage, row-level security on every table, and a zero-trust backend means your data is never exposed.",
    color: "from-sky-500/20 to-blue-500/20",
    iconColor: "text-sky-400",
  },
];

const baseTrustLogos = [
  "Supabase", "PostgreSQL", "pgvector", "Next.js", "FastAPI", "Redis"
];
const trustLogos = Array(12).fill(baseTrustLogos).flat();

const checks = [
  "Handwritten & printed documents",
  "Lab reports, MRIs, X-rays, CT scans",
  "Family health accounts",
  "Pharmacy & inventory matching",
  "Doctor collaboration tools",
  "Admin verification workflows",
];

/* ─── Page component ──────────────────────────────────────────────────── */
export default function Home() {
  return (
    <div className="bg-mesh min-h-dvh flex flex-col">

      {/* ── Navbar ──────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 w-full">
        <div className="bg-white dark:bg-[#121212] border-b border-[var(--border)]">
          <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2.5 select-none">
              <div className="relative w-9 h-9 flex items-center justify-center">
                <img src="/logos/logo_light.png" alt="MedMatch AI Logo" className="w-full h-full object-contain dark:hidden" />
                <img src="/logos/logo_dark.png" alt="MedMatch AI Logo" className="w-full h-full object-contain hidden dark:block" />
              </div>
              <span className="limelight-regular font-bold text-black dark:text-white text-2xl tracking-tight">
                MedMatch <span className="gradient-text">AI</span>
              </span>
            </div>

            {/* Nav links */}
            <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[var(--foreground)] opacity-90">
              <a href="#features" className="hover:text-[var(--brand-500)] transition-colors">Features</a>
              <a href="#how-it-works" className="hover:text-[var(--brand-500)] transition-colors">How it works</a>
              <a href="#security" className="hover:text-[var(--brand-500)] transition-colors">Security</a>
            </nav>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <ThemeToggle />
              <a href="/login" className="btn-ghost text-sm px-5 py-2">Sign in</a>
              <a href="/register" className="btn-brand text-sm px-5 py-2">
                Get started <IconArrowRight />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col">

        {/* ── Hero ──────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden pt-24 pb-20 md:pt-36 md:pb-32 px-6">
          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}
            <div className="animate-fade-up inline-flex items-center mb-6">
              <span className="stat-badge">
                <IconHeart />
                AI-powered health records
              </span>
            </div>

            {/* Headline */}
            <h1 className="animate-fade-up delay-1 text-5xl md:text-7xl font-bold tracking-tight leading-[1.08] text-[var(--foreground)] mb-6">
              Your medical records,{" "}
              <span className="gradient-text text-glow">finally organised.</span>
            </h1>

            {/* Sub */}
            <p className="animate-fade-up delay-2 text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto leading-relaxed mb-10">
              Upload any document — lab report, prescription, scan. MedMatch AI extracts, verifies, and
              organises every piece of your health history into a secure, searchable timeline.
            </p>

            {/* CTAs */}
            <div className="animate-fade-up delay-3 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <a href="/register" className="btn-brand text-base w-full sm:w-auto">
                Start for free — no card needed <IconArrowRight />
              </a>
              <a href="#how-it-works" className="btn-ghost text-base w-full sm:w-auto">
                See how it works
              </a>
            </div>

            {/* Hero visual */}
            <div className="animate-fade-up delay-4 relative mx-auto max-w-3xl">
              <div className="glass rounded-2xl shadow-2xl border border-white/20 overflow-hidden p-1">
                <div className="rounded-xl overflow-hidden bg-[var(--surface)]">
                  {/* Mock UI strip */}
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--border)] bg-[var(--surface-raised)]">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                    <span className="ml-3 text-xs text-[var(--subtle)] font-mono">medmatch.ai / dashboard</span>
                  </div>

                  {/* Fake dashboard content */}
                  <div className="grid grid-cols-3 gap-3 p-5">
                    {[
                      { label: "Documents", val: "142", color: "text-[var(--brand-400)]" },
                      { label: "Observations", val: "1,830", color: "text-[var(--accent-400)]" },
                      { label: "Prescriptions", val: "47", color: "text-violet-400" },
                    ].map((s) => (
                      <div key={s.label} className="feature-card p-4 text-left">
                        <p className="text-xs text-[var(--subtle)] mb-1">{s.label}</p>
                        <p className={`text-2xl font-bold ${s.color}`}>{s.val}</p>
                      </div>
                    ))}
                  </div>

                  <div className="px-5 pb-5 space-y-2.5">
                    {["Blood CBC — 2026-08-12", "MRI Brain — 2026-07-03", "Prescription — Dr. Sharma"].map((item, i) => (
                      <div key={item} className="flex items-center gap-3 rounded-xl px-4 py-3 bg-[var(--surface-raised)] border border-[var(--border)]">
                        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${["bg-green-400","bg-blue-400","bg-violet-400"][i]}`} />
                        <span className="text-sm text-[var(--foreground)] font-medium flex-1 text-left">{item}</span>
                        <span className="text-xs text-[var(--subtle)]">Verified</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glow blob behind the card */}
              <div className="absolute -inset-8 -z-10 rounded-3xl bg-gradient-to-br from-[var(--brand-500)]/10 via-[var(--accent-500)]/8 to-transparent blur-3xl" />
            </div>
          </div>
        </section>

        {/* ── Trust strip ───────────────────────────────────────────── */}
        <div className="border-y border-[var(--border)] py-5 overflow-hidden">
          <p className="text-center text-xs text-[var(--subtle)] uppercase tracking-widest mb-4 font-semibold px-6">
            Built on trusted, production-grade technology
          </p>
          <div className="overflow-hidden">
            <div className="marquee-track">
              {trustLogos.map((logo, i) => (
                <span key={i} className="mx-8 text-sm font-semibold text-[var(--subtle)] hover:text-[var(--muted)] transition-colors whitespace-nowrap cursor-default">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Features ──────────────────────────────────────────────── */}
        <section id="features" className="py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--brand-500)] mb-3">Everything you need</p>
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight mb-4">
                Your entire health story,<br />in one secure place.
              </h2>
              <p className="text-[var(--muted)] text-lg max-w-xl mx-auto">
                From OCR and extraction to doctor collaboration and AI chat — end-to-end.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <div key={f.title} className={`feature-card group animate-fade-up delay-${Math.min(i + 1, 5)}`}>
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${f.color} flex items-center justify-center mb-4 ${f.iconColor} transition-transform group-hover:scale-110`}>
                    {f.icon}
                  </div>
                  <h3 className="text-base font-semibold text-[var(--foreground)] mb-2">{f.title}</h3>
                  <p className="text-sm text-[var(--muted)] leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How it works ──────────────────────────────────────────── */}
        <section id="how-it-works" className="py-24 px-6 bg-[var(--surface)]">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <p className="text-sm font-semibold uppercase tracking-widest text-[var(--accent-500)] mb-3">Simple process</p>
              <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] tracking-tight">
                Up and running in minutes.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Upload your documents", desc: "Drag and drop any medical file — PDFs, scans, photos. We handle the rest." },
                { step: "02", title: "AI extracts & verifies", desc: "OCR + medical NLP pull every data point. You review and confirm with a single click." },
                { step: "03", title: "Access anywhere, securely", desc: "Your verified timeline is always available — and shareable with your doctor on your terms." },
              ].map((s, i) => (
                <div key={s.step} className={`text-center animate-fade-up delay-${i + 1}`}>
                  <div className="relative inline-flex w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--brand-500)] to-[var(--accent-500)] items-center justify-center mb-5 shadow-lg pulse-ring">
                    <span className="text-white font-bold text-lg">{s.step}</span>
                  </div>
                  <h3 className="font-semibold text-[var(--foreground)] text-lg mb-2">{s.title}</h3>
                  <p className="text-[var(--muted)] text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Security / Checklist ──────────────────────────────────── */}
        <section id="security" className="py-24 px-6">
          <div className="mx-auto max-w-5xl">
            <div className="glass rounded-3xl p-8 md:p-14 border border-[var(--border)] relative overflow-hidden">
              {/* Background glow */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-bl from-[var(--brand-500)]/15 to-transparent rounded-full blur-3xl -z-0" />

              <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
                <div>
                  <span className="stat-badge mb-5 inline-flex">
                    <IconShield />
                    Enterprise-grade security
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-[var(--foreground)] tracking-tight mb-4">
                    Privacy isn&apos;t an<br />
                    <span className="gradient-text">afterthought.</span>
                  </h2>
                  <p className="text-[var(--muted)] leading-relaxed mb-6">
                    Row-level security on every table, end-to-end encrypted storage, and a zero-trust backend.
                    Your medical data is never exposed — not even to us.
                  </p>
                  <a href="/register" className="btn-brand inline-flex">
                    Get started securely <IconArrowRight />
                  </a>
                </div>

                <ul className="space-y-3">
                  {checks.map((c) => (
                    <li key={c} className="flex items-center gap-3 text-sm text-[var(--foreground)]">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-[var(--brand-500)] to-[var(--accent-500)] flex items-center justify-center text-white">
                        <IconCheck />
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────────────────────── */}
        <section className="py-24 px-6 text-center">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)] mb-5">
              Take control of your<br />
              <span className="gradient-text text-glow">health records today.</span>
            </h2>
            <p className="text-[var(--muted)] text-lg mb-10">
              Join thousands of patients, doctors, and families already using MedMatch AI.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="/register" className="btn-brand text-base w-full sm:w-auto">
                Create your free account <IconArrowRight />
              </a>
              <a href="/login" className="btn-ghost text-base w-full sm:w-auto">
                Sign in
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ────────────────────────────────────────────────────── */}
      <footer className="border-t border-[var(--border)] bg-white dark:bg-[#121212] py-8 px-6">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--subtle)]">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6">
              <img src="/logos/logo_light.png" alt="MedMatch AI Logo" className="w-full h-full object-contain dark:hidden" />
              <img src="/logos/logo_dark.png" alt="MedMatch AI Logo" className="w-full h-full object-contain hidden dark:block" />
            </div>
            <span className="limelight-regular font-bold text-black dark:text-white text-lg">MedMatch AI</span>
          </div>
          <p>© {new Date().getFullYear()} MedMatch AI. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="/privacy" className="hover:text-[var(--foreground)] transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-[var(--foreground)] transition-colors">Terms</a>
            <a href="/contact" className="hover:text-[var(--foreground)] transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
