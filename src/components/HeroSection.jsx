export default function HeroSection() {
  return (
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
  );
}
