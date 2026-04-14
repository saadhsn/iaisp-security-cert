import React, { useState, useEffect } from 'react';

// --- Sub-Components ---

const NavItem = ({ label, hasMenu }) => (
  <a
    href="#"
    className="text-sm font-bold opacity-70 hover:opacity-100 transition-opacity inline-flex items-center gap-1"
  >
    {label}
    {hasMenu && (
      <svg
        className="w-3 h-3 opacity-60"
        viewBox="0 0 20 20"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M5.25 7.75 10 12.5l4.75-4.75-1.5-1.5L10 9.5 6.75 6.25l-1.5 1.5z" />
      </svg>
    )}
  </a>
);

const CertCard = ({ title, code, level, description }) => (
  <div className="p-8 rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] hover:scale-[1.02] transition-all duration-300">
    <div className="flex justify-between items-start mb-6">
      <span className="text-[10px] font-black uppercase tracking-tighter px-3 py-1 rounded-full border border-[var(--color-primary)]/30 text-[var(--color-primary)] bg-[var(--color-primary)]/5">
        {level}
      </span>
      <span className="font-mono text-xs opacity-40">{code}</span>
    </div>
    <h3 className="text-2xl font-black mb-4">{title}</h3>
    <p className="text-sm leading-relaxed opacity-60 mb-8">{description}</p>
    <button className="w-full py-3 rounded-xl font-bold border border-[var(--color-border)] hover:bg-[var(--color-primary)] hover:text-white transition-all">
      View Syllabus
    </button>
  </div>
);

// --- Main App ---

