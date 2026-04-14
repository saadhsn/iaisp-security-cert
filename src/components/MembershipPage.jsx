import Footer from './Footer';

const benefitCards = [
  {
    title: 'Training',
    text: "Unlock the full potential of AI and cybersecurity expertise with IAISP's exclusive training modules, featuring a rich collection of video lectures and presentations.",
  },
  {
    title: 'Certification',
    text: "Stand out in the rapidly evolving tech landscape with IAISP's TRAP & CAISE certifications. These certifications are designed to recognize your expertise on a global level.",
  },
  {
    title: 'Continuing Education',
    text: "You'll find curated links to earn Continuing Professional Education credits, essential for maintaining your certifications and staying ahead of the curve.",
  },
];

const pillars = [
  { title: 'Join the Future', text: 'Lead in AI cybersecurity.' },
  { title: 'Become Elite', text: 'Elevate with the Gold Standard.' },
  { title: 'Network & Thrive', text: 'Connect with global leaders.' },
];

const certs = [
  { code: 'CAISE', title: 'Certified Artificial Intelligence Security Expert' },
  { code: 'TRAP', title: 'Technical Risk Assessment Professional (TRAP)' },
];

function IconBadge() {
  return (
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,color-mix(in_srgb,var(--color-primary)_65%,white),#22d3ee)] text-slate-900 shadow-lg shadow-[var(--color-primary)]/15">
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="m8.5 12 2.3 2.3L15.8 9.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function MembershipPage() {
  return (
    <>
      <section className="pt-30 md:pt-32">
        <div className="relative overflow-hidden rounded-b-[3rem] border-b border-[var(--color-border)] bg-[radial-gradient(circle_at_72%_32%,color-mix(in_srgb,var(--color-primary)_28%,transparent),transparent_20%),radial-gradient(circle_at_18%_80%,rgba(34,211,238,0.16),transparent_18%),linear-gradient(115deg,var(--color-bg)_18%,var(--color-surface)_52%,var(--color-bg)_100%)]">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,color-mix(in_srgb,var(--color-bg)_94%,transparent)_0%,color-mix(in_srgb,var(--color-bg)_78%,transparent)_42%,color-mix(in_srgb,var(--color-bg)_38%,transparent)_100%)]" />
          <div className="relative container mx-auto grid min-h-[520px] items-center gap-16 px-6 py-24 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <div className="mb-6 text-[11px] font-black uppercase tracking-[0.35em] text-[var(--color-primary)]">Membership</div>
              <h1 className="mb-6 text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
                We’re Building a Better Digital World
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-white/65 md:text-2xl">
                Join our global community and help us advance digital trust for all.
              </p>
            </div>
            <div className="relative hidden min-h-[360px] overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_52%_45%,color-mix(in_srgb,var(--color-primary)_38%,transparent),transparent_12%),radial-gradient(circle_at_50%_50%,rgba(56,189,248,0.45),transparent_22%),linear-gradient(160deg,rgba(255,255,255,0.02),rgba(255,255,255,0))] lg:block">
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-primary)]/25 shadow-[0_0_80px_color-mix(in_srgb,var(--color-primary)_30%,transparent)]" />
              <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/20" />
              <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--color-primary)]/10" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 text-[var(--color-text)]">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <div className="overflow-hidden rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(160deg,var(--color-surface),var(--color-bg))]">
              <div className="flex min-h-[480px] items-end bg-[linear-gradient(180deg,rgba(255,255,255,0.04),rgba(2,6,23,0.65))] p-8">
                <div className="text-xs font-black uppercase tracking-[0.35em] text-white/60">Leadership Community</div>
              </div>
            </div>
            <div className="pt-2">
              <div className="text-5xl font-black tracking-tight text-[var(--color-primary)]">Membership</div>
              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                Unlock the Future with IAISP Membership
              </h2>
              <div className="mt-8 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-6">
                <button
                  type="button"
                  className="rounded-2xl bg-[var(--color-primary)] px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90"
                >
                  Join Now
                </button>
                <div className="text-lg font-semibold">US $139 Annual Membership Fee</div>
              </div>
              <div className="mt-8 space-y-5 text-lg leading-relaxed opacity-70">
                <p>
                  Looking to lead in AI cybersecurity and technical risk assessment? Step into a
                  world-class community pioneering the first global certifications in these domains.
                </p>
                <p>
                  As a member, enjoy access to insights, educational content, discounts, and a
                  serious network committed to digital trust and professional growth.
                </p>
                <p>Elevate your journey in cybersecurity. Temporary copy for the revamp can be refined later.</p>
              </div>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {pillars.map((pillar) => (
                  <div key={pillar.title}>
                    <div className="text-2xl font-black text-[var(--color-primary)]">{pillar.title}</div>
                    <div className="mt-1 text-base opacity-65">{pillar.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-20 text-[var(--color-text)]">
          <div className="container mx-auto grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.35)]">
              <h3 className="text-4xl font-black">Our Mentorship Program</h3>
            <p className="mt-6 text-lg leading-relaxed opacity-70">
              Give or receive professional development support through IAISP’s mentorship program,
              bringing members together at all stages of their careers.
            </p>
            <button
              type="button"
              className="mt-8 rounded-2xl bg-[var(--color-primary)] px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-white transition-opacity hover:opacity-90"
              >
                Register Now
              </button>
            </div>
            <div className="rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(145deg,color-mix(in_srgb,var(--color-primary)_16%,var(--color-surface)),var(--color-surface),color-mix(in_srgb,var(--color-primary)_10%,var(--color-bg)))] p-8 text-[var(--color-text)] shadow-[0_24px_60px_-40px_rgba(0,0,0,0.5)]">
              <h3 className="text-4xl font-black">Connect</h3>
              <p className="mt-6 text-lg leading-relaxed opacity-78">
                Dive into a dynamic community at the forefront of AI and cybersecurity. Access Gold
                Standard content, exclusive networks, and dialogue with global thought leaders.
              </p>
            </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)]/55 px-6 py-20 text-[var(--color-text)]">
        <div className="container mx-auto">
          <div className="rounded-[2.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-10 shadow-[0_30px_70px_-50px_rgba(0,0,0,0.35)] md:p-14">
            <h3 className="text-4xl font-black">Our Certifications</h3>
            <p className="mt-5 max-w-4xl text-lg leading-relaxed opacity-70">
              Discover how to get the most out of membership with exclusive content, thought
              leadership, credentialing resources, leadership development and more.
            </p>
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {certs.map((cert) => (
                <div
                  key={cert.code}
                  className="flex flex-col gap-6 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-bg)]/25 p-6 md:flex-row md:items-center"
                >
                  <div className="flex h-28 w-28 items-center justify-center rounded-[1.5rem] bg-[linear-gradient(160deg,var(--color-primary),color-mix(in_srgb,var(--color-primary)_55%,#22d3ee))] text-3xl font-black text-white">
                    {cert.code}
                  </div>
                  <div>
                    <div className="text-3xl font-black leading-tight">{cert.title}</div>
                    <div className="mt-2 text-xl opacity-55">An IAISP Certification</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 text-[var(--color-text)]">
        <div className="container mx-auto">
          <div className="mx-auto max-w-4xl text-center">
            <h3 className="text-5xl font-black">Our Purpose</h3>
            <p className="mt-6 text-xl leading-relaxed opacity-70">
              IAISP serves to educate, empower, embrace and engage our members through every step
              of their careers.
            </p>
          </div>
          <div className="mx-auto mt-14 grid max-w-5xl gap-8 lg:grid-cols-3">
            {benefitCards.map((card) => (
              <div
                key={card.title}
                className="flex h-full flex-col rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-7"
              >
                <IconBadge />
                <h4 className="mt-6 text-3xl font-black">{card.title}</h4>
                <p className="mt-5 flex-1 text-lg leading-relaxed opacity-70">{card.text}</p>
                <button
                  type="button"
                  className="mt-8 rounded-2xl bg-[var(--color-primary)] px-7 py-3 text-base font-bold text-white transition-opacity hover:opacity-90"
                >
                  More Info
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
