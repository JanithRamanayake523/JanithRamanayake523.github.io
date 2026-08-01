import Reveal from './Reveal';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  /** Word(s) inside the title to render with the gradient */
  highlight?: string;
  description?: string;
  align?: 'center' | 'left';
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = 'center',
}: SectionHeadingProps) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

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
    <Reveal className={`max-w-2xl ${alignment} mb-14`}>
      <p className="eyebrow mb-3">{eyebrow}</p>
      <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-tight">
        {renderTitle()}
      </h2>
      {description && (
        <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
