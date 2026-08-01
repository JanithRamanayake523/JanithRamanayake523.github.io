// Centralized project data
export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  slug: string;
  liveUrl?: string;
  githubUrl: string;
  fullDescription?: string;
  features?: string[];
  challenges?: string[];
  outcomes?: string[];
}

export const projects: Project[] = [
  {
    title: 'CrediDecode: Credit Score Classification and Analysis using Machine Learning',
    description: 'CrediDecode is an interactive credit score prediction system that analyzes user financial information to classify their creditworthiness. It combines data-driven insights and advanced machine learning to explain how factors like debt, payment history, and loan behavior influence credit score categories. The platform empowers users to better understand and manage their financial profile.',
    image: '/assets/projects/CrediDecode.png',
    tech: ['React', 'Flask', 'Python', 'ML'],
    slug: 'CrediDecode',
    liveUrl: '#',
    githubUrl: 'https://github.com/JanithRamanayake/Credtit_Score_Classification_Web',
    fullDescription: `
      <h2>📌 Overview</h2>
      <p><b>CrediDecode</b> is a machine learning–based credit score analysis and classification platform that predicts user creditworthiness using financial behavior and repayment history. The system evaluates key indicators such as outstanding debt, delayed payments, loan patterns, and credit age to classify credit score categories and provide meaningful insights. 💳📊</p>

      <h2>✨ Key Features</h2>
      <ul>
        <li>🔍 End-to-end credit score prediction based on financial attributes</li>
        <li>📊 Insight extraction on influential factors (debt, repayment delays, loan count)</li>
        <li>⚖️ Balanced classification with advanced imbalance handling</li>
        <li>💬 User-facing platform for interactive predictions</li>
        <li>🤖 Optimized ensemble learning for improved accuracy</li>
      </ul>

      <h2>🛠️ Technical Implementation</h2>
      <p>The system involved extensive preprocessing of over <b>100,000+ records</b> 🧹, along with advanced feature engineering to transform complex attributes such as loan text descriptions. Statistical methods (Pearson, Spearman, Chi-Square) helped identify key predictors, while optimized ensemble models like Random Forest, XGBoost, and stacking boosted classification performance. The final model powers an interactive platform where users input financial details and receive real-time predictions. 🚀</p>

      <h2>📈 Results</h2>
      <p>CrediDecode delivered improved classification performance through ensemble optimization and SMOTE-based balancing. The system provides reliable predictions across credit categories and helps users understand what impacts their score. 🎯💡</p>
    `,
    features: [
      '💳 Predictive credit score classification',
      '📌 Insight extraction on financial risk factors',
      '⚖️ Balanced classification (SMOTE)',
      '🤝 Ensemble model integration',
      '🖥️ Interactive user prediction platform'
    ],
    challenges: [
      '📉 Imbalanced credit score categories',
      '🧩 Complex preprocessing for loan-related text data',
      '🔎 Maintaining interpretability of financial features'
    ],
    outcomes: [
      '📈 Accuracy improved through ensemble optimization',
      '⚖️ Achieved balanced category representation using SMOTE',
      '🚀 Delivered an interactive tool for credit assessment'
    ]
  },
  {
    title: 'HappyHire: Generative AI-based Recruitment Management Agent',
    description: 'HappyHire is an AI-driven recruitment management platform that intelligently matches candidates to job opportunities. It provides personalized resume feedback, automates interview scheduling, and delivers actionable insights to improve both candidate experience and recruiter efficiency. The system streamlines hiring with data-driven recommendations and a seamless, user-friendly workflow.',
    image: '/assets/projects/HappyHire.png',
    tech: ['Streamlit', 'Flask', 'LangGraph'],
    slug: 'HappyHire',
    liveUrl: '#',
    githubUrl: 'https://github.com/OverCat2000/Intellihack_Rapid_Vortex_GenAI',
    fullDescription: `
      <h2>📌 Overview</h2>
      <p><b>HappyHire</b> is a generative AI-powered recruitment management platform that enhances the hiring process by providing personalized insights and intelligent candidate-job matching. It leverages AI to analyze resumes, give tailored feedback, and streamline interviews, creating a seamless experience for both applicants and recruiters. 🤖💼</p>

      <h2>✨ Key Features</h2>
      <ul>
        <li>📄 AI-Powered Resume Scoring for candidate shortlisting</li>
        <li>📝 Personalized feedback to improve resumes and applications</li>
        <li>🎯 Streamlined interview scheduling with personalized batches, QR codes, and AI-generated images</li>
        <li>🔗 Seamless integration for an intuitive user experience</li>
        <li>💡 Data-driven insights for both recruiters and candidates</li>
      </ul>

      <h2>🛠️ Technical Implementation</h2>
      <p>HappyHire combines generative AI with advanced resume analysis and personalized feedback mechanisms. AI models automatically score resumes against job descriptions and generate actionable improvement suggestions. Interview management is automated, including candidate batch creation and visual enhancements using AI-generated content. The platform ensures smooth interaction for all users. 🚀</p>

      <h2>📈 Results</h2>
      <p>The platform significantly improves recruitment efficiency, enhances candidate experience, and ensures high-quality shortlisting. Recruiters save time, while candidates receive meaningful insights to strengthen future applications. 🌟📊</p>
    `,
    features: [
      '📄 AI-Powered resume scoring',
      '📝 Personalized candidate feedback',
      '🎯 Automated interview scheduling with AI enhancements',
      '🔗 Seamless and intuitive platform experience',
      '💡 Data-driven insights for recruitment'
    ],
    challenges: [
      '⚖️ Ensuring fairness and accuracy in AI scoring',
      '🧩 Integrating generative AI outputs into user workflows',
      '🔍 Handling diverse resume formats and content types'
    ],
    outcomes: [
      '📈 Improved recruitment efficiency',
      '🌟 Enhanced candidate experience',
      '🚀 Automated, intelligent interview management'
    ]
  },
  {
    title: 'DataSciPay: Interactive Salary Insights Dashboard',
    description: 'DataSciPay is an interactive Tableau dashboard built to explore data science job salaries based on roles, locations, and experience levels. It provides dynamic visualizations, real-time insights, and actionable analysis to help users understand compensation trends and make informed decisions for hiring, career planning, or salary negotiation.',
    image: '/assets/projects/DataSciPay.jpg',
    tech: ['Tableau'],
    slug: 'DataSciPay',
    liveUrl: '#',
    githubUrl: 'https://public.tableau.com/app/profile/tharindu.fernando/viz/DS3001---DashBoard/Dashboard1?publish=yes',
    fullDescription: `
      <h2>📌 Overview</h2>
      <p><b>DataSciPay</b> is an interactive salary analytics dashboard designed to explore compensation trends within the data science field. It enables users to analyze salary variations based on job roles, geographic regions, skills, and experience levels, helping stakeholders make informed decisions about hiring, career paths, and compensation strategies. 💼📊</p>

      <h2>✨ Key Features</h2>
      <ul>
        <li>🧹 Comprehensive data cleaning and preparation for accurate insights</li>
        <li>📈 Interactive visualizations displaying salary distributions and trends</li>
        <li>🌍 Exploration of salary differences across regions, roles, and experience levels</li>
        <li>⚙️ Real-time filtering and drill-down options for deeper insights</li>
        <li>💡 Data-driven recommendations for hiring and career planning</li>
      </ul>

      <h2>🛠️ Technical Implementation</h2>
      <p>The dashboard was built after extracting, cleaning, and transforming raw salary datasets to remove inconsistencies and missing values. Using Tableau's powerful visualization capabilities, the system features dynamic charts, filters, and geographic visual analytics that allow users to explore the job market interactively. The design focuses on usability and insight generation to support decisions around compensation and recruitment. 🚀</p>

      <h2>📈 Results</h2>
      <p>The platform delivers actionable insights into the data science job market, enabling users to identify salary gaps, competitive regions, and role-specific compensation trends. It offers a user-friendly, real-time visualization tool that benefits job seekers, recruiters, and industry analysts alike. 🌟💰</p>
    `,
    features: [
      '📊 Dynamic visualization of salary trends',
      '🌎 Geographic salary analysis',
      '🧮 Experience and role-based comparison',
      '🔍 Real-time filter and drill-down capabilities',
      '💡 Actionable compensation insights'
    ],
    challenges: [
      '📉 Cleaning inconsistent salary and categorical job data',
      '🌐 Visualizing multi-dimensional salary variables',
      '🔍 Extracting meaningful trends from diverse datasets'
    ],
    outcomes: [
      '📌 Delivered a real-time interactive salary dashboard',
      '📈 Provided strategic insights for recruitment and career planning',
      '💼 Empowered data-driven decision-making in the job market'
    ]
  }
];

// Get latest N projects
export function getLatestProjects(count: number = 3): Project[] {
  return projects.slice(0, count);
}

// Get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug);
}

// Get all project slugs for static generation
export function getAllProjectSlugs(): string[] {
  return projects.map(project => project.slug);
}
