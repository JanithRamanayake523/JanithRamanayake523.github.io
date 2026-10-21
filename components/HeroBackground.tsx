// Simple dot-grid pattern for the side margins. Static and decorative; it
// fades out toward the content column so nothing sits behind the text.
const dots =
  'radial-gradient(circle, rgba(14, 138, 99, 0.5) 1.5px, transparent 2px)'

// Opaque at the far edges, gone before the content column (max-w-5xl = 1024px),
// and softened at the top and bottom of the section.
const mask = [
  'linear-gradient(to right, #000 0, transparent calc(50% - 520px), transparent calc(50% + 520px), #000 100%)',
  'linear-gradient(to bottom, transparent 0, #000 20%, #000 80%, transparent 100%)',
].join(', ')

export default function HeroBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none hidden min-[1100px]:block"
      style={{
        backgroundImage: dots,
        backgroundSize: '28px 28px',
        maskImage: mask,
        WebkitMaskImage: mask,
        maskComposite: 'intersect',
        WebkitMaskComposite: 'source-in',
      }}
      aria-hidden="true"
    />
  )
}
