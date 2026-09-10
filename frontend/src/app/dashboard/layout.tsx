import { LogoutButton } from "@/components/logout-button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-[var(--bg-color)]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[var(--border)] bg-[var(--container-bg)] p-6 hidden md:block">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--brand-500)] to-[var(--accent-500)] flex items-center justify-center">
            <span className="text-white font-bold text-sm">M</span>
          </div>
          <span className="font-semibold tracking-tight text-[var(--foreground)]">MedMatch AI</span>
        </div>
        <nav className="space-y-2">
          <a href="/dashboard" className="block px-4 py-2 text-sm font-medium rounded-lg bg-[var(--brand-500)]/10 text-[var(--brand-500)]">
            Timeline
          </a>
          <a href="#" className="block px-4 py-2 text-sm font-medium rounded-lg text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)] transition-colors">
            Documents
          </a>
          <a href="#" className="block px-4 py-2 text-sm font-medium rounded-lg text-[var(--muted)] hover:bg-[var(--surface)] hover:text-[var(--foreground)] transition-colors">
            Prescriptions
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        <header className="h-16 border-b border-[var(--border)] bg-[var(--container-bg)] flex items-center justify-between px-8">
          <h2 className="text-sm font-medium text-[var(--muted)]">Patient Dashboard</h2>
          <div className="flex items-center gap-4">
             <LogoutButton />
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}
