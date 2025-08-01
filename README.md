# Portfolio Website

A modern and responsive portfolio website built with React and Vite.

## Features

- **Fast Development**: Built with Vite for lightning-fast HMR (Hot Module Replacement)
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Component-Based**: Built with reusable React components
- **Easy to Customize**: Simple structure makes it easy to modify content
- **Smooth Navigation**: Navigation with smooth scrolling to sections
- **Dark Mode**: Toggle between light and dark themes

## Sections

1. **Header**: Eye-catching hero section with name and title
2. **About**: Personal introduction and background
3. **Skills**: Technical skills and expertise areas organized by category
4. **Experience**: Professional experience and internships
5. **Education**: Academic background and qualifications
6. **Projects**: Showcase of featured projects with links
7. **Contact**: Contact information and social links
8. **Footer**: Simple footer with copyright

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```
   cd pofile_website
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000` (or the port shown in terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information

Edit the following files to customize with your information:

- `src/components/Header.js` - Update name and title
- `src/components/About.js` - Update about section content and profile image
- `src/components/Skills.js` - Update skills and expertise
- `src/components/Projects.js` - Update project information
- `src/components/Contact.js` - Update contact information

### Styling

- `src/index.css` - Main stylesheet with all the styling
- Update colors, fonts, and layout as needed

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.js`
3. Add corresponding styles to `src/index.css`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (irreversible)

## Deployment

To deploy to production:

1. Build the project:
   ```
   npm run build
   ```

2. Deploy the `build` folder to your hosting service (Netlify, Vercel, GitHub Pages, etc.)

## Technologies Used

- React 18
- HTML5 & CSS3
- JavaScript ES6+
- Create React App

