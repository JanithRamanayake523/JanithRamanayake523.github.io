interface PageHeaderProps {
  title: string;
  description?: string;
}

/** Shared header for inner pages (/projects, /blog) */
export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="pt-32 pb-10">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <h1 className="font-display text-4xl font-semibold tracking-tight mb-3">{title}</h1>
        {description && <p className="text-muted">{description}</p>}
      </div>
    </div>
  );
}
