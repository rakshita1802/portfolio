export const PORTFOLIO_DATA = {
  personal: {
    name: "Rakshita",
    role: "Full-Stack Software Engineer & Creative Technologist",
    shortBio: "Crafting high-performance web applications, scalable backends, and pixel-perfect user experiences with modern web technologies.",
    location: "Coimbatore, Tamil Nadu, India (Open to Remote)",
    status: "Available for Internships & High-Impact Projects",
    email: "rakshita1967@gmail.com",
    phone: "7708624230",
    github: "https://github.com/rakshita1802",
    linkedin: "https://www.linkedin.com/in/rakshita-n-",
    whatsapp: "https://wa.me/917708624230?text=Hi%20Rakshita%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!",
    resumeUrl: "#resume-download",
    stats: [
      { label: "Current CGPA", value: "8.3", suffix: "" },
      { label: "Projects Built", value: "6+", suffix: "" },
      { label: "Hackathons Won", value: "2", suffix: "🏆" },
      { label: "Technologies Mastered", value: "15+", suffix: "" }
    ],
    aboutStory: `I am a passionate software engineer with a deep love for building intuitive, reliable, and aesthetically stunning applications. 
    My journey spans full-stack engineering, cloud architecture, and modern UI design. Whether designing complex microservices, building real-time collaboration tools, or optimizing performance for thousands of concurrent users, I thrive at the intersection of technical rigor and creative problem solving.`
  },

  interests: [
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      category: "Innovation",
      icon: "Cpu",
      description: "Building predictive maintenance models, federated learning pipelines, and context-aware RAG systems.",
      tags: ["PyTorch", "XGBoost", "LangChain", "ChromaDB"]
    },
    {
      id: "data-engineering",
      title: "Data Engineering",
      category: "Architecture",
      icon: "Database",
      description: "Architecting real-time hybrid batch/streaming data pipelines and medallion data architectures.",
      tags: ["Snowflake", "Apache Kafka", "Airflow", "dbt"]
    },
    {
      id: "fullstack",
      title: "Full-Stack Development",
      category: "Technical",
      icon: "Layout",
      description: "Developing scalable RESTful APIs and responsive interactive web dashboards for data visualization.",
      tags: ["FastAPI", "React", "Next.js", "PostgreSQL"]
    },
    {
      id: "security",
      title: "Security & Cryptography",
      category: "Security",
      icon: "ShieldCheck",
      description: "Designing secure digital vaults for sensitive data using robust authentication and hardware-level encryption.",
      tags: ["8086 Assembly", "Encryption", "Auth"]
    },
    {
      id: "problem-solving",
      title: "Algorithmic Problem Solving",
      category: "Core",
      icon: "Code2",
      description: "Applying strong foundational knowledge in data structures and algorithms to solve complex real-world challenges.",
      tags: ["C++", "Python", "Optimization"]
    },
    {
      id: "databases",
      title: "Database Architecture",
      category: "Infrastructure",
      icon: "Server",
      description: "Designing relational models with strict constraints and configuring vector databases for semantic search.",
      tags: ["MySQL", "SQLite", "MongoDB", "SQLAlchemy"]
    }
  ],

  skills: {
    languages: [
      { name: "Python / C / C++ / Java", level: 90, exp: "Core" },
      { name: "JavaScript (ES6+)", level: 85, exp: "Web" },
      { name: "HTML5 / CSS3 / Bootstrap", level: 90, exp: "Web" }
    ],
    frameworks: [
      { name: "React / Next.js", level: 85, exp: "Frontend" },
      { name: "FastAPI", level: 85, exp: "Backend" },
      { name: "MySQL / SQLite / MongoDB", level: 80, exp: "Databases" },
      { name: "Git / GitHub / dbt", level: 85, exp: "Tools" }
    ],
    ai_ml: [
      { name: "PyTorch / Scikit-Learn", level: 80, exp: "ML" },
      { name: "Pandas / NumPy / XGBoost", level: 85, exp: "Data" },
      { name: "RAG / LangChain / Generative AI", level: 90, exp: "AI" },
      { name: "Vector Databases (Chroma)", level: 85, exp: "AI" }
    ]
  },

  projects: [
    {
      id: "agrihive-ai",
      title: "AgriHive AI",
      subtitle: "Privacy-preserving agricultural intelligence platform",
      category: "Innovation",
      featured: true,
      image: "https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1000&auto=format&fit=crop",
      description: "A collaborative learning platform across farms using Feature-Aware Personalized Federated Learning (FAP-FL) and Explainable AI (SHAP) for agricultural risk assessment.",
      highlights: [
        "Built a modular AI pipeline integrating Random Forest, Digital Twins, and PSO Optimization",
        "Implemented SHAP (Explainable AI) for personalized agricultural risk assessment",
        "Developed a scalable full-stack solution integrating external weather APIs"
      ],
      tech: ["Python", "FastAPI", "React", "PostgreSQL", "SQLAlchemy"],
      github: "https://github.com/rakshita1802/AgriHive-AI",
      live: "#",
      stats: "1st Place @ NIT Trichy"
    },
    {
      id: "motion-ai",
      title: "MOTION-AI",
      subtitle: "Predictive Maintenance System & Industrial AI Cockpit",
      category: "Machine Learning",
      featured: true,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop",
      description: "Developed XGBoost and LSTM models to predict immediate machine failures and forecast Remaining Useful Life (RUL) for industrial applications.",
      highlights: [
        "Implemented SHAP to provide transparent, interpretable model outputs for operators",
        "Integrated computer vision pipelines using PyTorch for heuristic visual analysis on component wear",
        "Deployed ML models via a FastAPI backend for low-latency, real-time sensor inference"
      ],
      tech: ["Python", "XGBoost", "Keras/LSTM", "PyTorch", "SHAP", "FastAPI"],
      github: "https://github.com/PujaRaj356/MOTION-AI-Autonomous-Predictive-Intelligence-Cockpit-",
      live: "#",
      stats: "Real-time Inference"
    },
    {
      id: "university-kb",
      title: "University Knowledge Base",
      subtitle: "AI-powered RAG system for context-aware Q&A",
      category: "Artificial Intelligence",
      featured: true,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?q=80&w=1000&auto=format&fit=crop",
      description: "An AI-powered University Knowledge Base enabling context-aware question answering directly from ingested university documents.",
      highlights: [
        "Developed document ingestion, text chunking, and local embeddings generation",
        "Configured a ChromaDB vector search and integrated OCR support for efficient retrieval",
        "Built a conversational UI using Streamlit and LangChain"
      ],
      tech: ["Python", "LangChain", "RAG", "ChromaDB", "Streamlit"],
      github: "https://github.com/rakshita1802/University_kb",
      live: "#",
      stats: "OCR + Vector Search"
    },
    {
      id: "skypulse",
      title: "SkyPulse",
      subtitle: "Real-time flight telemetry hybrid batch/streaming pipeline",
      category: "Data Engineering",
      featured: false,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop",
      description: "Architected a Medallion data architecture to ingest global flight telemetry into Snowflake, serving as the foundational data layer for downstream analytics.",
      highlights: [
        "Built a Medallion data architecture with automated data validation and feature extraction",
        "Developed a comprehensive data quality auditing framework using dbt",
        "Surfaced real-time flight metrics via a custom FastAPI and React dashboard"
      ],
      tech: ["Python", "Snowflake", "Apache Kafka", "Airflow", "dbt", "Docker"],
      github: "https://github.com/rakshita1802/SkyPulse",
      live: "#",
      stats: "Medallion Architecture"
    },
    {
      id: "petcare-system",
      title: "PetCare Management System",
      subtitle: "Full-stack RESTful application with complex relational models",
      category: "Fullstack",
      featured: false,
      image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1000&auto=format&fit=crop",
      description: "Developed a full-stack web application implementing RESTful APIs with CRUD operations, search, filtering, pagination, and sorting for pet care management.",
      highlights: [
        "Designed a relational database with strict foreign key constraints using SQLAlchemy",
        "Implemented frontend validation, error handling, and state management using React Hooks",
        "Built scalable API endpoints using FastAPI and Next.js"
      ],
      tech: ["FastAPI", "Next.js", "SQLite", "SQLAlchemy", "React"],
      github: "https://github.com/rakshita1802/Pet-care-Management-system",
      live: "https://petpaws-management.netlify.app",
      stats: "RESTful CRUD APIs"
    },
    {
      id: "secure-vault",
      title: "Secure Digital Vault System",
      subtitle: "Cryptographic sensitive data storage system",
      category: "Security",
      featured: false,
      image: "https://images.unsplash.com/photo-1614064641913-6b71a306dc95?q=80&w=1000&auto=format&fit=crop",
      description: "Developed a secure digital vault for storing and managing sensitive data utilizing low-level authentication and encryption protocols.",
      highlights: [
        "Integrated a cryptographic module using raw 8086 Assembly for secure data handling",
        "Built a FastAPI backend for secure REST communication",
        "Designed a React frontend for intuitive data management"
      ],
      tech: ["FastAPI", "React", "SQLite", "8086 Assembly"],
      github: "https://github.com/rakshita1802",
      live: "#",
      stats: "Hardware-level Crypto"
    },
    {
      id: "railpredict",
      title: "RailPredict",
      subtitle: "Railway Prediction & Analysis System",
      category: "Machine Learning",
      featured: true,
      image: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1000&auto=format&fit=crop",
      description: "An intelligent railway prediction system. (Please provide more details on this project so I can update the description accurately!)",
      highlights: [
        "Implemented data analysis and prediction algorithms",
        "Developed a robust backend architecture",
        "Created an intuitive frontend interface"
      ],
      tech: ["Python", "Machine Learning", "Data Science"],
      github: "https://github.com/rakshita1802/RailPredict",
      live: "#",
      stats: "AI Predictions"
    }
  ],

  achievements: [
    {
      id: "hackathon-nit",
      title: "1st Place Winner - AI & ML",
      issuer: "Tata Centre & NIT Trichy",
      date: "2024",
      icon: "Trophy",
      category: "Hackathon",
      description: "Secured first place in the Tata Centre for Artificial Intelligence and Machine Learning Hackathon at NIT Trichy.",
      badgeText: "1st Place 🥇"
    },
    {
      id: "revature-capstone",
      title: "2nd Prize - Capstone Project",
      issuer: "Revature",
      date: "2024",
      icon: "Award",
      category: "Project",
      description: "Awarded second prize for exceptional execution and architecture in the Revature Capstone Project.",
      badgeText: "2nd Prize 🥈"
    },
    {
      id: "racathon-excellence",
      title: "Certificate of Excellence - Best Theme",
      issuer: "Rotaract Club of Coimbatore Uptown",
      date: "2023",
      icon: "Star",
      category: "Hackathon",
      description: "Awarded Best Theme at the Rac-a-Thon Hackathon for creative and impactful project design.",
      badgeText: "Best Theme 🌟"
    },
    {
      id: "cert-fullstack",
      title: "FullStack Development Certificate",
      issuer: "Revature",
      date: "2024",
      icon: "Code",
      category: "Certification",
      description: "Comprehensive certification covering modern full-stack web development methodologies, APIs, and databases.",
      badgeText: "Certified 🛡️"
    },
    {
      id: "cert-genai",
      title: "Generative AI Training Program",
      issuer: "Revature",
      date: "2024",
      icon: "Cpu",
      category: "Certification",
      description: "Completed an intensive training program focused on LLMs, Prompt Engineering, LangChain, and RAG architectures.",
      badgeText: "Certified 🤖"
    }
  ],

  education: [
    {
      id: "edu-1",
      role: "M.Sc. Software Systems (5 years integrated)",
      company: "Coimbatore Institute of Technology",
      period: "2024 - 2029",
      location: "Coimbatore, India",
      type: "Postgraduate / Integrated",
      highlights: [
        "Currently pursuing a 5-year integrated Master's degree in Software Systems.",
        "Current CGPA: 8.3 (till 3rd sem)",
        "Core focus on Data Structures, Algorithms, Software Engineering, and AI/ML."
      ],
      skillsUsed: ["C++", "Python", "Data Structures", "Algorithms"]
    },
    {
      id: "edu-2",
      role: "Class XII",
      company: "Sri Chaitanya Techno School",
      period: "2024",
      location: "India",
      type: "Higher Secondary",
      highlights: [
        "Completed Higher Secondary Education with a strong foundation in Mathematics and Sciences.",
        "Secured 81% overall grade."
      ],
      skillsUsed: ["Mathematics", "Physics", "Chemistry"]
    },
    {
      id: "edu-3",
      role: "Class X",
      company: "Sri Chaitanya Techno School",
      period: "2022",
      location: "India",
      type: "Secondary",
      highlights: [
        "Completed Secondary Education with distinction.",
        "Secured 93% overall grade."
      ],
      skillsUsed: ["Core Academics"]
    }
  ],

  terminalCommands: {
    help: "Available Commands: 'about', 'interests', 'skills', 'projects', 'achievements', 'education', 'hire', 'clear'",
    about: "RAKSHITA | Software Systems student skilled in Python and C++ with a strong foundation in Data Structures, Algorithms, and AI.",
    interests: "TOP INTERESTS: 1. Fullstack Architecture 2. AI & Agents 3. Pixel-Perfect UI 4. Cloud Serverless 5. Open Source",
    skills: "SKILLS SUMMARY: React (95%), JavaScript/TS (92%), Node.js (90%), HTML/CSS (95%), PostgreSQL (86%), Netlify/Cloud (96%)",
    projects: "FEATURED PROJECTS: 1. Nexus Analytics AI Suite  2. HyperCode Snippet Studio  3. Zenith Notes & Workspace  4. CyberVault Pass",
    achievements: "ACHIEVEMENTS: 🏆 1st Place Global AI Hackathon | 🛡️ AWS Certified Developer | ⭐ 3.92 GPA CS Graduate | 🧠 LeetCode Knight",
    education: "EDUCATION: M.Sc. Software Systems (Coimbatore Institute of Technology) | Class XII & X (Sri Chaitanya Techno School)",
    hire: "STATUS: Available for Full-Time Roles & High-Impact Projects! Email: rakshita1967@gmail.com, Phone: 7708624230",
    sudo: "Access granted! You are now authorized to hire Rakshita! 🚀"
  }
};
