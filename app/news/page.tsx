import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHeader from '@/components/ui/PageHeader';
import NewsArchive from '@/components/NewsArchive';

export const metadata = {
  title: 'News — Janith Ramanayake',
  description: 'News and updates from Janith Ramanayake.',
};

export default function NewsPage() {
  return (
    <>
      <Navbar alwaysBlue={true} />
      <main className="min-h-screen">
        <PageHeader title="News" description="Updates on my research, studies, and work." />

        <div className="max-w-4xl mx-auto px-5 sm:px-8 pb-24">
          <NewsArchive />
        </div>
      </main>
      <Footer />
    </>
  );
}
