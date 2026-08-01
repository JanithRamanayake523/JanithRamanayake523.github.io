// Centralized blog post data
export interface BlogPost {
  title: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  excerpt: string;
  slug: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: 'My IELTS Journey: Achieving Band 7 for My Higher Studies',
    category: 'My Diary',
    readTime: '4 min read',
    date: 'November 23, 2025',
    image: '/assets/blog/ielts.png',
    excerpt: 'Highlighting the study techniques, challenges, and experiences behind my successful attempt at the IELTS Academic exam...',
    slug: 'my-ielts-journey',
    content: `
      <h1>My IELTS Journey: Achieving Band 7 for My Higher Studies 🎓</h1>

      <p>
          Preparing for the IELTS exam has been one of the most meaningful chapters of my academic journey.
          I sat for the IELTS Academic test on <strong>20th November</strong> at <strong>IDP Colombo</strong>,
          and received my result the very next evening on the <strong>21st</strong>.
          When I opened the score report and saw an
          <strong>overall band score of 7.0</strong> — with
          <strong>Listening 8.0, Reading 7.0, Speaking 6.5, and Writing 6.0</strong> —
          I felt a deep sense of accomplishment.
      </p>

      <p>
          This score was especially important to me because I needed
          <strong>at least 6.5 overall and no band less than 6</strong>
          to be eligible for my future studies abroad.
          Achieving this requirement felt like a major step forward in my academic plans.
      </p>

      <hr>

      <h2>🌱 Starting My Preparation</h2>
      <p>
          At the beginning, the IELTS exam felt unfamiliar and intimidating.
          I used English daily, but IELTS had structure, timing pressure, and very specific scoring criteria.
          I realized I needed proper guidance, so I joined <strong>IELTS Malitha Academy</strong>.
          Their support helped me understand the exam format clearly and improve my weaker areas,
          especially writing and speaking.
      </p>

      <h2>🛠️ Tools That Made a Difference</h2>

      <h3>📘 Practicing with ieltsmate.com</h3>
      <p>
          I used <strong>ieltsmate.com</strong> every day to practice Cambridge IELTS book questions.
          The platform helped me attempt real past papers, check my answers instantly,
          and track my progress. Over time, this consistent practice strengthened my Listening and Reading skills,
          helping me achieve a <strong>Listening Band 8.0</strong>.
      </p>

      <h3>✍️ Using ChatGPT for Writing Feedback</h3>
      <p>
          Writing was my biggest challenge. To improve, I used <strong>ChatGPT</strong> to evaluate my essays.
          I submitted my writing tasks, received instant corrections, and learned how to structure my ideas better.
          This constant feedback improved my confidence significantly, even though writing remained my lowest band.
      </p>

      <h2>🤝 Support From Friends</h2>
      <p>
          I'm grateful that some of my friends had recently taken the IELTS as well.
          They shared tips, helped me practice speaking, and encouraged me throughout the journey.
          Their support made everything feel easier and more enjoyable.
      </p>

      <h2>🏫 My Experience at IDP Colombo</h2>
      <p>
          Taking the test at <strong>IDP Colombo</strong> was a very positive experience.
          The test center had <strong>excellent facilities</strong> — clean rooms, organized processes,
          comfortable seating, and friendly staff. Everything ran smoothly and helped reduce my nervousness on exam day.
      </p>

      <h2>📅 Exam Day & Results</h2>
      <p>
          On <strong>20th November</strong>, I walked into the test center feeling nervous but prepared.
          The test sections felt familiar because of all the practice I had done.
          When the results arrived on the <strong>21st November evening</strong>,
          I opened them with both fear and excitement.
      </p>

      <p>
          Seeing <strong>Overall Band 7.0</strong> was a moment I will never forget.
          It meant I had reached the requirement for my higher studies and successfully completed a journey
          I once felt unsure about.
      </p>

      <h2>💡 What This Journey Taught Me</h2>
      <ul>
          <li><strong>Consistency matters</strong> — small daily improvements build up over time.</li>
          <li><strong>The right tools matter</strong> — ieltsmate.com and ChatGPT helped me improve faster.</li>
          <li><strong>Support matters</strong> — teachers and friends played a huge role in my progress.</li>
          <li><strong>Confidence matters</strong> — staying calm on exam day made a big difference.</li>
      </ul>

      <h2>✨ Final Thoughts</h2>
      <p>
          If you are preparing for IELTS, remember that improvement is gradual.
          Some days feel slow, but every practice test, every correction, and every effort contributes to the final result.
      </p>

      <p>
          My journey wasn't perfect, but it was real — and it helped me reach exactly where I needed to be.
          If I can achieve <strong>Band 7</strong>, you can too.
          Stay consistent, believe in yourself, and keep moving forward. 🚀
      </p>
    `
  }
];

// Get latest N blog posts
export function getLatestPosts(count: number = 3): BlogPost[] {
  return blogPosts.slice(0, count);
}

// Get blog post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

// Get all blog post slugs for static generation
export function getAllSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}
