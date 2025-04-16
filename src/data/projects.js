// data/projects.js - Your portfolio projects
export const projects = [
  {
    id: "task-management",
    title: "Task Management Application",
    shortDescription: "A modern, feature-rich task management application with multiple views and project organization capabilities.",
    fullDescription: `A comprehensive task management solution built with React and Vite that helps users organize projects and tasks efficiently. The application features multiple views including List, Kanban Board, and Timeline views, along with robust project management capabilities and a modern user interface.`,
    technologies: [
      "React",
      "Vite",
      "TailwindCSS",
      "IndexedDB",
      "React Context",
      "Framer Motion",
      "react-beautiful-dnd",
      "recharts"
    ],
    features: [
      "Multiple task views (List, Kanban, Timeline)",
      "Drag-and-drop task organization",
      "Project management with analytics",
      "Dark/Light mode support",
      "Local data persistence using IndexedDB",
      "Advanced filtering and search capabilities",
      "Responsive design for all devices"
    ],
    images: [
      "/images/taskM1.jpg",
      "/images/taskM2.jpg",
      "/images/taskM3.jpg",
      "/images/taskM4.jpg",
      "/images/taskM5.jpg"
    ],
    liveLink: "https://task-management-react-js-phi.vercel.app",
    sourceCode: "https://github.com/yassjustice/TaskManagement_ReactJs.git",
    testimonial: {
      quote: "This task management app has significantly improved my productivity and project organization.",
      author: "Project Manager"
    }
  },
  {
    id: "thunder-weather-dashboard",
    title: "Thunder Weather Dashboard",
    shortDescription: "A modern weather dashboard built with React and Vite, featuring a dark thunder theme and real-time weather data for cities worldwide.",
    fullDescription: "Thunder Weather Dashboard is a comprehensive weather application designed to help users track and monitor weather conditions in major cities across 6 continents. The app features a dark thunder theme, dynamic search, and real-time weather data, making it a perfect tool for anyone looking to stay informed about the weather.",
    technologies: [
      "React",
      "Vite",
      "CSS Modules",
      "Tailwind CSS",
      "Framer Motion",
      "React Icons",
      "Open Meteo Weather API"
    ],
    features: [
      "Global Coverage: Weather data for major cities across 6 continents",
      "Dynamic Search: Filter cities by region, country, or city name",
      "Thunder Theme: Dark mode with particle effects and lightning animations",
      "Detailed Weather Info: Temperature, wind speed, and weather conditions",
      "Responsive Design: Works seamlessly on desktop and mobile devices",
      "PWA Support: Offline functionality, install as native app, and auto-updates"
    ],
    images: [
      "/images/ui-preview1.jpeg",
      "/images/ui-preview2.jpeg",
      "/images/ui-preview3.jpeg"
    ],
    liveLink: "https://weather-app-react-js-puce.vercel.app",
    sourceCode: "https://github.com/yassjustice/WeatherApp_ReactJs.git",
    testimonial: {
      quote: "Thunder Weather Dashboard has completely changed how I think about the weather.",
      author: "John Doe, Weather Enthusiast"
    }
  },
  {
    id: "fitness-buddy",
    title: "FitnessBuddy",
    shortDescription: "A web application for workout planning and nutrition tracking",
    fullDescription: "FitnessBuddy helps users achieve their fitness goals by providing customized workout plans and nutrition tracking. The application uses AI to adjust recommendations based on user progress and preferences.",
    technologies: ["React", "MongoDB", "Express", "TensorFlow.js"],
    features: [
      "AI-powered workout recommendations",
      "Nutrition tracker with visual breakdown of macros",
      "Progress photos and measurements logging",
      "Workout calendar with reminder system",
      "Social sharing capabilities for achievements"
    ],
    images: [
      "/images/ui-preview4.jpeg",
      "/images/ui-preview1.jpeg",
      "/images/ui-preview2.jpeg"
    ],
    liveLink: "https://fitnessbuddy.example.com",
    sourceCode: "https://github.com/johndoe/fitnessbuddy",
    testimonial: {
      quote: "As a busy professional, FitnessBuddy has made it incredibly easy to stay on track with my health goals.",
      author: "Michael Johnson, Software Engineer"
    }
  },
  {
    id: "trail-explorer",
    title: "Trail Explorer",
    shortDescription: "An interactive map-based application for discovering hiking trails",
    fullDescription: "Trail Explorer helps outdoor enthusiasts discover and navigate hiking trails with detailed maps, difficulty ratings, and user reviews. The application includes offline capabilities for remote areas with limited connectivity.",
    technologies: ["React", "Mapbox API", "Node.js", "PostgreSQL"],
    features: [
      "Interactive trail maps with elevation profiles",
      "User-generated reviews and photos",
      "Offline map caching for remote areas",
      "Weather integration for trail conditions",
      "Achievement system for completed trails"
    ],
    images: [
      "/images/ui-stock1.jpeg",
      "/images/ui-stock2.jpeg",
      "/images/ui-stock3.jpeg"
    ],
    liveLink: "https://trailexplorer.example.com",
    sourceCode: "https://github.com/johndoe/trailexplorer",
    testimonial: {
      quote: "Trail Explorer has become my go-to app for planning weekend hikes. The offline maps feature is a game-changer.",
      author: "Sarah Williams, Hiking Enthusiast"
    }
  },
  {
    id: "code-mentor",
    title: "CodeMentor",
    shortDescription: "A platform connecting coding students with experienced mentors",
    fullDescription: "CodeMentor is a web platform that facilitates connections between programming students and experienced developers for personalized mentorship. The application includes video conferencing, code collaboration tools, and progress tracking.",
    technologies: ["React", "WebRTC", "Socket.io", "MongoDB"],
    features: [
      "Real-time code collaboration editor",
      "Video conferencing with screen sharing",
      "Skill-based mentor matching algorithm",
      "Schedule management and reminder system",
      "Resource sharing and learning path creation"
    ],
    images: [
      "/images/ui-stock4.jpeg",
      "/images/ui-stock1.jpeg",
      "/images/ui-stock2.jpeg"
    ],
    liveLink: "https://codementor.example.com",
    sourceCode: "https://github.com/johndoe/codementor",
    testimonial: {
      quote: "CodeMentor connected me with the perfect mentor who helped me land my first developer job.",
      author: "Alex Chen, Junior Developer"
    }
  }
];