const footerLinks = ['About Us', 'Who We Are', 'Careers at IAISP', 'Governance Policies', 'Blogs', 'Sitemap'];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-text)]">
      <div className="container mx-auto grid gap-10 px-6 py-14 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-primary)]/15 ring-1 ring-[var(--color-primary)]/30">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--color-primary)] text-lg font-black italic text-white">
                I
              </div>
            </div>
            <div>
              <div className="text-3xl font-black tracking-tight text-[var(--color-primary)]">IAISP</div>
              <div className="text-xs uppercase tracking-[0.25em] opacity-45">Global Network</div>
            </div>
          </div>
          <p className="max-w-xs text-lg leading-relaxed opacity-70">
            International Association of Information Security Professionals
          </p>
          <p className="mt-4 text-sm opacity-55">© 2026 All rights reserved.</p>
          <div className="mt-5 flex gap-3 text-sm opacity-70">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/40">in</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/40">f</span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-bg)]/40">ig</span>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-3xl font-black">Get in Touch</h3>
          <div className="space-y-3 text-lg leading-relaxed opacity-70">
            <p>700 12th Street NW, STE 700</p>
            <p>Washington, DC 20005</p>
            <p>contact@iaisp.org</p>
            <p>+1 (202) 826-6691</p>
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-3xl font-black">Learn More</h3>
          <div className="space-y-3 text-lg opacity-70">
            {footerLinks.map((link) => (
              <a key={link} href="#" className="block transition-opacity hover:opacity-100">
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 text-3xl font-black">Our Newsletter</h3>
          <p className="mb-6 max-w-sm text-lg leading-relaxed opacity-70">
            Subscribe to our newsletter to get our news and updates delivered to you.
          </p>
          <div className="flex overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)]/35">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent px-4 py-4 text-base outline-none placeholder:opacity-35"
            />
            <button
              type="button"
              className="bg-[var(--color-primary)] px-6 py-4 text-base font-black text-white transition-opacity hover:opacity-90"
            >
              Join
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
