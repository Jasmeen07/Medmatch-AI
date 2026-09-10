export default function DashboardPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-semibold text-[var(--foreground)]">Medical Timeline</h1>
          <p className="text-sm text-[var(--muted)] mt-1">A chronological history of your health records.</p>
        </div>
        <button disabled className="btn-brand px-4 py-2 text-sm opacity-50 cursor-not-allowed" title="Upload coming soon">
          Upload Document
        </button>
      </div>

      <div className="space-y-6">
        {/* Mock Item 1 */}
        <div className="glass p-6 rounded-2xl border border-[var(--border)]">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-medium text-[var(--brand-500)] bg-[var(--brand-500)]/10 px-2.5 py-1 rounded-full">
                Lab Report
              </span>
              <h3 className="text-lg font-medium text-[var(--foreground)] mt-3">Complete Blood Count (CBC)</h3>
              <p className="text-sm text-[var(--muted)] mt-1">Processed by AI from PDF scan.</p>
            </div>
            <span className="text-xs text-[var(--subtle)]">Oct 12, 2026</span>
          </div>
        </div>

        {/* Mock Item 2 */}
        <div className="glass p-6 rounded-2xl border border-[var(--border)]">
          <div className="flex items-start justify-between">
            <div>
              <span className="text-xs font-medium text-blue-500 bg-blue-500/10 px-2.5 py-1 rounded-full">
                Prescription
              </span>
              <h3 className="text-lg font-medium text-[var(--foreground)] mt-3">Amoxicillin 500mg</h3>
              <p className="text-sm text-[var(--muted)] mt-1">Prescribed by Dr. Smith.</p>
            </div>
            <span className="text-xs text-[var(--subtle)]">Sep 05, 2026</span>
          </div>
        </div>
      </div>
    </div>
  );
}
