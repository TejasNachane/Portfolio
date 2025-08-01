# Portfolio Content Management Guide

## 📝 Quick Setup Guide

All your portfolio content is managed through a single file: `src/data/portfolioData.js`

## 🎯 How to Customize Your Portfolio

### 1. Personal Information
```javascript
personal: {
  name: "Your Name",
  title: "Your Professional Title",
  subtitle: "Your tagline or subtitle",
  bio: [
    "First paragraph about yourself...",
    "Second paragraph...",
    "Third paragraph..."
  ],
  profileImage: "path/to/your/image.jpg",
  resume: "/path/to/your/resume.pdf"
}
```

### 2. Contact Information
```javascript
contact: {
  email: "your.email@example.com",
  phone: "+1 (234) 567-890",
  location: "Your City, State",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourusername",
  website: "https://yourwebsite.com"
}
```

### 3. Skills
Add or modify skills categories:
```javascript
skills: [
  {
    category: "Skill Category Name",
    technologies: ["Tech1", "Tech2", "Tech3"],
    icon: "🚀" // Any emoji
  }
]
```

### 4. Projects
Add your projects:
```javascript
projects: [
  {
    title: "Project Name",
    description: "Project description...",
    image: "path/to/project/image.jpg",
    technologies: ["React", "Node.js", "MongoDB"],
    liveLink: "https://project-demo.com",
    githubLink: "https://github.com/you/project",
    featured: true // Shows in featured projects
  }
]
```

### 5. Experience
Add your work experience:
```javascript
experience: [
  {
    position: "Job Title",
    company: "Company Name",
    duration: "2022 - Present",
    description: [
      "Achievement or responsibility 1",
      "Achievement or responsibility 2"
    ]
  }
]
```

### 6. Education
Add your education:
```javascript
education: [
  {
    degree: "Degree Name",
    school: "School Name",
    year: "2020",
    description: "Description of your studies..."
  }
]
```

### 7. Website Settings
Control what sections to show:
```javascript
settings: {
  siteName: "Your Name - Portfolio",
  showEducation: true,     // Show/hide education section
  showExperience: true,    // Show/hide experience section
  showCertifications: true // Show/hide certifications
}
```

## 🖼️ Adding Images

### Profile Image
1. Add your profile image to `public/images/profile.jpg`
2. Update the path in `portfolioData.js`:
   ```javascript
   profileImage: "/images/profile.jpg"
   ```

### Project Images
1. Add project images to `public/images/projects/`
2. Update project image paths:
   ```javascript
   image: "/images/projects/project1.jpg"
   ```

## 🎨 Quick Customization Tips

### Colors
To change the main color scheme, update the CSS variables in `src/index.css`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
}
```

### Sections
Toggle sections on/off in the settings:
```javascript
settings: {
  showEducation: false,    // Hides education section
  showExperience: true,    // Shows experience section
  showCertifications: true // Shows certifications
}
```

## 🚀 Deployment Checklist

Before deploying:

1. ✅ Update all personal information
2. ✅ Add your real profile image
3. ✅ Update project images and links
4. ✅ Add your actual contact information
5. ✅ Update resume link
6. ✅ Test all external links
7. ✅ Review all content for accuracy

## 📱 Mobile Responsiveness

The portfolio is fully responsive. Test on different screen sizes to ensure everything looks good.

## 🎯 SEO Optimization

Update these fields for better SEO:
```javascript
settings: {
  siteName: "Your Name - Portfolio",
  description: "Portfolio of Your Name, Full Stack Developer...",
  keywords: ["Your Name", "Developer", "React", "etc"],
  siteUrl: "https://yoursite.com"
}
```

## 🔧 Advanced Customization

For advanced styling changes, modify:
- `src/index.css` - All styles
- Individual component files in `src/components/`

Happy customizing! 🎉
