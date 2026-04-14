export default function CertificateVerificationPage({ onBackHome }) {
  return (
    <section className="pt-48 pb-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-10">
          <button
            className="text-[11px] uppercase tracking-[0.3em] font-black text-[var(--color-primary)] hover:underline"
            onClick={onBackHome}
          >
            ← Back to Home
          </button>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-start">
          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.45)]">
            <div className="text-[10px] uppercase tracking-[0.4em] opacity-60 mb-4">
              Certificate Verification
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-6">
              Verify Professional Credentials With Confidence
            </h1>
            <p className="text-base md:text-lg opacity-65 leading-relaxed max-w-2xl">
              Confirm candidate status, certificate validity, and credential alignment through a
              verification workflow designed for employers, compliance teams, and global partners.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/35 p-5">
                <div className="text-[10px] uppercase tracking-[0.3em] opacity-55 mb-2">Coverage</div>
                <div className="text-xl font-black">CAISE + TRAP</div>
                <p className="text-sm opacity-60 mt-2">
                  Support for current AI security and risk assessment pathways.
                </p>
              </div>
              <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/35 p-5">
                <div className="text-[10px] uppercase tracking-[0.3em] opacity-55 mb-2">Assurance</div>
                <div className="text-xl font-black">Standards Aligned</div>
                <p className="text-sm opacity-60 mt-2">
                  Built for regulated organizations and professional verification workflows.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] opacity-60">Membership</div>
                <h2 className="text-2xl font-black">Verification Request</h2>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/15 text-[var(--color-primary)] flex items-center justify-center ring-1 ring-[var(--color-primary)]/30">
                <svg viewBox="0 0 64 64" className="w-7 h-7" aria-hidden="true">
                  <path d="M12 18h40v28H12z" fill="currentColor" opacity="0.18" />
                  <path d="M20 26h24v4H20zM20 34h16v4H20z" fill="currentColor" />
                  <path d="m40 42 4 4 8-10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            <form className="space-y-4">
              <label className="block">
                <span className="text-xs font-bold opacity-70">Certificate ID</span>
                <input
                  type="text"
                  placeholder="IAISP-2026-0001"
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/30 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold opacity-70">Last Name</span>
                <input
                  type="text"
                  placeholder="Candidate last name"
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/30 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold opacity-70">Organization</span>
                <input
                  type="text"
                  placeholder="Company or institution"
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/30 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
                />
              </label>
              <button
                type="button"
                className="w-full py-3 rounded-xl font-black bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20 hover:opacity-90 transition-opacity"
              >
                Verify Certificate
              </button>
            </form>

            <div className="mt-5 text-[11px] leading-relaxed opacity-60">
              UI-only placeholder. Backend verification, record lookup, and audit responses can be
              attached later.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
