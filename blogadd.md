Steps to Add a New Blog Post:
1. Add Blog Post Content
Open app/blog/[slug]/page.tsx and add your new post to the blogContent object around line 10:
const blogContent: { [key: string]: any } = {
  'understanding-transformer-architectures': {
    // existing post...
  },
  'bayesian-vs-frequentist': {
    // existing post...
  },
  'ethics-in-ai-research': {
    // existing post...
  },
  // ADD YOUR NEW POST HERE:
  'your-post-slug': {
    title: 'Your Blog Post Title',
    category: 'Machine Learning', // or 'Statistics', 'Data Science', etc.
    readTime: '5 min read',
    date: 'January 15, 2025',
    image: '/assets/hero.jpg', // or path to your image
    content: `
      <h2>Introduction</h2>
      <p>Your introduction paragraph here...</p>

      <h2>Main Section</h2>
      <p>Your content here...</p>
      
      <h3>Subsection</h3>
      <p>More content...</p>
      
      <ul>
        <li>Bullet point 1</li>
        <li>Bullet point 2</li>
      </ul>

      <h2>Conclusion</h2>
      <p>Your conclusion...</p>
    `
  }
};
2. Add Post to Blog Listing Pages
You need to add the post preview to TWO files: A. Main Blog Page - app/blog/page.tsx Add to the blogPosts array around line 7:
const blogPosts = [
  // ... existing posts
  {
    title: 'Your Blog Post Title',
    excerpt: 'A brief description of your post that appears on the blog listing...',
    image: '/assets/hero.jpg', // same as in blogContent
    category: 'Machine Learning',
    readTime: '5 min read',
    date: 'January 15, 2025',
    slug: 'your-post-slug' // MUST match the key in blogContent
  }
];
B. Homepage Blog Section - components/Blog.tsx Add to the blogPosts array around line 11:
const blogPosts = [
  // ... existing posts
  {
    title: 'Your Blog Post Title',
    excerpt: 'A brief description of your post...',
    image: '/assets/hero.jpg',
    category: 'Machine Learning',
    readTime: '5 min read',
    date: { day: '15', month: 'Jan' }, // Note: different format here!
    slug: 'your-post-slug' // MUST match the key in blogContent
  }
];
3. Key Points to Remember:
Slug consistency: The slug must be EXACTLY the same in all three places:
Key in blogContent object
slug field in blog page listing
slug field in homepage component
Date format:
Blog content & blog page: 'January 15, 2025'
Homepage component: { day: '15', month: 'Jan' }
HTML in content: Use valid HTML tags in the content field:
<h2> for main sections
<h3> for subsections
<p> for paragraphs
<ul> and <li> for lists
<strong> for bold text
Images: Place images in the public/assets/ folder and reference them as /assets/filename.jpg
4. URL Structure:
Your new post will be available at:
/blog/your-post-slug (individual post)
Listed on /blog (all posts page)
Shown on / homepage (latest posts section)
That's it! The generateStaticParams() function will automatically pick up your new post from the blogContent keys when you build the site.