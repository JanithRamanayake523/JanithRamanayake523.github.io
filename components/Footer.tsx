import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="relative border-t border-line py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <a href="#" className="font-display text-lg font-bold">
            <span className="gradient-text">Janith</span>
            <span className="text-ink">.</span>
          </a>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted">
            {['About', 'Research', 'Publications', 'Projects', 'Blog', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>

          <a
            href={`mailto:${site.email}`}
            className="text-sm text-muted hover:text-accent transition-colors"
          >
            {site.email}
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-line/50 text-center">
          <p className="text-xs text-faint">
            &copy; {new Date().getFullYear()} Janith Ramanayake · Designed & built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
