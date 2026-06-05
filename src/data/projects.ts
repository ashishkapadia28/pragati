export interface Project {
  id: string;
  title: string;
  slug: string;
  brief: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Salary Predictions Model',
    slug: 'salary-predictions-model',
    brief: 'Machine learning model predicting salaries using Linear Regression.',
    description: 'This data science project focuses on predicting an employee\'s salary based on features like years of experience. It involves data cleaning, exploratory data analysis (EDA), and training a Linear Regression model to find the best-fit line. The model provides highly accurate continuous predictions, demonstrating strong foundational ML skills.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib'],
    githubUrl: 'https://github.com/pragati1102/Linear-Regression-Salary-Predictions-.git',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '2',
    title: 'Loan Approval Predictor',
    slug: 'loan-approval-predictor',
    brief: 'A Decision Tree classifier to predict whether a loan will be approved.',
    description: 'Developed a predictive classification model to automate the loan approval process. By analyzing applicant demographics, financial history, and credit scores, the Decision Tree model accurately classifies whether an applicant should be approved or rejected. It includes detailed feature importance analysis and data visualization.',
    technologies: ['Python', 'Scikit-Learn', 'Decision Trees', 'Seaborn', 'Data Analysis'],
    githubUrl: 'https://github.com/pragati1102/Loan_approve_Decision_Tree.git',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: '3',
    title: 'Bookly E-Commerce',
    slug: 'bookly-ecommerce',
    brief: 'A complete e-commerce platform built for buying and exploring books.',
    description: 'Bookly is a comprehensive full-stack e-commerce web application. It features a robust backend to handle user authentication, product catalogs, shopping cart logic, and order processing. The platform provides a seamless shopping experience with a clean user interface and secure database management.',
    technologies: ['Python', 'Django', 'SQL', 'HTML/CSS', 'JavaScript'],
    githubUrl: 'https://github.com/pragati1102/Bookly-Ecommerce.git',
    imageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=800&auto=format&fit=crop',
  }
];
