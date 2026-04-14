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

export default function CertificationGrid({ certifications }) {
  return (
    <section className="py-24 px-6 border-t border-[var(--color-border)]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl font-black mb-4">Core Pathways</h2>
            <p className="opacity-60">
              Validate your expertise with industry-recognized credentials built for the 2026 threat
              landscape.
            </p>
          </div>
          <button className="text-sm font-black uppercase tracking-widest text-[var(--color-primary)] hover:underline">
            View All Programs →
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <CertCard key={cert.code} {...cert} />
          ))}
        </div>
      </div>
    </section>
  );
}
