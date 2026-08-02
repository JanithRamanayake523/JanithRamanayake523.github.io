import { site } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="border-t border-line py-8 mt-6">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center text-sm text-faint">
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
