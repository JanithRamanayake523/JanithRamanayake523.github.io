import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 mt-6">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-faint">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <p>
          Built with Next.js ·{' '}
          <a
            href="https://github.com/JanithRamanayake523/Janith-Ramanayake-Personal-Portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="link-accent"
          >
            Source
          </a>
        </p>
      </div>
    </footer>
  );
}
