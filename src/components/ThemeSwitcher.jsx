export default function ThemeSwitcher({ theme, themeOptions, onThemeChange }) {
  return (
    <div className="fixed bottom-6 left-6 z-[100] bg-[var(--color-surface)]/80 backdrop-blur-xl border border-[var(--color-border)] p-1.5 rounded-full shadow-2xl flex items-center gap-1.5">
      <span className="px-3 text-[8px] font-black uppercase opacity-40 hidden sm:block">Design Lab</span>
      <div className="flex gap-1 p-0.5">
        {themeOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onThemeChange(opt.id)}
            className={`w-7 h-7 rounded-full border-2 transition-all hover:scale-110 ${
              theme === opt.id ? 'border-[var(--color-primary)] scale-110' : 'border-transparent'
            }`}
            style={{ backgroundColor: opt.color }}
            title={opt.name}
          />
        ))}
      </div>
    </div>
  );
}
