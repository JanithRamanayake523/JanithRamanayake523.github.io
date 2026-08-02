# Deployment to GitHub Pages

This site deploys automatically to GitHub Pages via GitHub Actions — every push to
`main` builds the static site and publishes it. No manual steps needed after setup.

## One-time setup

1. **Repository name** — this site is configured to run at the root of your user
   domain (`https://janithramanayake523.github.io/`). For that, the repository must
   be named:

   ```
   JanithRamanayake523.github.io
   ```

   Rename it under **Settings → General → Repository name** on GitHub.
   (If you keep a different repo name instead, the site will live at
   `https://janithramanayake523.github.io/<repo-name>/` and you must set
   `basePath: '/<repo-name>'` in `next.config.js`.)

2. **Enable GitHub Pages** — in the repo go to
   **Settings → Pages → Build and deployment** and set **Source** to
   **GitHub Actions**.

3. Push to `main` — the workflow in `.github/workflows/deploy.yml` builds the
   site and deploys the `out/` directory. The first deploy takes 1–3 minutes.

## How it works

- `npm run build` produces a fully static export in `out/` (see
  `next.config.js` → `output: 'export'`).
- `public/.nojekyll` is copied into `out/` so GitHub Pages serves `_next/`
  assets correctly.
- The Actions workflow (`deploy.yml`) uploads `out/` and publishes it with
  `actions/deploy-pages`.

## Updating the site

1. Make your changes (content lives in `lib/site.ts`, `lib/blogData.ts`,
   `lib/projectsData.ts`).
2. Commit and push to `main`.
3. GitHub Actions rebuilds and redeploys automatically — watch progress under
   the repo's **Actions** tab.

## Custom domain (optional)

If you ever want a custom domain, add it under **Settings → Pages → Custom
domain** and commit a `CNAME` file with the domain into `public/`.
