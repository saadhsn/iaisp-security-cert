const NavItem = ({ label, hasMenu }) => (
  <span className="text-sm font-bold opacity-70 hover:opacity-100 transition-opacity inline-flex items-center gap-1">
    {label}
    {hasMenu && (
      <svg className="w-3 h-3 opacity-60" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M5.25 7.75 10 12.5l4.75-4.75-1.5-1.5L10 9.5 6.75 6.25l-1.5 1.5z" />
      </svg>
    )}
  </span>
);

export default function TopNav({
  onContactDropdownSelect,
  onHomeOpen,
  onLoginOpen,
  onMembershipOpen,
  onSignupOpen,
}) {
  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="w-full bg-[var(--color-bg)]/85 backdrop-blur-sm border-b border-[var(--color-border)]/70">
        <div className="container mx-auto px-6 h-10 flex items-center justify-between text-[10px] uppercase tracking-[0.35em] opacity-70">
          <div className="flex items-center gap-4">
            <span>IAISP Security Network</span>
            <span className="w-px h-3 bg-[var(--color-border)]/70" />
            <span>Member Verification</span>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <span>ISO-Aligned</span>
            <span className="w-px h-3 bg-[var(--color-border)]/70" />
            <span>Global Standards</span>
          </div>
        </div>
      </div>
      <div className="bg-[var(--color-surface)]/90 backdrop-blur-xl border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/15 ring-1 ring-[var(--color-primary)]/30 flex items-center justify-center shadow-lg shadow-[var(--color-primary)]/10">
              <div className="w-8 h-8 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white font-black italic">
                I
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl font-black tracking-tighter uppercase">IAISP</span>
              <span className="text-[9px] uppercase tracking-[0.3em] px-2 py-1 rounded-full border border-[var(--color-border)]/70 bg-[var(--color-bg)]/40 opacity-70">
                Verified
              </span>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8">
            <button type="button" onClick={onHomeOpen} className="contents">
              <NavItem label="Home" />
            </button>
            <div className="relative group">
              <NavItem label="Certifications" hasMenu />
              <div className="absolute left-0 top-full pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="relative w-[640px] p-6 rounded-3xl border border-[var(--color-border)]/70 bg-[var(--color-surface)]/95 backdrop-blur-xl shadow-[0_25px_60px_-30px_rgba(0,0,0,0.6)] overflow-hidden">
                  <div className="absolute -top-24 -right-20 w-56 h-56 rounded-full bg-[var(--color-primary)]/20 blur-3xl" />
                  <div className="absolute -bottom-28 -left-16 w-48 h-48 rounded-full bg-[var(--color-primary)]/15 blur-3xl" />
                  <div className="relative grid grid-cols-[1fr_1fr] gap-6">
                    <div className="rounded-2xl border border-[var(--color-border)]/70 p-5 bg-[var(--color-bg)]/40 hover:border-[var(--color-primary)]/60 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center ring-1 ring-[var(--color-primary)]/30 shadow-[0_0_20px_rgba(0,0,0,0.25)]">
                          <svg viewBox="0 0 64 64" className="w-8 h-8" aria-hidden="true">
                            <defs>
                              <linearGradient id="caise-core" x1="0" y1="0" x2="1" y2="1">
                                <stop offset="0" stopColor="currentColor" stopOpacity="0.35" />
                                <stop offset="1" stopColor="currentColor" stopOpacity="0.9" />
                              </linearGradient>
                            </defs>
                            <path d="M32 6 54 18v14c0 13.3-9 21.9-22 26-13-4.1-22-12.7-22-26V18z" fill="currentColor" opacity="0.18" />
                            <path d="M32 10 50 20v12c0 10.9-7.4 18.4-18 22-10.6-3.6-18-11.1-18-22V20z" fill="currentColor" opacity="0.32" />
                            <path d="M22 38 32 18l10 20-10 16z" fill="url(#caise-core)" />
                            <path d="M22 38 32 18l10 20-10 16z" stroke="currentColor" strokeWidth="1.6" opacity="0.5" />
                            <path d="M32 18v36" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.55" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-black tracking-tight">CAISE</div>
                          <div className="text-[11px] opacity-60">AI Security Expert</div>
                        </div>
                      </div>
                      <ul className="text-xs font-semibold opacity-70 space-y-2">
                        {[
                          'Certification Overview',
                          'Who Should Apply',
                          'Maintain a Certification',
                          'Grandfathering Guide',
                          'Certification Outline',
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-2xl border border-[var(--color-border)]/70 p-5 bg-[var(--color-bg)]/40 hover:border-[var(--color-primary)]/60 transition-colors">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center ring-1 ring-[var(--color-primary)]/30 shadow-[0_0_20px_rgba(0,0,0,0.25)]">
                          <svg viewBox="0 0 64 64" className="w-8 h-8" aria-hidden="true">
                            <defs>
                              <linearGradient id="trap-core" x1="1" y1="0" x2="0" y2="1">
                                <stop offset="0" stopColor="currentColor" stopOpacity="0.3" />
                                <stop offset="1" stopColor="currentColor" stopOpacity="0.85" />
                              </linearGradient>
                            </defs>
                            <path d="M12 14h40v10H12z" fill="currentColor" opacity="0.25" />
                            <path d="M20 24h24v24H20z" fill="currentColor" opacity="0.2" />
                            <path d="M32 18 48 34l-16 16-16-16z" fill="url(#trap-core)" />
                            <path d="M32 18 48 34l-16 16-16-16z" stroke="currentColor" strokeWidth="1.6" opacity="0.5" />
                            <path d="M24 42h16" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
                          </svg>
                        </div>
                        <div>
                          <div className="text-sm font-black tracking-tight">TRAP</div>
                          <div className="text-[11px] opacity-60">Risk Assessment Pro</div>
                        </div>
                      </div>
                      <ul className="text-xs font-semibold opacity-70 space-y-2">
                        {[
                          'Certification Overview',
                          'Who Should Apply',
                          'Maintain a Certification',
                          'Grandfathering Guide',
                          'Certification Outline',
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)]/60" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="relative mt-5 pt-4 border-t border-[var(--color-border)]/70 flex items-center justify-between">
                    <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] opacity-60">
                      <span>IAISP Credential Hub</span>
                      <span className="h-4 w-px bg-[var(--color-border)]/70" />
                      <span>Zero-Trust Ready</span>
                    </div>
                    <button className="text-xs font-black text-[var(--color-primary)] hover:underline">
                      View All Programs →
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button type="button">
              <NavItem label="Training" />
            </button>
            <button type="button" onClick={onMembershipOpen}>
              <NavItem label="Membership" />
            </button>
            <div className="relative group">
              <NavItem label="About Us" hasMenu />
              <div className="absolute left-0 top-full pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="relative w-[360px] p-5 rounded-2xl border border-[var(--color-border)]/70 bg-[var(--color-surface)]/95 backdrop-blur-xl shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)] overflow-hidden">
                  <div className="absolute -top-16 -right-14 w-40 h-40 rounded-full bg-[var(--color-primary)]/18 blur-3xl" />
                  <div className="absolute -bottom-20 -left-10 w-32 h-32 rounded-full bg-[var(--color-primary)]/12 blur-3xl" />
                  <div className="relative space-y-3">
                    {[
                      { title: 'Who We Are', desc: 'Mission, standards, and leadership.' },
                      { title: 'Governance & Policies', desc: 'Ethics, oversight, and compliance.' },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl border border-[var(--color-border)]/70 bg-[var(--color-bg)]/40 px-4 py-3 hover:border-[var(--color-primary)]/60 transition-colors"
                      >
                        <div className="text-sm font-black tracking-tight">{item.title}</div>
                        <div className="text-[11px] opacity-60">{item.desc}</div>
                      </div>
                    ))}
                    <div className="rounded-xl border border-[var(--color-border)]/70 bg-[var(--color-primary)]/10 px-4 py-3 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)]/20 text-[var(--color-primary)] flex items-center justify-center ring-1 ring-[var(--color-primary)]/40">
                        <svg viewBox="0 0 64 64" className="w-6 h-6" aria-hidden="true">
                          <path d="M32 6 52 14v16c0 13-8.7 21.5-20 26C20.7 51.5 12 43 12 30V14z" fill="currentColor" opacity="0.25" />
                          <path d="M32 14 46 20v10c0 9.4-6.2 16-14 19-7.8-3-14-9.6-14-19V20z" fill="currentColor" opacity="0.5" />
                          <path d="M24 30h16v6H24z" fill="currentColor" />
                          <path d="M28 24h8v18h-8z" fill="currentColor" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-[10px] uppercase tracking-[0.3em] opacity-60">Compliance</div>
                        <div className="text-xs font-bold">ISO-Aligned Governance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <NavItem label="Contact Us" hasMenu />
              <div className="absolute left-0 top-full pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="relative w-[320px] p-5 rounded-2xl border border-[var(--color-border)]/70 bg-[var(--color-surface)]/95 backdrop-blur-xl shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)] overflow-hidden">
                  <div className="absolute -top-16 -right-10 w-32 h-32 rounded-full bg-[var(--color-primary)]/18 blur-3xl" />
                  <div className="absolute -bottom-14 -left-10 w-28 h-28 rounded-full bg-[var(--color-primary)]/12 blur-3xl" />
                  <div className="relative space-y-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.35em] opacity-60">Membership</div>
                      <div className="text-sm font-black">Certificate Verification</div>
                      <div className="text-[11px] opacity-60">
                        Verify certificates for candidates, employers, and partner organizations.
                      </div>
                    </div>
                    <button
                      type="button"
                      className="w-full py-2.5 rounded-xl font-black bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20 hover:opacity-90 transition-opacity"
                      onClick={onContactDropdownSelect}
                    >
                      Open Verification
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative group">
              <NavItem label="My IAISP" hasMenu />
              <div className="absolute right-0 top-full pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="relative w-[320px] p-5 rounded-2xl border border-[var(--color-border)]/70 bg-[var(--color-surface)]/95 backdrop-blur-xl shadow-[0_20px_50px_-30px_rgba(0,0,0,0.6)] overflow-hidden">
                  <div className="absolute -top-16 -left-10 w-36 h-36 rounded-full bg-[var(--color-primary)]/18 blur-3xl" />
                  <div className="absolute -bottom-16 -right-10 w-32 h-32 rounded-full bg-[var(--color-primary)]/12 blur-3xl" />
                  <div className="relative space-y-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-[0.35em] opacity-60">Member Access</div>
                      <div className="text-sm font-black">Secure Portal</div>
                      <div className="text-[11px] opacity-60">
                        Manage certifications, renewals, and compliance.
                      </div>
                    </div>
                    <div className="grid gap-2">
                      <button
                        type="button"
                        className="w-full py-2.5 rounded-xl font-black bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20 hover:opacity-90 transition-opacity"
                        onClick={onLoginOpen}
                      >
                        Log In
                      </button>
                      <button
                        type="button"
                        className="w-full py-2.5 rounded-xl font-bold border border-[var(--color-border)] hover:bg-[var(--color-bg)]/40 transition-colors"
                        onClick={onSignupOpen}
                      >
                        Sign Up
                      </button>
                    </div>
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.3em] opacity-60">
                      <span>SSO Ready</span>
                      <span>Zero Trust</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button className="px-6 py-2.5 bg-[var(--color-primary)] text-white rounded-full font-bold text-sm shadow-lg shadow-[var(--color-primary)]/20 hover:opacity-90 transition-opacity">
            Verify Eligibility
          </button>
        </div>
      </div>
    </nav>
  );
}
