# Blog System Guide

## How It Works

Your blog system is now **fully automated**! The homepage automatically shows the **latest 3 blog posts**, and the `/blog` page shows **all blog posts**.

## Adding a New Blog Post

You only need to edit **ONE file**: `lib/blogData.ts`

### Steps:

1. Open [lib/blogData.ts](lib/blogData.ts)

2. Add your new post to the **beginning** of the `blogPosts` array (line 11):

```typescript
export const blogPosts: BlogPost[] = [
  // ADD YOUR NEW POST HERE AT THE TOP
  {
    title: 'Your New Blog Post Title',
    category: 'Machine Learning', // or 'Statistics', 'Data Science', 'My Diary', etc.
    readTime: '5 min read',
    date: 'December 1, 2025', // Format: 'Month Day, Year'
    image: '/assets/blog/your-image.jpg', // Put image in public/assets/blog/
    excerpt: 'A brief summary of your post that appears on listing pages...',
    slug: 'your-post-slug', // URL-friendly slug (no spaces, lowercase)
    content: `
      <h2>Introduction</h2>
      <p>Your content here...</p>

      <h2>Main Section</h2>
      <p>More content...</p>

      <h3>Subsection</h3>
      <p>Details...</p>

      <ul>
        <li>Bullet point 1</li>
        <li>Bullet point 2</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Final thoughts...</p>
    `
  },
  // ... existing posts below
];
```

3. Save the file - that's it!

## What Happens Automatically:

- ✅ **Homepage** (`/`) shows your latest 3 posts
- ✅ **Blog listing page** (`/blog`) shows ALL posts
- ✅ **Individual post pages** (`/blog/your-post-slug`) are created
- ✅ **Dates are formatted** automatically
- ✅ **Static pages are generated** at build time

## Important Notes:

- **Add new posts at the TOP** of the array to keep them in chronological order
- **Slug must be unique** and URL-friendly (e.g., `my-new-post`, not `My New Post!`)
- **Date format**: Use `'Month Day, Year'` (e.g., `'December 1, 2025'`)
- **HTML in content**: Use `<h2>`, `<h3>`, `<p>`, `<ul>`, `<li>`, `<strong>`, `<hr>` tags
- **Images**: Place in `public/assets/blog/` folder and reference as `/assets/blog/filename.jpg`

## Example:

```typescript
{
  title: 'My Journey Learning Next.js',
  category: 'Web Development',
  readTime: '8 min read',
  date: 'December 1, 2025',
  image: '/assets/blog/nextjs.jpg',
  excerpt: 'Sharing my experience learning Next.js 15 and building this portfolio website...',
  slug: 'learning-nextjs-journey',
  content: `
    <h2>Why I Chose Next.js</h2>
    <p>After researching various frameworks, I decided on Next.js because...</p>

    <h2>Key Learnings</h2>
    <ul>
      <li>Server and client components</li>
      <li>App Router vs Pages Router</li>
      <li>Static site generation</li>
    </ul>

    <h2>Conclusion</h2>
    <p>Next.js has been an excellent choice for building my portfolio...</p>
  `
}
```

## File Structure:

```
lib/
  blogData.ts          ← Edit this ONE file to add posts

app/blog/
  page.tsx             ← Auto-loads all posts
  [slug]/page.tsx      ← Auto-generates individual posts

components/
  Blog.tsx             ← Auto-shows latest 3 posts on homepage
```

That's it! Just edit one file and everything updates automatically! 🚀
