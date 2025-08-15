export const portfolioData = {  // Personal Information
  personal: {
    name: "Tejas Nachane",
    title: "Developer & Game Enthusiast",
    subtitle: "Level up your digital experience with cutting-edge web solutions",    bio: [
      "🎮 I'm a passionate Full Stack Developer with 3+ years of experience crafting epic web applications. Like a skilled gamer, I love conquering complex coding challenges and turning them into elegant digital solutions.",
      "⚔️ My tech stack arsenal includes React, Node.js, Python, and cutting-edge web technologies. I'm always grinding to learn new skills and take on boss-level projects that push the boundaries of what's possible.",
      "🏆 When I'm not coding, you'll find me exploring indie games, speedrunning through tech tutorials, or building side projects that solve real-world quests. Ready to team up and create something legendary?"
    ],
    profileImage: "/Portfolio/images/profile_img.png"  
  },

  // Contact Information
  contact: {
    email: "tejasnachane010@gmail.com",
    phone: "+91 8080046989",
    location: "Murtizapur, Akola, Maharashtra, India",
    linkedin: "https://www.linkedin.com/in/tejasnachane/",
    github: "https://github.com/TejasNachane/TejasNachane",
    website: "https://tejasnachane.dev",
    leetcode: "https://leetcode.com/u/Golumaster/"
  },

  // Education
  education: [
    {
      school: "Diploma in Computer Science",
      College: "Government Polytechnic, Murtizapur",
      year: "2019-21",
      description: "Focused on core concepts and fundamentals of computer science."
    },
    {
      degree: "BE in Information Technology",
      College: "Shri Sant Gajanan Maharaj College of Engineering, Shegaon",
      year: "2022-25",
      description: "Focused on software engineering, algorithms, data structures and more."
    }
  ],

  // Experience
  experience: [
    {
      position: "Data Science Intern",
      company: "Pysoft IT Solution Pvt Ltd",
      duration: "Sep 2022 - Dec 2022",
      description: [
        "Completed a data science internship project focusing on Python and data analysis",
        "Acquired hands-on experience in data science techniques and tools",
        "Developed skills in Python programming and data manipulation"
      ]
    },
    {
      position: "Web Development Intern",
      company: "BTH Bitlance Tech Hub Pvt Ltd",
      duration: "Jun 2019 – Aug 2019",
      description: [
        "Completed internship program focused on HTML, CSS, JavaScript, and PHP",
        "Developed and launched an E-Commerce website as a major project",
        "Acquired practical skills in web development through hands-on project experience"
      ]
    }
  ],  // Skills
  skills: [
    {
      category: "Programming Languages",
      technologies: ["Python", "PHP", "Java",],
      icon: "💻"
    },
    {
      category: "Frameworks & Libraries",
      technologies: ["Flask", "Spring Boot", "React", "Bootstrap", "Tailwind CSS"],
      icon: "⚡"
    },
    {
      category: "Frontend Technologies",
      technologies: ["HTML5", "CSS3"],
      icon: "🎨"
    },
    {
      category: "Database Technologies",
      technologies: ["MySQL", "MongoDB", "PostgreSQL"],
      icon: "🗄️"
    },
    {
      category: "DevOps & Tools",
      technologies: ["Git", "AWS", "Linux"],
      icon: "👑 "
    },
    {
      category: "Soft Skills",
      technologies: ["Project Management", "Team Leadership", "Problem Solving"],
      icon: "🚀"
    }
  ],

  // Projects
  projects: [
  {
    title: "Indian Sign Language Detection",
    description: "A real-time sign language detection system using MediaPipe, TensorFlow, and Flask. It features webcam-based hand tracking, gesture recognition, live predictions, audio output, and a user-friendly web interface. This was my final year college project.",
    image: "/Portfolio/images/sign.jpg",
    technologies: ["MediaPipe", "TensorFlow", "Flask", "OpenCV", "HTML/CSS", "pyttsx3"],
    githubLink: "https://github.com/TejasNachane/ISL-Recognized",
    featured: true
  },
  {
    title: "Student Management System",
    description: "A web-based student management system built with PHP and MySQL. It allows administrators to manage student records, track attendance, and generate academic reports through a secure dashboard. This was my final year polytechnic project.",
    image: "/Portfolio/images/college.jpg",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "Bootstrap"],
    githubLink: "https://github.com/TejasNachane/student-management-system",
    featured: true
  },
  {
    title: "Expenses & Lending Tracker",
    description: "A comprehensive Flask web application for personal financial management that helps you track expenses, manage lending/borrowing, and analyze spending patterns with interactive visualizations.",
    image: "/Portfolio/images/expence.png",
    technologies: ["Html", "Python", "Pandas", "Flask", "CSS3"],
    githubLink: "https://github.com/TejasNachane/Expense-Lending-Tracker",
    featured: true
  },
  {
    title: "Hospital Management System",
    description: "A comprehensive hospital management system built with Spring Boot and MySQL. Features include patient registration, appointment scheduling, doctor management, medical records, billing system, and inventory management with role-based access control.",
    image: "/Portfolio/images/hospital.png",
    technologies: ["Java", "Spring Boot", "MySQL", "Spring Security", "Thymeleaf", "Bootstrap"],
    githubLink: "https://github.com/TejasNachane/hospital-management-system",
    featured: true
  }
],

  // Website Settings
  settings: {
    siteName: "Tejas Nachane - Portfolio",
    tagline: "Full Stack Developer & UI/UX Designer",
    description: "Portfolio website of Tejas Nachane, a passionate full stack developer specializing in React and Node.js",
    keywords: ["Tejas Nachane", "Full Stack Developer", "React", "Node.js", "Web Development"],
    author: "Tejas Nachane",
    defaultTheme: "light", // "light" or "dark"
    enableAnimations: true,
    showEducation: true,
    showExperience: true
  }
};
