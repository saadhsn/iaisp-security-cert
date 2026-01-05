import React, { useState, useEffect } from 'react';

// --- Sub-Components ---

const NavItem = ({ label }) => (
  <a href="#" className="text-sm font-bold opacity-70 hover:opacity-100 transition-opacity">
    {label}
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
      <nav className="fixed top-0 w-full z-50 bg-[var(--color-bg)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-[var(--color-primary)] rounded-lg flex items-center justify-center text-white font-black italic shadow-lg shadow-[var(--color-primary)]/20">I</div>
            <span className="text-xl font-black tracking-tighter uppercase">IAISP</span>
          </div>
          <div className="hidden lg:flex gap-10">
            {['Certifications', 'Training', 'Membership', 'Ethics'].map(item => <NavItem key={item} label={item} />)}
          </div>
          <button className="px-6 py-2.5 bg-[var(--color-primary)] text-white rounded-full font-bold text-sm shadow-lg shadow-[var(--color-primary)]/20 hover:opacity-90 transition-opacity">
            Verify Eligibility
          </button>
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
    </div>
  );
}