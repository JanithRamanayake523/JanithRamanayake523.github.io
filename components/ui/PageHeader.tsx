interface PageHeaderProps {
  eyebrow: string;
  title: string;
  highlight?: string;
  description?: string;
}

/** Shared hero banner for inner pages (/projects, /blog, detail pages) */
export default function PageHeader({ eyebrow, title, highlight, description }: PageHeaderProps) {
  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) return title;
    const [before, after] = title.split(highlight);
    return (
      <>
        {before}
        <span className="gradient-text">{highlight}</span>
        {after}
      </>
    );
  };

  return (
    <div className="relative pt-40 pb-20 overflow-hidden bg-grid">
      <div className="aurora w-[420px] h-[420px] -top-52 left-1/4 bg-accent2/20" />
      <div className="aurora w-[320px] h-[320px] -top-32 right-1/5 bg-accent/15" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,#04060c_80%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 text-center">
        <p className="eyebrow mb-4">{eyebrow}</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          {renderTitle()}
        </h1>
        {description && <p className="text-muted text-lg max-w-xl mx-auto">{description}</p>}
      </div>
    </div>
  );
}