export default function App() {
  const [theme, setTheme] = useState('slate');
  const [authOpen, setAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const countryOptions = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombia',
    'Comoros',
    'Congo (Congo-Brazzaville)',
    'Costa Rica',
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czechia',
    "Cote d'Ivoire",
    'Democratic Republic of the Congo',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Eswatini',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Morocco',
    'Mozambique',
    'Myanmar (Burma)',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'North Korea',
    'North Macedonia',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Korea',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe',
  ];

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const themeOptions = [
    { id: 'slate', color: '#020617', name: 'Cyber Slate' },
    { id: 'frost', color: '#f8fafc', name: 'Enterprise Frost' },
    { id: 'merit', color: '#064e3b', name: 'Global Merit' },
    { id: 'safe',  color: '#005cb9', name: 'SAFe Studio' },
    { id: 'gold',  color: '#d4c3a3', name: 'Intelligence Gold' },
    { id: 'quantum', color: '#a855f7', name: 'Quantum Neon' },
    { id: 'paper', color: '#000000', name: 'Paper & Ink' },
    { id: 'aurora', color: '#14b8a6', name: 'Deep Aurora' },
  ];

  return (
    <div className="min-h-screen selection:bg-[var(--color-primary)]/30">
      
      {/* 1. THEME SWITCHER PANEL (Design Lab) */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] bg-[var(--color-surface)]/80 backdrop-blur-xl border border-[var(--color-border)] p-2 rounded-full shadow-2xl flex items-center gap-2">
        <span className="px-4 text-[9px] font-black uppercase opacity-40 hidden sm:block">Design Lab</span>
        <div className="flex gap-1.5 p-1">
          {themeOptions.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setTheme(opt.id)}
              className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                theme === opt.id ? 'border-[var(--color-primary)] scale-110' : 'border-transparent'
              }`}
              style={{ backgroundColor: opt.color }}
              title={opt.name}
            />
          ))}
        </div>
      </div>

      {/* 2. NAVIGATION (AWS/CompTIA Style) */}
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
              <NavItem label="Home" />
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
              <NavItem label="Training" />
              <NavItem label="Membership" />
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
              <NavItem label="Contact Us" />
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
                          className="w-full py-2.5 rounded-xl font-black bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20 hover:opacity-90 transition-opacity"
                          onClick={() => {
                            setAuthMode('login');
                            setAuthOpen(true);
                          }}
                        >
                          Log In
                        </button>
                        <button
                          className="w-full py-2.5 rounded-xl font-bold border border-[var(--color-border)] hover:bg-[var(--color-bg)]/40 transition-colors"
                          onClick={() => {
                            setAuthMode('signup');
                            setAuthOpen(true);
                          }}
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

      {/* 3. HERO SECTION (Scaled Agile Style) */}
      <section className="pt-48 pb-20 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight">
            The New Global <br />
            <span className="brand-gradient">Standard for AI Security</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl opacity-60 mb-12 leading-relaxed">
            The International Association of Information Security Professionals (IAISP) 
            empowers candidates to master CAISE and TRAP certifications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-[var(--color-primary)] text-white font-black rounded-2xl shadow-xl shadow-[var(--color-primary)]/20 hover:translate-y-[-2px] transition-all">
              Launch Career
            </button>
            <button className="px-10 py-4 bg-transparent border border-[var(--color-border)] font-bold rounded-2xl hover:bg-[var(--color-surface)] transition-all">
              Browse Handbook
            </button>
          </div>
        </div>
      </section>

      {/* 4. CERTIFICATION GRID */}
      <section className="py-24 px-6 border-t border-[var(--color-border)]">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black mb-4">Core Pathways</h2>
              <p className="opacity-60">Validate your expertise with industry-recognized credentials built for the 2026 threat landscape.</p>
            </div>
            <button className="text-sm font-black uppercase tracking-widest text-[var(--color-primary)] hover:underline">View All Programs →</button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <CertCard 
              title="AI Security Expert"
              code="CAISE"
              level="Gold Standard"
              description="The definitive certification for securing neural networks and preventing adversarial machine learning attacks."
            />
            <CertCard 
              title="Risk Assessment Professional"
              code="TRAP"
              level="Advanced"
              description="A professional methodology for identifying systemic vulnerabilities in high-frequency enterprise environments."
            />
          </div>
        </div>
      </section>

      {authOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setAuthOpen(false)}
          />
          <div className="relative w-full max-w-md rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xl">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="text-[10px] uppercase tracking-[0.35em] opacity-60">Member Access</div>
                <h3 className="text-2xl font-black">{authMode === 'login' ? 'Log In' : 'Create Account'}</h3>
                <p className="text-xs opacity-60">Secure access to certifications and compliance.</p>
              </div>
              <button
                className="w-9 h-9 rounded-xl border border-[var(--color-border)] hover:bg-[var(--color-bg)]/40 transition-colors"
                onClick={() => setAuthOpen(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <form className="space-y-4">
              {authMode === 'signup' && (
                <div className="grid grid-cols-2 gap-3">
                  <label className="block">
                    <span className="text-xs font-bold opacity-70">First Name</span>
                    <input
                      type="text"
                      placeholder="First name"
                      className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/30 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
                    />
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold opacity-70">Last Name</span>
                    <input
                      type="text"
                      placeholder="Last name"
                      className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/30 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
                    />
                  </label>
                </div>
              )}
              <label className="block">
                <span className="text-xs font-bold opacity-70">Email</span>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/30 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
                />
              </label>
              <label className="block">
                <span className="text-xs font-bold opacity-70">Password</span>
                <div className="mt-2 flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/30 px-4 py-3 focus-within:border-[var(--color-primary)]">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    className="w-full text-sm bg-transparent outline-none"
                  />
                  <button
                    type="button"
                    className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {authMode === 'login' && (
                  <button
                    type="button"
                    className="mt-2 text-[10px] font-black uppercase tracking-[0.25em] text-[var(--color-primary)]"
                  >
                    Forgot Password?
                  </button>
                )}
              </label>
              {authMode === 'signup' && (
                <>
                  <label className="block">
                    <span className="text-xs font-bold opacity-70">Confirm Password</span>
                    <div className="mt-2 flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/30 px-4 py-3 focus-within:border-[var(--color-primary)]">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        className="w-full text-sm bg-transparent outline-none"
                      />
                      <button
                        type="button"
                        className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity"
                        onClick={() => setShowConfirmPassword((prev) => !prev)}
                      >
                        {showConfirmPassword ? 'Hide' : 'Show'}
                      </button>
                    </div>
                    <div className="mt-2 text-[11px] opacity-60">
                      Use 8+ characters with a mix of letters and numbers.
                    </div>
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold opacity-70">Country</span>
                    <select
                      className="mt-2 w-full rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/30 px-4 py-3 text-sm outline-none focus:border-[var(--color-primary)]"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select country
                      </option>
                      {countryOptions.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="block">
                    <span className="text-xs font-bold opacity-70">Captcha</span>
                    <div className="mt-2 flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-[var(--color-bg)]/30 px-4 py-3">
                      <input type="checkbox" className="w-4 h-4" />
                      <span className="text-sm opacity-70">I’m not a robot</span>
                      <span className="ml-auto text-[10px] uppercase tracking-[0.25em] opacity-50">CAPTCHA</span>
                    </div>
                  </label>
                </>
              )}
              <button
                type="button"
                className="w-full py-3 rounded-xl font-black bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/20 hover:opacity-90 transition-opacity"
              >
                {authMode === 'login' ? 'Log In' : 'Create Account'}
              </button>
            </form>

            <div className="mt-5 flex items-center justify-between text-[10px] uppercase tracking-[0.3em] opacity-60">
              <span>{authMode === 'login' ? 'Need an account?' : 'Already a member?'}</span>
              <button
                className="text-[var(--color-primary)] font-black tracking-[0.15em]"
                onClick={() => setAuthMode(authMode === 'login' ? 'signup' : 'login')}
              >
                {authMode === 'login' ? 'Sign Up' : 'Log In'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
