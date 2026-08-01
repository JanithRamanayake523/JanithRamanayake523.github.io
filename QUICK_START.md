# Quick Start Guide

## Getting Your Next.js Portfolio Running

### 1. Install Dependencies
```bash
cd portfolio-nextjs
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

### 3. Customize Your Content

#### Update Personal Information
Edit these files to update your information:

**components/Navbar.tsx** - Change "Your Name" to your actual name
**components/Hero.tsx** - Update your name and description
**components/About.tsx** - Update your bio, skills, education, and work experience
**components/Contact.tsx** - Update your contact information and links

#### Add/Update Projects
Edit **components/Projects.tsx** to add or modify projects.

#### Add/Update Research
Edit **components/Research.tsx** to update research projects.

#### Add/Update Publications
Edit **components/Publications.tsx** to add publications.

#### Customize Colors
Edit **app/globals.css** to change the color scheme:
```css
@theme {
  --color-primary: #2C3E50;    /* Your primary color */
  --color-secondary: #3498DB;  /* Your secondary color */
  --color-accent: #E74C3C;     /* Your accent color */
}
```

### 4. Add Your Images
Replace the placeholder images in `public/assets/` with your own:
- `Janith.jpg` - Your profile photo
- `uoc.png`, `ijse.png`, `mahinda.png`, `cbsl.png` - Organization logos
- `blog1.jpg`, `blog3.jpg` - Blog post images
- `project1.jpg`, `project3.jpg`, `project4.jpg` - Project images
- `research/polymer.jpeg` - Research images

### 5. Build for Production
```bash
npm run build
```
This creates a static export in the `out` directory.

### 6. Deploy to GitHub Pages
See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment instructions.

## Common Tasks

### Adding a New Blog Post
1. Open `app/blog/page.tsx` and add your post to the `blogPosts` array
2. Open `app/blog/[slug]/page.tsx` and add your post content to the `blogContent` object
3. Add the slug to `generateStaticParams`

### Changing Fonts
Edit `app/layout.tsx` and `app/globals.css` to use custom fonts.

### Adding New Sections
1. Create a new component in `components/`
2. Import and add it to `app/page.tsx`

### Adding a New Page
1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Update navigation links in `components/Navbar.tsx`

## Need Help?

- Check [CONVERSION_SUMMARY.md](CONVERSION_SUMMARY.md) for detailed information
- Check [DEPLOYMENT.md](DEPLOYMENT.md) for deployment instructions
- Read the [Next.js documentation](https://nextjs.org/docs)
- Read the [Tailwind CSS documentation](https://tailwindcss.com/docs)

## File Structure Quick Reference
```
app/
├── page.tsx              # Home page (main portfolio)
├── layout.tsx            # Root layout
├── globals.css           # Global styles
└── blog/
    ├── page.tsx          # Blog listing
    └── [slug]/page.tsx   # Individual blog posts

components/
├── Navbar.tsx            # Navigation
├── Hero.tsx              # Hero section
├── About.tsx             # About section
├── Research.tsx          # Research section
├── Publications.tsx      # Publications section
├── Projects.tsx          # Projects section
├── Blog.tsx              # Blog preview
├── Contact.tsx           # Contact section
└── Footer.tsx            # Footer

public/
└── assets/               # Your images and files
```

Happy coding!
