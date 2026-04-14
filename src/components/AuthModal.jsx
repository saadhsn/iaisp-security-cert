export default function AuthModal({
  authMode,
  authOpen,
  countryOptions,
  onClose,
  onModeChange,
  onTogglePassword,
  onToggleConfirmPassword,
  showConfirmPassword,
  showPassword,
}) {
  if (!authOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-md rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xl">
        <div className="flex items-start justify-between mb-6">
          <div>
            <div className="text-[10px] uppercase tracking-[0.35em] opacity-60">Member Access</div>
            <h3 className="text-2xl font-black">{authMode === 'login' ? 'Log In' : 'Create Account'}</h3>
            <p className="text-xs opacity-60">Secure access to certifications and compliance.</p>
          </div>
          <button
            className="w-9 h-9 rounded-xl border border-[var(--color-border)] hover:bg-[var(--color-bg)]/40 transition-colors"
            onClick={onClose}
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
                onClick={onTogglePassword}
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
                    onClick={onToggleConfirmPassword}
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
            onClick={() => onModeChange(authMode === 'login' ? 'signup' : 'login')}
          >
            {authMode === 'login' ? 'Sign Up' : 'Log In'}
          </button>
        </div>
      </div>
    </div>
  );
}
