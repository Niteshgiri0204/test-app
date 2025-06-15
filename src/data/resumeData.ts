export const resumeData = {
  name: "NITESH GIRI",
  title: "SOFTWARE DEVELOPER",
  professionalSummary: "I specialize in crafting robust web applications and RESTful APIs using Node.js and React.js, adept in both front-end and back-end development. My expertise extends to the unique requirements of the Hospital and Telecom domains. Currently Working as a Software Developer with SilfraTechnologies Since May 2023 to till date.",
  aboutTextFull: "I'm a skilled software developer with 3.4 years experience specializing in web technologies, with expertise in React for front-end development and Node.js for building scalable back-end systems. I create seamless, enterprise-level applications by integrating these technologies to deliver user friendly solutions. I’m a strong problem-solver who excels in collaborative environments, ensuring that my work meets both technical and user requirements.",
  workExperience: [
    {
      title: "Software Developer",
      company: "SilfraTechnologies",
      duration: "May 2023 - Till Date",
      description: [
        "Developed a multi-tenant Hospital Management System (HIMS) using React.js, Node.js, and MySQL.",
        "Built and maintained BatteryIQ, a vehicle data and battery visualization platform, with React.js, Node.js, and MySQL for real-time insights.",
        "Created the Apprentice mobile app in Flutter with a Node.js backend, managing apprentice activities and monitoring roles for candidates and employers.",
        "HRMS: Worked on maintaining and updating a React.js and Node.js web app, including Google Gantt chart integrations with MySQL.",
        "Cardiologist App: Managed and enhanced a C# mobile app for cardiologist, addressing bugs and implementing feature improvements.",
        "AIChat: Improved AI models with Azure API for better performance. Added features so users can raise issues with screen recordings and attach screenshots in chat."
      ]
    },
    {
      title: "Junior Developer",
      company: "Previous Company Inc.",
      duration: "Jan 2022 - April 2023",
      description: [
        "Assisted in the development and maintenance of internal web applications using React and Python.",
        "Contributed to database design and optimization for small-scale projects.",
        "Participated in code reviews and learned best practices in software development lifecycle."
      ]
    }
  ],
  rolesAndResponsibilities: [
    "Requirement Task planning and Designing",
    "Created and executed the test cases for various scenarios, and participated actively in Functional Testing, validation testing, Usability",
    "Involved in preparation of daily and weekly status reports.",
    "Interacting with developers in resolving the bugs.",
    "Analyze customer requirement",
    "Designing and Executing test cases from the Functional specifications.",
    "Interact with developers and discuss technical problems, Bugs Tracking and Generating Reports."
  ],
  education: [
    {
      degree: "Bachelor of Technology",
      institution: "SRTM University",
      year: "2021"
    }
  ],
  technicalProficiency: {
    "Programming Languages": [
      { name: "Node-JS", proficiency: 90 },
      { name: "Python", proficiency: 75 }
    ],
    "Frameworks": [
      { name: "React", proficiency: 95 },
      { name: "Bootstrap", proficiency: 80 },
      { name: "Express.js", proficiency: 85 },
      { name: "Flask", proficiency: 70 }
    ],
    "Databases": [
      { name: "MySQL", proficiency: 88 }
    ],
    "Tools": [
      { name: "Postman", proficiency: 92 }
    ],
    "Operating Systems": [
      { name: "Windows", proficiency: 90 },
      { name: "Linux", proficiency: 70 }
    ],
    "IDE/Editors": [
      { name: "Visual Studio Code", proficiency: 95 },
      { name: "VS Code", proficiency: 95 },
      { name: "Sublime Text", proficiency: 70 },
      { name: "Notepad++", proficiency: 60 },
      { name: "WebStorm", proficiency: 80 }
    ]
  },
  projects: [
    {
      title: "E-commerce Platform Backend",
      description: "Developed a scalable RESTful API for an e-commerce platform handling user authentication, product catalog, shopping cart, and order processing. Implemented secure payment gateway integrations.",
      technologies: ["Node.js", "Express.js", "MongoDB", "JWT"],
      githubLink: "https://github.com/yourusername/ecommerce-backend",
      liveDemoLink: null,
      imageUrl: "https://placehold.co/600x400/333333/E0E0E0?text=E-commerce+Backend",
      problem: "The client needed a robust, secure, and scalable backend for their new e-commerce venture that could handle a large product catalog and high transaction volumes.",
      solution: "I designed and implemented a RESTful API using Node.js and Express.js, integrating MongoDB for data storage. Focused on modular architecture for scalability. Implemented JWT for secure authentication and authorization.",
      yourRole: "Lead Backend Developer. Responsible for API design, database schema, security implementation, and integrating third-party payment gateways.",
      impact: "Successfully launched the platform, supporting over 10,000 product listings and processing hundreds of transactions daily without performance degradation. Achieved a 99.9% uptime record.",
      learnings: "Gained deep insights into API security best practices, asynchronous programming in Node.js, and optimizing MongoDB queries for large datasets."
    },
    {
      title: "Personal Blog Application",
      description: "A full-stack blog application featuring user authentication, post creation, editing, and commenting. Built with a modern UI and SEO-friendly routing.",
      technologies: ["React", "Next.js", "Tailwind CSS", "Firebase"],
      githubLink: "https://github.com/yourusername/blog-app",
      liveDemoLink: "https://yourblog.vercel.app",
      imageUrl: "https://placehold.co/600x400/333333/E0E0E0?text=Blog+App",
      problem: "Needed a personal platform to share technical articles and thoughts, requiring user authentication for content creation and a smooth reading experience.",
      solution: "Built a modern full-stack blog using React and Next.js for a performant frontend with SEO capabilities. Utilized Firebase for authentication and database services. Styled with Tailwind CSS for rapid and responsive UI development.",
      yourRole: "Sole Developer. Responsible for end-to-end development, from UI/UX design to backend integration and deployment.",
      impact: "Created a highly responsive and visually appealing blog that attracts consistent traffic. Successfully managed user content and provided an intuitive authoring experience.",
      learnings: "Enhanced understanding of server-side rendering with Next.js, Firebase services (Auth, Firestore), and advanced Tailwind CSS techniques for complex layouts."
    },
    {
      title: "Real-time Chat App",
      description: "A real-time chat application with group chat functionality and direct messaging, featuring user presence indicators and message timestamps.",
      technologies: ["React", "Socket.IO", "Node.js", "Redis"],
      githubLink: "https://github.com/yourusername/chat-app",
      liveDemoLink: null,
      imageUrl: "https://placehold.co/600x400/333333/E0E0E0?text=Chat+App",
      problem: "The objective was to build a low-latency, real-time communication platform demonstrating expertise in WebSocket technologies.",
      solution: "Developed a chat application with React for the frontend and Node.js with Socket.IO for real-time bidirectional communication. Redis was used for managing user sessions and message caching.",
      yourRole: "Frontend & Backend Developer. Implemented WebSocket communication, real-time message handling, and UI for chat rooms and direct messages.",
      impact: "Achieved sub-100ms message delivery latency. Designed a scalable chat architecture capable of supporting multiple concurrent chat rooms and thousands of active users.",
      learnings: "Deepened understanding of WebSocket protocols, real-time data synchronization, and performance optimization for highly interactive applications."
    },
    {
      title: "Vehicle Data Visualization",
      description: "Dashboard for real-time vehicle data and battery health visualization, enabling quick insights and predictive maintenance.",
      technologies: ["React", "D3.js", "Node.js", "MySQL"],
      githubLink: null,
      liveDemoLink: "https://your-dashboard-demo.com",
      imageUrl: "https://placehold.co/600x400/333333/E0E0E0?text=Vehicle+Dashboard",
      problem: "Clients needed a comprehensive dashboard to visualize large datasets of vehicle telematics and battery performance in real-time.",
      solution: "Developed an interactive dashboard using React for the frontend, leveraging D3.js for custom data visualizations. A Node.js backend processed incoming data streams and stored them in MySQL.",
      yourRole: "Full-stack Developer. Built the data ingestion pipeline, API endpoints, and designed the interactive visualizations and user interface.",
      impact: "Enabled fleet managers to gain real-time insights into vehicle performance and predict potential battery failures, leading to a 15% reduction in unplanned maintenance costs.",
      learnings: "Mastered D3.js for complex data visualizations, optimized database schemas for time-series data, and managed large-scale data processing in Node.js."
    }
  ],
  myProcess: {
    title: "My Development Process",
    description: "My approach to software development is structured, collaborative, and user-centric. I believe in a phased approach that prioritizes understanding the problem thoroughly before jumping into solutions. This ensures robust, scalable, and maintainable software.",
    steps: [
      { name: "Requirement Analysis & Planning", detail: "Deep dive into stakeholder needs, define scope, create user stories, and outline technical specifications. This phase focuses on 'why' and 'what'." },
      { name: "Design & Architecture", detail: "Translate requirements into a technical design, choose appropriate technologies, and plan the system architecture. Emphasis on scalability, security, and maintainability." },
      { name: "Development & Implementation", detail: "Write clean, efficient, and well-documented code following best practices (e.g., TDD, modularity). Iterative development with regular feedback loops." },
      { name: "Testing & Quality Assurance", detail: "Rigorous testing (unit, integration, end-to-end) to ensure functionality, performance, and reliability. Bug tracking and resolution." },
      { name: "Deployment & Monitoring", detail: "Deploy applications to production environments, configure CI/CD pipelines, and set up monitoring tools for performance and error tracking." },
      { name: "Maintenance & Iteration", detail: "Continuous improvement based on user feedback and performance data. Adapting to new requirements and technologies." }
    ]
  },
  whyMe: {
    title: "Why Choose Me?",
    points: [
      "**Full-Stack Proficiency:** Adept in both front-end (React) and back-end (Node.js) development, enabling end-to-end solution delivery.",
      "**Domain Expertise:** Specialized experience in Hospital Management Systems (HIMS) and Telecom, understanding unique industry challenges.",
      "**Problem-Solver:** Proven ability to analyze complex problems and design innovative, efficient solutions.",
      "**Collaborative Team Player:** Excel in cross-functional teams, ensuring seamless communication and shared success.",
      "**User-Centric Approach:** Committed to delivering intuitive and user-friendly applications that meet both technical and business requirements."
    ]
  },
  testimonials: [
    {
      quote: "Nitesh is an exceptional developer with a keen eye for detail. His contributions to the HIMS project were invaluable, significantly improving system performance and user experience.",
      author: "Dr. Alok Sharma, Project Lead at SilfraTechnologies"
    },
    {
      quote: "His ability to quickly grasp complex requirements and translate them into robust code is impressive. Nitesh was instrumental in optimizing our data visualization platform.",
      author: "Priya Singh, Product Manager"
    }
  ]
};