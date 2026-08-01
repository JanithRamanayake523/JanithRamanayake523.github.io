# Deployment Guide for GitHub Pages

## Option 1: Manual Deployment

1. Build the project:
   ```bash
   npm run build
   ```

2. The static files will be in the `out` directory

3. Copy all files from the `out` directory to your GitHub Pages repository root

4. Commit and push to GitHub

## Option 2: Automated GitHub Actions Deployment

Create `.github/workflows/deploy.yml` in your repository:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build
        run: npm run build
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: $\{{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2
```

## Important Notes

- The `out` directory contains your static website
- The `.nojekyll` file is included to prevent GitHub Pages from processing with Jekyll
- Make sure to enable GitHub Pages in your repository settings
- Set the source to "GitHub Actions" in the Pages settings

## Verifying the Deployment

After deployment, your site will be available at:
`https://yourusername.github.io/`

## Updating the Site

1. Make changes to your Next.js project
2. Run `npm run build`
3. Deploy the new `out` directory contents
