# 🚀 Portfolio Website - Tejas Nachane

[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-green)](https://tejasnachane.github.io/Portfolio/)
[![React](https://img.shields.io/badge/React-18.2.0-blue)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-purple)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A modern, responsive, and interactive portfolio website built with **React** and **Vite**, showcasing my projects, skills, and professional experience. Features a gaming-inspired Valorant theme with cyberpunk aesthetics, dark mode toggle, and smooth animations.

## 🌟 Live Demo

🔗 **[View Live Portfolio](https://tejasnachane.github.io/Portfolio/)**

## 📸 Preview

![Portfolio Preview](https://via.placeholder.com/800x400/0f1419/ffffff?text=Portfolio+Preview)

## ✨ Features

### 🎨 **Design & UI**
- **Gaming-Inspired Theme**: Valorant/Cyberpunk aesthetic with neon colors and angular designs
- **Responsive Design**: Seamlessly works on desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes with persistent state
- **Smooth Animations**: CSS transitions and hover effects for enhanced user experience
- **Modern Typography**: Clean and professional fonts with gaming-style accents

### ⚡ **Performance & Technology**
- **Lightning Fast**: Built with Vite for instant hot module replacement (HMR)
- **React 18**: Latest React features with functional components and hooks
- **Component-Based Architecture**: Modular and reusable React components
- **Optimized Build**: Production-ready builds with code splitting and tree shaking
- **SEO Friendly**: Proper meta tags and semantic HTML structure

### 🛠️ **Functionality**
- **Single Data Source**: All content managed through one configuration file
- **Contact Integration**: Direct links to email, phone, and social profiles
- **Project Showcase**: Interactive project cards with GitHub links
- **Skills Categorization**: Organized skill sets with visual icons
- **Experience Timeline**: Professional experience and education history

## 📋 Sections

| Section | Description |
|---------|-------------|
| **🏠 Header** | Hero section with name, title, and call-to-action buttons |
| **👨‍💻 About** | Personal introduction, bio, and profile image |
| **🛠️ Skills** | Technical skills organized by categories (Languages, Frameworks, etc.) |
| **💼 Experience** | Professional internships and work experience |
| **🎓 Education** | Academic background and qualifications |
| **🚀 Projects** | Showcase of featured projects with descriptions and links |
| **📞 Contact** | Contact information and social media links |
| **🔗 Footer** | Simple footer with copyright information |

## 🛠️ Tech Stack

### **Frontend**
- **React 18.2.0** - Component-based UI library
- **JavaScript (ES6+)** - Modern JavaScript features
- **CSS3** - Custom styling with animations and responsive design
- **HTML5** - Semantic markup structure

### **Build Tools**
- **Vite 4.4.5** - Next-generation frontend build tool
- **ESLint** - Code linting and quality assurance
- **GitHub Pages** - Static site hosting and deployment

### **Development**
- **Node.js** - JavaScript runtime environment
- **npm** - Package management
- **Git** - Version control
- **GitHub Actions** - CI/CD pipeline for automatic deployment

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/TejasNachane/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build production-ready application |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |
| `npm run deploy` | Deploy to GitHub Pages manually |

## 🎨 Customization

### **Personal Information**
Edit the `src/data/portfolioData.js` file to customize:

```javascript
export const portfolioData = {
  personal: {
    name: "Your Name",
    title: "Your Title",
    bio: ["Your bio paragraphs..."],
    profileImage: "path/to/your/image.jpg",
    resume: "path/to/your/resume.pdf"
  },
  // ... other sections
};
```

### **Theme Colors**
Modify CSS variables in `src/index.css`:

```css
:root {
  --primary-color: #ff4655;
  --secondary-color: #0ffcb9;
  --background-color: #0f1419;
  /* ... other variables */
}
```

### **Adding New Sections**
1. Create a new component in `src/components/`
2. Add data structure in `portfolioData.js`
3. Import and use in `App.js`

## 📱 Deployment

### **Automatic Deployment (Recommended)**

This project uses GitHub Actions for automatic deployment:

1. **Push to main branch**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin main
   ```

2. **GitHub Actions will automatically:**
   - Install dependencies
   - Build the project
   - Deploy to GitHub Pages

3. **Access your live site:**
   ```
   https://tejasnachane.github.io/Portfolio/
   ```

### **Manual Deployment**

```bash
npm run deploy
```

## 📂 Project Structure

```
portfolio-website/
├── public/                 # Public assets
│   ├── CNAME              # Custom domain configuration
│   └── favicon.ico        # Site favicon
├── src/                   # Source code
│   ├── components/        # React components
│   │   ├── About.js
│   │   ├── Contact.js
│   │   ├── Education.js
│   │   ├── Experience.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── Navbar.js
│   │   ├── Projects.js
│   │   └── Skills.js
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.js
│   ├── data/              # Data and assets
│   │   ├── portfolioData.js
│   │   └── [images]
│   ├── App.js             # Main App component
│   ├── index.css          # Global styles
│   └── index.js           # Entry point
├── .github/workflows/     # GitHub Actions
│   └── deploy.yml
├── .gitignore
├── package.json
├── vite.config.js         # Vite configuration
└── README.md
```

## 🎯 Key Features Explained

### **Single Data Source Management**
All content is managed through `portfolioData.js`, making it easy to:
- Update personal information
- Add/remove projects
- Modify skills and experience
- Change contact details

### **Responsive Design**
- Mobile-first approach
- Flexible grid layouts
- Adaptive typography
- Touch-friendly interactions

### **Performance Optimizations**
- Code splitting for faster loading
- Optimized images and assets
- Minimal bundle size
- Efficient CSS animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## � License

This project is open source and available under the [MIT License](LICENSE).

## 🚀 Deployment Notes

### **GitHub Pages Configuration**
- ✅ Base path correctly set to `/Portfolio/` in `vite.config.js`
- ✅ Asset paths properly configured for GitHub Pages deployment
- ✅ Images moved to `public/images/` directory for proper serving
- ✅ Build process optimized for production deployment

### **Troubleshooting**
If the site displays nothing after deployment:
1. Ensure `base: '/Portfolio/'` is set in `vite.config.js`
2. Verify all asset paths use relative paths (starting with `./`)
3. Check that `portfolioData.js` contains valid data
4. Make sure GitHub Pages is enabled for the repository

## �📧 Contact

**Tejas Nachane**
- 📧 Email: [tejasnachane010@gmail.com](mailto:tejasnachane010@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/tejasnachane](https://www.linkedin.com/in/tejasnachane/)
- 🐱 GitHub: [github.com/TejasNachane](https://github.com/TejasNachane)
- 🔗 Portfolio: [tejasnachane.dev](https://tejasnachane.dev)
- 💻 LeetCode: [leetcode.com/u/Golumaster](https://leetcode.com/u/Golumaster/)
