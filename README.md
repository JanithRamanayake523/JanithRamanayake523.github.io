# Janith Ramanayake — Personal Portfolio

My personal academic portfolio, live at **[janithramanayake523.github.io](https://janithramanayake523.github.io/)**.

I'm a Master's student in Data Science and researcher working on machine learning,
deep learning, and statistical modeling — currently a Research Assistant at the
University of Moratuwa and the University of Peradeniya.

## What's on the site

- **About** — short bio, research interests, and links
- **Updates** — recent news with an expandable archive
- **Education & Experience** — academic and professional history
- **Publications & Presentations** — conference papers and abstracts
- **Research** — ongoing and completed research projects
- **Writing** — blog posts
- **Contact** — email, CV, and social links

## Built with

- [Next.js](https://nextjs.org/) 16 (App Router, static export)
- [React](https://react.dev/) 19 + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- Deployed on **GitHub Pages** via GitHub Actions

## Editing content

All site content lives in a few data files — no need to touch components:

| File            | What it controls                                              |
| --------------- | ------------------------------------------------------------- |
| `lib/site.ts`   | Name, bio, links, news/updates, education, experience        |
| `lib/blogData.ts` | Blog posts (see [BLOG_GUIDE.md](BLOG_GUIDE.md))             |
| `public/assets/` | Images, CV, logos                                            |

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deployment

The site is a fully static export (`out/`) and deploys automatically to GitHub
Pages on every push to `main`. See [DEPLOYMENT.md](DEPLOYMENT.md) for details.

---

© Janith Ramanayake
